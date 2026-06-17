import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isActive = (path: string) => location.pathname === path;
  const activeClass = "text-[#610006] border-b-2 border-[#610006] pb-1";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-100/10">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-screen-2xl mx-auto">
<Link to="/" className="text-xl font-bold tracking-tighter text-[#610006] font-serif italic">
           Wahat Al Zaad Meat
         </Link>

        {/* Desktop Menu - Center */}
        <nav className="hidden md:flex items-center gap-8 font-sans font-semibold tracking-tight">
          {/* About Us */}
          <Link 
            to="/about" 
            className={`text-stone-600 hover:text-[#610006] transition-colors ${isActive('/about') ? activeClass : ''}`}
          >
            About Us
          </Link>

          {/* Divisions Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 py-2 ${isActive('/divisions') || isActive('/wholesale') || isActive('/retail') || isActive('/production') ? activeClass : 'text-stone-600 hover:text-[#610006]'} transition-colors`}>
              Divisions
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="py-2">
                <Link to="/wholesale" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f3f4f5] hover:text-[#610006] transition-colors">
                  Wholesale Division
                </Link>
                <Link to="/retail" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f3f4f5] hover:text-[#610006] transition-colors">
                  Retail Division
                </Link>
                <Link to="/production" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f3f4f5] hover:text-[#610006] transition-colors">
                  Production Division
                </Link>
              </div>
            </div>
          </div>

          {/* Quality */}
          <Link 
            to="/quality" 
            className={`text-stone-600 hover:text-[#610006] transition-colors ${isActive('/quality') ? activeClass : ''}`}
          >
            Quality
          </Link>

          {/* Catalog */}
          <Link 
            to="/catalog" 
            className={`text-stone-600 hover:text-[#610006] transition-colors ${isActive('/catalog') ? activeClass : ''}`}
          >
            Catalog
          </Link>

          {/* Contact */}
          <Link 
            to="/contact" 
            className={`text-stone-600 hover:text-[#610006] transition-colors ${isActive('/contact') ? activeClass : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Partner Login - Desktop */}
          <Link 
            to="/wholesale" 
            className="hidden md:block bg-[#610006] text-white px-6 py-2.5 rounded-md hover:opacity-90 transition-all duration-300 font-sans font-semibold text-sm border border-[#610006]/20"
          >
            <span className="material-symbols-outlined text-sm mr-1">business_center</span>
            Partner Login
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#610006]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100/10 px-4 py-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-4 font-sans font-semibold">
            <Link to="/about" className={`text-stone-600 hover:text-[#610006] ${isActive('/about') ? 'text-[#610006]' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            
            <div>
              <button
                className="flex items-center justify-between w-full text-stone-600 py-2"
                onClick={() => setOpenDropdown(openDropdown === 'divisions' ? null : 'divisions')}
              >
                Divisions
                <span className={`material-symbols-outlined text-sm transition-transform ${openDropdown === 'divisions' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openDropdown === 'divisions' && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  <Link to="/wholesale" className="text-sm text-stone-700 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Wholesale Division
                  </Link>
                  <Link to="/retail" className="text-sm text-stone-700 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Retail Division
                  </Link>
                  <Link to="/production" className="text-sm text-stone-700 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Production Division
                  </Link>
                </div>
              )}
            </div>

            <Link to="/quality" className={`text-stone-600 hover:text-[#610006] ${isActive('/quality') ? 'text-[#610006]' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Quality
            </Link>
            
            <Link to="/catalog" className={`text-stone-600 hover:text-[#610006] ${isActive('/catalog') ? 'text-[#610006]' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Catalog
            </Link>
            
            <Link to="/contact" className={`text-stone-600 hover:text-[#610006] ${isActive('/contact') ? 'text-[#610006]' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            
            <Link to="/wholesale" className="bg-[#610006] text-white px-6 py-2.5 rounded-md text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Partner Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;