import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';
import CMSManagement from './CMSManagement';

const NewAdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('cms');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is admin
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('idToken');
    
    if (!storedUser || !token) {
      // Not logged in - redirect to login
      navigate('/login');
      return;
    }
    
    const userData = JSON.parse(storedUser);
    
    // Check if admin (by email or role)
    if (userData.email !== 'waseemsamra@gmail.com' && userData.role !== 'admin') {
      // Not admin - redirect to dashboard
      navigate('/dashboard');
      return;
    }
    
    setUser(userData);
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem('user');
      localStorage.removeItem('idToken');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!user) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '1rem 2rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
              🌾 AgroFeed Admin
            </h1>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Welcome, {user.name} ({user.email})
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        {/* Tabs */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            borderBottom: '1px solid #e5e7eb',
            padding: '0 1rem'
          }}>
            {[
              { id: 'cms', label: '📝 CMS', icon: '📝' },
              { id: 'products', label: '📦 Products', icon: '📦' },
              { id: 'testimonials', label: '⭐ Testimonials', icon: '⭐' },
              { id: 'orders', label: '📊 Orders', icon: '📊' },
              { id: 'settings', label: '⚙️ Settings', icon: '⚙️' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: activeTab === tab.id ? '#3b82f6' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#6b7280',
                  border: 'none',
                  borderBottom: activeTab === tab.id ? '2px solid #3b82f6' : '2px solid transparent',
                  cursor: 'pointer',
                  fontWeight: activeTab === tab.id ? '600' : '500',
                  transition: 'all 0.2s'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ padding: '2rem' }}>
            {activeTab === 'cms' && (
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Content Management System
                </h2>
                <CMSManagement />
              </div>
            )}
            
            {activeTab === 'products' && (
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Product Management
                </h2>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                  Product management coming soon...
                </div>
              </div>
            )}
            
            {activeTab === 'testimonials' && (
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Testimonial Management
                </h2>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                  Testimonial management coming soon...
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Order Management
                </h2>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                  Order management coming soon...
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Site Settings
                </h2>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                  Site settings coming soon...
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewAdminDashboard;
