import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Package, 
  Users, 
  FileText, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Search,
  Save,
  X,
  ChevronLeft,
  DollarSign,
  ShoppingCart,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';
import CMSManagement from './CMSManagement';

// Product interface
interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  detailImage: string;
  items: string[];
  features: string[];
  category: string;
}

// Initial products data
const initialProducts: Product[] = [
  {
    id: 'hay',
    title: 'Hay Products',
    subtitle: 'Premium Grass Hays',
    description: 'Premium Rhodes Grass, Timothy Hay, and Rye Grass for optimal livestock nutrition.',
    image: '/product-hay.jpg',
    detailImage: '/detail-timothy.jpg',
    items: ['Rhodes Grass', 'Timothy Hay', 'Rye Grass'],
    features: ['High Fiber Content', 'Low NSC', 'Excellent Palatability'],
    category: 'hay',
  },
  {
    id: 'alfalfa',
    title: 'Alfalfa Products',
    subtitle: 'Protein-Rich Feed',
    description: 'High-protein alfalfa hay and pellets, perfect for dairy cattle and horses.',
    image: '/product-alfalfa.jpg',
    detailImage: '/product-alfalfa.jpg',
    items: ['Alfalfa Hay', 'Alfalfa Pellets', 'Alfalfa Meal'],
    features: ['18-22% Protein', 'High Calcium', 'Rich in Vitamins'],
    category: 'alfalfa',
  },
  {
    id: 'straw',
    title: 'Straw Products',
    subtitle: 'Quality Bedding & Feed',
    description: 'Quality wheat and barley straw for bedding and feed supplementation.',
    image: '/product-straw.jpg',
    detailImage: '/product-straw.jpg',
    items: ['Wheat Straw', 'Barley Straw', 'Oat Straw'],
    features: ['Excellent Bedding', 'High Absorption', 'Low Dust'],
    category: 'straw',
  },
  {
    id: 'grain',
    title: 'Grain & Silage',
    subtitle: 'High-Energy Feed',
    description: 'Nutrient-rich grain products and fermented silage for maximum energy.',
    image: '/product-grain.jpg',
    detailImage: '/detail-silage.jpg',
    items: ['Corn Silage', 'Grain Mix', 'Fermented Feed'],
    features: ['High Energy', 'Fermented', 'Year-Round Available'],
    category: 'grain',
  },
  {
    id: 'pellets',
    title: 'Pellets & Capsules',
    subtitle: 'Convenient Nutrition',
    description: 'Convenient compressed feed pellets and nutritional capsules.',
    image: '/product-pellets.jpg',
    detailImage: '/product-pellets.jpg',
    items: ['Feed Pellets', 'Nutritional Capsules', 'Supplement Pellets'],
    features: ['Minimal Waste', 'Easy Storage', 'Consistent Nutrition'],
    category: 'pellets',
  },
];

const AdminDashboard = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Testimonials state
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'John Smith', role: 'Dairy Farm Owner', content: 'Best quality hay we have ever purchased.', rating: 5, avatar: 'JS' },
    { id: 2, name: 'Sarah Johnson', role: 'Horse Trainer', content: 'Reliable delivery and excellent service.', rating: 5, avatar: 'SJ' },
    { id: 3, name: 'Mike Williams', role: 'Livestock Rancher', content: 'Our livestock loves their products.', rating: 5, avatar: 'MW' },
  ]);
  const [editingTestimonial, setEditingTestimonial] = useState<typeof testimonials[0] | null>(null);

  // Load products from localStorage or use initial
  useEffect(() => {
    const storedProducts = localStorage.getItem('agrofeed_products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('agrofeed_products', JSON.stringify(initialProducts));
    }
  }, []);

  // Check admin access
  useEffect(() => {
    if (!isAdmin) {
      toast.error('Access Denied', {
        description: 'You do not have admin privileges.',
      });
      navigate('/dashboard');
    }
  }, [isAdmin, navigate]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out', {
      description: 'You have been successfully logged out.',
    });
    navigate('/');
  };

  // Product CRUD operations
  const handleAddProduct = () => {
    setEditingProduct({
      id: `product-${Date.now()}`,
      title: '',
      subtitle: '',
      description: '',
      image: '',
      detailImage: '',
      items: [],
      features: [],
      category: '',
    });
    setIsProductModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsProductModalOpen(true);
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('agrofeed_products', JSON.stringify(updatedProducts));
    toast.success('Product deleted', {
      description: 'The product has been removed successfully.',
    });
  };

  const handleSaveProduct = (product: Product) => {
    const existingIndex = products.findIndex(p => p.id === product.id);
    let updatedProducts;
    
    if (existingIndex >= 0) {
      updatedProducts = [...products];
      updatedProducts[existingIndex] = product;
    } else {
      updatedProducts = [...products, product];
    }
    
    setProducts(updatedProducts);
    localStorage.setItem('agrofeed_products', JSON.stringify(updatedProducts));
    toast.success('Product saved', {
      description: 'The product has been updated successfully.',
    });
    setIsProductModalOpen(false);
    setEditingProduct(null);
  };

  // Testimonial operations
  const handleSaveTestimonial = (testimonial: typeof testimonials[0]) => {
    const existingIndex = testimonials.findIndex(t => t.id === testimonial.id);
    let updatedTestimonials;
    
    if (existingIndex >= 0) {
      updatedTestimonials = [...testimonials];
      updatedTestimonials[existingIndex] = testimonial;
    } else {
      updatedTestimonials = [...testimonials, { ...testimonial, id: Date.now(), avatar: testimonial.name.split(' ').map(n => n[0]).join('') }];
    }
    
    setTestimonials(updatedTestimonials);
    localStorage.setItem('agrofeed_testimonials', JSON.stringify(updatedTestimonials));
    toast.success('Testimonial saved');
    setEditingTestimonial(null);
  };

  const handleDeleteTestimonial = (id: number) => {
    const updated = testimonials.filter(t => t.id !== id);
    setTestimonials(updated);
    localStorage.setItem('agrofeed_testimonials', JSON.stringify(updated));
    toast.success('Testimonial deleted');
  };

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { title: 'Total Products', value: products.length, icon: Package, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { title: 'Total Orders', value: '12', change: '+2 this month', icon: ShoppingCart, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { title: 'Total Revenue', value: '$24,500', change: '+15% from last month', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
    { title: 'Active Quotes', value: '3', change: '1 pending review', icon: FileText, color: 'text-amber-600', bgColor: 'bg-amber-100' },
    { title: 'Customer Reviews', value: testimonials.length.toString(), icon: MessageSquare, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { title: 'Total Users', value: '156', change: '+12 this week', icon: Users, color: 'text-pink-600', bgColor: 'bg-pink-100' },
  ];

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Checking access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="section-padding">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold text-dark">Admin Dashboard</h1>
                <p className="text-xs text-muted-foreground">Manage products, content, and settings</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="hidden sm:flex">
                {user?.company || 'AgroFeed Admin'}
              </Badge>
              <Badge className="bg-primary">Admin</Badge>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="section-padding py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{stat.value}</div>
                {stat.change && <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:inline-grid lg:grid-cols-5">
            <TabsTrigger value="cms">CMS</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="cms" className="space-y-4">
            <CMSManagement />
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Product Management</CardTitle>
                    <CardDescription>Add, edit, or remove products from your catalog</CardDescription>
                  </div>
                  <Button onClick={handleAddProduct}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Product</th>
                        <th className="text-left py-3 px-4 font-medium">Category</th>
                        <th className="text-left py-3 px-4 font-medium">Items</th>
                        <th className="text-left py-3 px-4 font-medium">Features</th>
                        <th className="text-left py-3 px-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <p className="font-medium">{product.title}</p>
                                <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">{product.category}</Badge>
                          </td>
                          <td className="py-3 px-4 text-sm">{product.items.length} items</td>
                          <td className="py-3 px-4 text-sm">{product.features.length} features</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" onClick={() => handleEditProduct(product)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                                <Trash2 className="h-4 w-4 text-red-600" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Testimonials Management</CardTitle>
                    <CardDescription>Manage customer reviews and testimonials</CardDescription>
                  </div>
                  <Button onClick={() => setEditingTestimonial({ id: Date.now(), name: '', role: '', content: '', rating: 5, avatar: '' })}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Testimonial
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-amber-500">★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{testimonial.content}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setEditingTestimonial(testimonial)}>
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteTestimonial(testimonial.id)}>
                          <Trash2 className="h-3 w-3 mr-1 text-red-600" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Manage and track customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 'ORD-001', customer: 'John Smith', product: 'Alfalfa Hay Bales', quantity: '500 units', status: 'Delivered', amount: '$4,500' },
                    { id: 'ORD-002', customer: 'Sarah Johnson', product: 'Corn Silage', quantity: '200 kg', status: 'In Transit', amount: '$1,800' },
                    { id: 'ORD-003', customer: 'Mike Williams', product: 'Timothy Hay', quantity: '300 units', status: 'Processing', amount: '$3,200' },
                    { id: 'ORD-004', customer: 'Emily Davis', product: 'Grain Mix Premium', quantity: '150 kg', status: 'Pending', amount: '$950' },
                  ].map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <ShoppingCart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{order.product}</p>
                          <p className="text-sm text-muted-foreground">{order.customer} • {order.quantity}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Processing' ? 'bg-amber-100 text-amber-800' :
                          'bg-gray-100 text-gray-800'
                        }>{order.status}</Badge>
                        <p className="text-sm font-medium mt-1">{order.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Site Settings</CardTitle>
                  <CardDescription>Configure your website settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Site Name</Label>
                    <Input defaultValue="AgroFeed" />
                  </div>
                  <div>
                    <Label>Contact Email</Label>
                    <Input defaultValue="info@agrofeed.com" />
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <Input defaultValue="+1 (555) 123-4567" />
                  </div>
                  <Button className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Admin Profile</CardTitle>
                  <CardDescription>Update your admin profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input defaultValue={user?.name} />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input defaultValue={user?.email} disabled />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input defaultValue={user?.company} />
                  </div>
                  <Separator />
                  <div>
                    <Label>New Password</Label>
                    <div className="relative">
                      <Input type={showPassword ? 'text' : 'password'} placeholder="Leave blank to keep current" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Update Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Product Modal */}
      {isProductModalOpen && editingProduct && (
        <ProductModal
          product={editingProduct}
          onClose={() => {
            setIsProductModalOpen(false);
            setEditingProduct(null);
          }}
          onSave={handleSaveProduct}
        />
      )}

      {/* Testimonial Modal */}
      {editingTestimonial && (
        <TestimonialModal
          testimonial={editingTestimonial}
          onClose={() => setEditingTestimonial(null)}
          onSave={handleSaveTestimonial}
        />
      )}
    </div>
  );
};

// Product Modal Component
const ProductModal = ({ product, onClose, onSave }: { product: Product; onClose: () => void; onSave: (p: Product) => void }) => {
  const [formData, setFormData] = useState<Product>(product);
  const [newItem, setNewItem] = useState('');
  const [newFeature, setNewFeature] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addItem = () => {
    if (newItem.trim()) {
      setFormData({ ...formData, items: [...formData.items, newItem.trim()] });
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    setFormData({ ...formData, items: formData.items.filter((_, i) => i !== index) });
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData({ ...formData, features: [...formData.features, newFeature.trim()] });
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData({ ...formData, features: formData.features.filter((_, i) => i !== index) });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">{product.id.startsWith('product-') ? 'Add Product' : 'Edit Product'}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Product Title</Label>
              <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
            </div>
            <div>
              <Label>Subtitle</Label>
              <Input value={formData.subtitle} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} required />
            </div>
          </div>
          <div>
            <Label>Category</Label>
            <Input value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required />
          </div>
          <div>
            <Label>Description</Label>
            <textarea
              className="w-full min-h-[100px] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Image URL</Label>
              <Input value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
            </div>
            <div>
              <Label>Detail Image URL</Label>
              <Input value={formData.detailImage} onChange={(e) => setFormData({ ...formData, detailImage: e.target.value })} />
            </div>
          </div>
          
          <Separator />
          
          <div>
            <Label>Product Items</Label>
            <div className="flex gap-2 mt-2">
              <Input value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Add item..." />
              <Button type="button" onClick={addItem}><Plus className="h-4 w-4" /></Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.items.map((item, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer" onClick={() => removeItem(index)}>
                  {item} <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label>Features</Label>
            <div className="flex gap-2 mt-2">
              <Input value={newFeature} onChange={(e) => setNewFeature(e.target.value)} placeholder="Add feature..." />
              <Button type="button" onClick={addFeature}><Plus className="h-4 w-4" /></Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer" onClick={() => removeFeature(index)}>
                  {feature} <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              <Save className="h-4 w-4 mr-2" />
              Save Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Testimonial Modal Component
const TestimonialModal = ({ testimonial, onClose, onSave }: { testimonial: any; onClose: () => void; onSave: (t: any) => void }) => {
  const [formData, setFormData] = useState(testimonial);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md">
        <div className="border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">{testimonial.id > Date.now() - 1000 ? 'Add Testimonial' : 'Edit Testimonial'}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Label>Name</Label>
            <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          </div>
          <div>
            <Label>Role</Label>
            <Input value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required />
          </div>
          <div>
            <Label>Content</Label>
            <textarea
              className="w-full min-h-[100px] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Rating</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating })}
                  className={`text-2xl ${rating <= formData.rating ? 'text-amber-500' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
