import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AuthProvider } from './contexts/AuthContext';
import { CMSProvider } from './contexts/CMSContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import FloatingAdminButton from './components/FloatingAdminButton';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewAdminDashboard from './pages/NewAdminDashboard';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    const lenis = {
      raf: () => {
        ScrollTrigger.update();
      }
    };

    requestAnimationFrame(lenis.raf);

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <CMSProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Routes>
              {/* Public routes with full layout */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Public routes with navigation and footer */}
              <Route path="/" element={
                <>
                  <Navigation />
                  <main><Home /></main>
                  <Footer />
                </>
              } />
              <Route path="/products" element={
                <>
                  <Navigation />
                  <main><Products /></main>
                  <Footer />
                </>
              } />
              <Route path="/products/:category" element={
                <>
                  <Navigation />
                  <main><ProductDetail /></main>
                  <Footer />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <Navigation />
                  <main><Contact /></main>
                  <Footer />
                </>
              } />

              {/* Protected routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              {/* Admin Dashboard - Main dashboard for admin only */}
              <Route path="/admin" element={<NewAdminDashboard />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </CMSProvider>
  );
}

export default App;
