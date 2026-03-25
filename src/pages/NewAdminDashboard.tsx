import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';
import CMSManagement from './CMSManagement';
import ProductManagement from './ProductManagement';
import TestimonialManagement from './TestimonialManagement';
import EnquiryManagement from './EnquiryManagement';
import SiteSettingsEditor from './SiteSettingsEditor';
import CategoryManagement from './CategoryManagement';

interface User {
  email: string;
  role: string;
  name: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  color: string;
}

const menuItems: MenuItem[] = [
  { id: 'cms', label: 'CMS Content', icon: '📝', color: 'bg-blue-500' },
  { id: 'products', label: 'Products', icon: '📦', color: 'bg-green-500' },
  { id: 'categories', label: 'Categories', icon: '🏷️', color: 'bg-purple-500' },
  { id: 'testimonials', label: 'Testimonials', icon: '⭐', color: 'bg-amber-500' },
  { id: 'orders', label: 'Enquiries', icon: '📊', color: 'bg-pink-500' },
  { id: 'settings', label: 'Settings', icon: '⚙️', color: 'bg-gray-500' },
];

const NewAdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('cms');
  const [user, setUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Check if user is admin
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('idToken');

    if (!storedUser || !token) {
      navigate('/admin-login');
      return;
    }

    const userData: User = JSON.parse(storedUser);

    if (userData.email !== 'waseemsamra@gmail.com' && userData.role !== 'admin') {
      navigate('/admin-login');
      return;
    }

    setUser(userData);
  }, [navigate]);

  const handleLogout = async () => {
    try {
      console.log('🚪 [Logout] Signing out...');
      localStorage.removeItem('user');
      localStorage.removeItem('idToken');
      localStorage.clear();
      console.log('🗑️ [Logout] Cleared localStorage');
      await signOut({ global: true });
      console.log('✅ [Logout] Signed out from Cognito');
      window.location.replace('/login');
    } catch (error: any) {
      console.error('❌ [Logout] Error:', error);
      localStorage.clear();
      window.location.replace('/login');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <span className="material-symbols-outlined text-4xl text-primary animate-spin">progress_activity</span>
          <h2 className="text-xl font-semibold mt-4 text-gray-700">Loading...</h2>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'cms':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Content Management System</h2>
              <p className="text-gray-500">Manage your website content including hero, about, testimonials, and more</p>
            </div>
            <CMSManagement />
          </div>
        );
      case 'products':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Product Management</h2>
              <p className="text-gray-500">Add, edit, and manage your product catalog</p>
            </div>
            <ProductManagement />
          </div>
        );
      case 'categories':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Category Management</h2>
              <p className="text-gray-500">Organize products into categories</p>
            </div>
            <CategoryManagement />
          </div>
        );
      case 'testimonials':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Testimonial Management</h2>
              <p className="text-gray-500">Manage customer reviews and testimonials</p>
            </div>
            <TestimonialManagement />
          </div>
        );
      case 'orders':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Enquiry Management</h2>
              <p className="text-gray-500">View and manage customer enquiries</p>
            </div>
            <EnquiryManagement />
          </div>
        );
      case 'settings':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Site Settings</h2>
              <p className="text-gray-500">Configure your website settings</p>
            </div>
            <SiteSettingsEditor />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-white shadow-xl transition-all duration-300 z-50 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌾</span>
              <span className="font-bold text-lg text-gray-800">AgroFeed</span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            <span className="material-symbols-outlined text-gray-600">
              {sidebarOpen ? 'first_page' : 'last_page'}
            </span>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="py-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                activeTab === item.id
                  ? `${item.color} text-white shadow-md`
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title={!sidebarOpen ? item.label : ''}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && (
                <span className="font-medium">{item.label}</span>
              )}
              {activeTab === item.id && sidebarOpen && (
                <span className="material-symbols-outlined ml-auto text-sm">chevron_right</span>
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer - User Info */}
        {sidebarOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm sticky top-0 z-40">
          <div className="h-full px-6 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                {menuItems.find(m => m.id === activeTab)?.label || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                title="View Website"
              >
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined">logout</span>
                {sidebarOpen && <span>Logout</span>}
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="bg-white rounded-xl shadow-sm p-6 min-h-[calc(100vh-8rem)]">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewAdminDashboard;
