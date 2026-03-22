import { Auth } from 'aws-amplify';

class AuthService {
  // Admin login
  async login(email, password) {
    try {
      const user = await Auth.signIn(email, password);
      
      // Get user attributes
      const attributes = await Auth.currentUserAttributes();
      const userRole = attributes['custom:role'];
      
      // Verify admin role
      if (userRole !== 'admin') {
        await Auth.signOut();
        throw new Error('Access denied. Admin privileges required.');
      }
      
      return {
        success: true,
        user: user,
        attributes: attributes
      };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
  
  // Logout
  async logout() {
    try {
      await Auth.signOut();
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }
  
  // Get current authenticated user
  async getCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const attributes = await Auth.currentUserAttributes();
      return { user, attributes };
    } catch (error) {
      return null;
    }
  }
  
  // Check if user is admin
  async isAdmin() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const attributes = await Auth.currentUserAttributes();
      return attributes['custom:role'] === 'admin';
    } catch {
      return false;
    }
  }
  
  // Get temporary AWS credentials
  async getCredentials() {
    try {
      const credentials = await Auth.currentCredentials();
      return credentials;
    } catch (error) {
      console.error('Error getting credentials:', error);
      return null;
    }
  }
  
  // Change password
  async changePassword(oldPassword, newPassword) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, oldPassword, newPassword);
      return { success: true };
    } catch (error) {
      console.error('Password change error:', error);
      throw error;
    }
  }
}

export default new AuthService();
