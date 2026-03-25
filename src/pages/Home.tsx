import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="bg-[#fafaf5] min-h-screen font-sans antialiased">
      {/* Top Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-8 py-20 lg:py-32 overflow-hidden bg-surface pt-32">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              Curated Global Supply
            </span>
            <h1 className="font-headline font-extrabold text-5xl lg:text-7xl text-primary leading-[1.1] tracking-tight mb-8">
              The Harvest of Nations, <br/>
              <span className="text-secondary">Orchestrated for Scale.</span>
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              Bridging the gap between artisanal heritage and industrial demand. We curate the world's most resilient supply chains to deliver premium fresh food commodities with uncompromising traceability and B2B precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/procurement" className="px-8 py-4 bg-primary text-on-primary rounded-md font-semibold text-lg hover:bg-primary-container transition-all flex items-center gap-2 group">
                Initiate Bulk Inquiry
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/products" className="px-8 py-4 bg-transparent border border-outline-variant text-primary rounded-md font-semibold text-lg hover:bg-surface-container-low transition-all">
                Download Full Portfolio
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden editorial-shadow relative z-10 scale-105">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1597079910443-60c432f35b85?w=800"
                alt="Premium fresh vegetables"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="px-8 py-20 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-primary mb-4 tracking-tight">Our Curated Portfolios</h2>
              <p className="text-on-surface-variant text-lg">Explore our core commodity pillars, each managed by dedicated procurement specialists and verified for international B2B standards.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rice & Spices */}
            <Link to="/products/rice-spices" className="group relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 transition-all hover:bg-surface-bright duration-500">
              <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600"
                  alt="Rice and spices"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">Rice & Spices</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Premium long-grain basmati and hand-picked spices from cooperatives across South Asia and the Mediterranean.</p>
              <div className="inline-flex items-center text-primary font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
                Explore Category <span className="material-symbols-outlined ml-2 text-sm">trending_flat</span>
              </div>
            </Link>

            {/* Fruits & Vegetables */}
            <Link to="/products/fruits-vegetables" className="group relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 transition-all hover:bg-surface-bright duration-500">
              <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600"
                  alt="Fruits and vegetables"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">Fruits & Vegetables</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Seasonal harvests and year-round staples maintained through precision temperature-controlled logistics.</p>
              <div className="inline-flex items-center text-primary font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
                Explore Category <span className="material-symbols-outlined ml-2 text-sm">trending_flat</span>
              </div>
            </Link>

            {/* Nuts & Flavors */}
            <Link to="/products/nuts-flavors" className="group relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 transition-all hover:bg-surface-bright duration-500">
              <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600"
                  alt="Nuts and flavors"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">Nuts & Flavors</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">High-yield almonds, cashews, and botanical extracts for large-scale food manufacturing.</p>
              <div className="inline-flex items-center text-primary font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
                Explore Category <span className="material-symbols-outlined ml-2 text-sm">trending_flat</span>
              </div>
            </Link>

            {/* Canned Foods */}
            <Link to="/products/canned-goods" className="group relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 transition-all hover:bg-surface-bright duration-500">
              <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600"
                  alt="Canned foods"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">Canned Foods</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Advanced preservation techniques that lock in peak-season nutrition for long-haul stability.</p>
              <div className="inline-flex items-center text-primary font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
                Explore Category <span className="material-symbols-outlined ml-2 text-sm">trending_flat</span>
              </div>
            </Link>

            {/* Meat & Seafood */}
            <Link to="/products/meat-seafood" className="group relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 transition-all hover:bg-surface-bright duration-500">
              <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600"
                  alt="Meat and seafood"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">Meat & Seafood</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Sustainably sourced protein from certified ethical producers with rigorous cold-chain protocols.</p>
              <div className="inline-flex items-center text-primary font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
                Explore Category <span className="material-symbols-outlined ml-2 text-sm">trending_flat</span>
              </div>
            </Link>

            {/* Bakery Products */}
            <Link to="/products/bakery" className="group relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 transition-all hover:bg-surface-bright duration-500">
              <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600"
                  alt="Bakery products"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">Bakery Products</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Par-baked and artisanal grain solutions for high-volume hospitality and distribution.</p>
              <div className="inline-flex items-center text-primary font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
                Explore Category <span className="material-symbols-outlined ml-2 text-sm">trending_flat</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="px-8 py-24 bg-surface overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline text-4xl font-extrabold text-primary mb-12 leading-tight">The Infrastructure <br/><span className="text-secondary">of Quality.</span></h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed">verified</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">Global Compliance</h4>
                    <p className="text-on-surface-variant">Every shipment backed by HACCP and GAP certifications for international phytosanitary standards.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed">ac_unit</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">Cold-Chain Mastery</h4>
                    <p className="text-on-surface-variant">Real-time IoT tracking for every container maintaining harvest temperature from field to warehouse.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed">inventory_2</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">Bulk Precision</h4>
                    <p className="text-on-surface-variant">Scalable procurement structures for enterprise-level demands without compromising quality.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed">history_edu</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">Seed-to-Shelf Traceability</h4>
                    <p className="text-on-surface-variant">Digital documentation for every batch with total transparency on origin and logistics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-primary-container/5 -rotate-3 rounded-2xl"></div>
              <img
                className="rounded-2xl editorial-shadow relative z-10 w-full object-cover aspect-square"
                src="https://images.unsplash.com/photo-1494412574643-35d324698420?w=800"
                alt="Shipping containers"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 editorial-shadow rounded-xl z-20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">public</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Global Logistics Status</p>
                  <p className="font-headline font-bold text-primary">Active: 142 Ports Reachable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20 bg-primary-container relative">
        <div className="max-w-screen-2xl mx-auto text-center relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-primary-container mb-6 tracking-tight">Ready to Scale Your Sourcing?</h2>
          <p className="text-on-primary-fixed-variant text-xl max-w-2xl mx-auto mb-12 opacity-90">Our procurement specialists are ready to architect a supply solution tailored to your volume and quality requirements.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/procurement" className="w-full sm:w-auto px-10 py-5 bg-white text-primary rounded-md font-bold text-lg hover:bg-surface-bright transition-all editorial-shadow active:scale-95">
              Initiate Bulk Inquiry
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-primary/20 text-on-primary-container rounded-md font-bold text-lg hover:bg-primary/10 transition-all active:scale-95">
              Request Custom Quote
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-fixed/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default Home;
