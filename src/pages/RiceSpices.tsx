import { Link } from 'react-router-dom';

const RiceSpices = () => {
  return (
    <div className="bg-[#fafaf5] min-h-screen font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
          <Link to="/" className="text-xl font-extrabold tracking-tighter text-[#00450d] font-headline">
            Gulf Link
          </Link>
          
          <div className="hidden md:flex items-center gap-10 font-headline uppercase tracking-wider text-sm font-bold">
            <Link to="/products/rice-spices" className="text-[#00450d] border-b-2 border-[#00450d] pb-1">Rice</Link>
            <Link to="/products/rice-spices#spices" className="text-stone-600 hover:text-[#00450d] transition-colors">Spices</Link>
            <Link to="/services" className="text-stone-600 hover:text-[#00450d] transition-colors">Logistics</Link>
            <Link to="/about" className="text-stone-600 hover:text-[#00450d] transition-colors">About</Link>
            <Link to="/contact" className="text-stone-600 hover:text-[#00450d] transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#00450d] transition-all active:scale-95">
              <span className="material-symbols-outlined">language</span>
            </button>
            <button className="p-2 text-[#00450d] transition-all active:scale-95">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
        <div className="bg-stone-100 h-px w-full opacity-20"></div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=1920"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00450d]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-[#ffdeac] text-[#604100] font-sans text-[0.75rem] uppercase tracking-widest rounded-sm mb-6">Curated Selection</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Premium Rice & <br/>Global Spices
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 font-sans max-w-lg">
                Sourcing excellence from heritage farms across the globe. We provide the editorial standard for bulk agricultural imports, ensuring purity, potency, and provenance.
              </p>
              <div className="flex gap-4">
                <Link to="/products" className="bg-[#00450d] hover:bg-[#1b5e20] text-white px-8 py-4 rounded font-bold transition-all flex items-center gap-2 group">
                  Explore Catalog
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link to="/about" className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded font-bold transition-all">
                  Our Sourcing Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Rice Section */}
        <section className="py-32 bg-[#fafaf5]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl font-bold text-[#00450d] mb-4">Grains of Distinction</h2>
                <p className="text-[#41493e] leading-relaxed">From the foothills of the Himalayas to the fertile plains of Southeast Asia, our rice varieties are selected for their distinct aromatic profiles and culinary integrity.</p>
              </div>
              <div className="h-px bg-[#c0c9bb] flex-grow mx-8 hidden lg:block mb-4 opacity-30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Rice Card 1 - Aged Basmati */}
              <div className="group bg-[#ffffff] rounded-xl overflow-hidden transition-all hover:bg-[#fafaf5]">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-xl font-bold text-[#00450d] mb-4">Aged Basmati</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Origin</span>
                      <span className="text-[#1a1c19] font-semibold">Punjab Region</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Aroma</span>
                      <span className="text-[#1a1c19] font-semibold">Nutty & Floral</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Length</span>
                      <span className="text-[#1a1c19] font-semibold">8.4mm +</span>
                    </div>
                  </div>
                  <Link to="/contact" className="w-full py-3 border border-[#717a6d]/20 text-[#00450d] font-bold hover:bg-[#00450d] hover:text-white transition-colors rounded text-sm">
                    Enquire for Bulk
                  </Link>
                </div>
              </div>

              {/* Rice Card 2 - Jasmine */}
              <div className="group bg-[#ffffff] rounded-xl overflow-hidden transition-all hover:bg-[#fafaf5]">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-xl font-bold text-[#00450d] mb-4">Fragrant Jasmine</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Origin</span>
                      <span className="text-[#1a1c19] font-semibold">Thailand</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Aroma</span>
                      <span className="text-[#1a1c19] font-semibold">Pandan Leaf</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Length</span>
                      <span className="text-[#1a1c19] font-semibold">7.2mm</span>
                    </div>
                  </div>
                  <Link to="/contact" className="w-full py-3 border border-[#717a6d]/20 text-[#00450d] font-bold hover:bg-[#00450d] hover:text-white transition-colors rounded text-sm">
                    Enquire for Bulk
                  </Link>
                </div>
              </div>

              {/* Rice Card 3 - Long Grain */}
              <div className="group bg-[#ffffff] rounded-xl overflow-hidden transition-all hover:bg-[#fafaf5]">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-xl font-bold text-[#00450d] mb-4">Long Grain</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Origin</span>
                      <span className="text-[#1a1c19] font-semibold">Vietnam</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Aroma</span>
                      <span className="text-[#1a1c19] font-semibold">Neutral</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Length</span>
                      <span className="text-[#1a1c19] font-semibold">6.5mm</span>
                    </div>
                  </div>
                  <Link to="/contact" className="w-full py-3 border border-[#717a6d]/20 text-[#00450d] font-bold hover:bg-[#00450d] hover:text-white transition-colors rounded text-sm">
                    Enquire for Bulk
                  </Link>
                </div>
              </div>

              {/* Rice Card 4 - Parboiled */}
              <div className="group bg-[#ffffff] rounded-xl overflow-hidden transition-all hover:bg-[#fafaf5]">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-xl font-bold text-[#00450d] mb-4">Parboiled Gold</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Origin</span>
                      <span className="text-[#1a1c19] font-semibold">India / USA</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Aroma</span>
                      <span className="text-[#1a1c19] font-semibold">Earthy</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#41493e] font-sans uppercase tracking-wider">Length</span>
                      <span className="text-[#1a1c19] font-semibold">6.8mm</span>
                    </div>
                  </div>
                  <Link to="/contact" className="w-full py-3 border border-[#717a6d]/20 text-[#00450d] font-bold hover:bg-[#00450d] hover:text-white transition-colors rounded text-sm">
                    Enquire for Bulk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spices Section: Bento Grid */}
        <section className="py-32 bg-[#f4f4ef]" id="spices">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <span className="text-[#503600] font-sans text-[0.75rem] uppercase tracking-[0.2em] font-bold">The Spice Curators</span>
              <h2 className="font-headline text-5xl font-bold text-[#00450d] mt-4">Vibrant Aromatics</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[800px]">
              {/* Turmeric */}
              <div className="md:col-span-3 md:row-span-1 bg-[#eeeee9] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-headline text-3xl font-bold text-[#00450d] mb-2">Turmeric</h3>
                  <p className="text-[#7a5649] font-medium mb-6">High Curcumin Content</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#503600]"></span> Grade: A+ Export
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#503600]"></span> Form: Whole Fingers / Powder
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#503600]"></span> Region: Nizamabad, India
                    </li>
                  </ul>
                </div>
                <img
                  className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-80 mix-blend-multiply"
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600"
                />
              </div>

              {/* Cumin */}
              <div className="md:col-span-3 md:row-span-1 bg-[#ffffff] rounded-xl p-8 flex items-center gap-8 shadow-sm">
                <div className="w-1/3 aspect-square rounded-full overflow-hidden border-4 border-[#eeeee9]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=400"
                  />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#00450d] mb-1">Cumin</h3>
                  <p className="text-[#41493e] text-sm mb-4">Pure Machine Cleaned (99% Purity)</p>
                  <span className="inline-block px-3 py-1 bg-[#eeeee9] text-[#7a5649] text-xs rounded-full font-bold">Unjha Origin</span>
                </div>
              </div>

              {/* Black Pepper */}
              <div className="md:col-span-2 md:row-span-1 bg-[#00450d] text-white rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-4">Black Pepper</h3>
                  <p className="text-[#acf4a4] text-sm">550 G/L Bulk Density. High Piperine.</p>
                </div>
                <div className="mt-auto">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Sourcing</p>
                  <p className="text-lg font-bold">Malabar Coast</p>
                </div>
              </div>

              {/* Cardamom */}
              <div className="md:col-span-2 md:row-span-1 bg-[#6e4b00] text-white rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-4">Cardamom</h3>
                  <p className="text-[#ffdeac] text-sm">8mm Bold Green. Handpicked.</p>
                </div>
                <div className="mt-auto">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Sourcing</p>
                  <p className="text-lg font-bold">Guatemala / Idukki</p>
                </div>
              </div>

              {/* Chili */}
              <div className="md:col-span-2 md:row-span-1 bg-[#7a5649] text-white rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-4">Chili</h3>
                  <p className="text-[#ffdbcf] text-sm">Teja & S4 Grades. Vibrant Red.</p>
                </div>
                <div className="mt-auto">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Sourcing</p>
                  <p className="text-lg font-bold">Guntur Region</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Logistics */}
        <section className="py-24 bg-[#fafaf5]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square bg-[#eeeee9] rounded-3xl overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1494412574643-35d324698420?w=800"
                  />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-[200px]">
                    <span className="material-symbols-outlined text-[#00450d] text-4xl mb-4">thermostat</span>
                    <h4 className="font-bold text-[#00450d] text-sm uppercase mb-2">Temp Control</h4>
                    <p className="text-xs text-[#41493e]">Active monitoring for all sensitive spice shipments.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-headline text-4xl font-bold text-[#00450d] mb-8">Export Infrastructure</h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-lg bg-[#acf4a4] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#002203]">verified</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#00450d] mb-2">Export Grade Quality</h4>
                      <p className="text-[#41493e] leading-relaxed text-sm">Every batch of rice and spice undergoes rigorous multi-point testing for pesticide residues and moisture content in ISO-certified labs.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-lg bg-[#ffdbcf] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#2e150b]">local_shipping</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#00450d] mb-2">Global Logistics Status</h4>
                      <p className="text-[#41493e] leading-relaxed text-sm">Real-time tracking and optimized routing ensure your bulk cargo maintains its freshness from the warehouse to your port of entry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry CTA */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-[#1b5e20] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
              </div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">Scale Your Supply Chain</h2>
                <p className="text-[#90d689] text-lg mb-10">Partner with AgroFeed for reliable, high-volume sourcing of the world's finest rice and spices. Request our current inventory and specification sheets.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact" className="bg-white text-[#00450d] px-10 py-5 rounded font-bold hover:bg-[#fafaf5] transition-all">
                    Request Wholesale Catalog
                  </Link>
                  <Link to="/contact" className="bg-transparent text-white border border-white/30 px-10 py-5 rounded font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    Contact Export Desk
                    <span className="material-symbols-outlined">mail</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 w-full pt-16 pb-8 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-stone-400 text-sm leading-relaxed">
          <div>
            <span className="text-lg font-bold text-white mb-4 block">Gulf Link</span>
            <p className="mb-6">Curating the earth's bounty for a global market. Excellence in agricultural export since 1994.</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[#91d78a] cursor-pointer hover:text-[#acf4a4] transition-all">public</span>
              <span className="material-symbols-outlined text-[#91d78a] cursor-pointer hover:text-[#acf4a4] transition-all">hub</span>
              <span className="material-symbols-outlined text-[#91d78a] cursor-pointer hover:text-[#acf4a4] transition-all">verified_user</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-white font-medium">Resources</span>
            <Link to="#" className="text-stone-500 hover:text-stone-300 transition-all">Sustainability Report</Link>
            <Link to="/services" className="text-stone-500 hover:text-stone-300 transition-all flex items-center gap-2">
              Global Logistics Status
              <span className="w-2 h-2 rounded-full bg-[#91d78a]"></span>
            </Link>
            <Link to="#" className="text-stone-500 hover:text-stone-300 transition-all">Sourcing Map</Link>
            <Link to="#" className="text-stone-500 hover:text-stone-300 transition-all">Export Standards</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-white font-medium">Legal</span>
            <Link to="#" className="text-stone-500 hover:text-stone-300 transition-all">Privacy Policy</Link>
            <Link to="#" className="text-stone-500 hover:text-stone-300 transition-all">Terms of Export</Link>
            <Link to="#" className="text-stone-500 hover:text-stone-300 transition-all">Compliance Certifications</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-white font-medium">Contact</span>
            <p>Export House, 44 Verdant Plaza</p>
            <p>Singapore Central, 049317</p>
            <p className="text-[#91d78a] font-bold mt-2">desk@agrofeed.global</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-stone-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Gulf Link. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="text-stone-600">English (US)</span>
            <span className="text-stone-600">Metric Units</span>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .font-headline {
          font-family: 'Manrope', sans-serif;
        }
        
        .font-body, .font-sans {
          font-family: 'Inter', sans-serif;
        }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
};

export default RiceSpices;
