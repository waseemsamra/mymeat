import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MuttonWholesale = () => {
  useEffect(() => {
    document.title = "Wholesale Mutton & Lamb Supplier Dubai – Chops, Racks & Whole Carcass";
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

  const pricingData = [
    { cut: 'Whole Lamb (Small) – 15–22 kg', type: 'Carcass', grade: 'PREMIUM', price: '18.00 – 22.00', weight: '~18 kg', minOrder: '1 carcass' },
    { cut: 'Whole Lamb (Medium) – 22–30 kg', type: 'Carcass', grade: 'PREMIUM', price: '16.00 – 20.00', weight: '~25 kg', minOrder: '1 carcass' },
    { cut: 'Whole Mutton – 25–40 kg', type: 'Carcass', grade: 'PREMIUM', price: '15.00 – 19.00', weight: '~30 kg', minOrder: '1 carcass' },
    { cut: 'Half Lamb Carcass', type: 'Split', grade: 'PREMIUM', price: '19.00 – 23.00', weight: '~12 kg', minOrder: '1 half' },
    { cut: 'Lamb Leg – Bone-In', type: 'Whole', grade: 'PREMIUM', price: '24.00 – 30.00', weight: '~8 kg', minOrder: '1 leg' },
    { cut: 'Lamb Leg – Boneless (Rolled)', type: 'Whole', grade: 'PREMIUM', price: '30.00 – 36.00', weight: '~6 kg', minOrder: '2 legs' },
    { cut: 'Lamb Shoulder – Bone-In', type: 'Whole', grade: 'PREMIUM', price: '20.00 – 26.00', weight: '~5 kg', minOrder: '2 shoulders' },
    { cut: 'Lamb Shoulder – Boneless (Rolled)', type: 'Whole', grade: 'PREMIUM', price: '26.00 – 32.00', weight: '~4 kg', minOrder: '2 shoulders' },
    { cut: 'Lamb Rack – 8 Ribs (French Trimmed)', type: 'Rack', grade: 'PREMIUM', price: '46.00 – 54.00', weight: '~2 kg', minOrder: '2 racks' },
    { cut: 'Lamb Rack – 8 Ribs (Untrimmed)', type: 'Rack', grade: 'STANDARD', price: '38.00 – 44.00', weight: '~2.5 kg', minOrder: '2 racks' },
    { cut: 'Lamb Loin Chops (Thick Cut)', type: 'Chops', grade: 'PREMIUM', price: '42.00 – 48.00', weight: '~3 kg', minOrder: '2 kg' },
    { cut: 'Lamb Rib Chops – 12 Ribs', type: 'Chops', grade: 'PREMIUM', price: '40.00 – 46.00', weight: '~3 kg', minOrder: '2 kg' },
    { cut: 'Mutton Loin Chops', type: 'Chops', grade: 'PREMIUM', price: '36.00 – 42.00', weight: '~3 kg', minOrder: '2 kg' },
    { cut: 'Lamb Mince (Fine)', type: 'Processed', grade: 'PREMIUM', price: '18.00 – 24.00', weight: '~10 kg', minOrder: '2 cases' },
    { cut: 'Lamb Mince (Coarse)', type: 'Processed', grade: 'STANDARD', price: '16.00 – 20.00', weight: '~10 kg', minOrder: '2 cases' },
    { cut: 'Mutton Cubes (Biryani/Hash)', type: 'Diced', grade: 'PREMIUM', price: '20.00 – 26.00', weight: '~10 kg', minOrder: '2 cases' },
    { cut: 'Lamb Burger Patties', type: 'Processed', grade: 'PREMIUM', price: '22.00 – 28.00', weight: '~8 kg', minOrder: '2 cases' },
    { cut: 'Lamb Kebab Mix', type: 'Marinated', grade: 'PREMIUM', price: '24.00 – 30.00', weight: '~10 kg', minOrder: '2 cases' },
  ];

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary min-h-screen flex flex-col">
      <Header />

      <main className="pt-24 pb-20 flex-1">
<section className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 -z-10">
            <img className="w-full h-full object-cover" alt="Premium lamb and mutton cuts in Dubai wholesale facility" src="/heritage-prime/aged-mutton-shoulder.jpg"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#191c1d] via-[#191c1d]/60 to-transparent"></div>
          </div>
          <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <span className="text-white font-bold tracking-widest text-sm uppercase mb-4 block">Official Supplier | UAE</span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                 Wholesale Mutton & Lamb Dubai | <span className="text-2xl md:text-3xl font-normal text-[#ffb3ac] block mt-2">Premium Halal Meat</span>
              </h1>
              <p className="text-white/80 font-body text-sm md:text-base max-w-xl mb-10 leading-relaxed">
                Fresh mutton and lamb delivered daily across Dubai, Abu Dhabi & all Emirates. 100% halal certified for professional kitchens.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-container transition-all flex items-center gap-2 group">
                  Request Bulk Quote
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <a href="#inventory" className="bg-secondary-container text-on-secondary-fixed-variant px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all">
                  View Pricing Table
                </a>
                <a href="https://wa.me/971585842800" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">whatsapp</span>
                  WhatsApp Wholesale Desk
                </a>
              </div>
              <div className="mt-16 flex flex-wrap gap-8 opacity-80">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-sm font-semibold tracking-tight">100% HALAL</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  <span className="text-sm font-semibold tracking-tight">SAME-DAY DELIVERY</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                  <span className="text-sm font-semibold tracking-tight">HACCP APPROVED</span>
                </div>
              </div>
            </div>
<div className="lg:col-span-5 relative hidden lg:block">
               <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                 <img className="w-full h-full object-cover" alt="Premium lamb rack on marble slab." src="/heritage-prime/frenched-rack-lamb.jpg" />
                 <div className="absolute bottom-6 right-6 bg-tertiary px-6 py-3 rounded-lg text-on-tertiary">
                   <p className="text-xs font-bold uppercase tracking-widest mb-1">Grade Level</p>
                   <p className="text-xl font-display font-bold">Prime Choice</p>
                 </div>
               </div>
             </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase block mb-2">Inventory Selection</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Sourcing Excellence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface h-[400px]">
                <div className="absolute inset-0 h-64 overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Premium lamb cuts on butcher's block." src="/heritage-prime/heritage-lamb-shanks.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-10 text-on-primary">
                    <h3 className="font-display text-3xl font-bold mb-2">Premium Cuts</h3>
                    <p className="opacity-90 max-w-md">Rack of lamb, French trimmed chops, and prime loin selections for high-end dining.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-surface h-[400px]">
                <div className="absolute inset-0 h-64 overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lamb carcasses in cold storage." src="/heritage-prime/hero-beef.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-10 text-on-primary">
                    <h3 className="font-display text-3xl font-bold mb-2">Bulk & Whole</h3>
                    <p className="opacity-90">Full and half carcasses for in-house butchery and large-scale operations.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-12 group relative overflow-hidden rounded-2xl bg-surface h-[300px]">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Minced lamb and mutton cubes." src="/heritage-prime/aged-beef-sausage.jpg" />
                  </div>
                  <div className="bg-primary flex flex-col justify-center p-12 text-on-primary">
                    <h3 className="font-display text-3xl font-bold mb-4">Processed & Value</h3>
                    <p className="opacity-90 text-lg mb-6">Lamb mince, Mutton cubes, and custom burger patties prepared daily for volume consistency.</p>
                    <a className="flex items-center gap-2 font-bold tracking-widest text-sm uppercase" href="#">Explore Value Range <span className="material-symbols-outlined">chevron_right</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface" id="inventory">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase block mb-2">Live Wholesale Rates</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold">Technical Specification Index</h2>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-high px-4 py-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">info</span>
                <span className="text-sm font-medium">Prices updated daily based on Dubai Central Market rates.</span>
              </div>
            </div>
            <div className="overflow-x-auto overflow-y-auto rounded-xl border border-outline-variant/20 max-h-[400px]">
              <table className="w-full text-left border-collapse bg-surface-container-lowest min-w-[800px]">
                <thead className="sticky top-0 bg-surface-container z-10">
                  <tr className="bg-surface-container text-on-surface-variant font-bold text-xs uppercase tracking-widest">
                    <th className="px-6 py-5">Cut / Product</th>
                    <th className="px-6 py-5">Type</th>
                    <th className="px-6 py-5">Grade/Quality</th>
                    <th className="px-6 py-5 text-primary">Bulk Price (AED/kg)</th>
                    <th className="px-6 py-5">Case Weight</th>
                    <th className="px-6 py-5">Min. Order</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 font-medium">
                  {pricingData.map((item, index) => (
                    <tr key={index} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4 font-bold text-on-surface">{item.cut}</td>
                      <td className="px-6 py-4">{item.type}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${item.grade === 'PREMIUM' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                          {item.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-primary font-bold">{item.price}</td>
                      <td className="px-6 py-4">{item.weight}</td>
                      <td className="px-6 py-4">{item.minOrder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center gap-3">
                <span className="material-symbols-outlined">download</span>
                Download Full PDF Price List
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-high" id="comparison">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-4">Mutton vs. Lamb: The Technical Difference</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Understanding the distinct profiles for professional kitchen utility and menu planning.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-surface-container-lowest rounded-2xl p-10">
                <div className="grid grid-cols-3 gap-4 border-b border-outline-variant/20 pb-4 mb-6 font-bold text-sm tracking-widest uppercase">
                  <div>Feature</div>
                  <div className="text-primary">Lamb</div>
                  <div className="text-secondary">Mutton</div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 items-center">
                    <div className="font-bold text-sm text-on-surface-variant">Age</div>
                    <div className="text-sm">Under 12 Months</div>
                    <div className="text-sm">Over 2-3 Years</div>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                    <div className="font-bold text-sm text-on-surface-variant">Flavor</div>
                    <div className="text-sm italic">Mild & Delicate</div>
                    <div className="text-sm italic">Bold & Gamey</div>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                    <div className="font-bold text-sm text-on-surface-variant">Tenderness</div>
                    <div className="text-sm">High (Low Connective)</div>
                    <div className="text-sm">Firm (High Collagen)</div>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                    <div className="font-bold text-sm text-on-surface-variant">Best Use</div>
                    <div className="text-sm">Grilling / Roasting</div>
                    <div className="text-sm">Braising / Biryani</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined">restaurant_menu</span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold mb-2">Chefs' Choice: Lamb</h4>
                    <p className="text-on-surface-variant">Ideal for European menus and quick-fire grilling. High marbling levels and tender muscle fibers require minimal cooking times.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-on-secondary">
                    <span className="material-symbols-outlined">soup_kitchen</span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold mb-2">Heritage Choice: Mutton</h4>
                    <p className="text-on-surface-variant">The essential ingredient for Machboos, Curries, and Biryani. The higher fat content and mature collagen breakdown perfectly during slow-braising.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface" id="process">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase block mb-2">Service Pipeline</span>
                <h2 className="font-display text-4xl font-bold mt-4 mb-6 leading-tight">Supply Chain & Custom Preparation</h2>
                <p className="text-on-surface-variant mb-8 text-lg">We bridge the gap between global sourcing and Dubai's elite kitchen requirements with military precision.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Weekly Logistics Contracts
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Custom Portioning
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    UAE Prep (Biryani/Machboos)
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-low p-10 rounded-2xl border-b-4 border-primary">
                  <div className="text-4xl font-display font-black text-primary/20 mb-4">01</div>
                  <h4 className="font-display text-2xl font-bold mb-2">Request Quote</h4>
                  <p className="text-on-surface-variant">Submit your volume requirements and cut preferences through our secure portal.</p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-2xl">
                  <div className="text-4xl font-display font-black text-primary/20 mb-4">02</div>
                  <h4 className="font-display text-2xl font-bold mb-2">Confirm Order</h4>
                  <p className="text-on-surface-variant">Real-time inventory verification and dedicated logistics slot assignment.</p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-2xl">
                  <div className="text-4xl font-display font-black text-primary/20 mb-4">03</div>
                  <h4 className="font-display text-2xl font-bold mb-2">Custom Cutting</h4>
                  <p className="text-on-surface-variant">Our master butchers prepare your order to exact millimetric specification in a HACCP unit.</p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-2xl border-b-4 border-primary">
                  <div className="text-4xl font-display font-black text-primary/20 mb-4">04</div>
                  <h4 className="font-display text-2xl font-bold mb-2">Fresh Delivery</h4>
                  <p className="text-on-surface-variant">GPS-tracked refrigerated fleet ensures delivery within 4-6 hours of butchery.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-screen-2xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">Ramadan & Eid Al-Adha Bulk Supply Contracts</h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Secure your high-volume requirements for peak seasons. We specialize in providing thousands of whole carcasses and portioned cuts for hospitality groups and large-scale charity initiatives across the Emirates.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="bg-primary-container p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold mb-1">5,000+</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-70">Daily Capacity</div>
                </div>
                <div className="bg-primary-container p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-70">Operations</div>
                </div>
              </div>
              <button className="bg-surface text-primary px-10 py-5 rounded-lg font-bold text-xl hover:bg-surface-container-low transition-all">
                Schedule Event Consultation
              </button>
            </div>
            <div className="relative">
              <img className="rounded-3xl shadow-2xl border-8 border-primary-container" alt="Large-scale event catering in Dubai." src="/heritage-prime/aged-mutton-shoulder.jpg" />
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface" id="faq">
          <div className="max-w-screen-2xl mx-auto px-12 grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl font-bold mb-8">Professional Guidelines & FAQs</h2>
              <div className="space-y-4">
                <FaqItem
                  question="Do you provide HACCP certificates with every delivery?"
                  answer="Yes, full digital HACCP documentation and Dubai Municipality health certificates are issued with every shipment for your auditing requirements."
                />
                <FaqItem
                  question="What is the lead time for custom butchery orders?"
                  answer="For custom portioning and vacuum-packing, we require an 18-hour notice. Standard carcass orders can be fulfilled within 6-8 hours."
                />
                <FaqItem
                  question="Do you offer credit terms for established hotels?"
                  answer="We provide 15-day and 30-day credit cycles for registered hospitality partners following a brief vendor verification process."
                />
              </div>
            </div>
            <div className="lg:col-span-7 bg-surface-container-lowest p-10 md:p-16 rounded-3xl border border-outline-variant/15">
              <h3 className="font-display text-3xl font-bold mb-4">Get Wholesale Pricing</h3>
              <p className="text-on-surface-variant mb-10">Direct delivery to your kitchen in Dubai, Abu Dhabi, and beyond.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-3xl">call</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Direct Sales Hotline</div>
<div className="text-2xl font-bold">+971 56 191 0177</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                     <span className="material-symbols-outlined text-3xl">chat</span>
                   </div>
                   <div>
                     <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">WhatsApp Bulk Orders</div>
                     <div className="text-2xl font-bold">+971 56 191 0177</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Technical Inquiries</div>
                    <div className="text-2xl font-bold">supply@wazmeat.com</div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-outline-variant/20">
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined">pin_drop</span>
                  <p className="font-medium text-sm">Al Quoz Industrial Area 3, Warehouse 14, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <details className="group bg-surface-container-low rounded-xl cursor-pointer">
    <summary className="flex justify-between items-center p-6 font-bold list-none">
      <span>{question}</span>
      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
    </summary>
    <p className="px-6 pb-6 text-on-surface-variant leading-relaxed">
      {answer}
    </p>
  </details>
);

export default MuttonWholesale;