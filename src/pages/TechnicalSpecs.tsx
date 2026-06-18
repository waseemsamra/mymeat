import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const TechnicalSpecs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary min-h-screen flex flex-col">
      <Header />

      <main className="pt-24 pb-20 flex-1">
        <header className="relative px-8 md:px-12 py-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-3/5">
            <div className="mb-4">
              <span className="font-body text-label-md text-primary font-bold uppercase tracking-widest">Dubai Beef Wholesale</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-on-surface leading-tight mb-6">
              <span className="block">Dry-Aged Beef Ribeye</span>
              <span className="block text-2xl md:text-3xl font-normal text-primary mt-2">Technical Specifications</span>
            </h1>
            <p className="font-body text-sm md:text-base text-on-surface-variant max-w-xl leading-relaxed">
              Premium beef ribeye technical specifications from Wahat Al Zaad Meat, Dubai. USDA Prime, HACCP certified, 45-day Himalayan salt aging.
            </p>
          </div>
          <div className="md:w-2/5 aspect-[4/5] relative overflow-hidden rounded-lg shadow-2xl">
            <img className="w-full h-full object-cover" alt="A macro, cinematic photograph of a raw, heavily marbled prime ribeye steak resting on a dark slate butcher's block." src="/heritage-prime/heritage-dry-aged-ribeye.jpg" />
            <div className="absolute top-6 right-6">
              <div className="bg-[#00178d] text-white px-6 py-2 rounded-sm shadow-xl flex items-center space-x-3 provenance-badge">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-body text-sm font-bold uppercase tracking-widest">USDA Prime</span>
              </div>
            </div>
          </div>
        </header>

        <section className="px-8 md:px-12 py-20 bg-surface-container-low transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
              <h2 className="font-display text-4xl font-bold">Technical Specifications</h2>
              <span className="font-body text-sm text-on-surface-variant italic">Ref: HP-BEEF-7742-R</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
              <TechSpecItem label="Marbling Score" value="BMS 8-9" icon="grain" />
              <TechSpecItem label="Aging Duration" value="45 Days" icon="history" />
              <TechSpecItem label="Bone Structure" value="Bone-In" icon="skeleton" />
              <TechSpecItem label="Trim Spec" value="1/4 inch Max" icon="content_cut" />
              <TechSpecItem label="Average Weight" value="18-22 lbs" icon="weight" />
              <TechSpecItem label="Case Count" value="3 Primal" icon="package_2" />
              <TechSpecItem label="Storage Temp" value="32°-34° F" icon="ac_unit" />
              <TechSpecItem label="Product Grade" value="Prime" icon="star" tertiary />
            </div>
          </div>
        </section>

        <section className="px-8 md:px-12 py-24 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-surface-container-lowest p-12 rounded-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-3xl font-bold mb-6">Provenance & Terroir</h3>
                  <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                      <h4 className="font-body text-label-md font-bold text-primary mb-2">The Ranch</h4>
                      <p className="text-on-surface-variant leading-relaxed">Sourced exclusively from Black Willow Creek Ranch, Montana. High-altitude pastures provide nutrient-dense forage that influences the intramuscular fat profile.</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-body text-label-md font-bold text-primary mb-2">Genetics</h4>
                      <p className="text-on-surface-variant leading-relaxed">Certified Black Angus (100%) line-bred for over 4 generations for superior marbling and early maturation.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 w-full h-64 relative overflow-hidden rounded-md grayscale hover:grayscale-0 transition-all duration-700">
                  <img className="w-full h-full object-cover" alt="A wide, sweeping landscape photograph of a pristine Montana cattle ranch at dawn." src="/heritage-prime/hero-beef.jpg" />
                </div>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <div className="bg-primary text-on-primary p-10 rounded-lg">
                  <h4 className="font-headline text-2xl italic mb-4">Butcher's Note</h4>
                  <p className="font-body text-sm opacity-90 leading-relaxed">"The 45-day mark is the sweet spot for the Montana Ribeye. You get that signature blue-cheese funk without losing the essential buttery sweetness of the Angus fat cap."</p>
                  <div className="mt-6 pt-6 border-t border-on-primary/20 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-on-primary/40">
                      <img className="w-full h-full object-cover" alt="Headshot of a professional master butcher" src="/heritage-prime/heritage-tomahawk.jpg" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Julian Vane</p>
                      <p className="text-xs opacity-70">Master Butcher, HP</p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-high p-10 rounded-lg">
                  <h4 className="font-body text-label-md font-bold text-primary mb-6">Genetic Integrity</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-on-surface-variant">Traceability</span>
                      <span className="font-bold">DNA Verified</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-on-surface-variant">Hormone Free</span>
                      <span className="font-bold">100%</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-on-surface-variant">Finishing</span>
                      <span className="font-bold">180 Day Grain</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 md:px-12 py-20 bg-surface-container-low transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="font-display text-4xl font-bold mb-4">Professional Preparation</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Standard operating procedures for high-volume, precision-focused professional kitchens.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <PrepCard
                icon="restaurant"
                title="Cooking Method"
                description="Reverse-sear is recommended to maintain moisture retention in dry-aged cellular structures."
                footer="Recommended: Cast Iron or Josper Oven"
              />
              <PrepCard
                icon="timer"
                title="Resting Protocol"
                description="Critical for dry-aged cuts. Minimum 10-minute rest at room temperature post-sear."
                footer="Factor: 50% of Cook Time"
              />
              <PrepCard
                icon="palette"
                title="Seasoning Guide"
                description="The dry-aging process concentrates sodium. Use 20% less salt than standard wet-aged cuts."
                footer="Pairing: Aged Balsamic or Bone Marrow"
              />
            </div>

            <div className="mt-20 overflow-hidden rounded-lg border border-outline-variant/20 bg-surface-container-lowest">
              <div className="px-8 py-6 bg-surface-container-high border-b border-outline-variant/20 flex justify-between items-center">
                <h4 className="font-body font-bold text-label-md uppercase tracking-widest">Nutritional Ledger (Per 100g)</h4>
                <span className="text-xs italic text-on-surface-variant">Validated lab data (Q4 2023)</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-8 gap-8">
                <NutrientItem label="Calories" value="291" />
                <NutrientItem label="Protein" value="24.2g" />
                <NutrientItem label="Total Fat" value="21.8g" />
                <NutrientItem label="Sat. Fat" value="9.1g" />
                <NutrientItem label="Sodium" value="54mg" />
                <NutrientItem label="Iron" value="14% DV" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const TechSpecItem = ({ label, value, icon, tertiary }: { label: string; value: string; icon: string; tertiary?: boolean }) => (
  <div className="tech-grid-border pb-6">
    <label className="font-body text-xs text-primary font-bold uppercase tracking-widest mb-2 block">{label}</label>
    <div className="flex items-end justify-between">
      <span className={`font-display text-4xl font-semibold ${tertiary ? 'text-tertiary' : ''}`}>{value}</span>
      <span className={`material-symbols-outlined ${tertiary ? 'text-tertiary' : 'text-on-surface-variant'}`} style={tertiary ? { fontVariationSettings: "'FILL' 1" } : {}}>
        {icon}
      </span>
    </div>
  </div>
);

const PrepCard = ({ icon, title, description, footer }: { icon: string; title: string; description: string; footer: string }) => (
  <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border-b-4 border-primary">
    <span className="material-symbols-outlined text-primary mb-4 text-3xl">{icon}</span>
    <h4 className="font-headline text-xl font-bold mb-4">{title}</h4>
    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{description}</p>
    <div className="text-xs font-bold text-primary uppercase">{footer}</div>
  </div>
);

const NutrientItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs text-on-surface-variant mb-1">{label}</p>
    <p className="text-2xl font-display font-bold">{value}</p>
  </div>
);

export default TechnicalSpecs;