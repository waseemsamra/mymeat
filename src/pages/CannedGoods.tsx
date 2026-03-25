import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, EyeOff } from 'lucide-react';

const CannedGoods = () => {
  return (
    <div className="bg-[#fafaf5] min-h-screen font-sans antialiased">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#fafaf5] px-10 pt-20 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 z-10">
              <span className="inline-block px-3 py-1 bg-[#ffdeac] text-[#604100] text-[10px] font-bold tracking-widest uppercase mb-6 rounded">
                Premium Category
              </span>
              <h1 className="text-[#1a1c19] text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
                Preserving <span className="text-[#00450d] italic">Nature's Finest</span>: Premium Canned Goods
              </h1>
              <p className="text-[#41493e] text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
                Long-term freshness meets uncompromising quality. Sourcing the world's most reliable preserved foods for global distribution through dedicated supply chains.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-[#00450d] hover:bg-[#1b5e20] text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 group shadow-xl">
                  Download Bulk Catalog
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                </Link>
                <Link to="/contact" className="border border-[#c0c9bb] text-[#1a1c19] hover:bg-[#eeeee9] px-8 py-4 rounded-xl font-bold transition-all">
                  Enquire for Wholesale
                </Link>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ffdeac] opacity-10 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  alt="Artisanal canned goods"
                  className="w-full h-auto object-cover"
                  src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 backdrop-blur-md bg-white/70 p-6 rounded-2xl shadow-lg border border-white/20 hidden md:block max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Verified className="text-[#00450d] w-6 h-6" />
                  <span className="font-bold text-sm">Quality Guaranteed</span>
                </div>
                <p className="text-xs text-[#41493e]">Every batch undergoes rigorous 5-point quality inspection before export.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Category 1: Garden Fresh Vegetables */}
        <section className="bg-[#f4f4ef] px-10 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-[#1a1c19] mb-4">Garden Fresh Canned Vegetables</h2>
                <p className="text-[#41493e]">Sourced from the heart of global agricultural hubs, our vegetables are flash-processed within hours of harvest.</p>
              </div>
              <Link to="/products" className="text-[#00450d] font-bold flex items-center gap-2 group">
                View Entire Catalog <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product 1 - Tomatoes */}
              <div className="bg-[#ffffff] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Italian Tomatoes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#7a5649]">
                    Origin: Italy
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Italian Whole Peeled Tomatoes</h3>
                  <p className="text-[#41493e] text-sm mb-6 leading-relaxed">San Marzano style variety, harvested at peak ripeness and canned with zero preservatives.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#717a6d] uppercase tracking-widest">Bulk Packs Only</span>
                    <Link to="/contact" className="text-[#00450d] font-bold hover:underline">Enquire for Bulk</Link>
                  </div>
                </div>
              </div>

              {/* Product 2 - Corn */}
              <div className="bg-[#ffffff] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Sweet Kernel Corn"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#7a5649]">
                    Origin: USA
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Sweet Kernel Corn</h3>
                  <p className="text-[#41493e] text-sm mb-6 leading-relaxed">Non-GMO Field Corn, steam-sealed for crunch and sweetness. Available in industrial #10 cans.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#717a6d] uppercase tracking-widest">600kg Min Order</span>
                    <Link to="/contact" className="text-[#00450d] font-bold hover:underline">Enquire for Bulk</Link>
                  </div>
                </div>
              </div>

              {/* Product 3 - Peas */}
              <div className="bg-[#ffffff] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Garden Peas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#7a5649]">
                    Origin: UK
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Garden Peas</h3>
                  <p className="text-[#41493e] text-sm mb-6 leading-relaxed">Selected tender peas, flash-frozen at the source then brine-canned to maintain vibrant color.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#717a6d] uppercase tracking-widest">Global Logistics</span>
                    <Link to="/contact" className="text-[#00450d] font-bold hover:underline">Enquire for Bulk</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Category 2: Tinned Proteins */}
        <section className="bg-[#fafaf5] px-10 py-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <span className="text-[#00450d] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Sustainable Sourcing</span>
              <h2 className="text-4xl font-extrabold text-[#1a1c19] mb-6 leading-tight">Tinned Proteins & Seafood</h2>
              <p className="text-[#41493e] text-lg mb-8 leading-relaxed">
                Premium seafood and meats processed under strict EU and North American safety standards. Ethical, traceable, and reliable for high-volume supply.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <Check className="text-[#00450d] w-5 h-5" />
                  <span className="font-medium">MSC & ASC Certified Seafood</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-[#00450d] w-5 h-5" />
                  <span className="font-medium">HACCP Approved Facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-[#00450d] w-5 h-5" />
                  <span className="font-medium">Bulk 24-Pack Trays & Pallets</span>
                </div>
              </div>
              <Link to="/contact" className="w-full bg-[#7a5649] text-white py-4 rounded-xl font-bold hover:bg-[#603f33] transition-colors block">
                Request Protein Catalog
              </Link>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Tuna Card */}
              <div className="bg-[#ffffff] p-6 rounded-2xl flex gap-6 items-center">
                <img
                  alt="Albacore Tuna"
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1580476262798-bddd9dd90e3e?w=400"
                />
                <div>
                  <h4 className="font-bold text-lg">Albacore Tuna</h4>
                  <p className="text-xs text-[#41493e] mb-3">Wild Caught | MSC Certified</p>
                  <Link to="/contact" className="text-sm font-bold text-[#00450d]">Inquiry Only</Link>
                </div>
              </div>

              {/* Sardines Card */}
              <div className="bg-[#ffffff] p-6 rounded-2xl flex gap-6 items-center">
                <img
                  alt="Portuguese Sardines"
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1574484281616-1e2a6775583c?w=400"
                />
                <div>
                  <h4 className="font-bold text-lg">Portuguese Sardines</h4>
                  <p className="text-xs text-[#41493e] mb-3">Extra Virgin Olive Oil</p>
                  <Link to="/contact" className="text-sm font-bold text-[#00450d]">Inquiry Only</Link>
                </div>
              </div>

              {/* Corned Beef Card */}
              <div className="bg-[#ffffff] p-6 rounded-2xl flex gap-6 items-center">
                <img
                  alt="Premium Corned Beef"
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1606851096714-b52b7a2a8b29?w=400"
                />
                <div>
                  <h4 className="font-bold text-lg">Premium Corned Beef</h4>
                  <p className="text-xs text-[#41493e] mb-3">Grass-Fed South American</p>
                  <Link to="/contact" className="text-sm font-bold text-[#00450d]">Inquiry Only</Link>
                </div>
              </div>

              {/* Custom Request Card */}
              <div className="border-2 border-dashed border-[#c0c9bb] rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                <Inventory2 className="text-[#c0c9bb] w-12 h-12 mb-2" />
                <p className="text-sm text-[#717a6d] font-medium">Request custom protein packing solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Category 3: Artisanal Preserves */}
        <section className="bg-[#ffffff] px-10 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative mb-20">
              <h2 className="text-7xl font-black text-[#eeeee9] absolute -top-12 left-0 -z-10 select-none">TRACEO</h2>
              <h2 className="text-4xl font-bold text-[#1a1c19]">Artisanal Preserves & Jams</h2>
              <div className="h-1 w-24 bg-[#503600] mt-4"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              {/* Strawberry Jam */}
              <div className="flex-1 bg-[#f4f4ef] p-1 rounded-3xl overflow-hidden relative group">
                <img
                  alt="Strawberry Jam"
                  className="w-full h-[500px] object-cover rounded-[1.4rem] grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://images.unsplash.com/photo-1590422749830-601e910098ec?w=800"
                />
                <div className="absolute bottom-10 left-10 right-10 p-8 backdrop-blur-md bg-white/70 rounded-2xl border border-white/30 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-[#503600] font-bold text-xs uppercase tracking-[0.2em] mb-2">Heritage Recipe</p>
                  <h3 className="text-2xl font-bold mb-3">Wild Strawberry Jam</h3>
                  <p className="text-sm text-[#41493e] mb-6">Hand-picked wild strawberries from Alpine regions. 70% fruit content with no artificial thickeners. Farm-to-Jar traceability included.</p>
                  <Link to="/contact" className="flex items-center gap-2 font-bold text-[#00450d] group/btn">
                    Get Batch Reports <Download className="w-4 h-4 text-sm group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Orange Marmalade */}
              <div className="flex-1 bg-[#f4f4ef] p-1 rounded-3xl overflow-hidden relative group">
                <img
                  alt="Orange Marmalade"
                  className="w-full h-[500px] object-cover rounded-[1.4rem] grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://images.unsplash.com/photo-1590422749830-601e910098ec?w=800"
                />
                <div className="absolute bottom-10 left-10 right-10 p-8 backdrop-blur-md bg-white/70 rounded-2xl border border-white/30 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-[#503600] font-bold text-xs uppercase tracking-[0.2em] mb-2">Citrus Collection</p>
                  <h3 className="text-2xl font-bold mb-3">Bitter Orange Marmalade</h3>
                  <p className="text-sm text-[#41493e] mb-6">Seville oranges slowly simmered for the perfect balance of sweetness and pithy bitterness. Traditional copper kettle method.</p>
                  <Link to="/contact" className="flex items-center gap-2 font-bold text-[#00450d] group/btn">
                    Get Batch Reports <Download className="w-4 h-4 text-sm group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B2B Trust Section: Long-Life Logistics */}
        <section className="bg-[#2f312e] text-white px-10 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Long-Life Logistics & Quality Control</h2>
                <p className="text-[#90d689] text-lg leading-relaxed mb-12">
                  Navigating the complexities of global food trade requires more than just good products. We provide a resilient logistics framework designed for bulk shelf-stable shipments.
                </p>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1b5e20] flex items-center justify-center shrink-0">
                      <Inventory2 className="text-[#90d689] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Reinforced Export Packaging</h4>
                      <p className="text-[#41493e] text-sm">Double-wall corrugated boxing and shrink-wrapped pallets ensure zero-crush delivery even on long oceanic transits.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1b5e20] flex items-center justify-center shrink-0">
                      <Thermostat className="text-[#90d689] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Climate-Monitored Storage</h4>
                      <p className="text-[#41493e] text-sm">While shelf-stable, our warehouses maintain a consistent 18°C to preserve texture and nutritional integrity for high-end markets.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1b5e20] flex items-center justify-center shrink-0">
                      <LocalShipping className="text-[#90d689] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Last-Mile Reliability</h4>
                      <p className="text-[#41493e] text-sm">Integrated API tracking for real-time visibility from our canning facility to your distribution center.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-[#eeeee9]/10 rounded-full flex items-center justify-center p-12">
                  <img
                    alt="Logistics"
                    className="rounded-2xl shadow-2xl object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                  />
                </div>
                <div className="absolute top-1/2 -right-10 bg-[#ffdeac] text-[#604100] p-6 rounded-xl shadow-xl max-w-[200px]">
                  <p className="text-3xl font-black mb-1">99.8%</p>
                  <p className="text-xs font-bold uppercase tracking-wider">Damage-Free Delivery Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Inquiry CTA */}
        <section className="bg-[#fafaf5] px-10 py-32">
          <div className="max-w-5xl mx-auto bg-[#1b5e20] rounded-[2rem] p-16 relative overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
                  </pattern>
                </defs>
                <rect fill="url(#grid)" height="100%" width="100%"></rect>
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black text-[#90d689] mb-6">Ready to Secure Your Inventory?</h2>
              <p className="text-[#acf4a4] text-lg mb-10 max-w-2xl mx-auto">
                Speak with our dedicated account managers to negotiate bulk pricing, private labeling options, and custom logistics schedules tailored to your business scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-[#fafaf5] text-[#00450d] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl">
                  Request a Custom Quote
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-[#acf4a4] text-[#acf4a4] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#00450d]/20 transition-all">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap');
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

export default CannedGoods;
