import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Wholesale = () => {
  useEffect(() => {
    document.title = "Wholesale Meat Supplier Dubai – Beef, Mutton & Lamb | UAE Delivery";
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
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden">
      <Header />

      <main className="pt-20">
        <section className="relative h-[870px] flex items-center overflow-hidden bg-surface-container-low">
          <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary font-bold text-sm block mb-4">Wholesale Division</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-on-surface leading-tight mb-6">
                <span className="block">Precision Sourcing</span>
                <span className="block text-2xl md:text-3xl font-normal text-primary mt-2">for the Culinary Elite</span>
              </h1>
              <p className="max-w-xl text-on-surface-variant font-body text-sm md:text-base mb-10 leading-relaxed font-light">
                Supplying Michelin-starred kitchens and global hospitality leaders with a logistics framework as disciplined as their craft. From custom aging to clinical portioning.
              </p>
              <div className="flex items-center gap-6 pt-4">
<a href="/contact-wholesale-dubai" className="primary-gradient-cta text-on-primary px-8 py-4 rounded-md font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1">
                 Establish Partnership
               </a>
               <a href="/beef-ribeye-technical-specs" className="flex items-center gap-2 font-bold text-primary-new group">
                  Technical Catalog <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-90 hidden lg:block">
            <img alt="Wholesale Meat Sourcing" className="w-full h-full object-cover grayscale brightness-75 mix-blend-multiply" src="/heritage-prime/hero-beef.jpg"/>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent z-20"></div>
        </section>

        <section className="py-24 px-8 lg:px-16 bg-surface">
          <div className="container mx-auto">
            <div className="mb-16">
              <span className="text-primary-new font-bold text-editorial-kicker text-sm block">01 / Services</span>
              <h2 className="text-4xl font-serif text-on-surface mt-2 italic font-bold">Wholesale Operations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-low p-8 flex flex-col justify-between group hover:bg-surface-container-lowest transition-colors duration-500">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary-new mb-6">content_cut</span>
                  <h3 className="text-2xl font-serif font-bold mb-4">Custom Portioning</h3>
                  <p className="text-on-surface-variant font-body">Clinical precision to your exact gram-weight specifications. Reducing prep time and waste in high-volume environments.</p>
                </div>
                <ul className="mt-8 space-y-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                  <li>Laser-Guided Trimming</li>
                  <li>Individual Cryo-Sealing</li>
                  <li>Consistent Fat Caps</li>
                </ul>
              </div>
              <div className="bg-primary-new text-on-primary p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="z-10">
                  <span className="material-symbols-outlined text-4xl text-on-primary/50 mb-6">timer</span>
                  <h3 className="text-2xl font-serif font-bold mb-4">Bespoke Aging</h3>
                  <p className="text-on-primary-container font-body leading-relaxed">Our Himalayan Salt aging chambers are yours to command. Commission specific aging profiles from 28 to 120 days.</p>
                </div>
                <div className="mt-8 z-10">
                  <button className="bg-on-primary text-primary-new px-6 py-2 rounded-md font-bold text-sm">View Vault Capacity</button>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <span className="material-symbols-outlined text-[200px]">ac_unit</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 flex flex-col justify-between group hover:bg-surface-container-lowest transition-colors duration-500">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary-new mb-6">inventory</span>
                  <h3 className="text-2xl font-serif font-bold mb-4">Bulk Logistics</h3>
                  <p className="text-on-surface-variant font-body">Direct-from-farm procurement pipelines for regional hospitality groups and international hotel chains.</p>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-1 text-tertiary">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                    <span className="text-xs font-bold uppercase tracking-tighter">Certified Provenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden">
                <img alt="Cold Chain Logistics Dubai Beef Wholesale" className="w-full h-full object-cover" src="/heritage-prime/wholesale-logistics.jpg"/>
              </div>
              <div className="absolute -right-8 bottom-12 bg-tertiary text-on-tertiary p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined">thermostat</span>
                  <span className="font-bold uppercase text-xs tracking-widest">Cold Chain Integrity</span>
                </div>
                <p className="text-sm italic font-serif">Constant monitoring via IoT sensors ensuring a consistent 1.5°C from vault to your loading bay.</p>
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-primary-new font-bold text-editorial-kicker text-sm block">02 / Logistics</span>
              <h2 className="text-5xl font-serif font-bold text-on-surface leading-tight italic">
                Excellence in <br/>Distribution.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Our fleet is an extension of our butchery. Every vehicle is custom-fitted with independent climate zones for dry-aged assets and fresh cuts, maintaining the exact atmospheric conditions required for culinary integrity.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <span className="block text-3xl font-black text-primary-container font-serif italic tracking-tighter">99.8%</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">On-Time Accuracy</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-primary-container font-serif italic tracking-tighter">Zero</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Temperature Breakage</span>
                </div>
              </div>
<a href="/contact-wholesale-dubai" className="border-b-2 border-primary-new text-primary-new font-bold py-2 hover:bg-primary-new hover:text-on-primary px-4 transition-all">
                Review Distribution Map
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface px-8 lg:px-16 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <span className="text-primary-new font-bold text-editorial-kicker text-sm block">03 / Inventory Data</span>
                <h2 className="text-4xl font-serif text-on-surface mt-2 italic font-bold">The Wholesale Ledger</h2>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-fixed rounded-full text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary-new animate-pulse"></span> LIVE INVENTORY
                </div>
              </div>
            </div>
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high text-on-surface-variant font-sans uppercase tracking-[0.2em] text-[10px]">
                    <th className="p-6">Product Grade</th>
                    <th className="p-6">Origin &amp; Breed</th>
                    <th className="p-6">Aging Profile</th>
                    <th className="p-6">Stock Status</th>
                    <th className="p-6">Price Tier</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-body">
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
                    <td className="p-6 font-bold flex items-center gap-3">
                      <div className="w-8 h-8 bg-tertiary-container text-on-tertiary-container flex items-center justify-center rounded-sm font-serif italic">P</div>
                      A5 Wagyu Ribeye
                    </td>
                    <td className="p-6 italic">Miyazaki, Japan</td>
                    <td className="p-6">Wet Aged 21 Days</td>
                    <td className="p-6">
                      <span className="flex items-center gap-2 text-primary-new font-bold">
                        <span className="material-symbols-outlined scale-75">warning</span> Low Stock
                      </span>
                    </td>
                    <td className="p-6 font-bold text-on-surface">Wholesale Tier III</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
                    <td className="p-6 font-bold flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-container text-on-primary-container flex items-center justify-center rounded-sm font-serif italic">B</div>
                      Prime Black Angus
                    </td>
                    <td className="p-6 italic">Creekstone, USA</td>
                    <td className="p-6">Dry Aged 45 Days</td>
                    <td className="p-6 text-slate-500 font-medium">Stable</td>
                    <td className="p-6 font-bold text-on-surface">Wholesale Tier I</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
                    <td className="p-6 font-bold flex items-center gap-3">
                      <div className="w-8 h-8 bg-tertiary-container text-on-tertiary-container flex items-center justify-center rounded-sm font-serif italic">P</div>
                      Heritage Pork Loin
                    </td>
                    <td className="p-6 italic">Berkshire, UK</td>
                    <td className="p-6">Fresh / Salt Cured</td>
                    <td className="p-6 text-slate-500 font-medium">Ready</td>
                    <td className="p-6 font-bold text-on-surface">Wholesale Tier II</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-highest/30 px-8 lg:px-16">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary-new font-bold text-editorial-kicker text-sm block">04 / Contact</span>
              <h2 className="text-5xl font-serif font-bold text-on-surface mt-2 italic">
                Professional <br/>Inquiry.
              </h2>
              <p className="text-lg text-on-surface-variant mt-6 leading-relaxed max-w-md">
                Our partnership managers are veterans of the hospitality industry. Describe your program, and we will tailor a procurement strategy for your scale.
              </p>
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-primary-new">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Direct Line</p>
                    <p className="text-lg font-bold">+971 50 2778726</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-primary-new">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Email Portal</p>
                    <p className="text-lg font-bold">wholesale@marahibfoods.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 shadow-2xl border-t-4 border-primary-new">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-slate-500">Contact Name</label>
                    <input className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary transition-all font-body px-0" placeholder="Chef/Manager Name" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-slate-500">Establishment</label>
                    <input className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary transition-all font-body px-0" placeholder="Restaurant / Hotel Name" type="text"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-500">Inquiry Type</label>
                  <select className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary transition-all font-body px-0">
                    <option>New Partnership Setup</option>
                    <option>Custom Portioning Request</option>
                    <option>Export/International Inquiry</option>
                    <option>Bespoke Aging Program</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-500">Message / Program Scope</label>
                  <textarea className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-primary transition-all font-body px-0" placeholder="Describe your culinary vision and estimated weekly volume..." rows={4}></textarea>
                </div>
                <button className="w-full bg-primary-new text-on-primary font-bold py-4 rounded-sm tracking-widest uppercase text-xs hover:scale-[0.99] transition-transform shadow-lg">
                  Submit Dossier
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Wholesale;