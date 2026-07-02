import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Quality = () => {
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
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body selection:bg-[#ffb3ac] selection:text-white overflow-x-hidden">
      <Header />

      <main className="pt-20">
        <section className="relative h-[921px] overflow-hidden flex items-center bg-[#f3f4f5]">
          <div className="absolute inset-0 z-0">
<img
                className="w-full h-full object-cover opacity-90 scale-105"
                alt="A high-end cinematic photo of a professional butcher in a pristine, white-tiled artisanal facility."
                src="/heritage-prime/hero-beef.jpg"
              />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/40 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12">
            <div className="max-w-2xl">
              <span className="font-body text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4 block">Uncompromising Protocols</span>
<h1 className="font-display text-5xl md:text-7xl font-bold text-on-surface mb-6 leading-tight">
                 The Standard of <span className="italic text-primary block mt-2">Excellence.</span>
               </h1>
               <p className="font-body text-sm md:text-base text-on-surface-variant mb-12 leading-relaxed max-w-lg">
                Where artisanal craft meets clinical precision. Our facility operates at the intersection of biological safety and culinary artistry.
              </p>
              <div className="flex items-center gap-6">
                <button className="bg-[#610006] text-white px-10 py-5 rounded-md font-medium tracking-wide hover:-translate-y-1 transition-all shadow-xl shadow-[#610006]/20">
                  Download Quality Specs
                </button>
                <button className="border-b-2 border-[#e3beb8] text-[#191c1d] font-semibold py-4 hover:border-[#610006] transition-colors">
                  Compliance Reports
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f3f4f5]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <span className="font-body text-label-md text-[#610006] uppercase tracking-widest mb-4 block">Credentials</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold">Globally Recognized Integrity</h2>
              </div>
              <p className="font-body text-[#5a403c] max-w-md italic border-l-2 border-[#610006] pl-6">
                "Quality is not an act, it is a habit. Our certifications are the floor, not the ceiling of our standards."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e3beb8]/20 overflow-hidden rounded-xl">
              <div className="bg-white p-10 hover:bg-[#f8f9fa] transition-colors group">
                <div className="w-16 h-16 bg-[#dfe0ff] text-[#00178d] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined fill-icon text-3xl">verified</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">MJC Halaal</h3>
                <p className="text-[#5a403c] text-sm leading-relaxed">Strict adherence to religious dietary requirements with 24/7 onsite monitoring.</p>
              </div>
              <div className="bg-white p-10 hover:bg-[#f8f9fa] transition-colors group">
                <div className="w-16 h-16 bg-[#dfe0ff] text-[#00178d] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined fill-icon text-3xl">policy</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">FSSC 22000</h3>
                <p className="text-[#5a403c] text-sm leading-relaxed">ISO-based food safety management system covering manufacturing and storage.</p>
              </div>
              <div className="bg-white p-10 hover:bg-[#f8f9fa] transition-colors group">
                <div className="w-16 h-16 bg-[#dfe0ff] text-[#00178d] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined fill-icon text-3xl">security</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">HACCP Certified</h3>
                <p className="text-[#5a403c] text-sm leading-relaxed">Systematic preventive approach to food safety from biological and chemical hazards.</p>
              </div>
              <div className="bg-white p-10 hover:bg-[#f8f9fa] transition-colors group">
                <div className="w-16 h-16 bg-[#dfe0ff] text-[#00178d] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined fill-icon text-3xl">analytics</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">ISO-9001 Alignment</h3>
                <p className="text-[#5a403c] text-sm leading-relaxed">Operational excellence and quality management systems for consistent delivery.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="font-body text-sm uppercase tracking-widest text-[#610006] font-bold mb-6 block">Defense Systems</span>
              <h2 className="font-display text-5xl font-bold mb-8 leading-tight text-[#191c1d]">Zero-Tolerance Protocol</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#831718] text-[#ff9086] rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined">microbiology</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Microbial Monitoring</h4>
                    <p className="text-[#5a403c] leading-relaxed">Real-time DNA-based rapid screening for pathogens. We test every batch, every day, without exception.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#831718] text-[#ff9086] rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined">air</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">HEPA-Filtered Aging</h4>
                    <p className="text-[#5a403c] leading-relaxed">Our dry-aging rooms feature hospital-grade air purification, controlling microbial ecology for pure flavor development.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#831718] text-[#ff9086] rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined">thermostat</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Dynamic Cold Chain</h4>
                    <p className="text-[#5a403c] leading-relaxed">Active sensors monitor every degree. A 0.5°C deviation triggers an immediate manual audit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative order-1 lg:order-2">
              <div className="aspect-[4/5] bg-[#e7e8e9] rounded-sm overflow-hidden shadow-2xl relative">
<img
                   className="w-full h-full object-cover"
                   alt="A macro photograph of the Marahib Food Stuff dry-aging room."
                   src="/heritage-prime/aging-room.jpg"
                 />
                <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur p-8 max-w-xs shadow-lg border-l-4 border-[#610006]">
                  <div className="text-4xl font-display font-bold text-[#610006] mb-2">99.9%</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-[#5a403c]">Airborne Contaminant Removal</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f3f4f5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
              <span className="font-body text-sm uppercase tracking-[0.4em] text-[#610006] font-bold mb-4 block">Integrity Unveiled</span>
              <h2 className="font-display text-5xl font-bold">The Provenance Ledger</h2>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="flex-1 text-center md:text-left group relative">
                <div className="text-[#610006] font-display text-6xl font-black mb-6 opacity-10 group-hover:opacity-30 transition-opacity">01</div>
                <div className="provenance-ledger-line absolute -left-4 top-0 hidden md:block h-full"></div>
                <h4 className="font-bold text-xl mb-4 text-[#191c1d]">Ethical Sourcing</h4>
                <p className="text-[#5a403c] text-sm">Direct partnerships with high-altitude pastures ensuring stress-free livestock and natural diets.</p>
              </div>
              <div className="flex-1 text-center md:text-left group relative">
                <div className="text-[#610006] font-display text-6xl font-black mb-6 opacity-10 group-hover:opacity-30 transition-opacity">02</div>
                <div className="provenance-ledger-line absolute -left-4 top-0 hidden md:block h-full"></div>
                <h4 className="font-bold text-xl mb-4 text-[#191c1d]">Digital DNA Tracking</h4>
                <p className="text-[#5a403c] text-sm">Each carcass is assigned a unique biometric ID at the source, tracking genetic lineage and health history.</p>
              </div>
              <div className="flex-1 text-center md:text-left group relative">
                <div className="text-[#610006] font-display text-6xl font-black mb-6 opacity-10 group-hover:opacity-30 transition-opacity">03</div>
                <div className="provenance-ledger-line absolute -left-4 top-0 hidden md:block h-full"></div>
                <h4 className="font-bold text-xl mb-4 text-[#191c1d]">Precision Fabrication</h4>
                <p className="text-[#5a403c] text-sm">Master butchers portion cuts with laser-guided precision, minimizing waste and maximizing yield.</p>
              </div>
              <div className="flex-1 text-center md:text-left group relative">
                <div className="text-[#610006] font-display text-6xl font-black mb-6 opacity-10 group-hover:opacity-30 transition-opacity">04</div>
                <div className="provenance-ledger-line absolute -left-4 top-0 hidden md:block h-full"></div>
                <h4 className="font-bold text-xl mb-4 text-[#191c1d]">The Final Ledger</h4>
                <p className="text-[#5a403c] text-sm">A QR code on every wholesale package reveals the entire journey, from birth to the delivery dock.</p>
              </div>
            </div>
            <div className="mt-24 rounded-2xl overflow-hidden shadow-2xl relative h-96 group">
<img
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 alt="A wide-angle, minimalist, high-contrast photograph of a pristine, modern logistics floor."
                 src="/heritage-prime/wholesale-logistics.jpg"
               />
              <div className="absolute inset-0 bg-[#610006]/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-[#610006] px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch Our Process
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center p-8 border-r border-[#e3beb8]/30 last:border-0">
                <div className="text-7xl font-display font-bold text-[#610006] mb-4 editorial-kerning">99.8%</div>
                <div className="text-xs uppercase tracking-widest font-bold text-[#5a403c] mb-4">On-Time Accuracy</div>
                <p className="text-sm text-[#5a403c]">Precision logistics ensuring the cold chain is never broken, even in transcontinental transit.</p>
              </div>
              <div className="text-center p-8 border-r border-[#e3beb8]/30 last:border-0">
                <div className="text-7xl font-display font-bold text-[#610006] mb-4 editorial-kerning">0.0%</div>
                <div className="text-xs uppercase tracking-widest font-bold text-[#5a403c] mb-4">Temperature Breakage</div>
                <p className="text-sm text-[#5a403c]">Maintaining a consistent -1°C to +2°C across our entire fleet and storage network.</p>
              </div>
              <div className="text-center p-8 border-r border-[#e3beb8]/30 last:border-0">
                <div className="text-7xl font-display font-bold text-[#610006] mb-4 editorial-kerning">4.2h</div>
                <div className="text-xs uppercase tracking-widest font-bold text-[#5a403c] mb-4">Farm-to-Hook Median</div>
                <p className="text-sm text-[#5a403c]">The fastest turnaround in the industry, preserving cellular integrity and natural moisture.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#610006] text-white">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">Your compliance is our mission.</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Access our full laboratory reports, certification documentation, and audit trail data via our secure partner portal.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
<button className="bg-white text-[#610006] px-12 py-5 rounded-md font-bold text-lg hover:bg-[#f3f4f5] transition-colors w-full md:w-auto" onClick={() => window.location.href = '/contact-wholesale-dubai'}>
                 Download Quality Specs (PDF)
               </button>
               <button className="border border-white px-12 py-5 rounded-md font-bold text-lg hover:bg-white/10 transition-colors w-full md:w-auto" onClick={() => window.location.href = '/contact-wholesale-dubai'}>
                 Contact Compliance Officer
               </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quality;