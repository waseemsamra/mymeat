import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
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
    <div className="bg-[#f8f9fa] font-body text-on-surface overflow-x-hidden">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-8 overflow-hidden bg-[#f3f4f5]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-bold mb-4 block">Dubai Beef, Mutton & Lamb Wholesale</span>
              <h1 className="font-display text-5xl lg:text-7xl text-on-surface leading-tight mb-6">
                <span className="block">Contact: Wahat Al Zaad Meat</span>
                <span className="block text-2xl lg:text-3xl font-normal text-primary mt-2">Premium Meat Supplier Dubai UAE</span>
              </h1>
              <p className="font-body text-sm md:text-base text-on-surface-variant max-w-xl leading-relaxed">
                Wahat Al Zaad Meat - Dubai's premier beef, mutton and lamb wholesale supplier. Contact us for USDA Prime halal certified meat sourcing.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/5] bg-[#e7e8e9] relative overflow-hidden rounded-xl shadow-2xl">
                <img className="w-full h-full object-cover" alt="Professional master butcher holding a chef's knife next to a marble slab." src="/heritage-prime/heritage-dry-aged-ribeye.jpg"/>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Main Content Area: Bento Grid Layout */}
        <section className="px-8 -mt-16 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form Card */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-xl shadow-sm">
              <div className="mb-10">
                <h2 className="font-display text-3xl text-[#191c1d] mb-2">Technical Inquiry &amp; Partnership Requests</h2>
                <p className="font-body text-sm text-[#5a403c]">Please provide detailed specifications for wholesale or international logistics queries.</p>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="text-[10px] uppercase font-bold text-[#610006] tracking-widest mb-1 block">First Name</label>
                    <input className="w-full bg-[#e7e8e9] border-b-2 border-[#e3beb8]/30 px-0 py-3 text-[#191c1d] placeholder:text-[#8e706b]/50 transition-all border-x-0 border-t-0 focus:border-[#610006] focus:ring-0 outline-none" placeholder="e.g. Julian" type="text"/>
                  </div>
                  <div className="relative">
                    <label className="text-[10px] uppercase font-bold text-[#610006] tracking-widest mb-1 block">Last Name</label>
                    <input className="w-full bg-[#e7e8e9] border-b-2 border-[#e3beb8]/30 px-0 py-3 text-[#191c1d] placeholder:text-[#8e706b]/50 transition-all border-x-0 border-t-0 focus:border-[#610006] focus:ring-0 outline-none" placeholder="e.g. Vane" type="text"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="text-[10px] uppercase font-bold text-[#610006] tracking-widest mb-1 block">Email Address</label>
                    <input className="w-full bg-[#e7e8e9] border-b-2 border-[#e3beb8]/30 px-0 py-3 text-[#191c1d] placeholder:text-[#8e706b]/50 transition-all border-x-0 border-t-0 focus:border-[#610006] focus:ring-0 outline-none" placeholder="direct@wazmeat.com" type="email"/>
                  </div>
                  <div className="relative">
                    <label className="text-[10px] uppercase font-bold text-[#610006] tracking-widest mb-1 block">Organization</label>
                    <input className="w-full bg-[#e7e8e9] border-b-2 border-[#e3beb8]/30 px-0 py-3 text-[#191c1d] placeholder:text-[#8e706b]/50 transition-all border-x-0 border-t-0 focus:border-[#610006] focus:ring-0 outline-none" placeholder="Company Name" type="text"/>
                  </div>
                </div>
                <div className="relative">
                  <label className="text-[10px] uppercase font-bold text-[#610006] tracking-widest mb-1 block">Division</label>
                  <select className="w-full bg-[#e7e8e9] border-b-2 border-[#e3beb8]/30 px-0 py-3 text-[#191c1d] transition-all border-x-0 border-t-0 appearance-none focus:border-[#610006] focus:ring-0 outline-none">
                    <option>Wholesale</option>
                    <option>Retail</option>
                    <option>International</option>
                    <option>Production</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="text-[10px] uppercase font-bold text-[#610006] tracking-widest mb-1 block">Technical Message</label>
                  <textarea className="w-full bg-[#e7e8e9] border-b-2 border-[#e3beb8]/30 px-0 py-3 text-[#191c1d] placeholder:text-[#8e706b]/50 transition-all border-x-0 border-t-0 resize-none focus:border-[#610006] focus:ring-0 outline-none" placeholder="Describe your requirements in detail..." rows={4}></textarea>
                </div>
                <button className="w-full md:w-auto bg-gradient-to-br from-[#610006] to-[#831718] text-white px-12 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:-translate-y-1 transition-transform duration-300 shadow-xl flex items-center justify-center gap-3 group">
                  Submit Inquiry
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </form>
            </div>

            {/* Divisional Directory & Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Directory Card */}
              <div className="bg-[#2e3132] text-white p-8 rounded-xl shadow-lg">
                <h2 className="font-display text-2xl mb-8 border-b border-white/10 pb-4">Divisional Directory</h2>
                <div className="space-y-8">
                  {/* Wholesale Hub */}
                  <div className="group">
                    <h3 className="text-label-sm text-[#ffb3ac] text-[10px] mb-2">PRO PROCUREMENT</h3>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-display text-lg">The Wholesale Hub</p>
                        <p className="font-body text-xs opacity-60">wholesale@wazmeat.com</p>
                      </div>
                      <span className="font-body text-sm font-medium text-[#f8f9fa]">+971 56 191 0177</span>
                    </div>
                  </div>
                  {/* Retail Boutique */}
                  <div className="group">
                    <h3 className="text-label-sm text-[#ffb3ac] text-[10px] mb-2">CONSUMER INQUIRIES</h3>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-display text-lg">The Retail Boutique</p>
                        <p className="font-body text-xs opacity-60">retail@wazmeat.com</p>
                      </div>
                      <span className="font-body text-sm font-medium text-[#f8f9fa]">+971 56 191 0177</span>
                    </div>
                  </div>
                  {/* International Desk */}
                  <div className="group">
                    <h3 className="text-label-sm text-[#ffb3ac] text-[10px] mb-2">GLOBAL LOGISTICS</h3>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-display text-lg">The International Desk</p>
                        <p className="font-body text-xs opacity-60">international@wazmeat.com</p>
                      </div>
                      <span className="font-body text-sm font-medium text-[#f8f9fa]">+971 56 191 0177</span>
                    </div>
                  </div>
                  {/* Operational Facilities */}
                  <div className="group">
                    <h3 className="text-label-sm text-[#ffb3ac] text-[10px] mb-2">PRODUCTION &amp; SAFETY</h3>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-display text-lg">Operational Facilities</p>
                        <p className="font-body text-xs opacity-60">operations@wazmeat.com</p>
                      </div>
                      <span className="font-body text-sm font-medium text-[#f8f9fa]">+971 56 191 0177</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Provenance Badge Section */}
              <div className="bg-[#dfe0ff] text-[#00178d] p-8 rounded-xl flex items-center gap-6 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl mb-4">verified</span>
                  <h3 className="font-display text-xl mb-2">Provenance Registry</h3>
                  <p className="font-body text-xs opacity-80 leading-relaxed">
                    Every shipment is registered under our proprietary Wahat Al Zaad Meat protocol. Scan your QR code to verify technical heritage.
                  </p>
                </div>
                <div className="absolute -right-10 -top-10 opacity-10 rotate-12">
                  <span className="material-symbols-outlined text-[120px]" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Presence */}
        <section className="mt-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span className="text-label-sm text-primary uppercase text-xs mb-2 block tracking-[0.3em]">Geospatial Presence</span>
                <h2 className="font-display text-5xl text-on-surface">The Map</h2>
              </div>
              <div className="text-right">
                <p className="font-body font-bold text-[#191c1d]">Global Headquarters</p>
                <p className="font-body text-sm text-[#5a403c]">Dubai, UAE</p>
              </div>
            </div>
            <div className="h-[500px] w-full rounded-2xl overflow-hidden relative shadow-2xl group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d361062.8901919603!2d55.17327137456963!3d25.14054072122059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4340de9e5a3b%3A0x2a8d7b9b9b9b9b9b!2sDubai%2C%20UAE!5e0!3m2!1sen!2sae!4v1718710000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wahat Al Zaad Meat Dubai Location"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;