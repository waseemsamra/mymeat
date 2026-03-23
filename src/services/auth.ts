import { signIn, signOut, getCurrentUser, fetchUserAttributes, fetchAuthSession } from 'aws-amplify/auth';

interface LoginResult {
  success: boolean;
  isAdmin: boolean;
  user: { email: string; role: string };
  redirectTo: string;
}

class AuthService {
  async login(email: string, password: string): Promise<LoginResult> {
    try {
      console.log('🔐 [AuthService] Login attempt for:', email);
      
      const { isSignedIn, nextStep } = await signIn({
        username: email,
        password: password,
        options: {
          authFlowType: 'USER_PASSWORD_AUTH'
        }
      });

      console.log('✅ [AuthService] Sign in result:', { isSignedIn, nextStep });

      if (!isSignedIn) {
        throw new Error('Login failed');
      }

      // Get user attributes
      const attributes = await fetchUserAttributes();
      console.log('📋 [AuthService] User attributes:', attributes);

      // Check role from attributes
      let userRole = attributes['custom:role'] || attributes.role || 'user';
      console.log('👤 [AuthService] Detected role:', userRole);

      // FALLBACK: If email is admin email, force admin role
      if (email === 'waseemsamra@gmail.com') {
        console.log('🔑 [AuthService] Admin email detected - forcing admin role');
        userRole = 'admin';
      }

      const isAdmin = userRole === 'admin';
      console.log('🔑 [AuthService] Is admin:', isAdmin);

      // Store user info with correct role
      localStorage.setItem('user', JSON.stringify({
        email: attributes.email || email,
        role: userRole,
        name: attributes.name || ''
      }));

      // Get tokens
      const session = await fetchAuthSession();
      if (session?.tokens?.idToken) {
        localStorage.setItem('idToken', session.tokens.idToken.toString());
      }

      return {
        success: true,
        isAdmin,
        user: { email: attributes.email || email, role: userRole },
        redirectTo: isAdmin ? '/admin' : '/dashboard'
      };

    } catch (error) {
      console.error('❌ [AuthService] Login error:', error);
      throw new Error(error.message || 'Login failed');
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut();
      localStorage.removeItem('user');
      localStorage.removeItem('idToken');
      console.log('✅ [AuthService] Logged out');
    } catch (error) {
      console.error('❌ [AuthService] Logout error:', error);
    }
  }

  async getCurrentUser(): Promise<any> {
    try {
      // Check localStorage first
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        console.log('📋 [AuthService] User from localStorage:', user);
        return user;
      }

      // Fallback to Cognito
      const user = await getCurrentUser();
      const attributes = await fetchUserAttributes();
      const userData = {
        email: attributes.email,
        role: attributes['custom:role'] || attributes.role || 'user',
        name: attributes.name,
        userId: user.userId
      };
      console.log('📋 [AuthService] User from Cognito:', userData);
      return userData;
    } catch (error) {
      console.error('❌ [AuthService] Get user error:', error);
      return null;
    }
  }

  async isAdmin(): Promise<boolean> {
    try {
      // Check localStorage first
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        const userIsAdmin = user.role === 'admin';
        console.log('🔑 [AuthService] Is admin (localStorage):', userIsAdmin);
        return userIsAdmin;
      }

      // Fallback to Cognito
      const attributes = await fetchUserAttributes();
      const role = attributes['custom:role'] || attributes.role || 'user';
      const userIsAdmin = role === 'admin';
      console.log('🔑 [AuthService] Is admin (Cognito):', userIsAdmin);
      return userIsAdmin;
    } catch (error) {
      console.error('❌ [AuthService] Is admin error:', error);
      return false;
    }
  }
}

export default new AuthService();
