import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  useEffect(() => {
    document.title = "Marahib Food Stuff | Premium Beef, Mutton & Lamb Wholesale Dubai";
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body overflow-x-hidden selection:bg-[#610006]/20">
      <Header />

      <header id="heritage" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
<img
              className="w-full h-full object-cover"
              alt="Premium beef, mutton and lamb cuts from Marahib Food Stuff, Dubai wholesale supplier"
              src="/heritage-prime/hero-beef.jpg"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-[#191c1d] via-[#191c1d]/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 md:px-12 relative z-10 grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <span className="text-white font-body text-sm uppercase tracking-[0.3em] mb-4 block">Premium Meat Purveyors</span>
<h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
               <span className="block">Premium Beef, Mutton & Lamb</span>
               <span className="block text-2xl md:text-3xl font-normal text-[#ffb3ac] mt-2">Wholesale Supplier • Dubai, UAE</span>
             </h1>
<p className="text-white/80 font-body text-sm md:text-base max-w-lg mb-10 leading-relaxed">
               Marahib Food Stuff - Dubai's premier source for premium beef, mutton and lamb. Global procurement from Australia, Pakistan, India and South Africa. USDA Prime, halal certified, delivered fresh.
             </p>
            <div className="flex flex-wrap gap-4">
              <a href="/beef-mutton-lamb-catalog-dubai" className="bg-[#610006] text-white px-10 py-5 rounded-md font-body font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-[#831718] transition-all hover:-translate-y-1 shadow-xl">
                Explore Beef Catalog
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="/global-beef-sourcing-australia-pakistan-india" className="bg-[#f3f4f5]/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-md font-body font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                Global Sourcing
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-32 bg-[#f8f9fa]">
        <div className="container mx-auto px-8 md:px-12">
          <div className="flex flex-col md:flex-row gap-24 items-center">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#e7e8e9] rounded-full -z-10 opacity-50"></div>
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
<img
                   className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                   alt="Mutton cuts and carcasses in a professional butchery facility."
                   src="/heritage-prime/aged-mutton-shoulder.jpg"
                 />
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-[#610006] font-body text-sm uppercase tracking-widest mb-2 block">Our Foundations</span>
              <h2 className="font-display text-5xl font-bold mb-8 text-[#191c1d]">A Legacy of Precision</h2>
              <div className="space-y-6 text-[#5a403c] text-lg font-body leading-relaxed">
                <p>
                  For over a decade and a half, Marahib Food Stuff has stood as the definitive benchmark in global protein procurement. What began as a specialized regional butchery has evolved into a sophisticated international network spanning four continents.
                </p>
                <p>
                  Our commitment to "Precision in Every Cut" is our operational mandate. From rigorous farm-gate audits to cold-chain logistics that never falter, we ensure that the integrity of the product remains absolute from pasture to professional kitchen.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-l-4 border-[#610006] pl-6">
                  <div className="text-4xl font-display font-bold text-[#610006]">50+</div>
                  <div className="text-[#5a403c] text-sm uppercase tracking-widest mt-1">Years of Heritage</div>
                </div>
                <div className="border-l-4 border-[#610006] pl-6">
                  <div className="text-4xl font-display font-bold text-[#610006]">32</div>
                  <div className="text-[#5a403c] text-sm uppercase tracking-widest mt-1">Global Trade Routes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="divisions" className="py-32 bg-[#f3f4f5]">
        <div className="container mx-auto px-8 md:px-12">
          <div className="text-center mb-20">
            <span className="text-[#610006] font-body text-sm uppercase tracking-widest mb-4 block">Strategic Architecture</span>
            <h2 className="font-display text-5xl font-bold text-[#191c1d]">Operational Divisions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            <div className="md:col-span-8 bg-white p-10 group relative overflow-hidden transition-all hover:bg-[#e1e3e4]">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-[#610006] text-4xl mb-6">public</span>
                <h3 className="text-3xl font-bold mb-4">Global Import &amp; Export</h3>
                <p className="text-[#5a403c] max-w-md">Seamless global logistics managing complex trade routes and supply chain transparency across major protein markets.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[15rem] absolute -bottom-10 -right-10">shop</span>
              </div>
            </div>
            <div className="md:col-span-4 bg-[#610006] text-white p-10 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-[#ff9086] text-4xl mb-6">storefront</span>
                <h3 className="text-3xl font-bold mb-4">Wholesale Distribution</h3>
                <p className="text-white/80">Primary supply partner for high-volume retail and luxury hospitality sectors worldwide.</p>
              </div>
              <div className="absolute inset-0 bg-[#831718] opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <div className="md:col-span-4 bg-[#e1e3e4] p-10 group transition-all">
              <span className="material-symbols-outlined text-[#610006] text-4xl mb-6">content_cut</span>
              <h3 className="text-3xl font-bold mb-4">Custom Butchery</h3>
              <p className="text-[#5a403c]">Precision cutting and portioning services tailored to exact client specifications and menu requirements.</p>
            </div>
            <div className="md:col-span-8 bg-white p-10 flex items-center gap-12 group transition-all hover:shadow-xl">
              <div className="flex-1">
                <span className="material-symbols-outlined text-[#610006] text-4xl mb-6">insights</span>
                <h3 className="text-3xl font-bold mb-4">Technical Consultation</h3>
                <p className="text-[#5a403c]">Strategic procurement advice, market trend analysis, and yield optimization for enterprise partners.</p>
              </div>
              <div className="hidden lg:block w-48 h-48 bg-[#e7e8e9] rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
                  alt="Professional technical charts and market analysis data on a tablet."
                  src="/heritage-prime/aged-mutton-shoulder.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-32 bg-[#f8f9fa]">
        <div className="container mx-auto px-8 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#610006] font-body text-sm uppercase tracking-widest mb-4 block">Premium Beef, Mutton & Lamb</span>
              <h2 className="font-display text-5xl font-bold">Technical Catalog</h2>
            </div>
            <div className="hidden md:block">
              <p className="text-[#5a403c] max-w-xs text-right">Live wholesale inventory of beef, mutton and lamb from Dubai.</p>
            </div>
          </div>
          <div className="bg-white shadow-sm overflow-hidden rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#191c1d] text-white font-body text-sm uppercase tracking-widest">
                  <th className="p-6">Category</th>
                  <th className="p-6">Primary Origin</th>
                  <th className="p-6">Grading Standard</th>
                  <th className="p-6">Age Profile</th>
                  <th className="p-6">Availability</th>
                </tr>
              </thead>
              <tbody className="font-body">
<CatalogRow
                    title="Pakistan Beef"
                    origin="Pakistan"
                    badge="Prime Reserve"
                    badgeClass="bg-[#0025c8] text-white"
                    age="18-24 Months"
                    availability="High Stock"
                    image="/heritage-prime/heritage-dry-aged-ribeye.jpg"
                  />
<CatalogRow
                    title="Grass-Fed Lamb"
                    origin="Australia"
                    badge="A-Grade Export"
                    badgeClass="bg-[#610006] text-white"
                    age="Under 12 Months"
                    availability="In Transit"
                    image="/heritage-prime/frenched-rack-lamb.jpg"
                  />
<CatalogRow
                    title="African Mutton"
                    origin="Global Sourcing"
                    badge="Select Choice"
                    badgeClass="bg-[#575f67] text-white"
                    age="12 Months"
                    availability="High Stock"
                    image="/heritage-prime/aged-mutton-shoulder.jpg"
                  />
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="#contact" className="text-[#610006] font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-2 hover:gap-4 transition-all group">
              Download Full Technical Specification (PDF)
              <span className="material-symbols-outlined">download</span>
            </a>
          </div>
        </div>
      </section>

      <section id="quality" className="py-32 bg-[#191c1d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#610006] rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#ffb3ac] font-body text-sm uppercase tracking-widest mb-4 block">Biosecurity &amp; Standards</span>
              <h2 className="font-display text-5xl font-bold mb-10 leading-tight">Uncompromising <br />Quality Controls</h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed font-body">
                Our facilities operate at the highest tier of global safety standards. Traceability is embedded in our DNA, with every individual pallet tracked from the farm through to our distribution hubs via proprietary blockchain logistics.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <QualityCard icon="verified_user" title="HACCP" label="Certified Safety" />
                <QualityCard icon="language" title="ISO 22000" label="Global Logistics" />
                <QualityCard icon="folded_hands" title="HALAL" label="Ritual Integrity" />
                <QualityCard icon="biotech" title="TRACE" label="Bio-Security" />
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-2xl"
                alt="A clinical food safety laboratory with testing equipment and a scientist checking meat quality samples."
                src="/heritage-prime/archive-charcuterie.jpg"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#610006] p-12 hidden lg:block">
                <div className="text-center">
                  <div className="text-5xl font-display font-bold">100%</div>
                  <div className="text-[10px] uppercase tracking-widest mt-2 opacity-70">Batch Traceability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-[#e7e8e9] relative overflow-hidden">
        <div className="container mx-auto px-8 md:px-12 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-[#191c1d]">Initiate Your Partnership</h2>
          <p className="text-[#5a403c] text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Connect with our procurement specialist team to discuss large-volume contracts, custom specifications, and international distribution agreements.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a className="hero-gradient text-white px-12 py-6 rounded-sm font-bold uppercase tracking-widest flex items-center gap-4 hover:shadow-2xl transition-all hover:-translate-y-1" href="mailto:wholesale@marahibfoods.com">
              Request Wholesale Account
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a className="bg-white text-[#610006] border-2 border-[#610006]/10 px-12 py-6 rounded-sm font-bold uppercase tracking-widest hover:bg-[#f8f9fa] transition-all" href="#contact">
              Speak with Logistics
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CatalogRow = ({
  title,
  origin,
  badge,
  badgeClass,
  age,
  availability,
  image
}: {
  title: string;
  origin: string;
  badge: string;
  badgeClass: string;
  age: string;
  availability: string;
  image: string;
}) => (
  <tr className="border-b border-[#edeeef] hover:bg-[#f3f4f5] transition-colors group">
    <td className="p-6 font-bold flex items-center gap-4">
      <div className="w-12 h-12 bg-[#e7e8e9] rounded overflow-hidden">
        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0" alt={title} src={image} />
      </div>
      {title}
    </td>
    <td className="p-6 text-[#5a403c]">{origin}</td>
    <td className="p-6">
      <span className={`provenance-badge px-4 py-1 text-xs font-bold uppercase tracking-tighter ${badgeClass}`}>{badge}</span>
    </td>
    <td className="p-6 text-[#5a403c]">{age}</td>
    <td className="p-6 text-[#610006] font-bold">{availability}</td>
  </tr>
);

const QualityCard = ({ icon, title, label }: { icon: string; title: string; label: string }) => (
  <div className="flex items-center gap-4 bg-white/5 p-6 rounded-sm border border-white/10 group hover:border-[#610006] transition-all">
    <span className="material-symbols-outlined text-[#ffb3ac] text-3xl">{icon}</span>
    <div>
      <div className="font-bold">{title}</div>
      <div className="text-xs text-white/50 uppercase tracking-widest">{label}</div>
    </div>
  </div>
);

export default Home;
