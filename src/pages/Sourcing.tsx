import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Sourcing = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });
  }, []);

  return (
    <div className="bg-[#f8f9fa] font-body text-[#191c1d] overflow-x-hidden pt-24">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-[#610006]/40 to-transparent z-10"></div>
           <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/heritage-prime/hero-beef.jpg')"}}></div>
        </div>
        <div className="relative z-20 px-12 md:px-24 w-full max-w-7xl">
          <div className="space-y-4">
            <p className="font-body text-white uppercase tracking-[0.3em] text-sm font-bold">Dubai Beef Wholesale</p>
<h1 className="font-display text-5xl md:text-7xl text-white font-bold leading-tight tracking-tighter mb-6">
               <span className="block">Global Beef, Mutton & Lamb Sourcing</span>
               <span className="block text-2xl md:text-3xl font-normal text-white mt-2">Australia, Pakistan, India, South Africa</span>
             </h1>
             <p className="font-body text-sm md:text-base text-stone-200 max-w-2xl mb-12 leading-relaxed">
              Marahib Food Stuff sources premium beef, mutton and lamb from Australia, Pakistan, India and South Africa for Dubai wholesale distribution.
            </p>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 z-20 hidden md:block">
          <div className="provenance-badge px-6 py-3 text-sm rounded-full bg-[#0025c8] text-[#dfe0ff] font-bold uppercase tracking-widest">Global Network Verified</div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-surface py-32 px-12 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-black text-[#610006] tracking-tighter leading-none mb-8">
              Beyond Borders,<br/>Beyond Standard.
            </h2>
            <div className="h-1 w-24 bg-[#610006] mb-8"></div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <p className="text-xl text-[#191c1d] leading-relaxed font-body">
              At Marahib Food Stuff, we don't just source meat; we curate heritage. Our global procurement strategy is rooted in the principle of <strong>Geographical Integrity</strong>. We believe the environment, the climate, and the traditional knowledge of local herdsmen are the true architects of flavor.
            </p>
            <p className="text-[#5a403c] leading-relaxed">
              From the karoo scrublands of South Africa to the pristine pastures of Southern Australia, each region is selected for its specific biosecurity standards and commitment to master-butcher quality. Every cut that enters our wholesale chain carries a digital fingerprint of its provenance, ensuring full transparency from pasture to plate.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="bg-[#f3f4f5] py-24 relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-16 max-w-7xl mx-auto px-12">
            <span className="label-md text-[#610006] font-bold uppercase tracking-widest mb-2 block">Global Footprint</span>
            <h2 className="text-4xl font-serif italic text-[#191c1d]">Our Strategic Hubs</h2>
          </div>
          <div className="relative aspect-video w-full bg-white/50 overflow-hidden border border-[#e3beb8]/20 group">
            <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-700" alt="World map showing global sourcing locations with strategic hubs highlighted." src="/heritage-prime/hero-beef.jpg"/>
            <div className="absolute top-[50%] left-[25%] flex flex-col items-center">
              <div className="w-4 h-4 bg-[#610006] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#610006] rounded-full relative z-10"></div>
              <span className="mt-2 font-sans text-[10px] font-bold uppercase tracking-widest bg-white px-2 py-1 shadow-sm">Brazil</span>
            </div>
            <div className="absolute top-[45%] left-[55%] flex flex-col items-center">
              <div className="w-4 h-4 bg-[#610006] rounded-full relative z-10"></div>
              <span className="mt-2 font-sans text-[10px] font-bold uppercase tracking-widest bg-white px-2 py-1 shadow-sm">Pakistan & India. Beef & Mutton</span>
            </div>
            <div className="absolute top-[65%] left-[50%] flex flex-col items-center">
              <div className="w-4 h-4 bg-[#610006] rounded-full relative z-10"></div>
              <span className="mt-2 font-sans text-[10px] font-bold uppercase tracking-widest bg-white px-2 py-1 shadow-sm">South Africa</span>
            </div>
            <div className="absolute top-[75%] left-[85%] flex flex-col items-center">
              <div className="w-4 h-4 bg-[#610006] rounded-full relative z-10"></div>
              <span className="mt-2 font-sans text-[10px] font-bold uppercase tracking-widest bg-white px-2 py-1 shadow-sm">Australia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Details Grid */}
      <section className="bg-white py-32 px-12 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Pakistan & India */}
          <div className="group relative bg-[#f3f4f5] p-12 transition-all hover:bg-white overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl">restaurant</span>
            </div>
            <span className="provenance-badge mb-6 inline-block bg-[#0025c8] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Beef & Mutton</span>
            <h3 className="text-3xl font-black text-[#610006] mb-4 tracking-tighter uppercase">Pakistan & India</h3>
            <p className="text-[#5a403c] leading-relaxed mb-8">
              Home to some of the world's most aromatic and lean mutton profiles. Our partners utilize traditional free-grazing husbandry in the Punjab and Northern Highlands, resulting in a unique flavor intensity favored for high-end culinary applications.
            </p>
            <ul className="space-y-3 font-sans text-xs font-bold uppercase tracking-widest text-stone-500">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Mountain Grazed</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Traditional Butchery Methods</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Intense Marbling Potential</li>
            </ul>
          </div>
          {/* South Africa */}
          <div className="group relative bg-[#f3f4f5] p-12 transition-all hover:bg-white overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl">eco</span>
            </div>
            <span className="provenance-badge mb-6 inline-block bg-[#0025c8] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Grass-Fed Beef</span>
            <h3 className="text-3xl font-black text-[#610006] mb-4 tracking-tighter uppercase">Africa & South Africa</h3>
            <p className="text-[#5a403c] leading-relaxed mb-8">
              Renowned for the legendary Karoo Lamb, these regions offer a distinct herbaceous flavor profile. Our focus remains on extensive grass-fed cattle systems that prioritize animal welfare and environmental stewardship.
            </p>
            <ul className="space-y-3 font-sans text-xs font-bold uppercase tracking-widest text-stone-500">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Karoo Certified</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Sustainable Pasture Management</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Exotic Game Availability</li>
            </ul>
          </div>
          {/* Australia */}
          <div className="group relative bg-[#f3f4f5] p-12 transition-all hover:bg-white overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl">architecture</span>
            </div>
            <span className="provenance-badge mb-6 inline-block bg-[#0025c8] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium Beef & Lamb</span>
            <h3 className="text-3xl font-black text-[#610006] mb-4 tracking-tighter uppercase">Australia</h3>
            <p className="text-[#5a403c] leading-relaxed mb-8">
              Australia stands as the benchmark for strict biosecurity and systematic grading. Our Australian supply chain delivers consistent BMS 7+ Wagyu and premium export-grade lamb, defined by surgical precision in processing.
            </p>
            <ul className="space-y-3 font-sans text-xs font-bold uppercase tracking-widest text-stone-500">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> MSA Grading Compliant</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Grain-Finished Options</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> World-Leading Traceability</li>
            </ul>
          </div>
          {/* Brazil */}
          <div className="group relative bg-[#f3f4f5] p-12 transition-all hover:bg-white overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl">inventory_2</span>
            </div>
            <span className="provenance-badge mb-6 inline-block bg-[#0025c8] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Global Volume Leader</span>
            <h3 className="text-3xl font-black text-[#610006] mb-4 tracking-tighter uppercase">Brazil</h3>
            <p className="text-[#5a403c] leading-relaxed mb-8">
              The cornerstone of global supply consistency. Brazil's pasture-raised Nelore herds provide high-quality lean protein at a scale that ensures our wholesale partners never face stock volatility.
            </p>
            <ul className="space-y-3 font-sans text-xs font-bold uppercase tracking-widest text-stone-500">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Pasture-Raised Standard</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> SIF Certified Facilities</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> High Consistency Yields</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="bg-[#e1e3e4] py-32 px-12 md:px-24 border-y border-[#e3beb8]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-[#610006] tracking-tighter uppercase mb-4">Certified Authority</h2>
            <p className="text-[#5a403c] italic font-serif text-lg">Rigorous protocols. No exceptions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[#610006] text-5xl mb-6">verified_user</span>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Halaal Certified</h4>
              <p className="text-[#5a403c] text-sm font-light">All global facilities meet the strictest international Halaal standards, audited regularly by independent religious authorities.</p>
            </div>
            <div className="bg-white p-10 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[#610006] text-5xl mb-6">biotech</span>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4">FSSC 22000</h4>
              <p className="text-[#5a403c] text-sm font-light">Food Safety System Certification that guarantees an international standard for audit, certification, and registration of Food Safety Management Systems.</p>
            </div>
            <div className="bg-white p-10 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[#610006] text-5xl mb-6">shield_with_heart</span>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Biosecurity Protocols</h4>
              <p className="text-[#5a403c] text-sm font-light">Multi-stage quarantine and laboratory testing protocols are implemented at every port of exit and entry to ensure zero-risk supply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#610006] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img className="w-full h-full object-cover" alt="Master butcher knife blade reflecting light in clean cold storage environment." src="/heritage-prime/hero-beef.jpg"/>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-12">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight uppercase">Custom Sourcing for Your Specific Needs.</h2>
          <p className="text-xl text-[#ffb3ac] mb-12 font-serif italic">Require a specific origin or custom cut specification? Our logistics team is ready to facilitate your requirements.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a className="bg-white text-[#610006] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-[#ffb3ac] transition-colors rounded-md" href="/contact">Inquire about Specific Origins</a>
            <a className="border-2 border-white/30 text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors rounded-md" href="/contact">Logistics Support</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sourcing;