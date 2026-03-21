import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, company?: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simulated user database (replace with actual API calls)
const USERS_STORAGE_KEY = 'agrofeed_users';
const CURRENT_USER_KEY = 'agrofeed_current_user';

const getStoredUsers = (): Array<User & { password: string }> => {
  const stored = localStorage.getItem(USERS_STORAGE_KEY);
  if (stored) {
    const users = JSON.parse(stored);
    // Ensure admin user exists in the list
    if (!users.some((u: User & { password: string }) => u.email === 'admin@agrofeed.com')) {
      const adminUser: User & { password: string } = {
        id: 'admin-001',
        name: 'Admin User',
        email: 'admin@agrofeed.com',
        company: 'AgroFeed Inc.',
        password: 'admin123',
        role: 'admin',
      };
      users.unshift(adminUser);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    }
    return users;
  }
  // Seed admin user on first load
  const adminUser: User & { password: string } = {
    id: 'admin-001',
    name: 'Admin User',
    email: 'admin@agrofeed.com',
    company: 'AgroFeed Inc.',
    password: 'admin123',
    role: 'admin',
  };
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([adminUser]));
  return [adminUser];
};

// Utility function to reset auth data (call from console: window.resetAuthData())
if (typeof window !== 'undefined') {
  (window as any).resetAuthData = () => {
    localStorage.removeItem(USERS_STORAGE_KEY);
    localStorage.removeItem(CURRENT_USER_KEY);
    getStoredUsers();
    console.log('Auth data reset. Admin user created: admin@agrofeed.com / admin123');
  };
}

const saveUser = (user: User & { password: string }) => {
  const users = getStoredUsers();
  users.push(user);
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

const findUser = (email: string, password: string): (User & { password: string }) | null => {
  const users = getStoredUsers();
  return users.find(u => u.email === email && u.password === password) || null;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session on mount
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const foundUser = findUser(email, password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (
    name: string, 
    email: string, 
    password: string, 
    company?: string
  ): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if user already exists
    const users = getStoredUsers();
    if (users.some(u => u.email === email)) {
      setIsLoading(false);
      return false;
    }
    
    // First user (besides seeded admin) becomes admin
    const existingUsers = users.filter(u => u.email !== 'admin@agrofeed.com');
    const isFirstUser = existingUsers.length === 0;
    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      name,
      email,
      company,
      password,
      role: isFirstUser ? 'admin' : 'user',
    };
    
    saveUser(newUser);
    
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
