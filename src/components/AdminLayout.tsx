import { type ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({
  children
}: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#fafaf5]">
      {/* Top Navigation - Same as Home Page */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-100/10">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tighter text-[#00450d] font-headline">
            AgroFeed Global
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-headline font-semibold tracking-tight">
            <Link to="/" className="text-stone-600 hover:text-[#00450d] transition-colors">
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 py-2 text-stone-600 hover:text-[#00450d] transition-colors">
                Products
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 py-2 text-stone-600 hover:text-[#00450d] transition-colors">
                About
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link to="/about" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f4f4ef] hover:text-[#00450d] transition-colors">
                    About Us
                  </Link>
                  <Link to="/quality" className="block px-4 py-2 text-sm text-stone-700 hover:bg-[#f4f4ef] hover:text-[#00450d] transition-colors">
                    Quality & Certifications
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-stone-600 hover:text-[#00450d] transition-colors">
              Contact
            </Link>

            {/* Admin Link */}
            <Link to="/admin" className="text-[#00450d] font-bold hover:text-[#0c5216] transition-colors">
              Admin
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">search</span>
              <input
                className="pl-10 pr-4 py-2 bg-stone-100 border-none rounded-full text-sm focus:ring-2 focus:ring-[#00450d]/20 w-64"
                placeholder="Search..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="text-stone-500 hover:text-[#00450d] transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#503600] rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-stone-200 border border-stone-300">
              <img
                alt="Admin Profile"
                src="https://ui-avatars.com/api/?name=Admin&background=00450d&color=fff"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-24 pb-10 px-8 max-w-screen-2xl mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2f312e] text-white py-12 mt-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">AgroFeed Global</h4>
              <p className="text-sm text-stone-400 leading-relaxed">
                Curating the finest agricultural exports through intelligent data structures and global agrarian logic.
              </p>
            </div>
            <div>
              <h5 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Products</h5>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><Link to="/products/meat-seafood" className="hover:text-white transition-colors">Meat & Seafood</Link></li>
                <li><Link to="/products/rice-spices" className="hover:text-white transition-colors">Rice & Spices</Link></li>
                <li><Link to="/products/fruits-vegetables" className="hover:text-white transition-colors">Fruits & Vegetables</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/quality" className="hover:text-white transition-colors">Quality</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Support</h5>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><Link to="/admin" className="hover:text-white transition-colors">Admin Panel</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-stone-400">© 2024 AgroFeed Global. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-stone-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-xs text-stone-400 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
