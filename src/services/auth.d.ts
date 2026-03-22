// Type declarations for JavaScript modules

declare module '../services/auth' {
  interface User {
    email: string;
    role: string;
    name: string;
    attributes?: Record<string, any>;
  }

  interface LoginResult {
    success: boolean;
    isAdmin: boolean;
    user: User;
    redirectTo: string;
  }

  interface Session {
    tokens?: {
      accessToken?: any;
      idToken?: any;
      refreshToken?: any;
    };
  }

  class AuthService {
    login(email: string, password: string): Promise<LoginResult>;
    getCurrentSession(): Promise<Session | null>;
    getCurrentUser(): Promise<User | null>;
    isAdmin(): Promise<boolean>;
    logout(): Promise<boolean>;
  }

  const authService: AuthService;
  export default authService;
}
