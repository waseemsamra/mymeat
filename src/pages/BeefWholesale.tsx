import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const BeefWholesale = () => {
  useEffect(() => {
    document.title = "Wholesale Beef Supplier Dubai – Bulk Cuts, Ribeye & Case Prices";
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
        <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 -z-10">
            <img className="w-full h-full object-cover" alt="Premium beef cuts in Dubai wholesale facility" src="/heritage-prime/hero-beef.jpg"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#191c1d] via-[#191c1d]/60 to-transparent"></div>
          </div>
          <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-white font-bold text-sm tracking-widest uppercase mb-4">Master Butcher Quality Since 1992</span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
               Wholesale Beef Dubai | <span className="text-2xl md:text-3xl font-normal text-[#ffb3ac] block mt-2">Premium Halal Beef Cuts</span>
             </h1>
              <p className="text-white/80 font-body text-sm md:text-base max-w-2xl mb-10 leading-relaxed font-light">
                Fresh beef delivered daily across Dubai, Abu Dhabi & all Emirates. Custom cuts, case pricing, and flexible bulk orders. 100% halal certified.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#pricing" className="bg-gradient-to-br from-[#610006] to-[#831718] text-on-primary px-8 py-4 rounded-lg font-bold shadow-xl hover:translate-y-[-4px] transition-all duration-300">View Beef Pricing Table</a>
                <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-bold border border-outline-variant/10 hover:bg-surface-container-high transition-all">Request Bulk Quote</button>
                <a href="https://wa.me/971585842800" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex items-center gap-2">
                  <span className="material-symbols-outlined">whatsapp</span>
                  WhatsApp Wholesale Desk
                </a>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-6 pt-8 border-t border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Halal Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Same-Day Dubai Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Bulk Case Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">HACCP-Approved</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                <img className="w-full h-full object-cover" alt="Premium beef ribeye steak on marble slab." src="/heritage-prime/heritage-dry-aged-ribeye.jpg" />
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
              <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-2">Our Inventory</span>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface">Our Wholesale Beef Range</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface rounded-xl overflow-hidden transition-transform hover:translate-y-[-8px] duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img className="w-full h-full object-cover" alt="Premium beef steak cuts on slate." src="/heritage-prime/heritage-tomahawk.jpg" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Premium Steaks</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Ribeye & Bone-In Ribeye
                    </li>
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Sirloin (Striploin)
                    </li>
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Tenderloin (PSMO)
                    </li>
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> T-Bone & Tomahawk
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-surface rounded-xl overflow-hidden transition-transform hover:translate-y-[-8px] duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img className="w-full h-full object-cover" alt="Primal beef cuts in cold storage." src="/heritage-prime/hero-beef.jpg" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Bulk & Primal Cuts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Whole Carcasses
                    </li>
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Striploin Full Loins
                    </li>
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Beef Brisket
                    </li>
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Chuck Roll & Top Side
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-surface rounded-xl overflow-hidden transition-transform hover:translate-y-[-8px] duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img className="w-full h-full object-cover" alt="Processed beef products." src="/heritage-prime/aged-beef-sausage.jpg" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Processed Beef</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Ground Beef (Custom Fat %)
                    </li>
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Burger Patties & Diced Beef
                    </li>
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Mince & Kabab Mix
                    </li>
                    <li className="flex items-center gap-3 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Beef Carpaccio Slices
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface" id="pricing">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-2">Technical Data</span>
                <h2 className="text-4xl md:text-5xl font-bold text-on-surface">Wholesale Beef Pricing Table</h2>
              </div>
              <div className="bg-surface-container text-on-surface-variant px-6 py-4 rounded-lg flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">update</span>
                <span className="text-sm">Last updated: <span className="font-bold">May 2024</span> | Prices based on bulk MOQ</span>
              </div>
            </div>
            <div className="overflow-x-auto overflow-y-auto rounded-xl border border-outline-variant/10 shadow-sm max-h-[400px]">
              <table className="w-full text-left border-collapse bg-surface min-w-[800px]">
                <thead className="sticky top-0 bg-surface z-10">
                  <tr className="bg-surface-container-high border-b-2 border-outline-variant/20">
                    <th className="px-8 py-6 font-display text-lg font-bold">Cut / Product</th>
                    <th className="px-8 py-6 font-display text-lg font-bold">IMPS Code</th>
                    <th className="px-8 py-6 font-display text-lg font-bold">Grade</th>
                    <th className="px-8 py-6 font-display text-lg font-bold text-primary">Price (AED/kg)</th>
                    <th className="px-8 py-6 font-display text-lg font-bold">Case Weight</th>
                    <th className="px-8 py-6 font-display text-lg font-bold">Min. Order</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6 font-semibold">Ribeye – Bone-In, Lip-On</td>
                    <td className="px-8 py-6 text-on-surface-variant">109E</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">42.00 – 48.00</td>
                    <td className="px-8 py-6">~15 kg</td>
                    <td className="px-8 py-6">1 case</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                    <td className="px-8 py-6 font-semibold">Ribeye – Boneless (Heavy)</td>
                    <td className="px-8 py-6 text-on-surface-variant">112A</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">46.00 – 52.00</td>
                    <td className="px-8 py-6">~15 kg</td>
                    <td className="px-8 py-6">1 case</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6 font-semibold">Striploin – Boneless (0x1)</td>
                    <td className="px-8 py-6 text-on-surface-variant">180</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">39.00 – 44.00</td>
                    <td className="px-8 py-6">~18 kg</td>
                    <td className="px-8 py-6">1 case</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                    <td className="px-8 py-6 font-semibold">Tenderloin – PSMO (Whole)</td>
                    <td className="px-8 py-6 text-on-surface-variant">189A</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">52.00 – 60.00</td>
                    <td className="px-8 py-6">~10 kg</td>
                    <td className="px-8 py-6">1 case</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6 font-semibold">Tenderloin – Butt Trimmed</td>
                    <td className="px-8 py-6 text-on-surface-variant">191A</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">50.00 – 56.00</td>
                    <td className="px-8 py-6">~8 kg</td>
                    <td className="px-8 py-6">1 case</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                    <td className="px-8 py-6 font-semibold">Top Butt / Sirloin – Boneless</td>
                    <td className="px-8 py-6 text-on-surface-variant">184</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">26.00 – 32.00</td>
                    <td className="px-8 py-6">~20 kg</td>
                    <td className="px-8 py-6">1 case</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6 font-semibold">Tri-Tip – Peeled</td>
                    <td className="px-8 py-6 text-on-surface-variant">185D</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">30.00 – 36.00</td>
                    <td className="px-8 py-6">~10 kg</td>
                    <td className="px-8 py-6">1 case</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                    <td className="px-8 py-6 font-semibold">Brisket – Deckle-Off</td>
                    <td className="px-8 py-6 text-on-surface-variant">120</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">18.00 – 24.00</td>
                    <td className="px-8 py-6">~18 kg</td>
                    <td className="px-8 py-6">1 case</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6 font-semibold">Chuck Roll – Neck-Off</td>
                    <td className="px-8 py-6 text-on-surface-variant">116A</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">18.00 – 22.00</td>
                    <td className="px-8 py-6">~20 kg</td>
                    <td className="px-8 py-6">1 case</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                    <td className="px-8 py-6 font-semibold">Ground Beef (80/20)</td>
                    <td className="px-8 py-6 text-on-surface-variant">136</td>
                    <td className="px-8 py-6 text-on-surface-variant">n/a</td>
                    <td className="px-8 py-6 font-bold text-primary">14.00 – 18.00</td>
                    <td className="px-8 py-6">~20 kg</td>
                    <td className="px-8 py-6">2 cases</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-6 font-semibold">Burger Patties (80/20)</td>
                    <td className="px-8 py-6 text-on-surface-variant">1136</td>
                    <td className="px-8 py-6 text-on-surface-variant">n/a</td>
                    <td className="px-8 py-6 font-bold text-primary">16.00 – 20.00</td>
                    <td className="px-8 py-6">~15 kg</td>
                    <td className="px-8 py-6">2 cases</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                    <td className="px-8 py-6 font-semibold">Whole Carcass (Hanging)</td>
                    <td className="px-8 py-6 text-on-surface-variant">n/a</td>
                    <td className="px-8 py-6">
                      <span className="bg-secondary-container px-3 py-1 rounded text-xs font-bold text-on-secondary-container uppercase">Choice</span>
                    </td>
                    <td className="px-8 py-6 font-bold text-primary">22.00 – 28.00</td>
                    <td className="px-8 py-6">200–350 kg</td>
                    <td className="px-8 py-6">1 carcass</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-on-surface-variant text-sm italic">*Prices are subject to market fluctuations and seasonal availability. Minimum order values apply for free delivery.</p>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-12">
            <h2 className="text-4xl font-bold text-center mb-16">FAQ – Wholesale Beef Dubai</h2>
            <div className="space-y-4">
              <FaqItem 
                question="What is the minimum order for wholesale beef?"
                answer="We accept orders starting from AED 500 in Dubai and AED 1,000 for other Emirates."
              />
              <FaqItem 
                question="Do you deliver to Abu Dhabi and other Emirates?"
                answer="Yes, we deliver across all UAE Emirates with refrigerated trucks."
              />
              <FaqItem 
                question="Can I order custom cuts?"
                answer="Absolutely. We cut beef to your exact specifications – thickness, weight per portion, bone-in or boneless."
              />
              <FaqItem 
                question="Is your beef halal certified?"
                answer="Yes, all our beef is 100% halal certified and approved by UAE authorities."
              />
              <FaqItem 
                question="How fresh is the beef?"
                answer="We deliver within 24 hours of slaughter for Dubai orders. All meat is chilled and vacuum-packed."
              />
              <FaqItem 
                question="Do you supply hotels and large catering companies?"
                answer="Yes, we have dedicated bulk supply programs for hotels, catering companies, and restaurant chains."
              />
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden bg-primary-container">
          <div className="max-w-4xl mx-auto px-12 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-on-primary mb-8 leading-tight">Get Wholesale Beef Pricing – Delivered to Your Kitchen in Dubai</h2>
            <p className="text-xl text-on-primary-container/90 mb-12">Connect with our wholesale specialist today for a personalized quote and bulk case pricing list.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 transition-all shadow-2xl" href="https://wa.me/971000000000">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Wholesale Desk
              </a>
              <button className="bg-surface text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-surface-bright transition-all shadow-2xl">
                Email Bulk Request
              </button>
            </div>
            <div className="mt-12 text-on-primary-container/60 font-body">
              <p>Direct Inquiries: +971 50 2778726 | sales@marahibfoods.com</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <details className="group bg-surface rounded-xl p-6 cursor-pointer border border-outline-variant/10">
    <summary className="list-none flex justify-between items-center font-bold text-lg">
      <span>Q: {question}</span>
      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
    </summary>
    <p className="mt-4 text-on-surface-variant leading-relaxed">
      A: {answer}
    </p>
  </details>
);

export default BeefWholesale;