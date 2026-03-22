import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { toast } from 'sonner';

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

const USERS_STORAGE_KEY = 'agrofeed_users';
const CURRENT_USER_KEY = 'agrofeed_current_user';

const getStoredUsers = (): Array<User & { password: string }> => {
  const stored = localStorage.getItem(USERS_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    const foundUser = getStoredUsers().find(u => u.email === email && u.password === password);

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

  const register = async (name: string, email: string, password: string, company?: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    const users = getStoredUsers();
    if (users.some(u => u.email === email)) {
      setIsLoading(false);
      return false;
    }

    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      password,
      role: users.length === 0 ? 'admin' : 'user',
    };

    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
    toast.success('Logged out', {
      description: 'You have been successfully logged out.',
    });
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
