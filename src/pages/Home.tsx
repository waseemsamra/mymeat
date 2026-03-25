import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';

interface Product {
  id: string | number;
  name?: string;
  title?: string;
  subtitle: string;
  description: string;
  image: string;
  category?: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    loadProducts();
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  return (
    <div className="bg-[#fafaf5] min-h-screen font-sans antialiased">
      {/* Top Navigation */}
      <nav className={`fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-none transition-all ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tighter text-[#00450d] font-headline">
            AgroFeed Global
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a className="font-headline font-bold tracking-tight text-sm text-[#00450d] border-b-2 border-[#00450d] pb-1 hover:text-[#0c5216] transition-colors" href="#home">Home</a>
            <a className="font-headline font-bold tracking-tight text-sm text-stone-600 hover:text-[#00450d] transition-colors" href="#categories">Categories</a>
            <a className="font-headline font-bold tracking-tight text-sm text-stone-600 hover:text-[#00450d] transition-colors" href="#services">Services</a>
            <a className="font-headline font-bold tracking-tight text-sm text-stone-600 hover:text-[#00450d] transition-colors" href="#about">About</a>
            <a className="font-headline font-bold tracking-tight text-sm text-stone-600 hover:text-[#00450d] transition-colors" href="#contact">Contact</a>
          </div>

          <Link to="/contact" className="bg-[#00450d] hover:bg-[#1b5e20] text-white px-6 py-2.5 rounded font-headline font-bold text-sm transition-all">
            Enquire Now
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[870px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              alt="Fresh Global Produce"
              className="w-full h-full object-cover brightness-75 scale-105"
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1920"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20">
              <span className="inline-block text-[#ffdeac] font-headline font-bold tracking-[0.2em] text-xs mb-4 uppercase">
                Direct from Source
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Curation of the <br/>
                <span className="text-[#acf4a4]">Earth's Finest.</span>
              </h1>
              <p className="text-white/90 text-lg mb-8 max-w-lg leading-relaxed">
                We bridge the gap between global growers and premium distributors with a focus on seasonal integrity and logistical excellence.
              </p>
              <div className="flex gap-4">
                <Link to="/products" className="bg-[#00450d] text-white px-8 py-4 rounded font-headline font-bold text-base hover:bg-[#1b5e20] transition-all">
                  View Catalog
                </Link>
                <Link to="/contact" className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded font-headline font-bold text-base hover:bg-white/20 transition-all">
                  Our Logistics
                </Link>
              </div>
            </div>
          </div>

          {/* Pagination Indicator */}
          <div className="absolute bottom-12 right-12 flex gap-4 items-center">
            <div className="w-12 h-1 bg-[#00450d]"></div>
            <div className="w-8 h-1 bg-white/30"></div>
            <div className="w-8 h-1 bg-white/30"></div>
            <span className="text-white font-headline font-bold text-sm ml-4">01 / 03</span>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-24 space-y-32 bg-[#fafaf5]">
          {/* Category: Your Products */}
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-[#7a5649] font-sans font-bold tracking-widest text-xs uppercase mb-2 block">Premium Selection</span>
                <h2 className="text-4xl font-headline font-bold text-[#1a1c19]">Our Products</h2>
              </div>
              <Link to="/products" className="text-[#00450d] font-headline font-bold text-sm border-b-2 border-[#00450d]/20 hover:border-[#00450d] transition-all pb-1">
                Explore Full Range
              </Link>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
              {products.slice(0, 6).map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="min-w-[300px] flex-shrink-0 group cursor-pointer"
                >
                  <div className="aspect-[4/5] bg-[#eeeee9] overflow-hidden rounded-xl mb-6 relative">
                    <img
                      alt={product.name || product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={product.image || 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600'}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600';
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-[#ffdeac] px-3 py-1 rounded-full">
                      <span className="text-[10px] font-bold text-[#604100] uppercase">Export Grade</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-[#1a1c19] mb-2">{product.name || product.title}</h3>
                  <p className="text-[#41493e] text-sm mb-4">{product.subtitle}</p>
                  <button className="w-full py-3 border border-[#c0c9bb] text-[#00450d] font-bold text-sm rounded hover:bg-[#00450d] hover:text-white transition-all">
                    Enquire Now
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Fruits & Vegetables - Asymmetric Layout */}
          <div className="bg-[#f4f4ef] py-24">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/3">
                <span className="text-[#00450d] font-sans font-bold tracking-widest text-xs uppercase mb-2 block">The Fresh Harvest</span>
                <h2 className="text-4xl font-headline font-bold text-[#1a1c19] mb-6">Fruits & Vegetables</h2>
                <p className="text-[#41493e] leading-relaxed mb-8">
                  We pride ourselves on 24-hour farm-to-shipping logistics. Our seasonal produce is selected for flavor profiles, brix levels, and visual perfection.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="text-[#00450d] text-2xl">✓</span>
                    <span className="text-[#1a1c19] font-medium">Global GAP Certified</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#00450d] text-2xl">✓</span>
                    <span className="text-[#1a1c19] font-medium">Temperature Controlled Transit</span>
                  </li>
                </ul>
                <Link to="/contact" className="bg-[#7a5649] text-white px-8 py-3 rounded font-headline font-bold text-sm hover:bg-[#603f33] transition-all">
                  Enquire for Seasonal List
                </Link>
              </div>

              <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-xl overflow-hidden relative group">
                    <img
                      alt="Fresh Produce"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00450d]/60 to-transparent flex items-end p-4">
                      <span className="text-white font-headline font-bold">Fresh Vegetables</span>
                    </div>
                  </div>
                  <div className="h-96 rounded-xl overflow-hidden relative group">
                    <img
                      alt="Root Vegetables"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00450d]/60 to-transparent flex items-end p-4">
                      <span className="text-white font-headline font-bold">Root Vegetables</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="h-96 rounded-xl overflow-hidden relative group">
                    <img
                      alt="Citrus"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00450d]/60 to-transparent flex items-end p-4">
                      <span className="text-white font-headline font-bold">Citrus Varieties</span>
                    </div>
                  </div>
                  <div className="h-64 rounded-xl overflow-hidden relative group">
                    <img
                      alt="Tropical Fruits"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00450d]/60 to-transparent flex items-end p-4">
                      <span className="text-white font-headline font-bold">Exotic Fruits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid: Meat, Seafood & More */}
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
              <div className="md:col-span-2 md:row-span-2 bg-[#f4f4ef] rounded-2xl overflow-hidden group relative p-10 flex flex-col justify-between shadow-lg">
                <div>
                  <span className="text-[#503600] font-sans font-bold tracking-widest text-xs uppercase mb-2 block">Oceanic Selection</span>
                  <h3 className="text-3xl font-headline font-bold text-[#1a1c19] mb-4">Meat & Seafood</h3>
                  <p className="text-[#41493e] max-w-sm">
                    From deep-sea catch to premium pasture-raised cuts, our protein logistics are secondary to none.
                  </p>
                </div>
                <div className="relative h-64 mt-6 overflow-hidden rounded-lg">
                  <img
                    alt="Seafood"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600"
                  />
                </div>
                <Link to="/contact" className="mt-6 bg-[#00450d] text-white py-4 rounded font-bold transition-all hover:bg-[#1b5e20]">
                  Enquire for Wholesale
                </Link>
              </div>

              <div className="md:col-span-2 bg-[#7a5649]/10 rounded-2xl overflow-hidden flex items-center p-8 border border-[#7a5649]/20">
                <div className="w-1/2">
                  <h3 className="text-2xl font-headline font-bold text-[#7a5649] mb-2">Nuts & Flavors</h3>
                  <p className="text-[#2e150b] text-sm mb-4">Macadamias, Walnuts, and Vanilla Beans.</p>
                  <Link to="/products" className="text-[#7a5649] font-bold text-sm underline underline-offset-4">
                    Browse Collection
                  </Link>
                </div>
                <div className="w-1/2 h-full">
                  <img
                    alt="Nuts"
                    className="w-full h-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600"
                  />
                </div>
              </div>

              <div className="md:col-span-1 bg-[#e3e3de] rounded-2xl p-6 flex flex-col justify-center text-center">
                <span className="text-4xl mb-4">🥖</span>
                <h4 className="font-headline font-bold mb-2">Bakery Products</h4>
                <p className="text-xs text-[#41493e] mb-4">Par-baked and artisanal flours.</p>
                <Link to="/products" className="text-[#00450d] font-bold text-xs uppercase tracking-widest">
                  Enquire
                </Link>
              </div>

              <div className="md:col-span-1 bg-[#1b5e20] rounded-2xl p-6 flex flex-col justify-center text-center">
                <span className="text-4xl mb-4">🥫</span>
                <h4 className="font-headline font-bold text-white mb-2">Canned Foods</h4>
                <p className="text-xs text-white/70 mb-4">Preserving freshness for the long haul.</p>
                <Link to="/products" className="text-[#acf4a4] font-bold text-xs uppercase tracking-widest">
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-[#2f312e] text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <span className="text-[#acf4a4] font-sans font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Our Operations</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6">Expert Logistics, Global Reach.</h2>
              <div className="h-1 w-24 bg-[#503600] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: '🌍',
                  title: 'Global Logistics',
                  description: 'Multimodal transportation networks ensuring your produce arrives with optimal freshness, regardless of the destination.',
                  image: 'https://images.unsplash.com/photo-1494412574643-35d324698420?w=600'
                },
                {
                  icon: '✓',
                  title: 'Quality Control',
                  description: 'Three-stage inspection process covering farm harvest, container loading, and port arrival for guaranteed standards.',
                  image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600'
                },
                {
                  icon: '🤝',
                  title: 'Custom Sourcing',
                  description: 'Need something rare? Our network of boutique global farmers can be mobilized for your specific contractual requirements.',
                  image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600'
                }
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="mb-8 overflow-hidden rounded-xl h-48">
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      src={service.image}
                    />
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                    <span className="text-[#acf4a4] text-3xl">{service.icon}</span>
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                  <Link to="/services" className="text-[#ffdeac] font-bold text-sm hover:text-white transition-colors">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#fafaf5]">
          <div className="max-w-5xl mx-auto px-8">
            <div className="bg-[#00450d] p-12 md:p-20 rounded-[2rem] text-center relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#1b5e20] rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white mb-6">
                  Ready to expand your <br/>supply chain?
                </h2>
                <p className="text-[#acf4a4] text-lg mb-10 max-w-xl mx-auto">
                  Connect with our trade experts for a tailored quote and logistics plan for your business.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link to="/contact" className="bg-[#ffdeac] text-[#604100] px-10 py-4 rounded font-headline font-bold text-lg hover:bg-[#ffba38] transition-all">
                    Request a Quote
                  </Link>
                  <Link to="/contact" className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded font-headline font-bold text-lg hover:bg-white/10 transition-all">
                    Talk to Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 w-full pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-lg font-headline font-bold text-white">AgroFeed Global</div>
            <p className="text-stone-400 font-sans text-sm leading-relaxed">
              Premium fresh food export and import curating the world's finest harvest for global B2B partners.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-500 font-sans text-sm font-semibold uppercase tracking-widest">Global Logistics: Live</span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold">Our Portfolio</h4>
            <ul className="space-y-4">
              {['Rice & Spices', 'Meat & Seafood', 'Fruits & Vegetables', 'Nuts & Flavors'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-stone-400 hover:text-[#ffdeac] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold">Excellence</h4>
            <ul className="space-y-4">
              {['Quality Control', 'Global Logistics', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-stone-400 hover:text-[#ffdeac] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold">Join Our Newsletter</h4>
            <p className="text-stone-400 text-sm">Get seasonal harvest alerts and market insights.</p>
            <div className="flex">
              <input
                className="bg-stone-900 border-none text-white text-sm focus:ring-1 focus:ring-stone-500 rounded-l-md w-full px-4 py-2"
                placeholder="Email Address"
                type="email"
              />
              <button className="bg-[#00450d] px-4 py-2 rounded-r-md text-white">
                ✈️
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-stone-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm">© 2026 AgroFeed Global. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a className="text-stone-400 hover:text-white transition-colors text-xl" href="#">📱</a>
            <a className="text-stone-400 hover:text-white transition-colors text-xl" href="#">🌐</a>
            <a className="text-stone-400 hover:text-white transition-colors text-xl" href="#">✉️</a>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&display=swap');
        
        .font-headline {
          font-family: 'Manrope', sans-serif;
        }
        
        .font-body, .font-sans {
          font-family: 'Inter', sans-serif;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
