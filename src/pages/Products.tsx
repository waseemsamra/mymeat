import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Check, ArrowRight, Loader2, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Product {
  id: number | string;
  name: string;
  title?: string;
  subtitle: string;
  description: string;
  image: string;
  detailImage?: string;
  items?: string[];
  features?: string[];
  price?: number;
  category?: string;
  categoryId?: number | string;
}

interface Category {
  id: number | string;
  name: string;
  description: string;
  color: string;
  image?: string;
}

const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    loadProductsAndCategories();
  }, []);

  const loadProductsAndCategories = async () => {
    setLoading(true);
    try {
      // Load products
      const productsResponse = await fetch(`${API_URL}/products`);
      if (productsResponse.ok) {
        const productsData = await productsResponse.json();
        setProducts(productsData);
      }

      // Load categories
      const categoriesResponse = await fetch(`${API_URL}/categories`);
      if (categoriesResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary mb-4" />
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="section-padding py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="section-padding py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our premium range of animal feed products, carefully crafted for optimal nutrition.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No Products Found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden
                         shadow-card hover:shadow-card-hover transition-all duration-500
                         hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image || '/product-placeholder.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform
                             duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/product-placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Category Badge */}
                  {product.category && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-dark">
                        {product.category}
                      </span>
                    </div>
                  )}

                  {/* Price Badge */}
                  {product.price && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Subtitle */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
                      {product.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary
                               transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* View Details */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium
                                opacity-0 group-hover:opacity-100 transition-all duration-300
                                transform translate-y-2 group-hover:translate-y-0">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
