// AWS Amplify Configuration
// This file configures AWS services for your AgroFeed CMS

// AWS Configuration Object
export const awsConfig = {
  Auth: {
    region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
    userPoolId: import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_AWS_COGNITO_CLIENT_ID,
    identityPoolId: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
    mandatorySignIn: true,
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  },
  Storage: {
    region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
    bucket: import.meta.env.VITE_AWS_S3_BUCKET,
    identityPoolId: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
    level: 'private',
    customPrefix: {
      public: 'public/',
      protected: 'protected/',
      private: 'admin-uploads/'
    }
  },
  API: {
    endpoints: [
      {
        name: 'AgroFeedAPI',
        endpoint: import.meta.env.VITE_API_URL || ''
      }
    ]
  }
};

// Initialize Amplify (if using aws-amplify package)
// Uncomment these lines if you install aws-amplify:
/*
import { Amplify } from 'aws-amplify';

if (typeof window !== 'undefined') {
  Amplify.configure(awsConfig);
}
*/

export default awsConfig;
