import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const values = [
  { number: '01', title: 'Empowerment', description: 'Enabling our 900+ staff to lead with expertise.' },
  { number: '02', title: 'Motivation', description: 'Driven by the pursuit of meat industry perfection.' },
  { number: '03', title: 'Honesty', description: 'Transparent sourcing and ethical production cycles.' },
  { number: '04', title: 'Excellence', description: 'A non-negotiable standard in every cut we deliver.' },
  { number: '05', title: 'Respect', description: 'Honoring our heritage and our global partners.' }
];

const certifications = [
  { icon: 'verified', title: 'MJC Halaal', description: 'Certified by Muslim Judicial Council' },
  { icon: 'security', title: 'FSSC 22000', description: 'International Food Safety Accredited' },
  { icon: 'language', title: 'State Vet ZA', description: 'Approved for Global Import/Export' },
  { icon: 'grade', title: 'Woolworths A-List', description: 'Highest Tier Facility Certification' }
];

const divisions = [
  { title: 'Retail', href: '/retail-beef-mutton-lamb-dubai', description: 'Premium beef, mutton and lamb retail in Dubai.' },
  { title: 'Wholesale', href: '/beef-mutton-lamb-wholesale-dubai', description: 'Wholesale beef, mutton and lamb supplier Dubai.' },
  { title: 'Production', href: '/meat-production-facility-dubai', description: 'Dubai meat production facility for beef and lamb.' },
  { title: 'International', href: '/contact-wholesale-dubai', description: 'Global beef logistics from Dubai to worldwide.' }
];

const About = () => {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body overflow-x-hidden selection:bg-[#ffdad6] selection:text-[#410003]">
      <Header />

      <main className="pt-20">
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
<img
                className="w-full h-full object-cover grayscale-[0.2] contrast-125"
                alt="Master artisan butcher at Marahib Food Stuff Dubai processing premium beef."
                src="/heritage-prime/aging-room.jpg"
              />
            <div className="absolute inset-0 bg-gradient-to-r from-[#610006]/60 to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 max-w-4xl">
            <span className="editorial-kicker text-white font-bold text-sm mb-4 block">Dubai Beef Wholesale Since 2010</span>
<h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
               <span className="block">Premium Beef, Mutton & Lamb</span>
               <span className="block text-2xl md:text-3xl font-normal text-[#ffb3ac] mt-2">Wholesale Supplier • Dubai, UAE</span>
             </h1>
            <div className="h-1 w-24 bg-[#ff9086]"></div>
          </div>
        </section>

        <section className="py-24 bg-[#f8f9fa] flex flex-col lg:flex-row items-center gap-16 px-8 md:px-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="p-12 bg-[#f3f4f5] relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#610006]"></div>
              <span className="editorial-kicker text-[#610006] font-bold text-xs mb-4 block">The Founding Story</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#191c1d] mb-6">The Beginning of Excellence</h2>
              <div className="space-y-6 text-[#5a403c] font-body leading-relaxed">
                <p>In 2010, the Owner of Marahib foods opened the doors of their humble meat business for the first time. What began as a local labor of love in a single butchery has evolved into an international authority in the meat industry.</p>
                <p>Today, Marahib Food Stuff stands as a family-owned and long-established supplier of quality Halaal products. We have grown into a powerhouse with a staff complement exceeding 900 people, each carrying forward the 16-year legacy of uncompromised quality.</p>
                <p>Wholesalers and retailers globally experience our passion firsthand—a passion that began with a singular desire: to build a company that treats butchery as the high art it truly is.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] group">
              <div className="absolute inset-0 bg-[#e1e3e4] -translate-x-6 translate-y-6"></div>
              <img
                className="relative z-10 w-full h-full object-cover"
                alt="A vintage-style black and white portrait of a traditional butcher shop front from the 2010s."
                src="/heritage-prime/aging-room.jpg"
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f3f4f5]">
          <div className="px-8 md:px-24 mb-16">
            <span className="editorial-kicker text-[#610006] font-bold text-xs mb-4 block">Our DNA</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#191c1d]">Vision &amp; Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-4 md:px-12 gap-1">
            {values.map(value => (
              <div key={value.number} className="bg-white p-8 flex flex-col h-64 hover:bg-[#610006] group transition-all duration-500">
                <span className="font-display text-4xl text-[#e3beb8] mb-auto group-hover:text-[#ff9086]">{value.number}</span>
                <h3 className="font-display text-2xl text-[#610006] group-hover:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-[#575f67] group-hover:text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-[#f8f9fa]">
          <div className="px-8 md:px-24 flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="editorial-kicker text-[#610006] font-bold text-xs mb-4 block">Global Standards</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#191c1d]">Uncompromising Certifications</h2>
              <p className="mt-6 text-[#5a403c] font-body">
                Marahib Food Stuff is a proud B-BBEE level 1 contributor. We maintain the highest international food safety standards to ensure every product is worthy of the authority we represent.
              </p>
            </div>
            <div className="hidden lg:block h-px flex-grow bg-[#e3beb8]/30 mb-4 mx-8"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-24">
            {certifications.map(cert => (
              <div key={cert.title} className="flex flex-col items-center p-8 bg-[#f3f4f5] rounded-lg text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 rounded-full bg-[#dfe0ff] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#00178d] text-3xl">{cert.icon}</span>
                </div>
                <h4 className="font-display text-xl text-[#610006] mb-2">{cert.title}</h4>
                <p className="text-sm text-[#575f67]">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-[#e1e3e4] overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
<img
                className="w-full h-full object-cover"
                alt="Professional stainless steel butcher tools on a white marble slab."
                src="/heritage-prime/hero-tomahawk.jpg"
              />
          </div>
          <div className="px-8 md:px-24 relative z-10">
            <span className="editorial-kicker text-[#610006] font-bold text-xs mb-4 block">World of Excellence</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#191c1d] mb-12">Operational Divisions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {divisions.map(division => (
                <Link key={division.title} to={division.href} className="bg-[#f8f9fa] p-8 group hover:premium-gradient transition-all duration-300">
                  <h3 className="font-display text-2xl text-[#610006] group-hover:text-white mb-4">{division.title}</h3>
                  <p className="text-[#5a403c] group-hover:text-white/70 text-sm mb-6">{division.description}</p>
                  <span className="material-symbols-outlined text-[#610006] group-hover:text-white">arrow_forward</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-[#610006] text-white text-center">
          <div className="max-w-3xl mx-auto px-8">
            <div className="w-20 h-20 border-2 border-white/30 mx-auto mb-8 flex items-center justify-center rotate-45">
              <span className="material-symbols-outlined -rotate-45 text-white text-4xl">family_history</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-8 italic">Family Owned, Professionally Driven</h2>
            <p className="font-body text-xl leading-relaxed opacity-90">
              "Our passion began with a desire to build a well-run company that never compromises on quality. Fifty years later, that family-first commitment remains the backbone of Marahib Food Stuff."
            </p>
            <div className="mt-12">
              <p className="font-display text-2xl">— Marahib Management</p>
              <p className="editorial-kicker text-[#ff9086] text-xs mt-2">Guardians of the Legacy</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
