import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('waseemsamra@gmail.com');
  const [password, setPassword] = useState('Admin123!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      console.log('🚀 [Login] Submitting login for:', email);
      
      const result = await authService.login(email, password);
      console.log('✅ [Login] Login result:', result);
      
      if (result.success) {
        console.log('🎯 [Login] Redirecting to:', result.redirectTo);
        navigate(result.redirectTo);
      }
      
    } catch (err: any) {
      console.error('❌ [Login] Error:', err);
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
