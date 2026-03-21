// AWS Configuration
import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import { S3Client } from '@aws-sdk/client-s3';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const awsConfig = {
  region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
  cognito: {
    userPoolId: import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID || '',
    clientId: import.meta.env.VITE_AWS_COGNITO_CLIENT_ID || '',
  },
  s3: {
    bucket: import.meta.env.VITE_AWS_S3_BUCKET || '',
    region: import.meta.env.VITE_AWS_S3_REGION || 'us-east-1',
  },
  dynamodb: {
    tableName: import.meta.env.VITE_AWS_DYNAMODB_TABLE || 'agrofeed-content',
    region: import.meta.env.VITE_AWS_DYNAMODB_REGION || 'us-east-1',
  },
};

// Cognito Client
export const cognitoClient = new CognitoIdentityProviderClient({
  region: awsConfig.region,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

// S3 Client
export const s3Client = new S3Client({
  region: awsConfig.s3.region,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

// DynamoDB Client
const dynamoDBClient = new DynamoDBClient({
  region: awsConfig.dynamodb.region,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

// DynamoDB Document Client (for easier JSON operations)
export const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDBClient);

export { awsConfig };
