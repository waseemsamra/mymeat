import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AuthProvider } from './contexts/AuthContext';
import { CMSProvider } from './contexts/CMSContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewAdminDashboard from './pages/NewAdminDashboard';
import CategoryDetail from './pages/CategoryDetail';
import Categories from './pages/Categories';
import About from './pages/About';
import Services from './pages/Services';
import MeatSeafood from './pages/MeatSeafood';
import RiceSpices from './pages/RiceSpices';
import FruitsVegetables from './pages/FruitsVegetables';
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
              {/* Category Detail Page */}
              <Route path="/categories/:categoryId" element={
                <>
                  <Navigation />
                  <main><CategoryDetail /></main>
                  <Footer />
                </>
              } />
              {/* Products Listing Page */}
              <Route path="/products" element={
                <>
                  <Navigation />
                  <main><Products /></main>
                  <Footer />
                </>
              } />
              {/* Categories Listing Page */}
              <Route path="/categories" element={
                <>
                  <Navigation />
                  <main><Categories /></main>
                  <Footer />
                </>
              } />
              {/* About Page */}
              <Route path="/about" element={
                <>
                  <Navigation />
                  <main><About /></main>
                  <Footer />
                </>
              } />
              {/* Services Page */}
              <Route path="/services" element={
                <>
                  <Navigation />
                  <main><Services /></main>
                  <Footer />
                </>
              } />
              {/* Meat & Seafood Category Page */}
              <Route path="/products/meat-seafood" element={
                <>
                  <Navigation />
                  <main><MeatSeafood /></main>
                  <Footer />
                </>
              } />
              {/* Rice & Spices Category Page */}
              <Route path="/products/rice-spices" element={
                <>
                  <Navigation />
                  <main><RiceSpices /></main>
                  <Footer />
                </>
              } />
              {/* Fruits & Vegetables Category Page */}
              <Route path="/products/fruits-vegetables" element={
                <>
                  <Navigation />
                  <main><FruitsVegetables /></main>
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
