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
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import CategoryDetail from './pages/CategoryDetail';
import ProductsPage from './pages/Products';
import Categories from './pages/Categories';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Quality from './pages/Quality';
import Sourcing from './pages/Sourcing';
import ProcurementCenter from './pages/ProcurementCenter';
import MeatSeafood from './pages/MeatSeafood';
import RiceSpices from './pages/RiceSpices';
import FruitsVegetables from './pages/FruitsVegetables';
import CannedGoods from './pages/CannedGoods';
import NutsFlavors from './pages/NutsFlavors';
import BakeryProducts from './pages/BakeryProducts';
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
                  <main><ProductsPage /></main>
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
              <Route path="/products/meat-seafood" element={
                <>
                  <Navigation />
                  <main><MeatSeafood /></main>
                  <Footer />
                </>
              } />
              <Route path="/products/rice-spices" element={
                <>
                  <Navigation />
                  <main><RiceSpices /></main>
                  <Footer />
                </>
              } />
              <Route path="/products/fruits-vegetables" element={
                <>
                  <Navigation />
                  <main><FruitsVegetables /></main>
                  <Footer />
                </>
              } />
              <Route path="/products/canned-goods" element={
                <>
                  <Navigation />
                  <main><CannedGoods /></main>
                  <Footer />
                </>
              } />
              <Route path="/products/nuts-flavors" element={
                <>
                  <Navigation />
                  <main><NutsFlavors /></main>
                  <Footer />
                </>
              } />
              <Route path="/products/bakery" element={
                <>
                  <Navigation />
                  <main><BakeryProducts /></main>
                  <Footer />
                </>
              } />
              <Route path="/categories" element={
                <>
                  <Navigation />
                  <main><Categories /></main>
                  <Footer />
                </>
              } />
              <Route path="/categories/:categoryId" element={
                <>
                  <Navigation />
                  <main><CategoryDetail /></main>
                  <Footer />
                </>
              } />
              <Route path="/about" element={
                <>
                  <Navigation />
                  <main><About /></main>
                  <Footer />
                </>
              } />
              <Route path="/services" element={
                <>
                  <Navigation />
                  <main><ServicesPage /></main>
                  <Footer />
                </>
              } />
              <Route path="/quality" element={
                <>
                  <Navigation />
                  <main><Quality /></main>
                  <Footer />
                </>
              } />
              <Route path="/sourcing" element={
                <>
                  <Navigation />
                  <main><Sourcing /></main>
                  <Footer />
                </>
              } />
              <Route path="/procurement" element={
                <>
                  <Navigation />
                  <main><ProcurementCenter /></main>
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
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </CMSProvider>
  );
}

export default App;
