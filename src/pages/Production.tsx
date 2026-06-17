import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Production = () => {
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

    // Hover animation for icons
    const icons = document.querySelectorAll('.material-symbols-outlined');
    icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        (icon as HTMLElement).style.fontVariationSettings = "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24";
      });
      icon.addEventListener('mouseleave', () => {
        (icon as HTMLElement).style.fontVariationSettings = "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24";
      });
    });
  }, []);

  return (
    <div className="bg-surface text-on-surface antialiased">
      <Header />

      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col py-8 gap-4 h-screen w-72 fixed left-0 top-20 bg-surface-container-low z-40">
        <div className="px-8 mb-8">
          <h2 className="font-serif text-lg text-primary">The Butcher's Atlas</h2>
          <p className="font-sans uppercase tracking-widest text-[10px] text-slate-500">Technical Specifications</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="group flex items-center px-8 py-3 bg-white text-primary font-bold border-l-4 border-primary transition-all duration-200" href="#hero">
            <span className="material-symbols-outlined mr-3">restaurant_menu</span>
            <span className="font-sans uppercase tracking-widest text-xs">All Cuts</span>
          </a>
          <a className="group flex items-center px-8 py-3 text-slate-500 hover:bg-slate-100 hover:translate-x-1 transition-all duration-200" href="#facilities">
            <span className="material-symbols-outlined mr-3">kebab_dining</span>
            <span className="font-sans uppercase tracking-widest text-xs">Prime Ribs</span>
          </a>
          <a className="group flex items-center px-8 py-3 text-slate-500 hover:bg-slate-100 hover:translate-x-1 transition-all duration-200" href="#science">
            <span className="material-symbols-outlined mr-3">lunch_dining</span>
            <span className="font-sans uppercase tracking-widest text-xs">Leg & Loin</span>
          </a>
          <a className="group flex items-center px-8 py-3 text-slate-500 hover:bg-slate-100 hover:translate-x-1 transition-all duration-200" href="#quality">
            <span className="material-symbols-outlined mr-3">set_meal</span>
            <span className="font-sans uppercase tracking-widest text-xs">Shoulder</span>
          </a>
          <a className="group flex items-center px-8 py-3 text-slate-500 hover:bg-slate-100 hover:translate-x-1 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3">layers</span>
            <span className="font-sans uppercase tracking-widest text-xs">Offal</span>
          </a>
          <a className="group flex items-center px-8 py-3 text-slate-500 hover:bg-slate-100 hover:translate-x-1 transition-all duration-200" href="#">
            <span className="material-symbols-outlined mr-3">precision_manufacturing</span>
            <span className="font-sans uppercase tracking-widest text-xs">Custom Prep</span>
          </a>
        </nav>
        <div className="px-8 pt-4 border-t border-outline/10">
          <button className="w-full py-3 bg-primary text-white font-sans uppercase tracking-widest text-[10px] rounded-md shadow-lg hover:-translate-y-1 transition-transform">Download Specs</button>
          <div className="mt-6 flex flex-col gap-3">
            <a className="flex items-center text-slate-500 text-[10px] uppercase tracking-widest hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-sm mr-2">business_center</span>
              Wholesale Portal
            </a>
            <a className="flex items-center text-slate-500 text-[10px] uppercase tracking-widest hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-sm mr-2">help_center</span>
              Support
            </a>
          </div>
        </div>
      </aside>

      <main className="lg:pl-72 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface" id="hero">
          <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="label-md text-primary font-bold uppercase tracking-[0.2em] mb-4 block">Professional Production Infrastructure</span>
              <h1 className="font-display text-7xl md:text-8xl text-on-surface font-extrabold tracking-tighter leading-[0.9] mb-8">
                Where <span className="italic text-primary">Tradition</span><br/>Meets Technology.
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed font-body">
                Our facility represents the pinnacle of artisanal processing. We combine heritage dry-aging techniques with clinical-grade biosecurity protocols and technical precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-br from-primary to-primary-container px-8 py-4 text-white font-bold rounded-md flex items-center group">
                  Explore Facilities
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button className="px-8 py-4 border-b-2 border-outline/20 text-on-surface font-bold hover:border-primary transition-colors">
                  Technical Data
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-lg shadow-2xl relative">
                <img className="w-full h-full object-cover" alt="High-tech industrial meat processing facility with clinical stainless steel surfaces." src="/heritage-prime/hero-beef.jpg"/>
                <div className="absolute inset-0 border-[20px] border-surface/20 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-tertiary text-white p-6 rounded-md shadow-xl max-w-[200px]">
                <span className="material-symbols-outlined text-3xl mb-2">verified</span>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Grade AA Prime</h4>
                <p className="text-[10px] opacity-80 leading-tight">Certified artisanal processing & bio-secured aging cycles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Facilities: Bento Grid */}
        <section className="py-24 bg-surface-container-low relative overflow-hidden" id="facilities">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="label-md text-primary font-bold uppercase tracking-[0.2em] mb-2 block">01 / Infrastructure</span>
                <h2 className="text-5xl font-display font-bold text-on-surface italic">State-of-the-Art Suites</h2>
              </div>
              <p className="max-w-md text-slate-500 text-sm leading-relaxed">
                Engineered for absolute climate control, our suites maintain 85% humidity and a consistent 1-2°C temperature variance to ensure the perfect enzymatic breakdown.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[700px]">
              <div className="md:col-span-8 bg-surface-container-lowest rounded-lg overflow-hidden group relative">
                <img className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" alt="Premium marbled beef hanging in temperature-controlled dry-aging room." src="/heritage-prime/heritage-dry-aged-ribeye.jpg"/>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-3xl font-display font-bold italic mb-2">Technical Dry-Aging Suites</h3>
                  <p className="text-sm opacity-90 max-w-lg">Custom Himalayan salt-walled chambers with ultrasonic humidity sensors and continuous airflow optimization.</p>
                </div>
              </div>
              <div className="md:col-span-4 bg-primary text-white p-8 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl mb-6">thermostat</span>
                  <h3 className="text-2xl font-display font-bold mb-4 italic">Precision Control</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                      <span className="text-sm tracking-wide">±0.2°C Thermal Variance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                      <span className="text-sm tracking-wide">HEPA-Filtered Ventilation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                      <span className="text-sm tracking-wide">Real-time Microbial Monitoring</span>
                    </li>
                  </ul>
                </div>
                <div className="h-px bg-gradient-to-r from-outline to-transparent mt-8 mb-4"></div>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">System Log: Optimal Status</p>
              </div>
              <div className="md:col-span-5 bg-surface-container-lowest rounded-lg p-8 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-2xl font-display font-bold italic">Processing Lines</h3>
                  <span className="material-symbols-outlined text-primary">settings_input_component</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Modular fabrication lines designed for zero cross-contamination. Every surface is non-porous antimicrobial surgical steel.
                </p>
                <img className="w-full h-48 object-cover rounded shadow-inner opacity-80 group-hover:opacity-100 transition-opacity" alt="Industrial tools laid out on a steel surface." src="/heritage-prime/archive-charcuterie.jpg"/>
              </div>
              <div className="md:col-span-7 bg-surface-container-highest rounded-lg overflow-hidden relative">
                <div className="p-8 h-full flex flex-col justify-center">
                  <span className="label-md text-tertiary font-bold uppercase tracking-[0.2em] mb-4 block">Logistics Hub</span>
                  <h3 className="text-3xl font-display font-bold italic mb-4">The Distribution Matrix</h3>
                  <p className="text-slate-600 text-sm max-w-md">Our cold-chain integrity is maintained via a subterranean transit system, ensuring zero exposure to ambient temperatures during outbound staging.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Science of Aging */}
        <section className="py-32 bg-surface" id="science">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="p-12 border-l-2 border-primary/20 relative">
                  <div className="absolute -left-2 top-12 w-4 h-4 bg-primary rounded-full"></div>
                  <h3 className="text-4xl font-display font-bold italic mb-6">Enzymatic Maturity Phase</h3>
                  <div className="space-y-12">
                    <Stage title="Stage 01: Hydration Lock" description="Initial 48-hour stabilization where humidity is spiked to prevent outer casing shock, allowing moisture migration from the core." />
                    <Stage title="Stage 02: Proteolysis Activation" description="Endogenous enzymes begin the natural breakdown of connective tissues. Controlled air velocity (0.5 m/s) maintains surface hygiene." />
                    <Stage title="Stage 03: Flavor Consolidation" description="Weeks 4-6. The secondary metabolites develop the signature 'nutty' profile unique to our aging micro-climate." />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="label-md text-primary font-bold uppercase tracking-[0.2em] mb-4 block">Chemical Engineering</span>
                <h2 className="text-6xl font-display font-bold text-on-surface leading-tight mb-8">The Molecular <br/><span className="italic">Transformation.</span></h2>
                <div className="aspect-square bg-surface-container-low rounded-lg p-12 relative shadow-inner">
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center text-white rounded">
                        <span className="material-symbols-outlined">science</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Micro-climate Scan</p>
                        <p className="text-lg font-serif italic text-on-surface">Bio-Atmospheric Equilibrium</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Metric label="PH Levels" value="5.54 Optimal" />
                      <Metric label="Water Activity" value="0.92 AW" />
                      <Metric label="Lactic Acid Concentration" value="34.2 mg/g" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Safety: Grid */}
        <section className="py-24 bg-surface-container-highest" id="quality">
          <div className="container mx-auto px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="label-md text-primary font-bold uppercase tracking-[0.2em] mb-4 block text-center">Certification & Compliance</span>
              <h2 className="text-5xl font-display font-bold text-on-surface italic">The Zero-Tolerance Protocol.</h2>
              <p className="text-slate-600 mt-6">Our facility operates at Global Food Safety Initiative (GFSI) benchmarked standards, ensuring that every cut is as safe as it is premium.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <QualityCard color="#0025c8" icon="verified_user" title="HACCP Integration" description="Hazard Analysis Critical Control Point system digitized for 24/7 autonomous monitoring of 152 critical sensors." />
              <QualityCard color="#610006" icon="policy" title="FSSC 22000" description="Comprehensive food safety management system certification, representing the gold standard in processing security." />
              <QualityCard color="#40484f" icon="architecture" title="ISO-9001 Alignment" description="Quality management principles including a strong customer focus, the motivation and implication of top management." />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="border-r border-white/20 h-full"></div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Request a Facility Audit.</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
              Wholesale partners are invited to witness our protocols in person. We maintain an open-book policy for all technical specifications.
            </p>
            <Link to="/contact" className="bg-white text-primary px-12 py-5 font-bold rounded shadow-2xl hover:scale-105 transition-transform inline-block">
              Schedule Technical Tour
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const Stage = ({ title, description }: { title: string; description: string }) => (
  <div>
    <span className="font-bold text-primary text-xl block mb-2">{title}</span>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-end border-b border-outline/10 pb-2">
    <span className="text-xs uppercase tracking-widest">{label}</span>
    <span className="font-bold text-primary">{value}</span>
  </div>
);

const QualityCard = ({ color, icon, title, description }: { color: string; icon: string; title: string; description: string }) => (
  <div className="bg-white p-10 rounded shadow-sm border-b-4" style={{ borderColor: color }}>
    <div className="w-12 h-12 rounded flex items-center justify-center mb-8" style={{ backgroundColor: color === '#610006' ? '#ffdad6' : color === '#40484f' ? '#dbe3ec' : '#dfe0ff', color }}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <h4 className="text-xl font-display font-bold mb-4">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed mb-6">{description}</p>
    <a className="font-bold text-[10px] uppercase tracking-widest flex items-center hover:translate-x-1 transition-transform" style={{ color }}>
      Review Protocols <span className="material-symbols-outlined text-sm ml-2">north_east</span>
    </a>
  </div>
);

export default Production;