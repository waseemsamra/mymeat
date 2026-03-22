import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import AuthService from '../lib/AuthService';
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

const CURRENT_USER_KEY = 'agrofeed_current_user';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      try {
        const currentUser = await AuthService.getCurrentUser();
        if (currentUser) {
          const userWithoutPassword = {
            id: currentUser.user?.sub || currentUser.user?.id || '',
            email: currentUser.attributes?.email || '',
            name: currentUser.attributes?.name || '',
            company: currentUser.attributes?.custom_company || '',
            role: currentUser.attributes?.custom_role || 'user',
          };
          setUser(userWithoutPassword);
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const result = await AuthService.login(email, password);
      
      if (result.success) {
        const userWithoutPassword = {
          id: result.user?.id || '',
          email: email,
          name: result.attributes?.name || '',
          company: result.attributes?.custom_company || '',
          role: result.attributes?.custom_role || 'user',
        };
        setUser(userWithoutPassword);
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
        toast.success('Welcome back!', {
          description: 'You have successfully logged in.',
        });
        setIsLoading(false);
        return true;
      }
      
      setIsLoading(false);
      return false;
    } catch (error: any) {
      toast.error('Login failed', {
        description: error.message || 'Invalid email or password',
      });
      setIsLoading(false);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string, company?: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // For now, use Cognito sign up (not implemented in AuthService yet)
      // This is a placeholder - you'll need to implement signUp in AuthService
      toast.error('Registration not available', {
        description: 'Please contact admin to create an account',
      });
      setIsLoading(false);
      return false;
    } catch (error: any) {
      toast.error('Registration failed', {
        description: error.message || 'Could not create account',
      });
      setIsLoading(false);
      return false;
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
    
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
