import { Amplify } from 'aws-amplify';
import type { ResourcesConfig } from 'aws-amplify';

export const awsConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_AWS_COGNITO_CLIENT_ID,
      identityPoolId: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID
    }
  },
  Storage: {
    S3: {
      bucket: import.meta.env.VITE_AWS_S3_BUCKET,
      region: import.meta.env.VITE_AWS_S3_REGION || 'us-east-1'
    }
  }
};

// Initialize Amplify
if (typeof window !== 'undefined') {
  Amplify.configure(awsConfig);
}

export default awsConfig;
