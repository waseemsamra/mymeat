import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';
import CMSManagement from './CMSManagement';
import ProductManagement from './ProductManagement';
import CategoryManagement from './CategoryManagement';
import SiteSettingsEditor from './SiteSettingsEditor';

interface User {
  email: string;
  role: string;
  name: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { id: 'overview', label: 'Overview', icon: 'dashboard' },
  { id: 'categories', label: 'Categories', icon: 'category' },
  { id: 'products', label: 'Products', icon: 'inventory_2' },
  { id: 'users', label: 'Users', icon: 'group' },
  { id: 'cms', label: 'CMS', icon: 'edit' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];

const NewAdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState<User | null>(null);
  const stats = {
    categories: 6,
    products: 142,
    inquiries: 28,
    volume: 8420
  };

  useEffect(() => {
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

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafaf5]">
        <div className="text-center">
          <span className="material-symbols-outlined text-2xl text-[#00450d] animate-spin">progress_activity</span>
          <h2 className="text-sm font-medium mt-4 text-[#1a1c19]">Loading...</h2>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      localStorage.clear();
      await signOut({ global: true });
      window.location.replace('/');
    } catch (error) {
      localStorage.clear();
      window.location.replace('/');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewDashboard stats={stats} user={user} />;
      case 'cms':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1a1c19]">Content Management System</h2>
              <p className="text-[#41493e] text-sm">Manage your website content including hero, about, testimonials, and more</p>
            </div>
            <CMSManagement />
          </div>
        );
      case 'products':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1a1c19]">Product Management</h2>
              <p className="text-[#41493e]">Add, edit, and manage your product catalog</p>
            </div>
            <ProductManagement />
          </div>
        );
      case 'categories':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1a1c19]">Category Management</h2>
              <p className="text-[#41493e] text-sm">Organize products into categories</p>
            </div>
            <CategoryManagement />
          </div>
        );
      case 'users':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1a1c19]">User Management</h2>
              <p className="text-[#41493e] text-sm">Manage platform users and permissions</p>
            </div>
            <div className="bg-[#eeeee9] p-8 rounded-2xl">
              <p className="text-[#41493e]">User management module coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#1a1c19]">Site Settings</h2>
              <p className="text-[#41493e] text-sm">Configure your website settings</p>
            </div>
            <SiteSettingsEditor />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex">
      {/* Sidebar */}
      <aside className="flex flex-col fixed left-0 top-0 h-full py-6 bg-[#f5f5f0] w-64 border-r border-[#e3e3de] font-manrope z-50">
        <div className="px-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1b5e20] rounded-lg flex items-center justify-center overflow-hidden">
              <img
                alt="Global Agrarian Logo"
                className="w-8 h-8 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRpHzleH93N_pzlBHi4dsYdTa6XKsuzsqehWodH_7xLi43wg221Pe3g1CF3cGhDEte0L_VdshLM0MobzJwNU6L-CKrWLlb9LniuQAGhaZEzN88XBOo2CErWYfizMmcYp98MSgiVKS56JLYcBmioX8zeQ-L1Xh55oW1bTQBKDmYkZ2DzJu1bFwb4gMk4wn82Hpv2_GjKOmNpEo3DzTrEgXFH4r4DFwLLFEI1ccKCVlCwfQeMP_v0RsMXR_d-XYRdFTUapeQHm6ABrYy"
              />
            </div>
            <div>
              <h1 className="text-base font-bold text-[#00450d] leading-none">Agrarian Admin</h1>
              <p className="text-[10px] text-[#41493e] uppercase tracking-widest mt-1">Super Admin Console</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-colors duration-200 group ${
                activeTab === item.id
                  ? 'text-[#00450d] font-bold border-r-4 border-[#00450d] bg-[#e8e8e3]'
                  : 'text-[#41493e] hover:text-[#00450d] hover:bg-[#e8e8e3]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-4 mt-auto">
          <button className="w-full flex items-center justify-center gap-2 bg-[#00450d] text-white py-3 rounded-md font-medium text-sm transition-transform scale-95 active:opacity-80">
            <span className="material-symbols-outlined text-sm">download</span>
            Export Report
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Top Header */}
        <header className="w-full h-16 sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-[#e3e3de] flex justify-between items-center px-8">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#717a6d]">search</span>
              <input
                className="w-full bg-[#f5f5f0] border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#00450d]/20"
                placeholder="Search marketplace assets..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="text-[#41493e] hover:text-[#00450d] transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#503600] rounded-full"></span>
              </button>
              <button className="text-[#41493e] hover:text-[#00450d] transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-[#e3e3de]"></div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogout}
                className="text-[#41493e] hover:text-red-600 transition-colors flex items-center gap-1"
                title="Logout"
              >
                <span className="material-symbols-outlined">logout</span>
              </button>
              <div className="text-right">
                <p className="text-xs font-bold text-[#1a1c19]">{user.name}</p>
                <p className="text-[10px] text-[#41493e]">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#e3e3de] bg-[#00450d] flex items-center justify-center text-white font-bold">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-10 space-y-10">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

// Overview Dashboard Component
const OverviewDashboard = ({ stats }: { stats: any; user: User }) => {
  return (
    <>
      {/* Welcome Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#1a1c19] tracking-tight">Overview</h2>
          <p className="text-[#41493e] text-sm mt-1">Operational analytics and marketplace performance.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white px-4 py-2 rounded-lg text-[10px] font-medium text-[#7a5649]">
            MARKET STATUS: <span className="text-[#00450d] font-bold">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat 1 */}
        <div className="bg-white p-6 rounded-xl border-b-4 border-[#00450d] transition-all hover:bg-[#fafaf5] group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-[#f5f5f0] rounded-lg flex items-center justify-center text-[#00450d] group-hover:bg-[#1b5e20] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">category</span>
            </div>
            <span className="text-[10px] font-bold text-[#00450d] bg-[#dcfce7] px-2 py-1 rounded">+2 This Month</span>
          </div>
          <p className="text-[#41493e] text-xs font-medium uppercase tracking-widest">Total Categories</p>
          <h3 className="text-2xl font-extrabold mt-1">{stats.categories}</h3>
        </div>

        {/* Stat 2 */}
        <div className="bg-white p-6 rounded-xl border-b-4 border-[#e3e3de] transition-all hover:bg-[#fafaf5] group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-[#f5f5f0] rounded-lg flex items-center justify-center text-[#41493e] group-hover:bg-[#fdcdbc] group-hover:text-[#7a5649] transition-colors">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
            <span className="text-[10px] font-bold text-[#41493e] bg-[#f5f5f0] px-2 py-1 rounded">Global Reach</span>
          </div>
          <p className="text-[#41493e] text-xs font-medium uppercase tracking-widest">Total Active Products</p>
          <h3 className="text-2xl font-extrabold mt-1">{stats.products}</h3>
        </div>

        {/* Stat 3 */}
        <div className="bg-white p-6 rounded-xl border-b-4 border-[#503600] transition-all hover:bg-[#fafaf5] group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-[#f5f5f0] rounded-lg flex items-center justify-center text-[#503600] group-hover:bg-[#ffdeac] group-hover:text-[#503600] transition-colors">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
            <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-1 rounded">Urgent</span>
          </div>
          <p className="text-[#41493e] text-xs font-medium uppercase tracking-widest">Pending Inquiries</p>
          <h3 className="text-2xl font-extrabold mt-1">{stats.inquiries}</h3>
        </div>

        {/* Stat 4 */}
        <div className="bg-white p-6 rounded-xl border-b-4 border-[#00450d] transition-all hover:bg-[#fafaf5] group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-[#f5f5f0] rounded-lg flex items-center justify-center text-[#00450d] group-hover:bg-[#1b5e20] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <span className="text-[10px] font-bold text-[#00450d] bg-[#dcfce7] px-2 py-1 rounded">YTD</span>
          </div>
          <p className="text-[#41493e] text-xs font-medium uppercase tracking-widest">Marketplace Volume (MT)</p>
          <h3 className="text-2xl font-extrabold mt-1">{stats.volume.toLocaleString()}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Category Performance */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#eeeee9] p-6 rounded-2xl relative overflow-hidden">
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h3 className="text-base font-bold tracking-tight">Category Performance</h3>
                <p className="text-[#41493e] text-xs">Monthly export volume by produce type</p>
              </div>
              <button className="text-[#00450d] font-bold text-[10px] uppercase tracking-widest flex items-center gap-1">
                Full Analysis <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Abstract Chart */}
            <div className="mt-10 h-64 flex items-end gap-4">
              {[
                { name: 'Citrus', height: '40%', color: 'bg-[#00450d]' },
                { name: 'Tubers', height: '75%', color: 'bg-[#047852]' },
                { name: 'Grains', height: '60%', color: 'bg-[#059669]' },
                { name: 'Berries', height: '90%', color: 'bg-[#503600]' },
                { name: 'Leafy', height: '55%', color: 'bg-[#00450d]' },
                { name: 'Exotic', height: '30%', color: 'bg-[#d6d3cd]' },
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className={`w-full ${item.color} rounded-t-sm transition-all duration-500 group-hover:opacity-80`} style={{ height: item.height }}></div>
                  <span className="text-[10px] font-bold uppercase text-[#41493e] rotate-[-45deg] mt-4">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#00450d] p-6 rounded-2xl text-white flex flex-col justify-between aspect-video relative overflow-hidden group">
              <img
                alt="Fresh Produce"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASrwJEXLky4fMv2SeLgJa9cjV_cFO9zK_iiZwRQty7IXqahPT2R4BcLFGCxA0gfaW7AaUixbpOr_5EqDZNpT5oL4pSYv7wlAN4jRi2JKLOScBQrDOhKnn7vDZGvnK49Xi59xMMLe_xRYnTmm1UP5mcR6NRPcLg7WxGdvN56bU5eXKWx8Imygmj3ibfJpMTyaUrSsp164d1UFluZgK99-oh3FtqMzjk2NbT6pcuhqTHzc5LhzTlMwqI2uqx-fNqTSioIqaruaPLg15X"
              />
              <div className="relative z-10">
                <span className="bg-[#503600] text-white text-[10px] font-bold px-2 py-1 rounded">PREMIUM ASSET</span>
                <h4 className="text-lg font-extrabold mt-3 leading-tight">Artisan Root<br/>Vegetables</h4>
              </div>
              <div className="relative z-10">
                <p className="text-xs opacity-80">Inventory Status: High Demand</p>
                <button className="mt-3 flex items-center gap-2 text-xs font-bold">
                  Manage Catalog <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            </div>

            <div className="bg-[#e8e8e3] p-6 rounded-2xl flex flex-col justify-between aspect-video border border-[#e3e3de]/50">
              <div>
                <h4 className="text-base font-bold text-[#00450d] tracking-tight">Logistics Update</h4>
                <p className="text-[#41493e] text-xs mt-2">
                  All export lanes to EU are currently performing with <span className="text-[#047852] font-bold">98% efficiency</span>.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#d6d3cd]"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#a8a29e]"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#78716c]"></div>
                </div>
                <span className="text-[10px] font-bold text-[#41493e] uppercase">12 Active Couriers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl border border-[#e3e3de] flex flex-col shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold tracking-tight">Recent Activity</h3>
            <span className="material-symbols-outlined text-[#717a6d]">history</span>
          </div>

          <div className="space-y-4 flex-1">
            {/* Activity Item 1 */}
            <div className="flex gap-4 relative">
              <div className="absolute left-[15px] top-8 bottom-[-24px] w-[2px] bg-[#f5f5f0]"></div>
              <div className="w-8 h-8 rounded-full bg-[#dcfce7] border border-[#86efac] flex items-center justify-center shrink-0 z-10">
                <span className="material-symbols-outlined text-[#047852] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1c19]">New SKU Added: 'Hass Avocado XL'</p>
                <p className="text-xs text-[#41493e] mt-1">Updated by Warehouse Manager • 14m ago</p>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="flex gap-4 relative">
              <div className="absolute left-[15px] top-8 bottom-[-24px] w-[2px] bg-[#f5f5f0]"></div>
              <div className="w-8 h-8 rounded-full bg-[#ffdeac] border border-[#ffba38] flex items-center justify-center shrink-0 z-10">
                <span className="material-symbols-outlined text-[#503600] text-sm">mail</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1c19]">Bulk Inquiry: Central Co-op</p>
                <p className="text-xs text-[#41493e] mt-1">Requested 120MT of Wheat Grains • 42m ago</p>
                <div className="mt-2 flex gap-2">
                  <button className="text-[10px] font-bold bg-[#f5f5f0] px-3 py-1 rounded hover:bg-[#e3e3de] transition-colors">ASSIGN</button>
                  <button className="text-[10px] font-bold bg-[#00450d] text-white px-3 py-1 rounded">REVIEW</button>
                </div>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div className="flex gap-4 relative">
              <div className="absolute left-[15px] top-8 bottom-[-24px] w-[2px] bg-[#f5f5f0]"></div>
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 z-10">
                <span className="material-symbols-outlined text-red-600 text-sm">warning</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1c19]">Low Stock Alert: Organic Kale</p>
                <p className="text-xs text-[#41493e] mt-1">Current levels below safety threshold (12%) • 2h ago</p>
              </div>
            </div>

            {/* Activity Item 4 */}
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-[#f5f5f0] border border-[#e3e3de] flex items-center justify-center shrink-0 z-10">
                <span className="material-symbols-outlined text-[#41493e] text-sm">person_add</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1c19]">New Supplier Verified</p>
                <p className="text-xs text-[#41493e] mt-1">Andean Organics S.A. joined the platform • 5h ago</p>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-2 text-[10px] font-bold text-[#717a6d] border border-dashed border-[#e3e3de] rounded-lg hover:border-[#86efac] hover:text-[#047852] transition-all uppercase tracking-widest">
            VIEW ALL SYSTEM LOGS
          </button>
        </div>
      </div>

      {/* Global Logistics Status */}
      <div className="bg-[#2f312e] rounded-2xl p-6 text-[#f1f1ec]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00450d] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#ffdeac]">globe_uk</span>
            </div>
            <div>
              <h4 className="font-bold text-base tracking-tight">Global Logistics Status</h4>
              <p className="text-[#717a6d] text-sm">Real-time supply chain monitoring active.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-[10px] font-bold text-[#717a6d] uppercase tracking-widest">Active Ships</p>
              <p className="text-lg font-bold">24</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-[#717a6d] uppercase tracking-widest">Port Clearance</p>
              <p className="text-lg font-bold">94%</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-[#717a6d] uppercase tracking-widest">Avg Transit</p>
              <p className="text-lg font-bold">12d</p>
            </div>
          </div>
          <button className="bg-[#eeeee9] text-[#1a1c19] px-6 py-2 rounded-md font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors">
            Network Map
          </button>
        </div>
      </div>
    </>
  );
};

export default NewAdminDashboard;
