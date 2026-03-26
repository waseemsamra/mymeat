import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-[#fafaf5] font-body text-on-surface antialiased">
      {/* Top Navigation */}
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[870px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              alt="Fresh Global Produce"
              className="w-full h-full object-cover brightness-75 scale-105"
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20">
              <span className="inline-block text-[#ffdeac] font-headline font-bold tracking-[0.2em] text-xs mb-4 uppercase">
                Direct from Source
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Curation of the <br/>
                <span className="text-[#acf4a4]">Earth's Finest.</span>
              </h1>
              <p className="text-white/90 text-lg mb-8 max-w-lg leading-relaxed">
                We bridge the gap between global growers and premium distributors with a focus on seasonal integrity and logistical excellence.
              </p>
              <div className="flex gap-4">
                <Link to="/products" className="bg-[#00450d] text-white px-8 py-4 rounded-md font-headline font-bold text-base hover:bg-[#1b5e20] transition-all">
                  View Catalog
                </Link>
                <Link to="/services" className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-md font-headline font-bold text-base hover:bg-white/20 transition-all">
                  Our Logistics
                </Link>
              </div>
            </div>
          </div>
          {/* Pagination Indicator */}
          <div className="absolute bottom-12 right-12 flex gap-4 items-center">
            <div className="w-12 h-1 bg-[#00450d]"></div>
            <div className="w-8 h-1 bg-white/30"></div>
            <div className="w-8 h-1 bg-white/30"></div>
            <span className="text-white font-headline font-bold text-sm ml-4">01 / 03</span>
          </div>
        </section>

        {/* Product Categories: Horizontal Scrollers */}
        <section className="py-24 space-y-32 bg-[#fafaf5]">
          {/* Category: Rice & Spices */}
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-[#7a5649] font-sans font-bold tracking-widest text-xs uppercase mb-2 block">
                  Pantry Essentials
                </span>
                <h2 className="text-4xl font-headline font-bold text-[#1a1c19]">
                  Rice & Spices
                </h2>
              </div>
              <Link to="/products/rice-spices" className="text-[#00450d] font-headline font-bold text-sm border-b-2 border-[#00450d]/20 hover:border-[#00450d] transition-all pb-1">
                Explore Full Range
              </Link>
            </div>
            <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4">
              {/* Product Card 1 */}
              <div className="min-w-[300px] flex-shrink-0 group cursor-pointer">
                <div className="aspect-[4/5] bg-[#eeeee9] overflow-hidden rounded-xl mb-6 relative">
                  <img
                    alt="Basmati Rice"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600"
                  />
                  <div className="absolute top-4 right-4 bg-[#ffdeac] px-3 py-1 rounded-full">
                    <span className="text-[10px] font-bold text-[#604100] uppercase">
                      Export Grade
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-[#1a1c19] mb-2">
                  Premium Basmati
                </h3>
                <p className="text-[#41493e] text-sm mb-4">
                  Aromatic extra-long grain, aged 2 years.
                </p>
                <Link to="/products/rice-spices" className="w-full py-3 border border-[#c0c9bb] text-[#00450d] font-bold text-sm rounded-md hover:bg-[#00450d] hover:text-white transition-all block">
                  Enquire Now
                </Link>
              </div>

              {/* Product Card 2 */}
              <div className="min-w-[300px] flex-shrink-0 group cursor-pointer">
                <div className="aspect-[4/5] bg-[#eeeee9] overflow-hidden rounded-xl mb-6 relative">
                  <img
                    alt="Whole Spices"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600"
                  />
                </div>
                <h3 className="text-xl font-headline font-bold text-[#1a1c19] mb-2">
                  Artisan Spice Mix
                </h3>
                <p className="text-[#41493e] text-sm mb-4">
                  Direct sourced, non-irradiated organic spices.
                </p>
                <Link to="/products/rice-spices" className="w-full py-3 border border-[#c0c9bb] text-[#00450d] font-bold text-sm rounded-md hover:bg-[#00450d] hover:text-white transition-all block">
                  Enquire Now
                </Link>
              </div>

              {/* Product Card 3 */}
              <div className="min-w-[300px] flex-shrink-0 group cursor-pointer">
                <div className="aspect-[4/5] bg-[#eeeee9] overflow-hidden rounded-xl mb-6 relative">
                  <img
                    alt="Cumin Seeds"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600"
                  />
                </div>
                <h3 className="text-xl font-headline font-bold text-[#1a1c19] mb-2">
                  Toasted Cumin
                </h3>
                <p className="text-[#41493e] text-sm mb-4">
                  High oil content, volcanic soil grown.
                </p>
                <Link to="/products/rice-spices" className="w-full py-3 border border-[#c0c9bb] text-[#00450d] font-bold text-sm rounded-md hover:bg-[#00450d] hover:text-white transition-all block">
                  Enquire Now
                </Link>
              </div>

              {/* Product Card 4 */}
              <div className="min-w-[300px] flex-shrink-0 group cursor-pointer">
                <div className="aspect-[4/5] bg-[#eeeee9] overflow-hidden rounded-xl mb-6 relative">
                  <img
                    alt="Peppercorns"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600"
                  />
                </div>
                <h3 className="text-xl font-headline font-bold text-[#1a1c19] mb-2">
                  Tellicherry Pepper
                </h3>
                <p className="text-[#41493e] text-sm mb-4">
                  Extra bold berries with complex heat.
                </p>
                <Link to="/products/rice-spices" className="w-full py-3 border border-[#c0c9bb] text-[#00450d] font-bold text-sm rounded-md hover:bg-[#00450d] hover:text-white transition-all block">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>

          {/* Category: Fruits & Vegetables (Asymmetric Layout) */}
          <div className="bg-[#f4f4ef] py-24">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/3">
                <span className="text-[#00450d] font-sans font-bold tracking-widest text-xs uppercase mb-2 block">
                  The Fresh Harvest
                </span>
                <h2 className="text-4xl font-headline font-bold text-[#1a1c19] mb-6">
                  Fruits & Vegetables
                </h2>
                <p className="text-[#41493e] leading-relaxed mb-8">
                  We pride ourselves on 24-hour farm-to-shipping logistics. Our seasonal produce is selected for flavor profiles, brix levels, and visual perfection.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#00450d]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <span className="text-[#1a1c19] font-medium">Global GAP Certified</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#00450d]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <span className="text-[#1a1c19] font-medium">Temperature Controlled Transit</span>
                  </li>
                </ul>
                <Link to="/products/fruits-vegetables" className="bg-[#7a5649] text-white px-8 py-3 rounded-md font-headline font-bold text-sm hover:bg-[#603f33] transition-all inline-block">
                  Enquire for Seasonal List
                </Link>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-xl overflow-hidden relative group">
                    <img
                      alt="Avocados"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="https://images.unsplash.com/photo-1597079910443-60c432f35b85?w=600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00450d]/60 to-transparent flex items-end p-4">
                      <span className="text-white font-headline font-bold">Avocados</span>
                    </div>
                  </div>
                  <div className="h-96 rounded-xl overflow-hidden relative group">
                    <img
                      alt="Carrots"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00450d]/60 to-transparent flex items-end p-4">
                      <span className="text-white font-headline font-bold">Root Vegetables</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-96 rounded-xl overflow-hidden relative group">
                    <img
                      alt="Citrus"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="https://images.unsplash.com/photo-1582979512210-99b6a53385f9?w=600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00450d]/60 to-transparent flex items-end p-4">
                      <span className="text-white font-headline font-bold">Citrus Varieties</span>
                    </div>
                  </div>
                  <div className="h-64 rounded-xl overflow-hidden relative group">
                    <img
                      alt="Tropical"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00450d]/60 to-transparent flex items-end p-4">
                      <span className="text-white font-headline font-bold">Exotic Fruits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid: Nuts, Flavors & Seafood */}
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
              {/* Meat & Seafood - Large Card */}
              <div className="md:col-span-2 md:row-span-2 bg-[#eeeee9] rounded-2xl overflow-hidden group relative editorial-shadow p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[#503600] font-sans font-bold tracking-widest text-xs uppercase mb-2 block">
                    Oceanic Selection
                  </span>
                  <h3 className="text-3xl font-headline font-bold text-[#1a1c19] mb-4">
                    Meat & Seafood
                  </h3>
                  <p className="text-[#41493e] max-w-sm">
                    From deep-sea catch to premium pasture-raised cuts, our protein logistics are secondary to none.
                  </p>
                </div>
                <div className="relative h-64 mt-6 overflow-hidden rounded-lg">
                  <img
                    alt="Seafood"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800"
                  />
                </div>
                <Link to="/products/meat-seafood" className="mt-6 bg-[#00450d] text-white py-4 rounded-md font-bold transition-all hover:bg-[#1b5e20] block text-center">
                  Enquire for Wholesale
                </Link>
              </div>

              {/* Nuts & Flavors */}
              <div className="md:col-span-2 bg-[#7a5649]/10 rounded-2xl overflow-hidden flex items-center p-8 border border-[#7a5649]/20">
                <div className="w-1/2">
                  <h3 className="text-2xl font-headline font-bold text-[#7a5649] mb-2">
                    Nuts & Flavors
                  </h3>
                  <p className="text-[#41493e] text-sm mb-4">
                    Macadamias, Walnuts, and Vanilla Beans.
                  </p>
                  <Link to="/products/nuts-flavors" className="text-[#7a5649] font-bold text-sm underline underline-offset-4">
                    Browse Collection
                  </Link>
                </div>
                <div className="w-1/2 h-full">
                  <img
                    alt="Nuts"
                    className="w-full h-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600"
                  />
                </div>
              </div>

              {/* Bakery Products */}
              <div className="md:col-span-1 bg-[#e3e3de] rounded-2xl p-6 flex flex-col justify-center text-center">
                <span className="material-symbols-outlined text-4xl text-[#00450d] mb-4">
                  bakery_dining
                </span>
                <h4 className="font-headline font-bold mb-2">Bakery Products</h4>
                <p className="text-xs text-[#41493e] mb-4">
                  Par-baked and artisanal flours.
                </p>
                <Link to="/products/bakery" className="text-[#00450d] font-bold text-xs uppercase tracking-widest">
                  Enquire
                </Link>
              </div>

              {/* Canned Foods */}
              <div className="md:col-span-1 bg-[#1b5e20] rounded-2xl p-6 flex flex-col justify-center text-center">
                <span className="material-symbols-outlined text-4xl text-[#90d689] mb-4">
                  inventory_2
                </span>
                <h4 className="font-headline font-bold text-white mb-2">
                  Canned Foods
                </h4>
                <p className="text-xs text-white/70 mb-4">
                  Preserving freshness for the long haul.
                </p>
                <Link to="/products/canned-goods" className="text-[#ffdeac] font-bold text-xs uppercase tracking-widest">
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-[#2f312e] text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <span className="text-[#ffba38] font-sans font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                Our Operations
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6">
                Expert Logistics, Global Reach.
              </h2>
              <div className="h-1 w-24 bg-[#503600] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Service 1 - Global Logistics */}
              <div className="group">
                <div className="mb-8 overflow-hidden rounded-xl h-48">
                  <img
                    alt="Global Logistics"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://images.unsplash.com/photo-1494412574643-35d324698420?w=800"
                  />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ffba38]">public</span>
                  Global Logistics
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Multimodal transportation networks ensuring your produce arrives with optimal freshness, regardless of the destination.
                </p>
                <Link to="/services" className="text-[#ffba38] font-bold text-sm hover:text-white transition-colors">
                  Learn more about our fleet →
                </Link>
              </div>

              {/* Service 2 - Quality Control */}
              <div className="group">
                <div className="mb-8 overflow-hidden rounded-xl h-48">
                  <img
                    alt="Quality Control"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800"
                  />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ffba38]">verified</span>
                  Quality Control
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Three-stage inspection process covering farm harvest, container loading, and port arrival for guaranteed standards.
                </p>
                <Link to="/quality" className="text-[#ffba38] font-bold text-sm hover:text-white transition-colors">
                  Our certification standards →
                </Link>
              </div>

              {/* Service 3 - Custom Sourcing */}
              <div className="group">
                <div className="mb-8 overflow-hidden rounded-xl h-48">
                  <img
                    alt="Custom Sourcing"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800"
                  />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ffba38]">handshake</span>
                  Custom Sourcing
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Need something rare? Our network of boutique global farmers can be mobilized for your specific contractual requirements.
                </p>
                <Link to="/sourcing" className="text-[#ffba38] font-bold text-sm hover:text-white transition-colors">
                  Start a custom request →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#fafaf5]">
          <div className="max-w-5xl mx-auto px-8">
            <div className="bg-[#00450d] p-12 md:p-20 rounded-[2rem] text-center relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#1b5e20] rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white mb-6">
                  Ready to expand your <br/>
                  supply chain?
                </h2>
                <p className="text-[#90d689] text-lg mb-10 max-w-xl mx-auto">
                  Connect with our trade experts for a tailored quote and logistics plan for your business.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link to="/procurement" className="bg-[#ffdeac] text-[#604100] px-10 py-4 rounded-md font-headline font-bold text-lg hover:bg-[#ffba38] transition-all">
                    Request a Quote
                  </Link>
                  <Link to="/contact" className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-md font-headline font-bold text-lg hover:bg-white/10 transition-all">
                    Talk to Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .editorial-shadow {
          box-shadow: 0 20px 40px rgba(26, 28, 25, 0.06);
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
