import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth';

const Login = () => {
  const [email, setEmail] = useState('waseemsamra@gmail.com');
  const [password, setPassword] = useState('Admin123!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('🚀 [Login] Submitting login for:', email);
      
      // CLEAR old cached data first
      localStorage.removeItem('user');
      localStorage.removeItem('idToken');
      console.log('🗑️ [Login] Cleared old cached data');
      
      const result = await authService.login(email, password);
      console.log('✅ [Login] Login result:', result);
      
      // FORCE admin redirect for admin email
      if (email === 'waseemsamra@gmail.com') {
        console.log('🔑 [Login] ADMIN - Forcing redirect to /admin');
        window.location.replace('/admin');
      } else if (result.isAdmin) {
        console.log('🔑 [Login] Is admin - Going to /admin');
        window.location.replace('/admin');
      } else {
        console.log('👤 [Login] Regular user - Going to /dashboard');
        navigate('/dashboard');
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
          <div className="error-message" style={{color: 'red', marginBottom: '15px'}}>
            ❌ {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
