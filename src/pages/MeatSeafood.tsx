import { Link } from 'react-router-dom';

const MeatSeafood = () => {
  return (
    <div className="bg-[#fafaf5] min-h-screen font-sans antialiased scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tighter text-[#00450d] uppercase font-headline">
            AgroFeed Global
          </Link>
          
          <div className="hidden md:flex gap-8 font-headline font-medium tracking-tight">
            <Link to="/products/meat-seafood" className="text-[#00450d] border-b-2 border-[#00450d] pb-1">Meats</Link>
            <Link to="/products/seafood" className="text-stone-600 hover:text-[#00450d] transition-colors">Seafood</Link>
            <Link to="/products/certifications" className="text-stone-600 hover:text-[#00450d] transition-colors">Certifications</Link>
            <Link to="/services" className="text-stone-600 hover:text-[#00450d] transition-colors">Logistics</Link>
            <Link to="/contact" className="text-stone-600 hover:text-[#00450d] transition-colors">Bulk Inquiry</Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#00450d] cursor-pointer hover:opacity-80 transition-opacity">account_circle</span>
            <span className="material-symbols-outlined text-[#00450d] cursor-pointer hover:opacity-80 transition-opacity">public</span>
          </div>
        </div>
        <div className="bg-stone-100 h-[1px] opacity-20"></div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center overflow-hidden bg-[#f4f4ef]">
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              className="w-full h-full object-cover brightness-[0.85]"
              src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=1920"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00450d]/40 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ffdeac] text-[#604100] text-xs font-bold tracking-widest uppercase mb-6">B2B Global Export</span>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-white tracking-tighter leading-tight mb-8">
                Prime Cuts & Sustainable Seafood: Precision Cold-Chain Export
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-[#00450d] hover:bg-[#1b5e20] text-white px-8 py-4 rounded font-bold transition-all flex items-center gap-2 group">
                  Request Wholesale Quote
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link to="/services" className="border border-white/50 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded font-bold transition-all">
                  View Logistics Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Meats Section */}
        <section className="py-24 bg-[#fafaf5]">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-[#00450d] mb-4">Premium Meats</h2>
                <p className="text-lg text-[#41493e] leading-relaxed">Sourcing excellence from heritage breeds and pasture-raised herds. Our precision selection ensures marbling consistency and exceptional flavor profiles for high-end hospitality and retail.</p>
              </div>
              <div className="hidden md:block pb-2">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#717a6d]">Category 01 / Land</span>
              </div>
            </div>

            {/* Bento Grid for Meats */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Beef Card */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-[#ffffff] h-[500px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white font-headline text-3xl font-bold mb-2">Fresh Beef</h3>
                      <p className="text-white/80 text-sm max-w-sm mb-6">A5 Wagyu, Black Angus, and Grass-Fed selections with full traceability and aging profiles.</p>
                      <div className="flex gap-2">
                        <span className="bg-[#00450d]/30 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded border border-white/20 uppercase tracking-tighter">Wagyu Certified</span>
                        <span className="bg-[#00450d]/30 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded border border-white/20 uppercase tracking-tighter">Angus Prime</span>
                      </div>
                    </div>
                    <Link to="/contact" className="bg-white text-[#00450d] px-6 py-3 rounded font-bold text-sm hover:bg-[#acf4a4] transition-colors">
                      Enquire for Bulk
                    </Link>
                  </div>
                </div>
              </div>

              {/* Poultry Card */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-[#ffffff]">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1587593810167-a84920ea0780?w=600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white font-headline text-2xl font-bold mb-2">Poultry</h3>
                  <p className="text-white/80 text-sm mb-4">Corn-fed, organic, and free-range options for global distribution.</p>
                  <Link to="/contact" className="text-white flex items-center gap-2 font-bold text-sm group/btn">
                    Request Quote <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Specialty Cuts */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-[#ffffff] h-[400px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white font-headline text-2xl font-bold mb-2">Specialty Cuts</h3>
                  <p className="text-white/80 text-sm mb-4">New Zealand Lamb and Game meats tailored to executive culinary requirements.</p>
                  <Link to="/contact" className="bg-[#00450d]/40 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded font-bold text-sm hover:bg-white hover:text-[#00450d] transition-all">
                    Bulk Details
                  </Link>
                </div>
              </div>

              {/* Certification Highlight */}
              <div className="md:col-span-8 bg-[#eeeee9] flex flex-col justify-center p-12 rounded-xl border border-[#c0c9bb]/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <span className="material-symbols-outlined text-[#00450d] text-4xl mb-4">verified</span>
                    <h4 className="font-headline font-bold text-xl mb-2">Heritage Integrity</h4>
                    <p className="text-[#41493e] text-sm">Every cut is tracked back to the farm of origin. We verify genetic purity and ethical raising standards for every export lot.</p>
                  </div>
                  <div>
                    <span className="material-symbols-outlined text-[#00450d] text-4xl mb-4">inventory</span>
                    <h4 className="font-headline font-bold text-xl mb-2">Custom Fabrication</h4>
                    <p className="text-[#41493e] text-sm">Bespoke butchery services to meet specific regional requirements and weight-bracket tolerances.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wild-Caught Seafood Section */}
        <section className="py-24 bg-[#f4f4ef]">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-[#00450d] mb-4">Wild-Caught Seafood</h2>
                <p className="text-lg text-[#41493e] leading-relaxed">From the icy deep of the North Atlantic to the tropical Pacific, we manage a direct pipeline of sustainable marine protein. Fresh-frozen at sea to lock in sashimi-grade quality.</p>
              </div>
              <div className="hidden md:block pb-2">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#717a6d]">Category 02 / Ocean</span>
              </div>
            </div>

            {/* Seafood Cards - Horizontal Layout */}
            <div className="flex flex-col gap-12">
              {/* Salmon/Tuna Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-headline text-3xl font-bold text-[#00450d]">Wild Salmon & Bluefin Tuna</h3>
                    <p className="text-[#41493e] text-lg leading-relaxed">Our wild-caught program prioritizes MSC-certified fisheries. Available in H&G, fletches, or portion-controlled fillets with ultra-low temperature (ULT) logistics.</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#503600]">check_circle</span>
                      <div>
                        <span className="font-bold">Sashimi Grade:</span> Harvested and processed under strict Japanese standards.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#503600]">check_circle</span>
                      <div>
                        <span className="font-bold">Seasonal Peaks:</span> Real-time data on harvest windows for maximum fat content.
                      </div>
                    </li>
                  </ul>
                  <div className="flex gap-4 pt-4">
                    <Link to="/contact" className="bg-[#00450d] text-white px-8 py-3 rounded font-bold hover:bg-[#1b5e20] transition-all">
                      Request Wholesale Quote
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-xs font-bold uppercase tracking-wider">In Stock: High Season</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shellfish/Crustaceans Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800"
                  />
                  <div className="absolute bottom-6 right-6 bg-[#00450d]/80 backdrop-blur text-white px-6 py-4 rounded-xl max-w-[200px]">
                    <p className="text-xs font-sans uppercase mb-1">Cold Chain Peak</p>
                    <p className="text-sm font-bold">Live air-freight available for major global hubs.</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-headline text-3xl font-bold text-[#00450d]">Shellfish & Crustaceans</h3>
                    <p className="text-[#41493e] text-lg leading-relaxed">Direct sourcing for King Crab, Lobster, Oysters, and Scallops. Our live-holding facilities ensure minimal stress and maximum mortality protection during transit.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-[#e3e3de] rounded-xl">
                      <h4 className="font-bold text-[#00450d] mb-2">King Crab</h4>
                      <p className="text-xs text-[#41493e]">Cluster or single leg configurations.</p>
                    </div>
                    <div className="p-6 bg-[#e3e3de] rounded-xl">
                      <h4 className="font-bold text-[#00450d] mb-2">Live Lobster</h4>
                      <p className="text-xs text-[#41493e]">Grade A selection from the North Atlantic.</p>
                    </div>
                  </div>
                  <Link to="/contact" className="bg-[#7a5649] text-white px-8 py-3 rounded font-bold hover:bg-[#603f33] transition-all">
                    Enquire for Bulk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Logistics Section */}
        <section className="py-24 bg-[#2f312e] text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 italic">The Precision Path</h2>
              <p className="text-white/70 text-lg">Maintaining biological integrity through every mile of the global journey.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Cold Chain Integrity */}
              <div className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-px flex-1 bg-white/20"></div>
                  <span className="text-xs font-sans uppercase tracking-widest text-[#90d689]">Cold-Chain Integrity</span>
                </div>
                <div className="relative bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-sm">
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-6">
                      <span className="material-symbols-outlined text-4xl text-[#acf4a4]">thermostat</span>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Live Thermal Monitoring</h4>
                        <p className="text-white/60 text-sm leading-relaxed">IoT-enabled sensors in every container provide real-time temperature telemetry to your dashboard 24/7.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <span className="material-symbols-outlined text-4xl text-[#acf4a4]">ac_unit</span>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Nitrogen Snap-Freeze</h4>
                        <p className="text-white/60 text-sm leading-relaxed">Advanced cryogenic freezing technologies preserve cellular structure, eliminating drip loss upon thawing.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <span className="material-symbols-outlined text-4xl text-[#acf4a4]">route</span>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Optimized Last Mile</h4>
                        <p className="text-white/60 text-sm leading-relaxed">Seamless handoffs to certified local refrigerated fleets, ensuring the chain remains unbroken to your dock.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Certifications */}
              <div className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="h-px flex-1 bg-white/20"></div>
                  <span className="text-xs font-sans uppercase tracking-widest text-[#90d689]">Verified Compliance</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: 'verified_user', title: 'HACCP', desc: 'Hazard Analysis Critical Control Point' },
                    { icon: 'waves', title: 'MSC', desc: 'Sustainable Marine Stewardship' },
                    { icon: 'restaurant', title: 'Halal', desc: 'Certified Halal Processing' },
                    { icon: 'menu_book', title: 'Kosher', desc: 'Strict Dietary Protocols' }
                  ].map((cert) => (
                    <div key={cert.title} className="bg-white p-8 rounded-xl flex flex-col items-center text-center group hover:bg-[#acf4a4] transition-colors">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#eeeee9]">
                        <span className="material-symbols-outlined text-[#00450d] text-3xl">{cert.icon}</span>
                      </div>
                      <h5 className="text-[#00450d] font-bold text-sm uppercase mb-1">{cert.title}</h5>
                      <p className="text-[#41493e] text-[10px]">{cert.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-6 text-center lg:text-left">
                  <p className="text-white/40 text-xs italic">All export documentation is digitized and verifiable via our blockchain ledger for ultimate transparent procurement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#e3e3de]">
          <div className="container mx-auto px-8 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter text-[#00450d]">Begin Your Procurement Journey</h2>
              <p className="text-[#41493e] text-xl">Speak with a dedicated regional curator to secure your seasonal allocation or request a full price list for contract manufacturing.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link to="/contact" className="bg-[#00450d] text-white px-12 py-5 rounded font-bold text-lg hover:bg-[#1b5e20] transition-all shadow-lg">
                  Request Wholesale Quote
                </Link>
                <Link to="/services" className="bg-white border border-[#c0c9bb] text-[#00450d] px-12 py-5 rounded font-bold text-lg hover:bg-[#fafaf5] transition-all">
                  Download Logistics Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 w-full pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 w-full mt-20">
          <div>
            <div className="font-headline font-bold text-white text-xl mb-6">AgroFeed Global</div>
            <p className="font-sans text-xs leading-relaxed text-stone-500 mb-4">Curating the world's most exceptional agricultural products for global B2B delivery. Precision. Quality. Ethics.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffba38]"></span>
              <span className="font-sans text-xs text-[#ffba38]">Global Logistics: Stable</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Product Categories</h4>
            <ul className="space-y-3 font-sans text-xs text-stone-500">
              <li><Link to="/products/meat-seafood" className="hover:text-[#ffba38] transition-colors">Premium Meats</Link></li>
              <li><Link to="/products/seafood" className="hover:text-[#ffba38] transition-colors">Wild Seafood</Link></li>
              <li><Link to="/products" className="hover:text-[#ffba38] transition-colors">Seasonal Produce</Link></li>
              <li><Link to="/products" className="hover:text-[#ffba38] transition-colors">Specialty Grains</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 font-sans text-xs text-stone-500">
              <li><Link to="#" className="hover:text-[#ffba38] transition-colors">Terms of Export</Link></li>
              <li><Link to="#" className="hover:text-[#ffba38] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/services" className="hover:text-[#ffba38] transition-colors">Global Logistics Status</Link></li>
              <li><Link to="#" className="hover:text-[#ffba38] transition-colors">Sustainability Report</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Contact Curator</h4>
            <p className="font-sans text-xs text-stone-500 mb-4">Connect with our export team for tailored quotations and logistics support.</p>
            <Link to="/contact" className="w-full bg-[#ffba38] text-white font-bold py-3 rounded hover:bg-[#ffdeac] transition-colors text-xs uppercase tracking-widest block">
              Enquire Now
            </Link>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 px-12 text-center md:text-left">
          <p className="font-sans text-xs text-stone-600">© 2026 AgroFeed Global. All Rights Reserved.</p>
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
        
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default MeatSeafood;
