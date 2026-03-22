import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import awsConfig from './lib/amplifyConfig'
import './index.css'
import App from './App.tsx'

// Initialize Amplify
if (typeof window !== 'undefined') {
  Amplify.configure(awsConfig)
  
  // Expose Amplify globally for debugging
  (window as any).Amplify = Amplify
  
  // Debug logging
  console.log('✅ Amplify initialized')
  console.log('📋 Configuration:', awsConfig)
  console.log('🔍 Auth config:', awsConfig.Auth?.Cognito || awsConfig.Auth)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
