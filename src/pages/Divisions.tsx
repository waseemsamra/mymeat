import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Divisions = () => (
  <div className="bg-[#f8f9fa] text-[#191c1d] font-body overflow-x-hidden selection:bg-[#ffb3ac] selection:text-[#410003]">
    <Header />

    <main className="pt-32 pb-20">
        <header className="max-w-7xl mx-auto px-12 mb-24 flex flex-col md:flex-row items-end gap-12">
          <div className="md:w-2/3">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Operational Excellence</span>
<h1 className="font-display text-5xl md:text-7xl text-on-surface font-bold leading-tight mb-6">
               Our Operational <span className="italic text-primary block mt-2">Divisions</span>
             </h1>
            <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl">
              WAZ Meat operates as a vertically integrated ecosystem, ensuring that the legacy of artisanal butchery is preserved through modern precision and an uncompromising commitment to global quality standards.
            </p>
          </div>
          <div className="md:w-1/3 pb-4">
            <div className="h-px bg-[#e3beb8]/30 w-full mb-6"></div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e7e8e9] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#610006]">verified</span>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#191c1d]">Certified Authority</div>
                <div className="text-sm text-[#5a403c]">Industry Leading Protocols</div>
              </div>
            </div>
          </div>
        </header>

        <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 group division-card relative bg-[#f3f4f5] overflow-hidden min-h-[500px] flex flex-col justify-end p-12">
            <div className="absolute inset-0 z-0">
<img
                  alt="Retail Division Dubai Beef"
                  className="division-image w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  src="/heritage-prime/heritage-dry-aged-ribeye.jpg"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="relative z-10 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#831718]">storefront</span>
                <span className="font-label text-xs uppercase tracking-widest text-[#831718] font-bold">Division 01</span>
              </div>
              <h2 className="font-display text-5xl mb-4">Retail Division</h2>
              <p className="max-w-md text-white/80 mb-8 font-body leading-relaxed">
                Redefining the neighborhood butcher through a luxury lens. Our retail spaces combine traditional craft with an editorial shopping experience.
              </p>
<Link to="/retail-beef-mutton-lamb-dubai" className="bg-white text-[#610006] px-8 py-3 font-bold text-sm tracking-widest flex items-center gap-2 group-hover:bg-[#610006] group-hover:text-white transition-all active:opacity-80 active:scale-95">
                 VIEW DETAILS <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </Link>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#e1e3e4] p-12 flex flex-col justify-between group transition-all hover:bg-[#410003]">
            <div>
              <span className="material-symbols-outlined text-4xl text-[#610006] mb-6 group-hover:text-[#ffb3ac]">business_center</span>
              <h3 className="font-display text-3xl mb-4 group-hover:text-white">Wholesale Division</h3>
              <p className="text-[#40484f] group-hover:text-white/70 leading-relaxed font-body">
                Precision sourcing and logistics for Michelin-starred kitchens and global hospitality leaders. We are the backbone of high-volume excellence.
              </p>
            </div>
            <div className="pt-8">
              <div className="text-xs uppercase tracking-widest text-[#610006] font-bold mb-4 group-hover:text-[#ffb3ac]">Partner Portal Access</div>
<Link to="/contact-wholesale-dubai" className="inline-flex items-center gap-2 text-[#191c1d] font-bold border-b border-[#191c1d]/20 group-hover:text-white group-hover:border-white transition-all active:opacity-80 active:scale-95">
                 Contact Division
               </Link>
            </div>
          </div>

          <div className="md:col-span-4 bg-white p-10 flex flex-col border border-transparent hover:border-[#e3beb8]/20 transition-all shadow-sm">
            <div className="mb-8">
<img
                alt="Production Facility"
                className="w-full h-48 object-cover mb-8"
                src="/heritage-prime/hero-beef.jpg"
              />
              <h3 className="font-display text-2xl mb-4">Production Facility</h3>
              <p className="text-sm text-[#575f67] leading-relaxed font-body mb-6">
                State-of-the-art aging chambers and processing suites designed for maximum bio-security and flavor development.
              </p>
            </div>
            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-[#f3f4f5] text-[10px] font-bold uppercase tracking-widest mb-4">ISO-9001 Certified</span>
<Link to="/meat-production-facility-dubai" className="w-full py-4 border border-[#610006] text-[#610006] font-bold text-xs tracking-widest hover:bg-[#610006] hover:text-white transition-all active:opacity-80 active:scale-95">
                 VIRTUAL TOUR
               </Link>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#00178d] text-white p-12 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute right-[-20%] top-[-20%] opacity-10 group-hover:rotate-12 transition-transform duration-1000">
              <span className="material-symbols-outlined text-[300px]">public</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-4xl mb-6 italic">International Trade</h3>
              <p className="text-[#bcc3ff] max-w-sm mb-8 leading-relaxed font-body">
                Navigating global trade partnerships with sophisticated import/export logistics and compliance expertise.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/10 p-4 backdrop-blur-md">
                  <div className="text-2xl font-bold font-display">42</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Global Hubs</div>
                </div>
                <div className="bg-white/10 p-4 backdrop-blur-md">
                  <div className="text-2xl font-bold font-display">15+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Nations</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-[#f3f4f5] p-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#610006]/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#610006]/10 transition-colors">
              <span className="material-symbols-outlined text-[#610006] text-4xl">inventory_2</span>
            </div>
            <h3 className="font-display text-2xl mb-4">Deli Production</h3>
            <p className="text-sm text-[#40484f] leading-relaxed font-body mb-8">
              Artisanal processed goods, charcuterie, and fine food curation for boutique retailers.
            </p>
<Link to="/beef-mutton-lamb-catalog-dubai" className="text-[#610006] font-bold text-xs uppercase tracking-widest border-b border-[#610006]/30 hover:border-[#610006] transition-all active:opacity-80 active:scale-95">
               Explore Catalog
             </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
);

export default Divisions;
