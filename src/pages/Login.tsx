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
        // Get user attributes
        const attributes = await fetchUserAttributes();
        console.log('📋 ALL user attributes:', attributes);
        
        // Check role from attributes OR use admin email as fallback
        const role = 
          attributes['custom:role'] || 
          attributes.custom_role || 
          (email === 'waseemsamra@gmail.com' ? 'admin' : 'user');
        
        console.log('👤 Detected role:', role);
        console.log('📧 User email:', email);
        
        // Redirect based on role
        if (role === 'admin') {
          console.log('🔑 Redirecting to ADMIN dashboard');
          window.location.href = '/admin';
        } else {
          console.log('👤 Redirecting to USER dashboard');
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
