import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Globe, Truck, FileText, Warehouse, Handshake, CheckCircle, MapPin, Envelope, ChevronLeft, ChevronRight, Award, Phone, Clock, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    loadProducts();
    
    // Navbar scroll effect
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
        setProducts(data.slice(0, 6)); // Show first 6 products
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      subtitle: 'Global Fresh Produce Trading',
      title: 'Connecting Farms to Markets Worldwide',
      description: 'Premium quality fruits, vegetables, and organic produce sourced from certified farms and delivered fresh to your doorstep across continents.',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1920',
      primaryBtn: 'Explore Products',
      secondaryBtn: 'Request Enquiry'
    },
    {
      subtitle: 'Sustainable Agriculture',
      title: 'Farm to Table Excellence',
      description: 'We partner with sustainable farms to bring you the finest organic produce while supporting local communities and protecting our planet.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920',
      primaryBtn: 'Our Services',
      secondaryBtn: 'Learn More'
    },
    {
      subtitle: 'Import & Export Solutions',
      title: 'Your Trusted Trade Partner',
      description: 'Seamless logistics, certified quality control, and documentation handling for hassle-free international produce trading.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1920',
      primaryBtn: 'Start Trading',
      secondaryBtn: 'How It Works'
    }
  ];

  const services = [
    { icon: Globe, title: 'Global Sourcing', description: 'Direct partnerships with certified farms across 25+ countries, ensuring consistent quality and competitive pricing year-round.' },
    { icon: Truck, title: 'Cold Chain Logistics', description: 'Temperature-controlled transportation from farm to port to destination, maintaining freshness and extending shelf life.' },
    { icon: Award, title: 'Quality Certification', description: 'Full compliance with GlobalGAP, HACCP, and organic certifications. Comprehensive inspection and documentation.' },
    { icon: FileText, title: 'Trade Documentation', description: 'Complete handling of customs, phytosanitary certificates, and international trade compliance for seamless transactions.' },
    { icon: Warehouse, title: 'Storage Solutions', description: 'State-of-the-art cold storage facilities at major ports with inventory management and real-time tracking systems.' },
    { icon: Handshake, title: 'Trade Finance', description: 'Flexible payment terms and trade finance solutions to support your cash flow and business growth.' }
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f9f7f2' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-400 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <Link to="/" className={`text-2xl font-bold font-playfair flex items-center gap-2 transition-colors ${scrolled ? 'text-[#1a472a]' : 'text-white'}`}>
            <Leaf className="text-[#d4a853]" />
            AgroFeed
          </Link>
          
          <ul className="hidden md:flex gap-10 list-none">
            {['Home', 'Products', 'Services', 'Process', 'About'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={`text-decoration-none font-medium transition-colors ${scrolled ? 'text-dark' : 'text-white'} hover:text-[#d4a853]`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <Link to="/contact" className={`hidden md:inline-flex px-7 py-3 rounded-full font-semibold transition-all ${scrolled ? 'bg-[#1a472a] text-white hover:bg-transparent hover:text-[#1a472a]' : 'bg-[#d4a853] text-dark hover:bg-transparent hover:text-[#d4a853]'}`}>
            Get Quote
          </Link>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-800"
              style={{ backgroundImage: `url(${slide.image})`, transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,71,42,0.85) 0%, rgba(26,71,42,0.4) 100%)' }} />
            
            <div className="relative z-10 max-w-7xl mx-auto px-10 w-full text-white">
              <span className="text-sm uppercase tracking-[4px] text-[#d4a853] block mb-5 opacity-0 animate-slideUp" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                {slide.subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl font-playfair font-semibold leading-tight mb-8 max-w-3xl opacity-0 animate-slideUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                {slide.title}
              </h1>
              <p className="text-xl max-w-2xl mb-10 opacity-0 animate-slideUp" style={{ animationDelay: '0.7s', animationFillMode: 'forwards', fontWeight: 300, lineHeight: 1.6 }}>
                {slide.description}
              </p>
              <div className="flex gap-5 opacity-0 animate-slideUp" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <Link to="/products" className="bg-[#d4a853] text-dark px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-transparent hover:text-[#d4a853] transition-all hover:-translate-y-1">
                  {slide.primaryBtn} <ArrowRight />
                </Link>
                <Link to="/contact" className="bg-transparent text-white px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 border-2 border-white/30 hover:bg-white hover:text-[#1a472a] transition-all">
                  {slide.secondaryBtn} <Envelope />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-[#d4a853] w-8' : 'bg-white/30'}`}
            />
          ))}
        </div>

        <div className="absolute bottom-10 right-10 flex gap-4 z-20">
          <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-[#d4a853] hover:border-[#d4a853] hover:text-dark transition-all">
            <ChevronLeft />
          </button>
          <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-[#d4a853] hover:border-[#d4a853] hover:text-dark transition-all">
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white py-16 relative z-20 -mt-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-4 gap-10">
          {[
            { number: '25+', label: 'Countries Served' },
            { number: '500+', label: 'Farm Partners' },
            { number: '50K+', label: 'Tons Exported' },
            { number: '15', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <span className="font-playfair text-5xl font-semibold text-[#1a472a] block">{stat.number}</span>
              <span className="text-gray-600 text-sm uppercase tracking-[2px] mt-2 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <section className="py-24 bg-white" id="products">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d4a853] uppercase tracking-[3px] text-sm font-semibold block mb-4">Our Products</span>
          <h2 className="font-playfair text-5xl text-[#1a472a] mb-5">Premium Fresh Produce</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Discover our wide range of high-quality fruits, vegetables, and specialty crops sourced from the world's finest growing regions.</p>
        </div>

        <div className="max-w-7xl mx-auto px-10">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-10">
            {products.map((product, index) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="min-w-[320px] bg-[#f9f7f2] rounded-3xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-60 bg-cover bg-center relative" style={{ backgroundImage: `url(${product.image || 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600'})` }}>
                  <span className="absolute top-5 left-5 bg-[#d4a853] text-dark px-4 py-2 rounded-full text-xs font-semibold uppercase">Seasonal</span>
                </div>
                <div className="p-8">
                  <span className="text-[#d4a853] text-xs uppercase tracking-[2px] font-semibold block mb-2">{product.category || 'Fresh Produce'}</span>
                  <h3 className="font-playfair text-2xl text-[#1a472a] mb-4">{product.name || product.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-5">
                    <MapPin className="text-[#d4a853]" size={16} />
                    <span>Global Sourcing</span>
                  </div>
                  <div className="flex justify-between items-center pt-5 border-t border-gray-200">
                    <span className="text-sm text-[#2d5a3d] font-medium flex items-center gap-2"><CheckCircle size={16} /> Available Now</span>
                    <button className="bg-[#1a472a] text-white border-none px-6 py-2 rounded-full cursor-pointer font-semibold flex items-center gap-2 hover:bg-[#d4a853] hover:text-dark transition-all">
                      Enquire <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-5 mt-10">
            <button className="w-12 h-12 rounded-full border-2 border-[#1a472a] bg-transparent text-[#1a472a] flex items-center justify-center hover:bg-[#1a472a] hover:text-white transition-all">
              <ChevronLeft />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-[#1a472a] bg-transparent text-[#1a472a] flex items-center justify-center hover:bg-[#1a472a] hover:text-white transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)' }} id="services">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d4a853] uppercase tracking-[3px] text-sm font-semibold block mb-4">What We Offer</span>
          <h2 className="font-playfair text-5xl text-white mb-5">Complete Trading Solutions</h2>
          <p className="text-white/80 text-lg leading-relaxed">From sourcing to delivery, we handle every aspect of the fresh produce supply chain with precision and care.</p>
        </div>

        <div className="max-w-7xl mx-auto px-10 grid grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 transition-all hover:-translate-y-2 hover:bg-[#d4a853] group">
              <service.icon className="text-5xl text-[#d4a853] mb-6 group-hover:text-[#1a472a] transition-colors" />
              <h3 className="font-playfair text-2xl mb-5 text-white group-hover:text-[#1a472a] transition-colors">{service.title}</h3>
              <p className="text-white/90 leading-relaxed group-hover:text-[#1a472a] transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#f9f7f2]" id="process">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d4a853] uppercase tracking-[3px] text-sm font-semibold block mb-4">How It Works</span>
          <h2 className="font-playfair text-5xl text-[#1a472a] mb-5">Simple Trading Process</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Four easy steps to start importing or exporting premium fresh produce with confidence.</p>
        </div>

        <div className="max-w-5xl mx-auto px-10 flex justify-between relative">
          <div className="absolute top-[60px] left-[100px] right-[100px] h-0.5" style={{ background: 'linear-gradient(to right, #d4a853 0%, #d4a853 100%)', backgroundSize: '10px 2px', backgroundRepeat: 'repeat-x' }} />
          
          {[
            { number: '01', icon: Globe, title: 'Enquiry', description: 'Submit your product requirements, quantities, and destination. Our team responds within 24 hours.' },
            { number: '02', icon: FileText, title: 'Quotation', description: 'Receive detailed pricing, availability windows, and shipping options tailored to your needs.' },
            { number: '03', icon: CheckCircle, title: 'Confirmation', description: 'Confirm order, complete documentation, and arrange payment terms. We handle all compliance.' },
            { number: '04', icon: Truck, title: 'Delivery', description: 'Track your shipment in real-time from farm gate to final destination with full support.' }
          ].map((step, index) => (
            <div key={index} className="text-center max-w-[250px] relative z-10">
              <div className="w-[120px] h-[120px] bg-white rounded-full flex items-center justify-center font-playfair text-[2.5rem] text-[#d4a853] border-4 border-[#d4a853] mx-auto mb-8 shadow-lg relative">
                {step.number}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#1a472a] rounded-full flex items-center justify-center text-white">
                  <step.icon size={20} />
                </div>
              </div>
              <h3 className="font-playfair text-2xl text-[#1a472a] mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center text-white" style={{ background: 'linear-gradient(rgba(26,71,42,0.9), rgba(26,71,42,0.9)), url(https://images.unsplash.com/photo-1595855759920-86582396756a?w=1920)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} id="contact">
        <div className="max-w-3xl mx-auto px-10">
          <h2 className="font-playfair text-6xl mb-6">Ready to Trade?</h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">Join hundreds of importers and exporters who trust AgroFeed for their fresh produce needs. Get your customized quotation today.</p>
          <Link to="/contact" className="bg-[#d4a853] text-dark px-12 py-5 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-transparent hover:text-[#d4a853] transition-all hover:-translate-y-1">
            Request a Quote <ArrowRight />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-20">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-4 gap-16 pb-16">
          <div className="max-w-sm">
            <div className="font-playfair text-3xl font-bold mb-5 flex items-center gap-2">
              <Leaf className="text-[#d4a853]" />
              AgroFeed
            </div>
            <p className="text-white/60 leading-relaxed mb-8">Premium fresh produce import and export services connecting global markets with sustainable farming communities since 2009.</p>
            <div className="flex gap-4">
              {[
                { name: 'linkedin', icon: Linkedin },
                { name: 'twitter', icon: Twitter },
                { name: 'instagram', icon: Instagram },
                { name: 'facebook', icon: Facebook }
              ].map((social) => (
                <a key={social.name} href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d4a853] hover:text-dark transition-all">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Quick Links', links: ['Home', 'Products', 'Services', 'Process', 'About'] },
            { title: 'Products', links: ['Tropical Fruits', 'Vegetables', 'Organic Produce', 'Specialty Crops', 'Seasonal Items'] },
            { title: 'Contact Us', isContact: true, contacts: [
              { icon: MapPin, text: '123 Trade Center, Rotterdam, Netherlands' },
              { icon: Phone, text: '+31 10 123 4567' },
              { icon: Envelope, text: 'trade@agrofeed.global' },
              { icon: Clock, text: 'Mon - Fri: 9:00 - 18:00 CET' }
            ]}
          ].map((col, index) => (
            <div key={index}>
              <h4 className="font-playfair text-xl mb-6 text-[#d4a853]">{col.title}</h4>
              {col.isContact ? (
                <div className="space-y-4">
                  {col.contacts.map((contact, i) => (
                    <p key={i} className="text-white/60 flex items-start gap-4">
                      <contact.icon className="text-[#d4a853] mt-1" size={18} />
                      {contact.text}
                    </p>
                  ))}
                </div>
              ) : (
                <ul className="list-none space-y-4">
                  {col.links?.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/60 flex items-center gap-2 hover:text-[#d4a853] transition-colors">
                        <ArrowRight size={14} /> {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-10 border-t border-white/10 py-8 flex justify-between items-center">
          <p className="text-white/50 text-sm">© 2026 AgroFeed Global Trading. All rights reserved.</p>
          <div className="flex gap-5">
            <span className="px-5 py-2 bg-white/5 rounded-full text-sm text-white/60 flex items-center gap-2"><CheckCircle size={14} className="text-[#d4a853]" /> GlobalGAP Certified</span>
            <span className="px-5 py-2 bg-white/5 rounded-full text-sm text-white/60 flex items-center gap-2"><Leaf size={14} className="text-[#d4a853]" /> Organic Certified</span>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
