import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface Category {
  id: string | number;
  name: string;
  description: string;
  color: string;
  image?: string;
  productCount?: number;
  status?: string;
  lastUpdated?: string;
}

const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';

const CategoryManagement = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#3b82f6',
    image: ''
  });

  const colorOptions = [
    '#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316'
  ];

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    try {
      console.log('📡 Fetching categories from API...');
      const response = await fetch(`${API_URL}/categories`);

      if (!response.ok) {
        throw new Error('Failed to load categories');
      }

      const data = await response.json();
      console.log('✅ Categories API response:', data);

      if (Array.isArray(data)) {
        const transformedCategories = data.map((item: any) => ({
          ...item,
          status: 'Active',
          lastUpdated: item.updatedAt ? new Date(item.updatedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'Oct 24, 2023',
          productCount: item.productCount || Math.floor(Math.random() * 400) + 50
        }));
        setCategories(transformedCategories);
        toast.success(`Loaded ${data.length} categories from API!`);
      } else {
        setCategories([]);
      }
    } catch (error: any) {
      console.error('❌ Error loading categories:', error);
      toast.error('Failed to load categories');
      setCategories([
        { id: 1, name: 'Rice & Spices', description: 'Grains, Masalas, Bulk Pulses', color: '#10b981', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARVwuLEPDFGdxkvpS5dsyWNFGQL0aJh67MAAmRQ53w43UEaNEmpwJ8SAp5OUCJZg0xDA2z7aGZAtbTS1NdE1aMJqJ3FxcHQmIp1uTNoXyzFL2vt3OIUKseD3F_06sAh42_AgTPxUiEaNTIkNl3M5-raJ5xymYbSpyq3SSUv5SJqe_TbAr0DNBdrxEvodVzp9jbbRN5PpgLweST_D0abCWVI2dMTOMFciJCv0FPOmk1CXKCmZTWYJ69UYruE2H93AR3vqYcXuX64A2B', productCount: 428, status: 'Active', lastUpdated: 'Oct 24, 2023' },
        { id: 2, name: 'Fruits & Veg', description: 'Seasonal, Exotic, Root', color: '#3b82f6', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-SnUG_hmF6b-u3MAnWXAM2fZY2qHka5K9GnTA92WifSqIgSYSJp1lNaK1hsMTz7oUFWSp2B3hO9-75boIWCYuYYjTzohyvtLFrncHWdsU0WG9u8YnF0N6yWotYiq8xJK58CIvJssDWWtUpgq0Jq5gtXfhfQ0KuzT103tJUqEPk_HZ-MnuT1qEB31aYcVth1FMV6Egs1MGk9Wv5b3Y35p8FAhv_IYern4hBzpdooodSZYlSAmCsyYvQo7tW4dOtYUmjyznJbXqoQei', productCount: 312, status: 'Active', lastUpdated: 'Oct 25, 2023' },
        { id: 3, name: 'Dairy & Poultry', description: 'Farm Fresh, Organic Certified', color: '#f59e0b', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRGO-J-WiAHciThI2XL7Xv2_VlhruZjUWRWvJDjA91UNSjMXMozipoNIRrZNJ3WYyhGkVBxfDMzDtjx3FDg4kwAIzfneEbQtxR6l0DPmp9mlQNtrS31vESdEJoz5bpEDWwhQ63wuNafxBZgRQqrHMl7mwkbPiXIAiHVB0IsJHCQZXrI5kw8bWW-DXC-2yVdxYGRcKg1VHF6eO9KpGHoYEUwzsEDrX17q9DlJ3gdolRB3ro0CrCONv9Ucm6INJllC4Fd96AyXDL307M', productCount: 185, status: 'Active', lastUpdated: 'Oct 22, 2023' },
        { id: 4, name: 'Beverages', description: 'Cold Pressed, Artisan Tea', color: '#ef4444', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpXK2mY36bwysFvKjQ8qWmmCrmmCGI2TTSvsAHE-2YICbLoIhYTUiQ6JfrlE0yvYqXopZCw86V02iDiwwYpToI08n4DfI0WPDP3f0gHHwj_1WX73QtN_4AjySVMK2uzgAU2PZjWeF6qhcW9LnAXedbqLiTsZhyz3NID3W1AHcBZgom9TJwqaAXOuOA4jZA7LTNj9FpTXYvJbAfZB8KCHPwsFtMPXuKfx9lD-nMWzuHvxcTrUmueLjneAKW10hiejwpWZZcrW-9jZrJ', productCount: 92, status: 'Active', lastUpdated: 'Oct 19, 2023' },
        { id: 5, name: 'Oils & Fats', description: 'Cold Pressed, Ghee, Nut Butters', color: '#8b5cf6', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQs1sQqsr6CRsceZuQmTvaRTUdNrmqJU3MUUIslQ6Cp6VMRM9_TYUiQ6JfrlE0yvYqXopZCw86V02iDiwwYpToI08n4DfI0WPDP3f0gHHwj_1WX73QtN_4AjySVMK2uzgAU2PZjWeF6qhcW9LnAXedbqLiTsZhyz3NID3W1AHcBZgom9TJwqaAXOuOA4jZA7LTNj9FpTXYvJbAfZB8KCHPwsFtMPXuKfx9lD-nMWzuHvxcTrUmueLjneAKW10hiejwpWZZcrW-9jZrJ', productCount: 146, status: 'Active', lastUpdated: 'Oct 26, 2023' },
        { id: 6, name: 'Dry Fruits', description: 'Nuts, Berries, Dehydrated', color: '#ec4899', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLii8m47LdPr4_wGBuTllIvYT4S-b7YbSiRHyqXAtnru_eRKjCiq2U4ajfbXIhXBjHb5yjebd65fokDvUGfP7DM92lHvMXkQ5Lnz-nXc7mfZ_5mmfb4V8SMh6ArXQP94Wv-E92mesIXjXVyq1tdXvB1PU1SLG2Am7Th3iPdrQYrYpqiUuo7spHQ5B30_HMvq8bgruCa6XFTJwiFQfCUijs8fYkfKbgVK1VkOmnqDoC5s3z-eahNJ0VrrAvEUNcXMbp5dUnaBLV5wC7', productCount: 121, status: 'Active', lastUpdated: 'Oct 15, 2023' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        description: category.description,
        color: category.color,
        image: category.image || ''
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        description: '',
        color: '#3b82f6',
        image: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      description: '',
      color: '#3b82f6',
      image: ''
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      const { default: s3Service } = await import('../lib/S3Service');
      const result = await s3Service.uploadImage(file, 'categories');

      if (result.success && result.url) {
        setFormData({ ...formData, image: result.url });
        toast.success('Category image uploaded to S3!');
      } else {
        toast.error('Upload failed');
      }
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error('Upload failed: ' + (error.message || 'Unknown error'));
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem('idToken');
      const headers = {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json'
      };

      if (editingCategory) {
        const updateData = {
          id: editingCategory.id,
          name: formData.name,
          description: formData.description,
          color: formData.color,
          image: formData.image,
          updatedAt: new Date().toISOString()
        };

        console.log('📝 Updating category:', updateData);

        const response = await fetch(`${API_URL}/categories/${editingCategory.id}`, {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(updateData)
        });

        const result = await response.json();
        console.log('📝 Update response:', response.status, result);

        if (response.ok) {
          toast.success('Category updated successfully!');
          loadCategories();
          handleCloseModal();
        } else {
          toast.error(`Failed to update: ${result.message || 'Unknown error'}`);
        }
      } else {
        const newCategory = {
          name: formData.name,
          description: formData.description,
          color: formData.color,
          image: formData.image
        };

        console.log('➕ Creating category:', newCategory);

        const response = await fetch(`${API_URL}/categories`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(newCategory)
        });

        const result = await response.json();
        console.log('➕ Create response:', response.status, result);

        if (response.ok) {
          toast.success('Category created successfully!');
          loadCategories();
          handleCloseModal();
        } else {
          toast.error(`Failed to create: ${result.message || 'Unknown error'}`);
        }
      }
    } catch (error: any) {
      console.error('❌ Error saving category:', error);
      toast.error('Failed to save category: ' + (error.message || 'Unknown error'));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!confirm('Are you sure you want to delete this category? This will affect all products in this category.')) return;

    try {
      const token = localStorage.getItem('idToken');
      const response = await fetch(`${API_URL}/categories/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
      });

      const result = await response.json();
      console.log('🗑️ Delete response:', response.status, result);

      if (response.ok) {
        toast.success('Category deleted successfully!');
        loadCategories();
      } else {
        toast.error(`Failed to delete: ${result.message || 'Unknown error'}`);
      }
    } catch (error: any) {
      console.error('❌ Error deleting category:', error);
      toast.error('Failed to delete category: ' + (error.message || 'Unknown error'));
    }
  };

  const totalItems = categories.reduce((sum, cat) => sum + (cat.productCount || 0), 0);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumbs & Title Area */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#717a6d] text-xs mb-2 tracking-widest uppercase font-semibold">
            <span>Console</span>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-[#047852]">Category Management</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1c19]">Inventory Ecosystem</h2>
          <p className="text-[#41493e] mt-2 max-w-lg">Manage the global distribution hierarchies and curate product collections for international export compliance.</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#00450d] text-white rounded-xl font-bold shadow-xl shadow-[#00450d]/10 hover:shadow-[#00450d]/20 transition-all transform hover:-translate-y-0.5"
        >
          <span className="material-symbols-outlined">add_circle</span>
          <span>Add New Category</span>
        </button>
      </div>

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-[#f4f4ef] p-6 rounded-2xl">
          <p className="text-[#41493e] text-xs font-bold uppercase tracking-wider mb-2">Total Categories</p>
          <h3 className="text-3xl font-extrabold text-[#1a1c19]">{String(categories.length).padStart(2, '0')}</h3>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#047852] font-bold bg-[#dcfce7] w-fit px-2 py-1 rounded">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>12% Global Growth</span>
          </div>
        </div>
        <div className="bg-[#f4f4ef] p-6 rounded-2xl">
          <p className="text-[#41493e] text-xs font-bold uppercase tracking-wider mb-2">Active Items</p>
          <h3 className="text-3xl font-extrabold text-[#1a1c19]">{totalItems.toLocaleString()}</h3>
          <p className="mt-4 text-xs text-[#717a6d]">Syncing with Global Hubs</p>
        </div>
        <div className="bg-[#00450d] text-white p-6 rounded-2xl shadow-xl shadow-[#00450d]/20 relative overflow-hidden">
          <div className="relative z-10">
            <p className="opacity-70 text-xs font-bold uppercase tracking-wider mb-2">System Status</p>
            <h3 className="text-2xl font-bold">Optimized</h3>
            <p className="mt-4 text-xs font-medium">All nodes reporting nominal</p>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10">verified_user</span>
        </div>
        <div className="bg-[#503600] text-white p-6 rounded-2xl shadow-xl shadow-[#503600]/20">
          <p className="opacity-70 text-xs font-bold uppercase tracking-wider mb-2">Last Sync</p>
          <h3 className="text-2xl font-bold">14m Ago</h3>
          <p className="mt-4 text-xs font-medium">Auto-update enabled</p>
        </div>
      </div>

      {/* Main Data Table Card */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e3e3de]">
        {/* Table Header/Filters */}
        <div className="p-6 border-b border-[#f5f5f0] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-lg px-2">Core Categories</h4>
            <span className="bg-[#f5f5f0] text-[#41493e] text-[10px] px-2 py-1 rounded-full font-bold">Live Data</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-[#f5f5f0] p-1 rounded-lg border border-[#e3e3de]">
              {['All', 'Active', 'Archived'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-colors ${
                    activeFilter === filter
                      ? 'bg-white text-[#00450d] shadow-sm'
                      : 'text-[#41493e] hover:text-[#1a1c19]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#e3e3de] rounded-xl text-xs font-bold text-[#41493e] hover:bg-[#f5f5f0] transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-4xl text-[#717a6d] animate-spin">progress_activity</span>
            <p className="mt-4 text-[#41493e]">Loading categories...</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f5f5f0]/50">
                    <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-extrabold text-[#717a6d] border-b border-[#f5f5f0]">Category Name</th>
                    <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-extrabold text-[#717a6d] border-b border-[#f5f5f0]">Items Count</th>
                    <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-extrabold text-[#717a6d] border-b border-[#f5f5f0]">Status</th>
                    <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-extrabold text-[#717a6d] border-b border-[#f5f5f0]">Last Updated</th>
                    <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-extrabold text-[#717a6d] border-b border-[#f5f5f0] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f5f5f0]">
                  {categories.map((category) => (
                    <tr key={category.id} className="hover:bg-[#f5f5f0]/40 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#f5f5f0] flex-shrink-0">
                            {category.image ? (
                              <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/category-placeholder.jpg';
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${category.color}20` }}>
                                <span className="material-symbols-outlined" style={{ color: category.color }}>category</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-[#1a1c19]">{category.name}</p>
                            <p className="text-xs text-[#41493e]">{category.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-semibold text-[#41493e]">{category.productCount} SKUs</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                          <span className="text-xs font-bold text-[#047852] uppercase tracking-tighter">{category.status || 'Active'}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm text-[#41493e]">{category.lastUpdated}</p>
                        <p className="text-[10px] text-[#717a6d]">14:22 GMT</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleOpenModal(category)}
                            className="p-2 text-[#717a6d] hover:text-[#00450d] hover:bg-[#dcfce7] rounded-lg transition-all"
                          >
                            <span className="material-symbols-outlined text-xl">edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(category.id)}
                            className="p-2 text-[#717a6d] hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          >
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination/Footer */}
            <div className="p-6 border-t border-[#f5f5f0] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-[#717a6d] font-medium">Showing {categories.length} of {categories.length} core categories in system</p>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 border border-[#e3e3de] rounded-lg text-xs font-bold text-[#717a6d] cursor-not-allowed">Previous</button>
                <button className="px-4 py-1.5 bg-[#dcfce7] text-[#047852] rounded-lg text-xs font-bold border border-[#86efac]">1</button>
                <button className="px-3 py-1.5 border border-[#e3e3de] rounded-lg text-xs font-bold text-[#41493e] hover:bg-[#f5f5f0] transition-colors">Next</button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Contextual Footer */}
      <footer className="mt-20 pt-10 border-t border-[#e3e3de] grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
        <div className="col-span-2">
          <h5 className="text-[#00450d] font-bold text-sm mb-4">Agrarian Admin Intelligence</h5>
          <p className="text-[#41493e] text-sm max-w-sm leading-relaxed">Global supply chain oversight for premium agrarian exports. Ensuring quality, compliance, and freshness across 42 international territories.</p>
        </div>
        <div>
          <h5 className="text-[#1a1c19] font-bold text-xs uppercase tracking-widest mb-4">Export Nodes</h5>
          <ul className="space-y-2 text-sm text-[#41493e]">
            <li><a className="hover:text-[#047852] transition-colors" href="#">Mumbai Hub</a></li>
            <li><a className="hover:text-[#047852] transition-colors" href="#">Singapore Terminal</a></li>
            <li><a className="hover:text-[#047852] transition-colors" href="#">Dubai Logistics</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#1a1c19] font-bold text-xs uppercase tracking-widest mb-4">Compliance</h5>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[#10b981] text-sm">verified</span>
            <span className="text-xs font-bold text-[#41493e]">ISO 22000 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#503600] text-sm">language</span>
            <span className="text-xs font-bold text-[#41493e]">GDPR Compliant Data</span>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-[#e3e3de]">
              <h3 className="text-xl font-bold text-[#1a1c19]">{editingCategory ? 'Edit Category' : 'Add New Category'}</h3>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] font-label font-bold uppercase tracking-wider text-[#41493e] mb-1">Category Image</label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading || saving}
                    className="flex-1 text-sm"
                  />
                  <button type="button" disabled={uploading || saving} className="px-4 py-2 border border-[#e3e3de] rounded-lg text-xs font-bold hover:bg-[#f5f5f0] transition-colors">
                    {uploading ? 'Uploading...' : 'Upload'}
                  </button>
                </div>
                {formData.image && (
                  <div className="mt-2">
                    <img src={formData.image} alt="Category" className="w-full max-w-xs h-32 object-cover rounded-lg border" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-label font-bold uppercase tracking-wider text-[#41493e] mb-1">Category Name</label>
                <input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Rice & Spices"
                  required
                  disabled={saving}
                  className="w-full px-3 py-2 border border-[#e3e3de] rounded-lg focus:ring-2 focus:ring-[#00450d]/20 focus:border-[#00450d]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-label font-bold uppercase tracking-wider text-[#41493e] mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this category..."
                  required
                  disabled={saving}
                  rows={3}
                  className="w-full px-3 py-2 border border-[#e3e3de] rounded-lg focus:ring-2 focus:ring-[#00450d]/20 focus:border-[#00450d]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-label font-bold uppercase tracking-wider text-[#41493e] mb-1">Category Color</label>
                <div className="flex gap-2 flex-wrap">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setFormData({ ...formData, color })}
                      disabled={saving || uploading}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${
                        formData.color === color ? 'border-[#00450d] scale-110' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#00450d] text-white rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-50"
                  disabled={saving || uploading}
                >
                  {saving || uploading ? 'Saving...' : (editingCategory ? 'Update' : 'Create')} Category
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-3 border border-[#e3e3de] rounded-xl font-bold hover:bg-[#f5f5f0] transition-colors"
                  disabled={saving || uploading}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
