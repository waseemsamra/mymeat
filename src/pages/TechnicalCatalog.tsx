import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const TechnicalCatalog = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    const first = document.querySelector('section');
    if (first) {
      first.classList.remove('opacity-0', 'translate-y-10');
      first.classList.add('opacity-100');
    }
  }, []);

  return (
    <div className="bg-[#f8f9fa] font-body text-[#191c1d] overflow-x-hidden">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section: Clinical Precision meets Artisanal Standards */}
        <section className="relative px-8 py-24 mb-12 px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Technical Beef Catalog Dubai</span>
              <h1 className="font-display text-5xl md:text-7xl text-on-surface tracking-tight leading-tight mb-6">
                <span className="block">The Technical</span>
                <span className="block text-2xl md:text-3xl font-normal text-primary mt-2">Beef, Mutton & Lamb Atlases</span>
              </h1>
              <p className="text-on-surface-variant font-body text-sm md:text-base max-w-xl leading-relaxed">
                Dubai's premier technical catalog of beef, mutton and lamb. USDA Prime, HACCP certified, with full specification data for professional kitchens.
              </p>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-[#e7e8e9] rounded-xl overflow-hidden relative group shadow-2xl">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Professional stainless steel butcher's environment with marble slab and cutting tools." src="/heritage-prime/hero-beef.jpg"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="text-white/80 font-body text-xs uppercase tracking-[0.3em] block mb-2">Facility 04 // Dry Aging</span>
                  <div className="w-12 h-[1px] bg-white/40"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid: Bento Style */}
        <section className="px-8 md:px-20 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Beef Atlas */}
            <div className="md:col-span-8 group cursor-pointer relative overflow-hidden bg-white rounded-xl shadow-sm border-b-4 border-transparent hover:border-[#610006] transition-all duration-500">
              <div className="flex flex-col md:flex-row h-full min-h-[500px]">
                <div className="flex-1 p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[#610006] tracking-widest uppercase mb-4">Volume I</h3>
                    <h2 className="text-5xl font-display text-[#191c1d] mb-6">Beef Technical Atlas</h2>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 text-[#5a403c] font-body">
                        <span className="material-symbols-outlined text-[#610006]">timer</span>
                        <span className="text-sm">45-60 Day Himalayan Salt Aging</span>
                      </div>
                      <div className="flex items-center gap-4 text-[#5a403c] font-body">
                        <span className="material-symbols-outlined text-[#610006]">verified</span>
                        <span className="text-sm">USDA Prime / BMS 7-9+ Grading</span>
                      </div>
                      <div className="flex items-center gap-4 text-[#5a403c] font-body">
                        <span className="material-symbols-outlined text-[#610006]">pin_drop</span>
                        <span className="text-sm">Grass-Fed, Grain-Finished Heritage Angus</span>
                      </div>
                    </div>
                  </div>
                  <a href="#beef" className="flex items-center gap-2 text-[#610006] font-bold text-sm tracking-widest uppercase group-hover:gap-4 transition-all">
                    Explore Beef Catalog <span className="material-symbols-outlined">arrow_right_alt</span>
                  </a>
                </div>
                <div className="md:w-1/2 relative overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Raw, perfectly marbled Prime Wagyu ribeye steak on dark slate butcher block." src="/heritage-prime/heritage-dry-aged-ribeye.jpg"/>
                </div>
              </div>
            </div>

            {/* Lamb Atlas */}
            <div className="md:col-span-4 group cursor-pointer relative overflow-hidden bg-[#f3f4f5] rounded-xl hover:bg-[#e7e8e9] transition-all duration-500">
              <div className="h-full flex flex-col">
                <div className="h-64 relative overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Frenched lamb rack on dark matte surface with sharp lighting." src="/heritage-prime/frenched-rack-lamb.jpg"/>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[#00178d] tracking-widest uppercase mb-2">Volume II</h3>
                    <h2 className="text-3xl font-display text-[#191c1d] mb-4">Lamb Atlas</h2>
                    <p className="text-[#5a403c] text-sm font-body leading-relaxed mb-6">Focusing on Dorset and Suffolk breeds with a milk-fed profile and 14-day precision aging.</p>
                  </div>
                  <a href="#lamb" className="flex items-center gap-2 text-[#191c1d] font-bold text-xs tracking-widest uppercase">
                    View Specs <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mutton Atlas */}
            <div className="md:col-span-4 group cursor-pointer relative overflow-hidden bg-[#f3f4f5] rounded-xl hover:bg-[#e7e8e9] transition-all duration-500">
              <div className="h-full flex flex-col">
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[#610006] tracking-widest uppercase mb-2">Volume III</h3>
                    <h2 className="text-3xl font-display text-[#191c1d] mb-4">Mutton Atlas</h2>
                    <p className="text-[#5a403c] text-sm font-body leading-relaxed mb-6">Restoring heritage value to aged proteins. 2-3 year maturity specifications for intense flavor depth.</p>
                  </div>
                  <a href="#mutton" className="flex items-center gap-2 text-[#191c1d] font-bold text-xs tracking-widest uppercase">
                    View Specs <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
                <div className="h-64 relative overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Aged mutton with deep complex texture and rich dark color on dark wood background." src="/heritage-prime/aged-mutton-shoulder.jpg"/>
                </div>
              </div>
            </div>

            {/* Global Origins / Map Feature */}
            <div className="md:col-span-8 bg-[#2e3132] rounded-xl p-12 flex flex-col md:flex-row gap-12 text-white">
              <div className="flex-1">
                <h2 className="text-4xl font-display mb-6">Global Origins</h2>
                <p className="text-[#e3beb8]/80 font-body leading-relaxed mb-8 opacity-80">
                  We source exclusively from micro-climates that support the genetic potential of heritage breeds. From the mineral-rich soils of the Australian outback to the lush pastures of the Scottish Highlands.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#ffb3ac] pl-4">
                    <h4 className="text-xs font-bold uppercase tracking-tighter text-[#ffb3ac]">Australia</h4>
                    <p className="text-lg font-display">Tasmanian Grasslands</p>
                  </div>
                  <div className="border-l-2 border-[#ffb3ac] pl-4">
                    <h4 className="text-xs font-bold uppercase tracking-tighter text-[#ffb3ac]">USA</h4>
                    <p className="text-lg font-display">Snake River Valley</p>
                  </div>
                  <div className="border-l-2 border-[#ffb3ac] pl-4">
                    <h4 className="text-xs font-bold uppercase tracking-tighter text-[#ffb3ac]">UK</h4>
                    <p className="text-lg font-display">Cumbrian Fells</p>
                  </div>
                  <div className="border-l-2 border-[#ffb3ac] pl-4">
                    <h4 className="text-xs font-bold uppercase tracking-tighter text-[#ffb3ac]">Japan</h4>
                    <p className="text-lg font-display">Hyogo Prefecture</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg overflow-hidden relative border border-white/10 min-h-[300px]">
                <div className="absolute inset-0 opacity-40 grayscale contrast-125">
                  <img className="w-full h-full object-cover" alt="World Map showing global sourcing locations" src="/heritage-prime/hero-beef.jpg"/>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border border-[#ffb3ac]/30 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-12 h-12 bg-[#610006]/20 rounded-full border border-[#ffb3ac]/50 flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#610006] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs / Highlights */}
        <section className="bg-[#f3f4f5] py-24 px-8 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display text-[#191c1d] mb-4 italic">The Heritage Standard</h2>
              <div className="w-24 h-[1px] bg-[#610006] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-[#610006]">
                  <span className="material-symbols-outlined text-3xl">biotech</span>
                </div>
                <h4 className="text-xl font-display mb-3 text-[#191c1d]">Genetic Traceability</h4>
                <p className="text-[#5a403c] font-body text-sm leading-relaxed">Full 5-generation DNA certification for all heritage bloodlines, ensuring consistent adipose structure.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-[#610006]">
                  <span className="material-symbols-outlined text-3xl">science</span>
                </div>
                <h4 className="text-xl font-display mb-3 text-[#191c1d]">Precision Dry-Aging</h4>
                <p className="text-[#5a403c] font-body text-sm leading-relaxed">Micro-climate controlled aging rooms utilizing proprietary ultraviolet purification and laminar airflow.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-[#610006]">
                  <span className="material-symbols-outlined text-3xl">architecture</span>
                </div>
                <h4 className="text-xl font-display mb-3 text-[#191c1d]">Master Fabrication</h4>
                <p className="text-[#5a403c] font-body text-sm leading-relaxed">Seam butchery protocols that respect muscular fiber orientation for superior plate texture and yield.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalCatalog;