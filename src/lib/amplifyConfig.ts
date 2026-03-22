import { Amplify } from 'aws-amplify';

// Configuration for aws-amplify v6
const config = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_JxtucAU3s',
      userPoolClientId: '4bp3ron4t3v2n1q8qvu2j795ov',
      identityPoolId: 'us-east-1:7d4e0b0c-2a44-4be1-94c6-1c73af02e000',
      loginWith: {
        email: true,
        username: true
      },
      userAttributes: {
        email: {
          required: true,
          mutable: true
        },
        name: {
          required: false,
          mutable: true
        },
        'custom:role': {
          required: false,
          mutable: true
        },
        'custom:company': {
          required: false,
          mutable: true
        }
      }
    }
  },
  Storage: {
    S3: {
      bucket: 'agrofeed-content-agrofeed-536217686312',
      region: 'us-east-1'
    }
  }
};

// Initialize Amplify
if (typeof window !== 'undefined') {
  Amplify.configure(config);
  console.log('✅ Amplify configured with hardcoded values');
  console.log('📋 Config:', {
    userPoolId: config.Auth.Cognito.userPoolId,
    userPoolClientId: config.Auth.Cognito.userPoolClientId ? 'SET' : 'MISSING',
    identityPoolId: config.Auth.Cognito.identityPoolId
  });
}

export default config;
