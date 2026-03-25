import { type ReactNode, useState } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  title?: string;
  user?: { name: string; email: string } | null;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  subItems?: { id: string; label: string }[];
}

const menuItems: MenuItem[] = [
  { id: 'overview', label: 'Overview', icon: 'dashboard' },
  { id: 'categories', label: 'Categories', icon: 'category' },
  { id: 'products', label: 'Products', icon: 'inventory_2' },
  { id: 'users', label: 'Users', icon: 'group' },
  { 
    id: 'cms', 
    label: 'CMS', 
    icon: 'auto_awesome_motion',
    subItems: [
      { id: 'homepage', label: 'Homepage CMS' },
      { id: 'navigation', label: 'Navigation Mgmt' },
      { id: 'footer', label: 'Footer Mgmt' }
    ]
  },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];

const AdminLayout = ({
  children,
  activeTab,
  onTabChange,
  title,
  user
}: AdminLayoutProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMenu, setExpandedMenu] = useState<string | null>('cms');

  const toggleMenu = (menuId: string) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
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
              <h1 className="text-sm font-bold text-[#00450d] leading-none" style={{ fontSize: '12px' }}>Agrarian Admin</h1>
              <p className="text-[10px] text-[#41493e] uppercase tracking-widest mt-1">Super Admin Console</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.subItems) {
                    toggleMenu(item.id);
                  } else {
                    onTabChange(item.id);
                  }
                }}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 transition-colors duration-200 group ${
                  activeTab === item.id && !item.subItems
                    ? 'text-[#00450d] font-bold border-r-4 border-[#00450d] bg-[#e8e8e3]'
                    : 'text-[#41493e] hover:text-[#00450d] hover:bg-[#e8e8e3]'
                }`}
                style={{ fontSize: '12px' }}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.subItems && (
                  <span className={`material-symbols-outlined transition-transform ${expandedMenu === item.id ? 'rotate-90' : ''}`}>
                    chevron_right
                  </span>
                )}
              </button>
              
              {/* Submenu Items */}
              {item.subItems && expandedMenu === item.id && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#e3e3de] pl-2">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => onTabChange(subItem.id)}
                      className={`w-full text-left px-4 py-2 transition-colors duration-200 ${
                        activeTab === subItem.id
                          ? 'text-[#00450d] font-bold bg-[#e8e8e3]'
                          : 'text-[#41493e] hover:text-[#00450d] hover:bg-[#e8e8e3]/50'
                      }`}
                      style={{ fontSize: '12px' }}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="px-4 mt-auto">
          <button className="w-full flex items-center justify-center gap-2 bg-[#00450d] text-white py-2.5 rounded-md font-medium transition-transform scale-95 active:opacity-80" style={{ fontSize: '12px' }}>
            <span className="material-symbols-outlined text-sm">download</span>
            Export Report
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen flex-1" style={{ fontSize: '12px' }}>
        {/* Top Header */}
        <header className="w-full h-16 sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-[#e3e3de] flex justify-between items-center px-8">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#717a6d]">search</span>
              <input
                className="w-full bg-[#f5f5f0] border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-[#00450d]/20"
                placeholder="Search marketplace assets..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: '12px' }}
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
                onClick={() => {
                  localStorage.clear();
                  window.location.replace('/');
                }}
                className="text-[#41493e] hover:text-red-600 transition-colors flex items-center gap-1"
                title="Logout"
              >
                <span className="material-symbols-outlined">logout</span>
              </button>
              {user && (
                <>
                  <div className="text-right">
                    <p className="font-bold text-[#1a1c19]" style={{ fontSize: '11px' }}>{user.name}</p>
                    <p className="text-[#41493e]" style={{ fontSize: '9px' }}>Super Admin</p>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-[#e3e3de] bg-[#00450d] flex items-center justify-center text-white font-bold" style={{ fontSize: '13px' }}>
                    {user.name.charAt(0)}
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-10 w-full">
          {title && title !== 'Overview' && (
            <div className="mb-8">
              <div className="flex items-center gap-2 text-[#717a6d] mb-2 tracking-widest uppercase font-semibold" style={{ fontSize: '10px' }}>
                <span>Console</span>
                <span className="material-symbols-outlined" style={{ fontSize: '10px' }}>chevron_right</span>
                <span className="text-[#047852]">{title}</span>
              </div>
            </div>
          )}
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
