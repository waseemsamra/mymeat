import { useState, type FormEvent } from 'react';
import { signIn, fetchUserAttributes } from 'aws-amplify/auth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('waseemsamra@gmail.com');
  const [password, setPassword] = useState('Admin123!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const result = await signIn({ username: email, password });
      console.log('✅ Login successful:', result);
      
      if (result.isSignedIn) {
        // Get ALL user attributes
        const attributes = await fetchUserAttributes();
        console.log('📋 ALL user attributes:', attributes);
        console.log('📋 Attribute keys:', Object.keys(attributes));
        
        // Log all attributes to see exact format
        Object.entries(attributes).forEach(([key, value]) => {
          console.log(`  ${key}: ${value}`);
        });
        
        // Check ALL possible formats
        const role = 
          (attributes as any)['custom:role'] ||  // With colon (Cognito format)
          (attributes as any).custom_role ||     // With underscore
          (attributes as any).role ||            // Plain
          'user';
        
        console.log('👤 Detected role:', role);
        console.log('🔍 custom:role value:', (attributes as any)['custom:role']);
        console.log('🔍 custom_role value:', (attributes as any).custom_role);
        
        // Redirect based on role
        if (role === 'admin') {
          console.log('🔑 Redirecting to ADMIN dashboard');
          window.location.href = '/admin';
        } else {
          console.log('👤 Redirecting to USER dashboard (role:', role, ')');
          window.location.href = '/dashboard';
        }
      }
      
    } catch (err: any) {
      console.error('❌ Login error:', err);
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🌾 AgroFeed CMS</h1>
        <p>Login to access admin dashboard</p>
        
        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
