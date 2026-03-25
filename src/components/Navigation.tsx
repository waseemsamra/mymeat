import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-100/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#00450d] font-headline">
          AgroFeed Global
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-headline font-semibold tracking-tight">
          {/* Products Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 py-2 ${isActive('/products') ? 'text-[#00450d] border-b-2 border-[#00450d] pb-1' : 'text-stone-600 hover:text-[#00450d]'} transition-colors`}>
              Products
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="py-2">
                <Link to="/products/meat-seafood" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f4f4ef] hover:text-[#00450d] transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00450d]"></span>
                    Meat & Seafood
                  </span>
                </Link>
                <Link to="/products/rice-spices" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f4f4ef] hover:text-[#00450d] transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7a5649]"></span>
                    Rice & Spices
                  </span>
                </Link>
                <Link to="/products/fruits-vegetables" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f4f4ef] hover:text-[#00450d] transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#503600]"></span>
                    Fruits & Vegetables
                  </span>
                </Link>
                <Link to="/products/canned-goods" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f4f4ef] hover:text-[#00450d] transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffdeac]"></span>
                    Canned Goods
                  </span>
                </Link>
                <Link to="/products/nuts-flavors" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f4f4ef] hover:text-[#00450d] transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffba38]"></span>
                    Nuts & Flavors
                  </span>
                </Link>
                <Link to="/products/bakery" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f4f4ef] hover:text-[#00450d] transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#91d78a]"></span>
                    Bakery Products
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <Link to="/services" className={`text-stone-600 hover:text-[#00450d] transition-colors ${isActive('/services') ? 'text-[#00450d] border-b-2 border-[#00450d] pb-1' : ''}`}>
            Logistics
          </Link>
          <Link to="/quality" className={`text-stone-600 hover:text-[#00450d] transition-colors ${isActive('/quality') ? 'text-[#00450d] border-b-2 border-[#00450d] pb-1' : ''}`}>
            Quality
          </Link>
          <Link to="/sourcing" className={`text-stone-600 hover:text-[#00450d] transition-colors ${isActive('/sourcing') ? 'text-[#00450d] border-b-2 border-[#00450d] pb-1' : ''}`}>
            Sourcing
          </Link>
          <Link to="/procurement" className={`text-stone-600 hover:text-[#00450d] transition-colors ${isActive('/procurement') ? 'text-[#00450d] border-b-2 border-[#00450d] pb-1' : ''}`}>
            Inquiry
          </Link>
          <Link to="/about" className={`text-stone-600 hover:text-[#00450d] transition-colors ${isActive('/about') ? 'text-[#00450d] border-b-2 border-[#00450d] pb-1' : ''}`}>
            About
          </Link>
          <Link to="/contact" className={`text-stone-600 hover:text-[#00450d] transition-colors ${isActive('/contact') ? 'text-[#00450d] border-b-2 border-[#00450d] pb-1' : ''}`}>
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="hidden lg:flex items-center bg-[#f4f4ef] px-4 py-2 rounded-full border border-[#c0c9bb]/20">
            <Search className="w-4 h-4 text-[#41493e] mr-2" />
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-48 font-sans"
              placeholder="Search Produce..."
              type="text"
            />
          </div>

          <button className="bg-[#00450d] text-white px-6 py-2.5 rounded-md hover:opacity-90 transition-all duration-300 font-headline font-semibold text-sm">
            Enquire Now
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
