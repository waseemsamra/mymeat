import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { X } from 'lucide-react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  categoryId?: number;
  description: string;
  image: string;
}

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [uploading, setUploading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    category: '',
    categoryId: 0,
    description: '',
    image: ''
  });

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';
      const response = await fetch(`${API_URL}/categories`);
      
      if (response.ok) {
        const data = await response.json();
        const transformedCategories = data.map((cat: any) => ({
          id: cat.id || cat.PK?.replace('CATEGORY#', ''),
          name: cat.name || cat.data?.name || 'Category'
        }));
        setCategories(transformedCategories);
        // Debug: expose to window for testing
        (window as any).categoriesDebug = transformedCategories;
        console.log('✅ Categories loaded:', transformedCategories.length);
        console.log('📂 Categories:', transformedCategories);
      } else {
        console.error('Failed to load categories');
        // Fallback categories
        setCategories([
          { id: 1, name: 'Meat & Poultry' },
          { id: 2, name: 'Dairy & Eggs' },
          { id: 3, name: 'Vegetables' },
          { id: 4, name: 'Other' }
        ]);
      }
    } catch (error: any) {
      console.error('Error loading categories:', error);
      // Fallback categories
      setCategories([
        { id: 1, name: 'Meat & Poultry' },
        { id: 2, name: 'Dairy & Eggs' },
        { id: 3, name: 'Vegetables' },
        { id: 4, name: 'Other' }
      ]);
    }
  };

  const loadProducts = async () => {
    setLoading(true);
    try {
      const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      setProducts(data);
      toast.success('Products loaded!');
    } catch (error: any) {
      console.error('Error loading products:', error);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (product?: Product) => {
    console.log('📝 Opening modal...', { product, categoriesCount: categories.length });
    
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category || '',
        categoryId: product.categoryId || 0,
        description: product.description || '',
        image: product.image || ''
      });
      console.log('✏️ Editing product:', product);
      console.log('📂 Categories available:', categories);
      console.log('🖼️ Product image:', product.image);
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        price: 0,
        category: '',
        categoryId: 0,
        description: '',
        image: ''
      });
      console.log('➕ Adding new product');
      console.log('📂 Categories available:', categories);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      price: 0,
      category: '',
      categoryId: 0,
      description: '',
      image: ''
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log('📷 Uploading image...', {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    });

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
      console.log('📦 Importing S3Service...');
      const { default: s3Service } = await import('../lib/S3Service');
      console.log('📦 S3Service loaded, uploading to S3...');
      
      const result = await s3Service.uploadImage(file, 'products');
      console.log('📦 S3 Upload result:', result);

      if (result.success && result.url) {
        console.log('✅ Image uploaded successfully:', result.url);
        setFormData({ ...formData, image: result.url });
        toast.success('Image uploaded to S3!');
      } else {
        console.error('❌ Upload failed:', result);
        toast.error('Upload failed');
      }
    } catch (error: any) {
      console.error('💥 Upload error:', error);
      toast.error('Upload failed: ' + (error.message || 'Unknown error'));
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';
      console.log('💾 Saving product...', { editingProduct, formData });

      if (editingProduct) {
        // Update existing product
        console.log('🔄 Updating product:', editingProduct.id);
        
        const updateData = {
          ...formData,
          id: editingProduct.id,
          updatedAt: new Date().toISOString()
        };
        
        console.log('📦 Update data:', updateData);
        
        const response = await fetch(`${API_URL}/products/${editingProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateData)
        });

        console.log('📥 Response status:', response.status);
        const responseData = await response.json();
        console.log('📥 Response data:', responseData);

        if (response.ok) {
          toast.success('Product updated successfully!');
          loadProducts();
          handleCloseModal();
        } else {
          console.error('❌ Update failed:', responseData);
          toast.error('Failed to update product: ' + (responseData.message || 'Unknown error'));
        }
      } else {
        // Create new product
        console.log('➕ Creating new product');
        
        const newProduct = {
          ...formData,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        const response = await fetch(`${API_URL}/products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct)
        });

        const responseData = await response.json();
        console.log('📥 Create response:', responseData);

        if (response.ok) {
          toast.success('Product created successfully!');
          loadProducts();
          handleCloseModal();
        } else {
          console.error('❌ Create failed:', responseData);
          toast.error('Failed to create product: ' + (responseData.message || 'Unknown error'));
        }
      }
    } catch (error: any) {
      console.error('💥 Error saving product:', error);
      toast.error('Failed to save product: ' + (error.message || 'Unknown error'));
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        toast.success('Product deleted successfully!');
        loadProducts();
      } else {
        toast.error('Failed to delete product');
      }
    } catch (error: any) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product');
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Product Management</h2>
          <p className="text-gray-500">Manage your product catalog</p>
        </div>
        <Button onClick={() => handleOpenModal()}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-8">
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
              </CardHeader>
              <CardContent>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                )}
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">${product.price.toFixed(2)}</Badge>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleOpenModal(product)}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="h-3 w-3 text-red-600" />
                    </Button>
                  </div>
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
                  {editingProduct ? 'Edit Product' : 'Add Product'}
                </CardTitle>
                <Button size="sm" variant="ghost" onClick={handleCloseModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Product Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Price ($)</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                      required
                    />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <select
                      value={formData.category}
                      onChange={(e) => {
                        const selectedCat = categories.find(c => c.name === e.target.value);
                        setFormData({ 
                          ...formData, 
                          category: e.target.value,
                          categoryId: selectedCat?.id || 0
                        });
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.length === 0 ? (
                        <option disabled>Loading categories...</option>
                      ) : (
                        categories.map((cat) => (
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))
                      )}
                    </select>
                    {categories.length === 0 && (
                      <p className="text-xs text-gray-500 mt-1">Loading categories from API...</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label>Description</Label>
                  <textarea
                    className="w-full min-h-[80px] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label>Product Image</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="flex-1"
                    />
                    <Button type="button" disabled={uploading} variant="outline">
                      {uploading ? (
                        <>
                          <span className="mr-2">⏳</span>
                          Uploading...
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined mr-2">upload</span>
                          Upload
                        </>
                      )}
                    </Button>
                  </div>
                  {formData.image && (
                    <div className="mt-3">
                      <div className="relative">
                        <img
                          src={formData.image}
                          alt="Product preview"
                          className="w-full max-w-xs h-32 object-cover rounded-lg border"
                          onError={(e) => {
                            console.error('❌ Image failed to load:', formData.image);
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2 break-all">
                        📷 {formData.image}
                      </p>
                    </div>
                  )}
                  {!formData.image && (
                    <p className="text-xs text-gray-500 mt-2">
                      No image uploaded yet
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    <span className="material-symbols-outlined mr-2">save</span>
                    {editingProduct ? 'Update' : 'Create'} Product
                  </Button>
                  <Button type="button" variant="outline" onClick={handleCloseModal}>
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

export default ProductManagement;
