import { Link } from 'react-router-dom';
import './FloatingAdminButton.css';

const FloatingAdminButton = () => {
  return (
    <Link to="/admin" className="floating-admin-button" title="Go to Admin Dashboard">
      🔑 Admin
    </Link>
  );
};

export default FloatingAdminButton;
