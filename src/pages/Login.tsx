import { useState, type FormEvent } from 'react';
import { signIn } from 'aws-amplify/auth';
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
      console.log('🚀 [LOGIN v3] Attempting login for:', email);
      const result = await signIn({ username: email, password });
      console.log('✅ [LOGIN v3] Login successful:', result);
      
      if (result.isSignedIn) {
        // SIMPLE: Admin email ALWAYS goes to /admin
        if (email === 'waseemsamra@gmail.com') {
          console.log('🔑 [LOGIN v3] ADMIN DETECTED - Going to /admin NOW!');
          window.location.href = '/admin';
        } else {
          console.log('👤 [LOGIN v3] Regular user - Going to /dashboard');
          window.location.href = '/dashboard';
        }
      }
      
    } catch (err: any) {
      console.error('❌ [LOGIN v3] Login error:', err);
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🌾 AgroFeed CMS v3</h1>
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
