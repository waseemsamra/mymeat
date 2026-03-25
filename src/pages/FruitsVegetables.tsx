import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Download, Globe, CheckCircle, Award, TrendingUp, Clock, Verified, Shield, FileCheck, Microscope, Truck, Ship, Handshake, AcUnit, Sensors, Users, MapPin, CO2, Payments, WaterDrop, Map, Route, Leaf, Sprout, Wheat, Coffee, Nut, Fish, Beef, Apple, Carrot, Package, Truck, Timer, Thermometer, BadgeCheck, Medal, Star, Heart, Zap, Target, Award, TrendingUp, Clock } from 'lucide-react';

const FruitsVegetables = () => {
  return (
    <div className="bg-[#fafaf5] min-h-screen font-sans antialiased">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative h-[870px] min-h-[600px] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              alt="Fresh produce harvest"
              className="w-full h-full object-cover scale-105"
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1920"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c19]/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-[#ffdeac] text-[#604100] font-sans text-xs font-bold tracking-[0.1em] mb-6 rounded-full">
                GLOBAL EXPORT AUTHORITY
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter mb-8">
                The Fresh Harvest: From Earth to Every Corner of the World
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-sans mb-10 max-w-xl leading-relaxed">
                Uncompromising quality with our 24-hour farm-to-shipping protocol. Delivering the world's finest produce at peak freshness.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="bg-[#00450d] hover:bg-[#1b5e20] text-white px-8 py-4 rounded font-headline font-bold transition-all shadow-xl">
                  View Wholesale Catalog
                </Link>
                <Link to="/about" className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 py-4 rounded font-headline font-bold hover:bg-white/20 transition-all">
                  Our Sourcing Map
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Category: Citrus & Orchard */}
        <section className="py-32 bg-[#fafaf5]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-[#00450d] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Section 01</span>
                <h2 className="text-4xl font-headline font-bold text-[#1a1c19] tracking-tight mb-6">Citrus & Orchard</h2>
                <p className="text-lg text-[#41493e] leading-relaxed">Sourced from the sun-drenched groves of the Mediterranean and the nutrient-rich soils of the Pacific Northwest.</p>
              </div>
              <div className="h-px bg-[#c0c9bb]/30 flex-grow mx-12 hidden md:block"></div>
              <Link to="/products" className="text-[#00450d] font-headline font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Browse All Orchard <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Produce Card 1 - Oranges */}
              <div className="group bg-[#ffffff] overflow-hidden transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    alt="Mediterranean Oranges"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1547514701-42782101795e?w=600"
                  />
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-white/70 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-[#1a1c19]">
                    Origin: Spain
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-headline font-bold mb-2">Navel Oranges</h3>
                  <p className="text-[#41493e] text-sm mb-6 leading-relaxed">Seedless, sweet, and easy to peel. Exceptional juice content and vibrant color profiles.</p>
                  <Link to="/contact" className="w-full py-3 border border-[#00450d] text-[#00450d] font-headline font-bold rounded hover:bg-[#00450d] hover:text-white transition-all text-sm">
                    Enquire for Wholesale
                  </Link>
                </div>
              </div>

              {/* Produce Card 2 - Apples */}
              <div className="group bg-[#ffffff] overflow-hidden transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    alt="Premium Apples"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600"
                  />
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-white/70 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-[#1a1c19]">
                    Origin: USA
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-headline font-bold mb-2">Honeycrisp Apples</h3>
                  <p className="text-[#41493e] text-sm mb-6 leading-relaxed">Extraordinarily crisp texture with a balanced sweet-tart flavor. Optimized for long-haul shipping.</p>
                  <Link to="/contact" className="w-full py-3 border border-[#00450d] text-[#00450d] font-headline font-bold rounded hover:bg-[#00450d] hover:text-white transition-all text-sm">
                    Enquire for Wholesale
                  </Link>
                </div>
              </div>

              {/* Produce Card 3 - Grapes */}
              <div className="group bg-[#ffffff] overflow-hidden transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    alt="Table Grapes"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1537640538965-1756e22a06d5?w=600"
                  />
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-white/70 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-[#1a1c19]">
                    Origin: Chile
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-headline font-bold mb-2">Midnight Beauty Grapes</h3>
                  <p className="text-[#41493e] text-sm mb-6 leading-relaxed">Large, seedless black grapes with a crisp skin and intense honey-like sweetness.</p>
                  <Link to="/contact" className="w-full py-3 border border-[#00450d] text-[#00450d] font-headline font-bold rounded hover:bg-[#00450d] hover:text-white transition-all text-sm">
                    Enquire for Wholesale
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sourcing Spotlight: Leafy Greens */}
        <section className="py-32 bg-[#f4f4ef]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    alt="Hydroponic Lettuce"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#1b5e20] p-12 hidden md:block">
                  <p className="text-[#90d689] font-headline font-extrabold text-4xl mb-2">98%</p>
                  <p className="text-[#90d689] font-sans text-xs font-bold uppercase tracking-widest">Water Efficiency</p>
                </div>
              </div>

              <div>
                <span className="text-[#00450d] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Section 02</span>
                <h2 className="text-5xl font-headline font-extrabold text-[#1a1c19] tracking-tight mb-8 leading-tight">
                  The Future of Greens: Hydroponic Mastery
                </h2>
                <p className="text-xl text-[#41493e] leading-relaxed mb-10">
                  Our Leafy Greens collection—including Spinach, Kale, and Romaine—is grown using advanced hydroponic systems that ensure year-round availability and zero pesticide residue.
                </p>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#acf4a4] flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-[#002203]" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg">Organic & Soil-Free</h4>
                      <p className="text-[#41493e] text-sm">Grown in sterile environments to eliminate soil-borne pathogens.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#acf4a4] flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-[#002203]" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg">Extended Shelf Life</h4>
                      <p className="text-[#41493e] text-sm">Harvested and packed in climate-controlled zones within minutes.</p>
                    </div>
                  </li>
                </ul>
                <Link to="/contact" className="bg-[#00450d] text-white px-10 py-5 rounded font-headline font-bold shadow-lg hover:opacity-90 transition-all">
                  Request Quality Specs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Exotic Varieties: Bento Grid */}
        <section className="py-32 bg-[#fafaf5]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <span className="text-[#00450d] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Section 03</span>
              <h2 className="text-4xl font-headline font-bold text-[#1a1c19] tracking-tight mb-6">Exotic Varieties</h2>
              <p className="text-[#41493e] max-w-2xl mx-auto">Connecting global palettes with exceptional harvests from Southeast Asia and South America.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[700px]">
              {/* Mangoes - Large Card */}
              <div className="md:col-span-2 md:row-span-2 bg-stone-100 relative group overflow-hidden">
                <img
                  alt="Mangoes"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1553279768-865429fa0078?w=800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="text-3xl font-headline font-bold text-white mb-2">Alphonso Mangoes</h3>
                  <p className="text-white/80 font-sans text-xs uppercase tracking-widest mb-6">Origin: Western India</p>
                  <Link to="/contact" className="bg-white text-[#1a1c19] px-6 py-2 rounded font-headline font-bold text-sm">
                    Inquire for Season
                  </Link>
                </div>
              </div>

              {/* Dragonfruit */}
              <div className="md:col-span-2 bg-stone-200 relative group overflow-hidden">
                <img
                  alt="Dragonfruit"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1527325678964-5492166297f1?w=600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-xl font-headline font-bold text-white">Pitaya (Dragonfruit)</h3>
                  <p className="text-white/70 font-sans text-[10px] uppercase tracking-widest">Vietnam Sourcing</p>
                </div>
              </div>

              {/* Passionfruit */}
              <div className="md:col-span-1 bg-stone-300 relative group overflow-hidden">
                <img
                  alt="Passionfruit"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1517409224997-51ea2f3c2b37?w=400"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-lg font-headline font-bold text-white border-b-2 border-white pb-1">Passionfruit</h3>
                </div>
              </div>

              {/* Custom Sourcing Card */}
              <div className="md:col-span-1 bg-[#00450d] relative flex flex-col items-center justify-center p-8 text-center">
                <Globe className="text-[#acf4a4] w-12 h-12 mb-4" />
                <h4 className="text-white font-headline font-bold text-xl mb-2">Custom Global Sourcing</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6">Need a specific variety not listed? Our network spans 40+ countries.</p>
                <Link to="/contact" className="text-white font-sans text-xs font-bold underline underline-offset-4 uppercase tracking-widest">
                  Contact Desk
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Calendar */}
        <section className="py-32 bg-[#ffffff]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-[#eeeee9] rounded-xl p-12 overflow-hidden relative">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-headline font-bold text-[#1a1c19] mb-6">Seasonal Availability</h2>
                  <p className="text-[#41493e] mb-8">Stay ahead of market shifts. Our real-time calendar helps you plan inventories around peak harvest cycles.</p>
                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                    <Calendar className="text-[#503600] w-12 h-12" />
                    <div>
                      <p className="font-headline font-bold text-[#1a1c19]">Currently in Peak</p>
                      <p className="text-sm text-[#41493e]">Stone Fruits & Summer Berries</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { period: 'MAR-MAY', icon: Sprout, name: 'Asparagus' },
                    { period: 'JUN-AUG', icon: Sprout, name: 'Stone Fruits' },
                    { period: 'SEP-NOV', icon: Sprout, name: 'Apples' },
                    { period: 'DEC-FEB', icon: Sprout, name: 'Citrus' }
                  ].map((item) => (
                    <div key={item.period} className="bg-white p-6 flex flex-col items-center justify-center text-center group hover:bg-[#00450d] transition-all cursor-default">
                      <p className="text-xs font-sans font-bold text-[#00450d] group-hover:text-white/70 uppercase mb-4">{item.period}</p>
                      <item.icon className="w-8 h-8 mb-2 text-[#1a1c19] group-hover:text-white" />
                      <p className="font-headline font-bold group-hover:text-white">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Certification */}
        <section className="py-32 bg-[#fafaf5]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center">
                <Check className="text-[#00450d] w-16 h-16 mb-6" />
                <h3 className="text-xl font-headline font-bold mb-4">Global GAP Certified</h3>
                <p className="text-[#41493e] leading-relaxed">Rigorous adherence to international standards for safe, sustainable agriculture practices.</p>
              </div>
              <div className="text-center">
                <Thermometer className="text-[#00450d] w-16 h-16 mb-6" />
                <h3 className="text-xl font-headline font-bold mb-4">Temperature Controlled</h3>
                <p className="text-[#41493e] leading-relaxed">State-of-the-art cold chain logistics ensuring produce remains in its optimal thermal zone.</p>
              </div>
              <div className="text-center">
                <TrackChanges className="text-[#00450d] w-16 h-16 mb-6" />
                <h3 className="text-xl font-headline font-bold mb-4">Full Traceability</h3>
                <p className="text-[#41493e] leading-relaxed">Every batch is trackable back to its exact plot of origin for total transparency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="relative bg-[#00450d] rounded-2xl overflow-hidden p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                <img
                  alt="Greenery background"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800"
                />
              </div>
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6">Ready to scale your supply chain?</h2>
                <p className="text-xl text-white/80 leading-relaxed mb-8">Partner with AgroFeed for consistent quality, transparent logistics, and seasonal expertise.</p>
              </div>
              <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
                <Link to="/contact" className="bg-[#ffdeac] text-[#604100] px-10 py-5 rounded font-headline font-extrabold shadow-2xl hover:bg-[#ffba38] transition-all">
                  Partner with AgroFeed
                </Link>
                <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded font-headline font-extrabold backdrop-blur-sm hover:bg-white/20 transition-all">
                  Request a Custom Seasonal List
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .font-headline {
          font-family: 'Manrope', sans-serif;
        }
        
        .font-body, .font-sans {
          font-family: 'Inter', sans-serif;
        }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
};

export default FruitsVegetables;
