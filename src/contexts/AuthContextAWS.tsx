import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { cognitoService, type User } from '../lib/cognitoService';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, company?: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  useAWS: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Check if AWS is configured
const isAWSConfigured = () => {
  return !!(
    import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID &&
    import.meta.env.VITE_AWS_COGNITO_CLIENT_ID &&
    import.meta.env.VITE_AWS_ACCESS_KEY_ID &&
    import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
  );
};

const USERS_STORAGE_KEY = 'agrofeed_users';
const CURRENT_USER_KEY = 'agrofeed_current_user';

// Local fallback functions
const getStoredUsers = (): Array<User & { password: string }> => {
  const stored = localStorage.getItem(USERS_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  // Seed admin user
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

const findUser = (email: string, password: string): (User & { password: string }) | null => {
  const users = getStoredUsers();
  return users.find(u => u.email === email && u.password === password) || null;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useAWS, setUseAWS] = useState(false);

  useEffect(() => {
    const awsConfigured = isAWSConfigured();
    setUseAWS(awsConfigured);
    
    if (awsConfigured) {
      // Try to get user from Cognito
      const cognitoUser = cognitoService.getCurrentUser();
      if (cognitoUser) {
        setUser(cognitoUser);
      }
    } else {
      // Fallback to localStorage
      const storedUser = localStorage.getItem(CURRENT_USER_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    if (useAWS) {
      // Use Cognito
      const result = await cognitoService.signIn(email, password);
      
      if (result.success && result.user) {
        setUser(result.user);
        localStorage.setItem('agrofeed_user', JSON.stringify(result.user));
        if (result.accessToken) {
          localStorage.setItem('agrofeed_access_token', result.accessToken);
        }
        setIsLoading(false);
        return true;
      } else {
        toast.error('Login failed', {
          description: result.error || 'Invalid credentials',
        });
        setIsLoading(false);
        return false;
      }
    } else {
      // Use localStorage fallback
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
    }
  };

  const register = async (
    name: string, 
    email: string, 
    password: string, 
    company?: string
  ): Promise<boolean> => {
    setIsLoading(true);
    
    if (useAWS) {
      // Use Cognito
      const result = await cognitoService.signUp(email, password, name, company);
      
      if (result.success) {
        toast.success('Account created!', {
          description: 'Please check your email for verification code.',
        });
        // Auto sign in after registration
        const signInResult = await cognitoService.signIn(email, password);
        if (signInResult.success && signInResult.user) {
          setUser(signInResult.user);
          localStorage.setItem('agrofeed_user', JSON.stringify(signInResult.user));
        }
        setIsLoading(false);
        return true;
      } else {
        toast.error('Registration failed', {
          description: result.error || 'Could not create account',
        });
        setIsLoading(false);
        return false;
      }
    } else {
      // Use localStorage fallback
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const users = getStoredUsers();
      if (users.some(u => u.email === email)) {
        setIsLoading(false);
        return false;
      }
      
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
      
      users.push(newUser);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    }
  };

  const logout = () => {
    if (useAWS) {
      const accessToken = localStorage.getItem('agrofeed_access_token');
      if (accessToken) {
        cognitoService.signOut(accessToken);
        localStorage.removeItem('agrofeed_access_token');
      }
    }
    
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
    localStorage.removeItem('agrofeed_user');
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
        useAWS,
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
