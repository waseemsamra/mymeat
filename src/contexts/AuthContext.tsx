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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load current user from Cognito on mount
    const cognitoUser = cognitoService.getCurrentUser();
    if (cognitoUser) {
      setUser(cognitoUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    try {
      // Use Cognito for authentication
      const result = await cognitoService.signIn(email, password);

      if (result.success && result.user) {
        setUser(result.user);
        
        // Store user data
        localStorage.setItem('agrofeed_user', JSON.stringify(result.user));
        if (result.accessToken) {
          localStorage.setItem('agrofeed_access_token', result.accessToken);
        }
        
        setIsLoading(false);
        return true;
      } else {
        toast.error('Login failed', {
          description: result.error || 'Invalid email or password',
        });
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed', {
        description: error instanceof Error ? error.message : 'An error occurred',
      });
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

    try {
      // Use Cognito for registration
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
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed', {
        description: error instanceof Error ? error.message : 'An error occurred',
      });
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    const accessToken = localStorage.getItem('agrofeed_access_token');
    if (accessToken) {
      cognitoService.signOut(accessToken);
      localStorage.removeItem('agrofeed_access_token');
    }
    
    setUser(null);
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
