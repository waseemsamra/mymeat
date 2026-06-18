import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Catalog = () => {
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
        {/* Hero Slider */}
        <section className="relative h-[921px] w-full overflow-hidden">
          <div className="h-full relative" id="hero-slider">
            <div className="hero-slide absolute inset-0 opacity-100 flex items-center">
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <img className="absolute inset-0 w-full h-full object-cover" alt="Macro shot of heavily marbled wagyu ribeye steak on dark basalt stone slab." src="/heritage-prime/heritage-dry-aged-ribeye.jpg"/>
              <div className="relative z-20 px-6 md:px-24 max-w-4xl">
                <span className="text-white bg-[#610006] px-3 py-1 font-label text-xs uppercase tracking-[0.2em] mb-6 inline-block">Premium Beef Dubai</span>
<h1 className="font-display text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                 <span className="block">Premium Beef, Mutton & Lamb</span>
                 <span className="block text-2xl md:text-3xl font-normal text-primary mt-2">Wholesale Catalog</span>
               </h1>
               <p className="text-white/80 font-body text-sm md:text-base mb-10 max-w-xl leading-relaxed italic">
                  Curated cuts from grass-fed cattle, aged for 45 days in our climate-controlled salt chambers for unparalleled depth of flavor.
                </p>
                <button className="primary-gradient text-white px-10 py-4 font-label text-sm uppercase tracking-widest rounded-sm">Shop The Collection</button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Beef Collection */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-[#610006] font-label text-xs uppercase tracking-[0.3em] block mb-4">Premium Beef Cuts</span>
              <h2 className="font-display text-5xl md:text-6xl -tracking-[0.02em]">The Beef Collection</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 border border-[#8e706b]/20 flex items-center justify-center rounded-full hover:bg-[#610006] hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 border border-[#8e706b]/20 flex items-center justify-center rounded-full hover:bg-[#610006] hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8">
            <ProductCard
              image="/heritage-prime/heritage-dry-aged-ribeye.jpg"
              badge="Prime Grade"
              title="Heritage Dry-Aged Ribeye"
              description="Bone-in, 45-day salt aged, pasture raised."
            />
            <ProductCard
              image="/heritage-prime/heritage-tomahawk.jpg"
              title="Heritage Tomahawk"
              description="The centerpiece cut, weighing 1.2kg minimum."
            />
            <ProductCard
              image="/heritage-prime/center-cut-filet.jpg"
              title="Center-Cut Filet"
              description="Lean, tender, and meticulously trimmed."
            />
          </div>
        </section>

        {/* Promo Banner 1 */}
        <section className="h-[614px] bg-[#2e3132] flex items-center relative overflow-hidden">
          <img className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Climate-controlled meat aging room with Himalayan salt bricks." src="/heritage-prime/aging-room.jpg"/>
          <div className="relative z-10 px-6 md:px-24">
            <h3 className="font-display text-4xl md:text-5xl text-white mb-6">The Science of Maturity</h3>
            <p className="text-white/70 max-w-md mb-8 text-lg">
              Our proprietary salt-brick aging process reduces moisture while concentrating proteins, resulting in a buttery texture and nutty finish.
            </p>
            <button className="border border-white/30 text-white px-8 py-3 font-label text-xs uppercase tracking-widest hover:bg-white hover:text-[#2e3132] transition-all" onClick={() => window.location.href = '/beef-quality-certification-haccp'}>The Science of Maturity</button>
          </div>
        </section>

        {/* Section 2: The Lamb Selection */}
        <section className="py-24 px-6 md:px-12 bg-[#f3f4f5]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-[#610006] font-label text-xs uppercase tracking-[0.3em] block mb-4">Premium Lamb Cuts</span>
              <h2 className="font-display text-5xl md:text-6xl -tracking-[0.02em]">The Lamb Selection</h2>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8">
            <LambCard
              image="/heritage-prime/frenched-rack-lamb.jpg"
              title="Frenched Rack of Lamb"
              description="8-bone rack, meticulously cleaned and trimmed."
            />
            <LambCard
              image="/heritage-prime/heritage-loin-chops.jpg"
              title="Heritage Loin Chops"
              description="The T-bone of lamb, tender and flavorful."
            />
            <LambCard
              image="/heritage-prime/heritage-lamb-shanks.jpg"
              title="Heritage Lamb Shanks"
              description="Perfect for slow-braising and depth of flavor."
            />
          </div>
        </section>

        {/* Section 3: The Mutton Archive */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-[#610006] font-label text-xs uppercase tracking-[0.3em] block mb-4">Premium Mutton Selections</span>
              <h2 className="font-display text-5xl md:text-6xl -tracking-[0.02em]">The Mutton Archive</h2>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8">
            <MuttonCard
              image="/heritage-prime/aged-mutton-shoulder.jpg"
              title="Aged Mutton Shoulder"
              description="Rich, gamey flavor profiles, aged for 21 days."
            />
            <MuttonCard
              image="/heritage-prime/heritage-leg-mutton.jpg"
              title="Heritage Leg of Mutton"
              description="The classic roasting cut for a traditional feast."
            />
          </div>
        </section>

        {/* Section 4: Artisanal Processed Products */}
        <section className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#610006] font-label text-xs uppercase tracking-[0.3em] block mb-4">Further Craftsmanship</span>
            <h2 className="font-display text-5xl md:text-6xl -tracking-[0.02em] mb-6">Artisanal Processed Products</h2>
            <p className="text-[#5a403c]">Beyond the cut, our master butchers apply centuries-old curing and brining techniques to create our value-added signatures.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <ProcessedCard
              image="/heritage-prime/aged-beef-sausage.jpg"
              title="Aged Beef Sausage"
              description="Infused with black truffle and sea salt."
            />
            <ProcessedCard
              image="/heritage-prime/heritage-brined-brisket.jpg"
              title="Heritage Brined Brisket"
              description="14-day brine with signature spice blend."
            />
            <ProcessedCard
              image="/heritage-prime/archive-charcuterie.jpg"
              title="The Archive Charcuterie"
              description="A rotating selection of our finest cured meats."
            />
          </div>
        </section>

        {/* Promo Banner 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#610006] text-white p-12 md:p-24 flex flex-col justify-center">
            <span className="font-label text-xs uppercase tracking-widest opacity-60 mb-6">Partnerships</span>
            <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">Wholesale Logistics for Modern Gastronomy</h2>
            <p className="text-white/70 mb-10 text-lg">Direct integration for Michelin-starred kitchens and luxury hospitality groups. We provide bespoke aging timelines and custom fabrication.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#610006] px-8 py-3 font-label text-xs uppercase tracking-widest hover:bg-white/90 transition-all">Wholesale Inquiry</button>
              <button className="border border-white/20 text-white px-8 py-3 font-label text-xs uppercase tracking-widest hover:bg-white/10 transition-all">View Logistics Hub</button>
            </div>
          </div>
          <div className="relative min-h-[400px]">
            <img className="absolute inset-0 w-full h-full object-cover" alt="Heritage Prime delivery truck outside restaurant at dusk." src="/heritage-prime/wholesale-logistics.jpg"/>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const ProductCard = ({ image, badge, title, description }: {
  image: string;
  badge?: string;
  title: string;
  description: string;
}) => (
  <div className="min-w-[320px] md:min-w-[400px] group">
    <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#e7e8e9] relative">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={title} src={image}/>
      {badge && (
        <div className="absolute top-4 right-4 bg-[#0025c8] text-white text-[10px] font-label uppercase tracking-widest px-3 py-1">
          {badge}
        </div>
      )}
    </div>
    <div className="px-2">
      <h3 className="font-display text-2xl mb-2">{title}</h3>
      <p className="text-[#5a403c] font-label text-sm">{description}</p>
    </div>
  </div>
);

const LambCard = ({ image, title, description }: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="min-w-[320px] md:min-w-[400px] group">
    <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#e7e8e9]">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={title} src={image}/>
    </div>
    <div className="px-2">
      <h3 className="font-display text-2xl mb-2">{title}</h3>
      <p className="text-[#5a403c] font-label text-sm">{description}</p>
    </div>
  </div>
);

const MuttonCard = ({ image, title, description }: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="min-w-[320px] md:min-w-[400px] group">
    <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#e7e8e9]">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={title} src={image}/>
    </div>
    <div className="px-2">
      <h3 className="font-display text-2xl mb-2">{title}</h3>
      <p className="text-[#5a403c] font-label text-sm">{description}</p>
    </div>
  </div>
);

const ProcessedCard = ({ image, title, description }: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-10 flex flex-col items-center text-center">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-[#e7e8e9]">
      <img className="w-full h-full object-cover" alt={title} src={image}/>
    </div>
    <h3 className="font-display text-2xl mb-2">{title}</h3>
    <p className="text-sm text-[#5a403c] italic">{description}</p>
  </div>
);

export default Catalog;