import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const beefProducts = [
  {
    src: '/heritage-prime/heritage-dry-aged-ribeye.jpg',
    alt: 'Close up photography of a thick-cut bone-in dry-aged ribeye steak.',
    tag: 'Prime Grade',
    title: 'Heritage Dry-Aged Ribeye',
    description: 'Bone-in, 45-day salt aged, pasture raised.',
    price: '$89.00'
  },
  {
    src: '/heritage-prime/heritage-tomahawk.jpg',
    alt: 'A massive Tomahawk steak with a long, clean bone.',
    title: 'Heritage Tomahawk',
    description: 'The centerpiece cut, weighing 1.2kg minimum.',
    price: '$145.00'
  },
  {
    src: '/heritage-prime/center-cut-filet.jpg',
    alt: 'Two pristine beef filet mignon cuts tied with butcher twine.',
    title: 'Center-Cut Filet',
    description: 'Lean, tender, and meticulously trimmed.',
    price: '$62.00'
  }
];

const lambProducts = [
  {
    src: '/heritage-prime/frenched-rack-lamb.jpg',
    alt: 'A Frenched lamb rack featuring clean, white ribs and deep pink meat.',
    title: 'Frenched Rack of Lamb',
    description: '8-bone rack, meticulously cleaned and trimmed.',
    price: '$54.00'
  },
  {
    src: '/heritage-prime/heritage-loin-chops.jpg',
    alt: 'A cluster of thick-cut lamb loin chops resting on a slate surface.',
    title: 'Heritage Loin Chops',
    description: 'The T-bone of lamb, tender and flavorful.',
    price: '$42.00'
  },
  {
    src: '/heritage-prime/heritage-lamb-shanks.jpg',
    alt: 'Two large lamb shanks, raw and bone-in.',
    title: 'Heritage Lamb Shanks',
    description: 'Perfect for slow-braising and depth of flavor.',
    price: '$36.00'
  }
];

const muttonProducts = [
  {
    src: '/heritage-prime/aged-mutton-shoulder.jpg',
    alt: 'A whole bone-in mutton shoulder.',
    title: 'Aged Mutton Shoulder',
    description: 'Rich, gamey flavor profiles, aged for 21 days.',
    price: '$48.00'
  },
  {
    src: '/heritage-prime/heritage-leg-mutton.jpg',
    alt: 'A leg of mutton, bone-in, with a clean trim.',
    title: 'Heritage Leg of Mutton',
    description: 'The classic roasting cut for a traditional feast.',
    price: '$75.00'
  }
];

const processedProducts = [
  {
    src: '/heritage-prime/aged-beef-sausage.jpg',
    alt: 'A variety of dry-aged artisanal sausages hanging in a curing room.',
    title: 'Aged Beef Sausage',
    description: 'Infused with black truffle and sea salt.',
    price: '$28.00 / kg'
  },
  {
    src: '/heritage-prime/heritage-brined-brisket.jpg',
    alt: 'A perfectly brined beef brisket.',
    title: 'Heritage Brined Brisket',
    description: '14-day brine with signature spice blend.',
    price: '$45.00 / kg'
  },
  {
    src: '/heritage-prime/archive-charcuterie.jpg',
    alt: 'Thinly sliced heritage charcuterie arranged on a luxury marble serving board.',
    title: 'The Archive Charcuterie',
    description: 'A rotating selection of our finest cured meats.',
    price: '$32.00 / Selection'
  }
];

const ProductCard = ({ product }: { product: (typeof beefProducts)[number] }) => (
  <div className="min-w-[320px] md:min-w-[400px] group">
    <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#f3f4f5] relative">
      {product.tag && (
        <div className="absolute top-4 right-4 bg-[#00178d] text-white text-[10px] font-label uppercase tracking-widest px-3 py-1">
          {product.tag}
        </div>
      )}
      <img
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        alt={product.alt}
        src={product.src}
      />
    </div>
    <div className="px-2">
      <h3 className="font-display text-2xl mb-2">{product.title}</h3>
      <p className="text-[#5a403c] font-label text-sm mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="font-display text-xl">{product.price}</span>
        <Link
          to="/contact"
          className="font-label text-xs uppercase tracking-widest border-b border-[#610006] text-[#610006] pb-1 hover:text-[#831718] transition-colors"
        >
          Add to Bag
        </Link>
      </div>
    </div>
  </div>
);

const ProcessedProductCard = ({ product }: { product: (typeof processedProducts)[number] }) => (
  <div className="bg-white p-10 flex flex-col items-center text-center">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-[#edeeef]">
      <img className="w-full h-full object-cover" alt={product.alt} src={product.src} />
    </div>
    <h3 className="font-display text-2xl mb-2">{product.title}</h3>
    <p className="text-sm text-[#5a403c] mb-6 italic">{product.description}</p>
    <span className="font-display text-lg mb-4">{product.price}</span>
    <Link
      to="/contact"
      className="primary-gradient text-white px-6 py-2 text-xs uppercase tracking-widest rounded-sm"
    >
      Add to Bag
    </Link>
  </div>
);

const CollectionHeader = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
    <div>
      <span className="text-[#610006] font-label text-xs uppercase tracking-[0.3em] block mb-4">
        {eyebrow}
      </span>
      <h2 className="font-display text-5xl md:text-6xl -tracking-[0.02em]">{title}</h2>
    </div>
    <div className="flex gap-4">
      <button
        type="button"
        className="w-12 h-12 border border-[#8e706b]/20 flex items-center justify-center rounded-full hover:bg-[#610006] hover:text-white transition-all"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        type="button"
        className="w-12 h-12 border border-[#8e706b]/20 flex items-center justify-center rounded-full hover:bg-[#610006] hover:text-white transition-all"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  </div>
);

const HeritageHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f8f9fa] font-body text-[#191c1d] overflow-x-hidden">
      <nav className={`fixed top-0 w-full z-50 glass-nav ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-[1920px] mx-auto">
          <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-[#610006]">
            HERITAGE PRIME
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-[#610006] font-bold border-b-2 border-[#610006] pb-1 font-label uppercase tracking-widest text-xs">
              Journal
            </Link>
            <Link to="/quality" className="text-[#40484f] font-label uppercase tracking-widest text-xs hover:text-[#610006] transition-colors duration-300">
              Aging Guide
            </Link>
            <Link to="/logistics" className="text-[#40484f] font-label uppercase tracking-widest text-xs hover:text-[#610006] transition-colors duration-300">
              Wholesale
            </Link>
            <Link to="/contact" className="text-[#40484f] font-label uppercase tracking-widest text-xs hover:text-[#610006] transition-colors duration-300">
              Support
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined cursor-pointer hover:text-[#610006]">search</span>
            <Link
              to="/contact"
              className="primary-gradient text-white px-6 py-2.5 font-label text-sm uppercase tracking-widest rounded-sm transition-all active:scale-95"
            >
              Order Now
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="relative h-[921px] w-full overflow-hidden">
          <div className="h-full relative">
            <div className="hero-slide absolute inset-0 opacity-100 flex items-center">
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="A macro shot of a raw, heavily marbled wagyu ribeye steak resting on a dark basalt stone slab."
                src="/heritage-prime/hero-beef.jpg"
              />
              <div className="relative z-20 px-6 md:px-24 max-w-4xl">
                <span className="text-[#ffdad6] bg-[#610006] px-3 py-1 font-label text-xs uppercase tracking-[0.2em] mb-6 inline-block">
                  The Beef Collection
                </span>
                <h1 className="font-display text-6xl md:text-8xl text-white mb-6 leading-none -tracking-[0.03em]">
                  A Legacy of
                  <br />
                  Dry-Aged Excellence
                </h1>
                <p className="text-white/80 text-xl font-display italic mb-10 max-w-xl">
                  Curated cuts from grass-fed cattle, aged for 45 days in our climate-controlled salt chambers for unparalleled depth of flavor.
                </p>
                <Link
                  to="/contact"
                  className="primary-gradient text-white px-10 py-4 font-label text-sm uppercase tracking-widest rounded-sm"
                >
                  Shop The Collection
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
          <CollectionHeader eyebrow="Master Selections" title="The Beef Collection" />
          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8">
            {beefProducts.map(product => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </section>

        <section className="h-[614px] bg-stone-900 flex items-center relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="A wide view of a professional climate-controlled meat aging room."
            src="/heritage-prime/aging-room.jpg"
          />
          <div className="relative z-10 px-6 md:px-24">
            <h3 className="font-display text-4xl md:text-5xl text-white mb-6">The Science of Maturity</h3>
            <p className="text-white/70 max-w-md mb-8">
              Our proprietary salt-brick aging process reduces moisture while concentrating proteins, resulting in a buttery texture and nutty finish.
            </p>
            <Link
              to="/quality"
              className="border border-white/30 text-white px-8 py-3 font-label text-xs uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all"
            >
              Explore Our Labs
            </Link>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-[#f3f4f5]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-[#610006] font-label text-xs uppercase tracking-[0.3em] block mb-4">
                Pasture Raised
              </span>
              <h2 className="font-display text-5xl md:text-6xl -tracking-[0.02em]">The Lamb Selection</h2>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8">
            {lambProducts.map(product => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-[#610006] font-label text-xs uppercase tracking-[0.3em] block mb-4">
                The Vintage Cut
              </span>
              <h2 className="font-display text-5xl md:text-6xl -tracking-[0.02em]">The Mutton Archive</h2>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8">
            {muttonProducts.map(product => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#610006] font-label text-xs uppercase tracking-[0.3em] block mb-4">
              Further Craftsmanship
            </span>
            <h2 className="font-display text-5xl md:text-6xl -tracking-[0.02em] mb-6">Artisanal Processed Products</h2>
            <p className="text-[#5a403c]">
              Beyond the cut, our master butchers apply centuries-old curing and brining techniques to create our value-added signatures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-[#8e706b]/10">
            {processedProducts.map(product => (
              <ProcessedProductCard key={product.title} product={product} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#610006] text-white p-12 md:p-24 flex flex-col justify-center">
            <span className="font-label text-xs uppercase tracking-widest opacity-60 mb-6">Partnerships</span>
            <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">
              Wholesale Logistics for Modern Gastronomy
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Direct integration for Michelin-starred kitchens and luxury hospitality groups. We provide bespoke aging timelines and custom fabrication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#610006] px-8 py-3 font-label text-xs uppercase tracking-widest hover:bg-white/90 transition-all"
              >
                Wholesale Inquiry
              </Link>
              <Link
                to="/logistics"
                className="border border-white/20 text-white px-8 py-3 font-label text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                View Logistics Hub
              </Link>
            </div>
          </div>
          <div className="relative min-h-[400px]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="A modern, clean delivery truck parked outside a high-end restaurant at dusk."
              src="/heritage-prime/wholesale-logistics.jpg"
            />
          </div>
        </section>
      </main>

      <footer className="bg-neutral-950 py-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-end w-full">
        <div className="space-y-12">
          <div className="font-display text-3xl text-neutral-50 tracking-tighter">HERITAGE PRIME</div>
          <p className="font-display italic text-neutral-400 max-w-xs">
            Dedicated to the preservation of artisanal butchery and the elevation of protein quality through science and heritage.
          </p>
          <div className="flex flex-wrap gap-8">
            <Link to="/about" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
              Provenance
            </Link>
            <Link to="/logistics" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
              Wholesale Logistics
            </Link>
            <Link to="/quality" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
              Technical Guides
            </Link>
            <Link to="/contact" className="text-neutral-500 uppercase text-[10px] tracking-[0.2em] hover:text-red-500 transition-colors">
              Privacy Ledger
            </Link>
          </div>
        </div>
        <div className="text-right flex flex-col items-end gap-12">
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-neutral-400 hover:text-red-600 cursor-pointer">language</span>
            <span className="material-symbols-outlined text-neutral-400 hover:text-red-600 cursor-pointer">mail</span>
            <span className="material-symbols-outlined text-neutral-400 hover:text-red-600 cursor-pointer">location_on</span>
          </div>
          <p className="text-neutral-600 text-[10px] tracking-widest uppercase">© 2024 Heritage Prime. The Artisanal Authority.</p>
        </div>
      </footer>
    </div>
  );
};

export default HeritageHome;
