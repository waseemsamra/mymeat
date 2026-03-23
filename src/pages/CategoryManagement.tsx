import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Plus, Edit, Trash2, Save, X, Package, Tag, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface Category {
  id: number | string;
  name: string;
  description: string;
  color: string;
  productCount?: number;
}

const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';

const CategoryManagement = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#3b82f6'
  });

  const colorOptions = [
    '#10b981', // Green
    '#3b82f6', // Blue
    '#f59e0b', // Amber
    '#ef4444', // Red
    '#8b5cf6', // Purple
    '#ec4899', // Pink
    '#06b6d4', // Cyan
    '#f97316'  // Orange
  ];

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/categories`);
      
      if (!response.ok) {
        throw new Error('Failed to load categories');
      }
      
      const data = await response.json();
      
      // Transform API data if needed
      const transformedCategories = data.map((item: any) => ({
        id: item.id || item.PK?.replace('CATEGORY#', '') || Date.now(),
        name: item.name || item.data?.name || 'Category',
        description: item.description || item.data?.description || '',
        color: item.color || item.data?.color || '#3b82f6',
        productCount: item.productCount || item.data?.productCount || 0
      }));
      
      setCategories(transformedCategories);
      toast.success('Categories loaded from API!');
    } catch (error: any) {
      console.error('Error loading categories:', error);
      toast.error('Failed to load categories');
      
      // Fallback to sample data
      setCategories([
        { id: 1, name: 'Hay Products', description: 'Premium grass hays', color: '#10b981', productCount: 3 },
        { id: 2, name: 'Alfalfa Products', description: 'High-protein alfalfa', color: '#3b82f6', productCount: 3 },
        { id: 3, name: 'Straw Products', description: 'Quality wheat and barley straw', color: '#f59e0b', productCount: 3 },
        { id: 4, name: 'Grain & Silage', description: 'Nutrient-rich grain products', color: '#ef4444', productCount: 3 },
        { id: 5, name: 'Pellets & Capsules', description: 'Convenient feed pellets', color: '#8b5cf6', productCount: 3 }
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
        color: category.color
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        description: '',
        color: '#3b82f6'
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
      color: '#3b82f6'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      if (editingCategory) {
        // Update existing category via API
        const response = await fetch(`${API_URL}/categories/${editingCategory.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingCategory.id,
            name: formData.name,
            description: formData.description,
            color: formData.color
          })
        });
        
        if (response.ok) {
          toast.success('Category updated successfully!');
          loadCategories();
          handleCloseModal();
        } else {
          toast.error('Failed to update category');
        }
      } else {
        // Create new category via API
        const newCategory = {
          name: formData.name,
          description: formData.description,
          color: formData.color
        };
        
        const response = await fetch(`${API_URL}/categories`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCategory)
        });
        
        if (response.ok) {
          toast.success('Category created successfully!');
          loadCategories();
          handleCloseModal();
        } else {
          toast.error('Failed to create category');
        }
      }
    } catch (error: any) {
      console.error('Error saving category:', error);
      toast.error('Failed to save category: ' + (error.message || 'Unknown error'));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number | string) => {
    if (!confirm('Are you sure you want to delete this category? This will affect all products in this category.')) return;
    
    try {
      const response = await fetch(`${API_URL}/categories/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        toast.success('Category deleted successfully!');
        loadCategories();
      } else {
        toast.error('Failed to delete category');
      }
    } catch (error: any) {
      console.error('Error deleting category:', error);
      toast.error('Failed to delete category');
    }
  };

  const totalProducts = categories.reduce((sum, cat) => sum + (cat.productCount || 0), 0);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Category Management</h2>
          <p className="text-gray-500">Organize your products into categories</p>
        </div>
        <Button onClick={() => handleOpenModal()} disabled={loading}>
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Tag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{categories.length}</div>
                <p className="text-sm text-gray-500">Total Categories</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Package className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalProducts}</div>
                <p className="text-sm text-gray-500">Total Products</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      {loading ? (
        <div className="text-center py-8">
          <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
          <p className="mt-4 text-gray-600">Loading categories...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <Tag className="h-5 w-5" style={{ color: category.color }} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>
                        {category.productCount || 0} products
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    style={{
                      backgroundColor: category.color,
                      color: 'white'
                    }}
                  >
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleOpenModal(category)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(category.id)}
                  >
                    <Trash2 className="h-3 w-3 text-red-600" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {editingCategory ? 'Edit Category' : 'Add Category'}
                </CardTitle>
                <Button size="sm" variant="ghost" onClick={handleCloseModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Category Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Hay Products"
                    required
                    disabled={saving}
                  />
                </div>

                <div>
                  <Label>Description</Label>
                  <textarea
                    className="w-full min-h-[80px] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe this category..."
                    required
                    disabled={saving}
                  />
                </div>

                <div>
                  <Label>Category Color</Label>
                  <div className="flex gap-2 flex-wrap">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setFormData({ ...formData, color })}
                        disabled={saving}
                        className={`w-8 h-8 rounded-full border-2 transition-transform ${
                          formData.color === color ? 'border-dark scale-110' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="color"
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      disabled={saving}
                      className="w-8 h-8 border rounded cursor-pointer"
                    />
                    <span className="text-sm text-gray-500">
                      Custom color: {formData.color}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1" disabled={saving}>
                    {saving ? (
                      <>
                        <span className="mr-2">⏳</span>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        {editingCategory ? 'Update' : 'Create'} Category
                      </>
                    )}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleCloseModal} disabled={saving}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
