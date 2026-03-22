import { Amplify } from 'aws-amplify';

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
        name: 'cmsApi',
        endpoint: import.meta.env.VITE_API_URL || 'https://g15n8ubqn8.execute-api.us-east-1.amazonaws.com/prod',
        region: import.meta.env.VITE_AWS_REGION || 'us-east-1'
      }
    ]
  }
};

// Initialize Amplify
if (typeof window !== 'undefined') {
  Amplify.configure(awsConfig);
}

export default awsConfig;
