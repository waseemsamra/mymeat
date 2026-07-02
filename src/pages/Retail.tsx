import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Retail = () => {
  useEffect(() => {
    document.title = "Dubai Retail Butcher Shop – Premium Beef & Mutton | Marahib Food Stuff";
  }, []);
  return (
  <div className="bg-[#f8f9fa] text-[#191c1d] font-body overflow-x-hidden selection:bg-[#831718] selection:text-white">
    <Header />

    <main className="pt-20">
      <section className="relative min-h-[870px] flex items-center overflow-hidden bg-[#f8f9fa]">
        <div className="container mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="max-w-2xl">
            <span className="font-body uppercase tracking-[0.3em] text-[#610006] font-bold text-sm mb-4 block">Dubai Beef, Mutton & Lamb Retail</span>
<h1 className="text-5xl md:text-7xl font-display leading-tight text-primary mb-6">
               <span className="block font-bold">Premium Beef & Mutton,</span>
               <span className="block text-2xl md:text-3xl font-normal text-secondary mt-2">Reimagined in Dubai</span>
             </h1>
            <p className="text-on-surface-variant font-body text-sm md:text-base mb-10 max-w-lg leading-relaxed font-light">
              Marahib Food Stuff brings USDA Prime halal certified beef, mutton and lamb directly to Dubai consumers. Visit our Meat Library for premium cuts.
            </p>
            <div className="flex flex-wrap gap-6">
<Link to="/contact-wholesale-dubai" className="px-10 py-5 premium-gradient text-white rounded-md shadow-lg shadow-[#610006]/20 hover:-translate-y-1 transition-all duration-300 font-medium tracking-wide">
                 Visit The Meat Library
               </Link>
               <Link to="/beef-mutton-lamb-wholesale-dubai" className="px-10 py-5 border-b-2 border-[#610006] text-[#610006] font-bold hover:bg-[#610006]/5 transition-all">
                 Find a Retailer
               </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] bg-[#e7e8e9] overflow-hidden rounded-lg shadow-2xl relative">
              <img className="w-full h-full object-cover" alt="A high-end contemporary butcher shop interior with a dry-aging room." src="/heritage-prime/aging-room.jpg" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white p-6 shadow-xl border border-[#e3beb8]/10">
              <span className="provenance-badge mb-4 inline-block">Grade: Prime A1</span>
              <h4 className="font-display text-2xl text-[#610006] leading-none">Dry-Aged Ribeye</h4>
              <p className="text-xs text-slate-500 mt-2 font-medium">Himalayan Salt-Aged for 45 Days</p>
<div className="mt-4 flex justify-between items-end">
                 <span></span>
                 <span className="material-symbols-outlined text-[#610006]">arrow_outward</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f3f4f5] overflow-hidden">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
              <span className="text-[#610006] uppercase tracking-widest font-bold text-xs">Curated Selection</span>
              <h2 className="text-5xl lg:text-6xl font-display text-[#610006] mt-4 leading-tight">The Meat Library</h2>
              <div className="h-px w-24 bg-[#610006] my-8"></div>
              <p className="text-[#5a403c] leading-loose mb-8">
                Our flagship retail locations are cathedrals of craft. The Meat Library allows customers to browse rare breeds and bespoke cuts like rare editions, each with its own provenance story and technical specifications.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-[#610006] group-hover:premium-gradient group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">menu_book</span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl">The Provenance Ledger</h4>
                    <p className="text-sm text-slate-500">Every animal tracked from pasture to plate.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-[#610006] group-hover:premium-gradient group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">ac_unit</span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl">Climate-Controlled Vaults</h4>
                    <p className="text-sm text-slate-500">Precision aging at 0.5°C and 85% humidity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 flex gap-4 md:gap-8 justify-end">
              <div className="w-1/2 pt-16">
                <img className="w-full aspect-[3/4] object-cover rounded-sm shadow-lg mb-8" alt="Premium beef Tomahawk steak, Dubai retail selection." src="/heritage-prime/heritage-tomahawk.jpg"/>
                <img className="w-full aspect-square object-cover rounded-sm shadow-lg" alt="Artisanal beef cuts arranged on a marble slab, Dubai retail." src="/heritage-prime/aged-mutton-shoulder.jpg"/>
              </div>
              <div className="w-1/2">
                <img className="w-full aspect-[2/3] object-cover rounded-sm shadow-xl" alt="Luxury butcher shop exterior at dusk." src="/heritage-prime/archive-charcuterie.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f8f9fa]">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-[#610006] font-bold uppercase tracking-widest text-xs">Technical Cuts</span>
              <h2 className="text-5xl font-display text-[#610006] mt-2">The Season's Prime</h2>
            </div>
            <div className="flex gap-4">
              <button type="button" className="px-6 py-2 border border-[#e3beb8]/20 rounded-full text-sm font-medium hover:bg-slate-100 transition-all">Beef</button>
              <button type="button" className="px-6 py-2 border border-[#e3beb8]/20 rounded-full text-sm font-medium hover:bg-slate-100 transition-all">Lamb</button>
              <button type="button" className="px-6 py-2 border border-[#e3beb8]/20 rounded-full text-sm font-medium hover:bg-slate-100 transition-all">Mutton</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-[#f3f4f5] rounded-lg">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="A thick-cut Tomahawk steak on a dark slate background." src="/heritage-prime/heritage-tomahawk.jpg"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#610006]/80 via-transparent to-transparent flex flex-col justify-end p-10 text-white">
                <span className="provenance-badge w-fit mb-4">Master Selection</span>
                <h3 className="text-4xl font-display italic mb-2">Marahib Tomahawk</h3>
                <p className="text-sm text-slate-300 max-w-sm mb-6">Aged on the bone for 60 days in our signature salt-brick chamber.</p>
                <Link to="/contact-wholesale-dubai" className="w-fit flex items-center gap-2 font-bold uppercase tracking-widest text-xs">Order Selection <span className="material-symbols-outlined text-sm">trending_flat</span></Link>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden bg-[#f3f4f5] rounded-lg">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Perfectly trimmed lamb chops." src="/heritage-prime/frenched-rack-lamb.jpg"/>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-[#610006]/20 transition-all duration-300"></div>
              <div className="absolute top-6 left-6">
                <h4 className="text-2xl font-display text-white drop-shadow-md">Lollipop Lamb Chops</h4>
</div>
               <div className="absolute bottom-6 right-6">
                 <span className="text-white font-bold bg-[#610006] px-4 py-2 rounded-sm">From AED 190/kg</span>
               </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-[#f3f4f5] rounded-lg">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Premium beef carpaccio." src="/heritage-prime/aged-beef-sausage.jpg"/>
              <div className="absolute inset-0 flex items-center justify-center bg-[#610006]/40 opacity-0 group-hover:opacity-100 transition-opacity">
<Link to="/contact-wholesale-dubai" className="bg-white text-[#610006] px-6 py-2 font-bold uppercase text-[10px] tracking-widest">View Details</Link>
                </div>
              </div>
              <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-[#f3f4f5] rounded-lg">
               <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Mutton shoulder, Dubai retail." src="/heritage-prime/heritage-lamb-shanks.jpg"/>
               <div className="absolute inset-0 flex items-center justify-center bg-[#610006]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Link to="/contact-wholesale-dubai" className="bg-white text-[#610006] px-6 py-2 font-bold uppercase text-[10px] tracking-widest">View Details</Link>
               </div>
              </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#e1e3e4]">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="bg-[#f8f9fa] shadow-2xl overflow-hidden rounded-xl flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-12 lg:p-16">
              <span className="text-[#610006] font-bold uppercase tracking-widest text-xs">Our Locations</span>
              <h2 className="text-5xl font-display text-[#610006] mt-4 leading-tight">Find Your <br />Dubai Butcher</h2>
              <div className="mt-12 space-y-8">
                <div className="relative">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2 block">Zip or City</label>
                  <input className="w-full bg-transparent border-0 border-b-2 border-[#8e706b]/30 focus:border-[#610006] focus:ring-0 px-0 py-3 text-lg font-display" placeholder="Enter Location..." type="text" />
                  <span className="material-symbols-outlined absolute right-0 bottom-3 text-slate-400">near_me</span>
                </div>
                <div className="space-y-4 max-h-64 overflow-y-auto custom-scrollbar pr-4">
                  <LocationCard title="The Marahib Shop" address="Business Bay, Dubai" status="Open Until 9:00 PM" active />
<LocationCard title="Marahib Premium Cuts" address="Al Quoz Industrial Area, Dubai" status="2.5 miles away" />
                   <LocationCard title="Al Barsha Marahib" address="Al Barsha, Dubai" status="3.5 miles away" />
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 h-96 lg:h-auto relative bg-slate-200">
              <img className="w-full h-full object-cover grayscale opacity-80 contrast-125" alt="A stylized map visualization of retail locations." src="/heritage-prime/wholesale-logistics.jpg"/>
              <div className="absolute inset-0 pointer-events-none bg-[#610006]/5"></div>
              <div className="absolute top-1/2 left-1/3 group">
                <div className="w-8 h-8 premium-gradient rounded-full flex items-center justify-center animate-pulse border-4 border-white shadow-lg cursor-pointer pointer-events-auto">
                  <span className="material-symbols-outlined text-white text-xs" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 shadow-xl rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="text-xs font-bold text-[#610006]">The Marahib Shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#610006] text-white text-center">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl lg:text-6xl font-display italic mb-8">Ready for a Masterclass?</h2>
          <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto">
            Join our artisanal community and receive weekly insights into rare cuts, technical preparation guides, and exclusive retail event invitations.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input className="bg-white/10 border-white/20 text-white placeholder:text-white/40 px-8 py-4 rounded-sm min-w-[320px] focus:ring-1 focus:ring-white/50 focus:border-white/50" placeholder="Your Professional Email" type="email" />
            <Link to="/contact-wholesale-dubai" className="bg-white text-[#610006] font-bold px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-slate-100 transition-colors">Join The Guild</Link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);
};

const LocationCard = ({ title, address, status, active = false }: { title: string; address: string; status: string; active?: boolean }) => (
  <div className={`p-4 border-l-4 ${active ? 'bg-[#f3f4f5] border-[#610006]' : 'border-transparent hover:bg-slate-50 transition-colors cursor-pointer'}`}>
    <h5 className="font-display text-xl text-[#610006]">{title}</h5>
    <p className="text-sm text-slate-600 mt-1">{address}</p>
    <p className={`text-[10px] uppercase font-bold mt-2 ${active ? 'text-[#610006]' : 'text-slate-400'}`}>{status}</p>
  </div>
);

export default Retail;