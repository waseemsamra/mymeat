// Cognito Authentication Service
import {
  SignUpCommand,
  ConfirmSignUpCommand,
  InitiateAuthCommand,
  ChangePasswordCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { cognitoClient, awsConfig } from '../lib/aws';

export interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
  role: 'user' | 'admin';
}

export interface AuthResult {
  success: boolean;
  user?: User;
  idToken?: string;
  accessToken?: string;
  error?: string;
}

class CognitoService {
  private clientId: string;

  constructor() {
    this.clientId = awsConfig.cognito.clientId;
  }

  /**
   * Sign up a new user
   */
  async signUp(
    email: string,
    password: string,
    name: string,
    company?: string
  ): Promise<AuthResult> {
    try {
      const command = new SignUpCommand({
        ClientId: this.clientId,
        Username: email,
        Password: password,
        UserAttributes: [
          { Name: 'email', Value: email },
          { Name: 'name', Value: name },
          { Name: 'custom:company', Value: company || '' },
        ],
      });

      const response = await cognitoClient.send(command);

      return {
        success: true,
        user: {
          id: response.UserSub || '',
          email,
          name,
          company,
          role: 'user',
        },
      };
    } catch (error) {
      console.error('Error signing up:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to sign up',
      };
    }
  }

  /**
   * Confirm sign up with verification code
   */
  async confirmSignUp(email: string, code: string): Promise<{ success: boolean; error?: string }> {
    try {
      const command = new ConfirmSignUpCommand({
        ClientId: this.clientId,
        Username: email,
        ConfirmationCode: code,
      });

      await cognitoClient.send(command);

      return { success: true };
    } catch (error) {
      console.error('Error confirming sign up:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to confirm sign up',
      };
    }
  }

  /**
   * Sign in a user
   */
  async signIn(email: string, password: string): Promise<AuthResult> {
    try {
      const command = new InitiateAuthCommand({
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: this.clientId,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
        },
      });

      const response = await cognitoClient.send(command);

      if (!response.AuthenticationResult) {
        return {
          success: false,
          error: 'Authentication failed',
        };
      }

      const user = await this.getUserFromToken(response.AuthenticationResult.IdToken || '');

      return {
        success: true,
        user,
        idToken: response.AuthenticationResult.IdToken,
        accessToken: response.AuthenticationResult.AccessToken,
      };
    } catch (error) {
      console.error('Error signing in:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Invalid email or password',
      };
    }
  }

  /**
   * Sign out a user
   */
  async signOut(_accessToken: string): Promise<{ success: boolean; error?: string }> {
    try {
      // Note: Cognito doesn't have a SignOutCommand, we just clear local data
      // The access token will expire naturally
      return { success: true };
    } catch (error) {
      console.error('Error signing out:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to sign out',
      };
    }
  }

  /**
   * Change password
   */
  async changePassword(
    accessToken: string,
    oldPassword: string,
    newPassword: string
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const command = new ChangePasswordCommand({
        AccessToken: accessToken,
        PreviousPassword: oldPassword,
        ProposedPassword: newPassword,
      });

      await cognitoClient.send(command);

      return { success: true };
    } catch (error) {
      console.error('Error changing password:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to change password',
      };
    }
  }

  /**
   * Forgot password - send reset code
   */
  async forgotPassword(email: string): Promise<{ success: boolean; error?: string }> {
    try {
      const command = new ForgotPasswordCommand({
        ClientId: this.clientId,
        Username: email,
      });

      await cognitoClient.send(command);

      return { success: true };
    } catch (error) {
      console.error('Error sending reset code:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send reset code',
      };
    }
  }

  /**
   * Confirm forgot password - reset with code
   */
  async confirmForgotPassword(
    email: string,
    code: string,
    newPassword: string
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const command = new ConfirmForgotPasswordCommand({
        ClientId: this.clientId,
        Username: email,
        ConfirmationCode: code,
        Password: newPassword,
      });

      await cognitoClient.send(command);

      return { success: true };
    } catch (error) {
      console.error('Error resetting password:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to reset password',
      };
    }
  }

  /**
   * Get user info from ID token
   */
  private async getUserFromToken(idToken: string): Promise<User> {
    try {
      // Decode JWT token to get user info
      const payload = JSON.parse(atob(idToken.split('.')[1]));

      return {
        id: payload.sub,
        email: payload.email || payload['cognito:username'],
        name: payload.name || payload['custom:company'] || '',
        company: payload['custom:company'],
        role: payload['custom:role'] || 'user',
      };
    } catch (error) {
      console.error('Error decoding token:', error);
      throw error;
    }
  }

  /**
   * Get current user from stored token
   */
  getCurrentUser(): User | null {
    try {
      const storedUser = localStorage.getItem('agrofeed_user');
      if (storedUser) {
        return JSON.parse(storedUser);
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Check if user is admin
   */
  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  }
}

export const cognitoService = new CognitoService();
