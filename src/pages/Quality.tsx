import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Download, Description } from 'lucide-react';

const Quality = () => {
  return (
    <div className="bg-[#fafaf5] min-h-screen font-sans antialiased">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Quality Control Laboratory"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c19]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <span className="text-[#ffdeac] uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Quality Assurance</span>
              <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] mb-8 tracking-tighter">
                Uncompromising Quality: From <span className="text-[#acf4a4]">Farm to Port</span>
              </h1>
              <p className="text-white/80 text-xl max-w-xl leading-relaxed font-light mb-10">
                Every shipment undergoes rigorous multi-point inspection to ensure it meets the highest international standards for safety, freshness, and excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-[#00450d] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#1b5e20] transition-all">
                  Request Quality Report
                </Link>
                <Link to="/services" className="border border-white/30 text-white backdrop-blur-sm px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-all">
                  View Certifications
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Promise Section */}
        <section className="py-32 bg-[#fafaf5]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-[#00450d] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Our Commitment</span>
              <h2 className="font-headline font-extrabold text-4xl text-[#1a1c19] mb-6">The Quality Promise</h2>
              <p className="text-[#41493e] text-lg leading-relaxed">
                Quality is not an afterthought—it's woven into every step of our supply chain. From the moment a crop is identified for harvest to the final container seal, we maintain an unbroken chain of quality assurance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#ffffff] p-8 rounded-xl editorial-shadow">
                <Verified className="text-[#00450d] w-12 h-12 mb-6" />
                <h3 className="font-headline font-bold text-xl mb-4">100% Traceability</h3>
                <p className="text-[#41493e] text-sm leading-relaxed">Every batch is tracked from origin farm through final delivery with complete documentation and chain of custody records.</p>
              </div>

              <div className="bg-[#ffffff] p-8 rounded-xl editorial-shadow">
                <span className="material-symbols-outlined w-6 h-6">security</span>
                <h3 className="font-headline font-bold text-xl mb-4">Zero Compromise</h3>
                <p className="text-[#41493e] text-sm leading-relaxed">We reject any shipment that doesn't meet our stringent quality parameters, ensuring only excellence reaches your facility.</p>
              </div>

              <div className="bg-[#ffffff] p-8 rounded-xl editorial-shadow">
                <span className="material-symbols-outlined w-6 h-6">workspace_premium</span>
                <h3 className="font-headline font-bold text-xl mb-4">Certified Excellence</h3>
                <p className="text-[#41493e] text-sm leading-relaxed">Our partners hold internationally recognized certifications including Global GAP, BRCGS, HACCP, and ISO 22000.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Point Inspection Process */}
        <section className="py-32 bg-[#f4f4ef]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <span className="text-[#00450d] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Inspection Protocol</span>
              <h2 className="font-headline font-extrabold text-4xl text-[#1a1c19] mb-6">Multi-Point Quality Inspection</h2>
              <p className="text-[#41493e] text-lg max-w-2xl mx-auto">
                Our five-stage inspection process ensures every product meets specifications before, during, and after transit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  icon: FileCheck,
                  step: '01',
                  title: 'Pre-Harvest',
                  description: 'Soil analysis, crop health assessment, and maturity testing at origin farms.'
                },
                {
                  icon: "microscope",
                  step: '02',
                  title: 'Laboratory Testing',
                  description: 'Comprehensive lab analysis for pesticides, heavy metals, and microbial content.'
                },
                {
                  icon: "check_circle",
                  step: '03',
                  title: 'Pre-Shipment',
                  description: 'Final visual inspection, packaging integrity check, and temperature verification.'
                },
                {
                  icon: "local_shipping",
                  step: '04',
                  title: 'In-Transit',
                  description: 'Real-time monitoring of temperature, humidity, and ethylene levels during transit.'
                },
                {
                  icon: "workspace_premium",
                  step: '05',
                  title: 'Destination Audit',
                  description: 'Final quality verification upon arrival with comprehensive documentation handover.'
                }
              ].map((stage) => (
                <div key={stage.step} className="bg-[#ffffff] p-6 rounded-xl editorial-shadow text-center relative group hover:bg-[#fafaf5] transition-all">
                  <div className="text-[6rem] font-black text-[#1a1c19]/5 absolute -top-8 -left-4 pointer-events-none">{stage.step}</div>
                  <div className="relative z-10">
                    <div className="bg-[#00450d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00450d] transition-colors">
                      <stage.icon className="w-8 h-8 text-[#00450d] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-headline font-bold text-lg mb-2">{stage.title}</h3>
                    <p className="text-[#41493e] text-sm leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-32 bg-[#fafaf5]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <img
                  alt="Quality Certifications"
                  className="rounded-xl shadow-2xl"
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-[#00450d] font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Global Standards</span>
                <h2 className="font-headline font-extrabold text-4xl text-[#1a1c19] mb-8">Internationally Recognized Certifications</h2>
                <p className="text-[#41493e] text-lg mb-12 leading-relaxed">
                  Our commitment to excellence is backed by internationally recognized certifications that validate our processes, facilities, and products.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1b5e20] p-3 rounded-lg">
                      <span className="material-symbols-outlined w-12 h-12">language</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-[#00450d] mb-2">Global GAP Certified</h4>
                      <p className="text-[#41493e] text-sm">Good Agricultural Practices certification ensuring safe and sustainable agricultural production.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1b5e20] p-3 rounded-lg">
                      <span className="material-symbols-outlined w-6 h-6">security</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-[#00450d] mb-2">BRCGS Food Safety</h4>
                      <p className="text-[#41493e] text-sm">British Retail Consortium Global Standards for food safety and quality management.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1b5e20] p-3 rounded-lg">
                      <span className="material-symbols-outlined w-6 h-6">fact_check</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-[#00450d] mb-2">HACCP Certified</h4>
                      <p className="text-[#41493e] text-sm">Hazard Analysis Critical Control Point certification for food safety management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Metrics Section */}
        <section className="py-32 bg-[#2f312e] text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="font-headline font-extrabold text-4xl mb-6">Quality Performance Metrics</h2>
              <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                Our commitment to excellence is measured and tracked across every shipment. Here's how we perform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: "trending_up",
                  metric: '99.7%',
                  label: 'Quality Acceptance Rate',
                  description: 'Shipments meeting all quality specifications'
                },
                {
                  icon: "schedule",
                  metric: '<24h',
                  label: 'Lab Testing Turnaround',
                  description: 'Average time from sample to results'
                },
                {
                  icon: "check_circle",
                  metric: '100%',
                  label: 'Traceability Coverage',
                  description: 'Complete farm-to-port documentation'
                },
                {
                  icon: "workspace_premium",
                  metric: '15+',
                  label: 'Years Excellence',
                  description: 'Continuous quality improvement journey'
                }
              ].map((stat) => (
                <div key={stat.label} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 text-center">
                  <stat.icon className="text-[#ffba38] w-12 h-12 mb-6 mx-auto" />
                  <div className="text-4xl font-black text-white mb-2">{stat.metric}</div>
                  <div className="text-[#91d78a] font-bold text-sm uppercase tracking-widest mb-2">{stat.label}</div>
                  <p className="text-stone-400 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance CTA */}
        <section className="py-32 bg-[#fafaf5]">
          <div className="max-w-5xl mx-auto px-8">
            <div className="bg-[#00450d] rounded-[2rem] p-16 relative overflow-hidden text-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="grid grid-cols-12 gap-4 h-full">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="border-r border-white"></div>
                  ))}
                </div>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-8">Ready to Experience Quality Excellence?</h2>
                <p className="text-[#90d689] text-xl mb-12 max-w-2xl mx-auto">
                  Partner with us and benefit from our uncompromising commitment to quality at every stage of your supply chain.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <Link to="/contact" className="bg-[#ffdeac] text-white px-12 py-5 rounded font-headline font-extrabold text-lg hover:bg-[#ffba38] transition-all shadow-xl">
                    Request Quality Documentation
                  </Link>
                  <Link to="/contact" className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded font-headline font-extrabold text-lg hover:bg-white/10 transition-all">
                    Schedule Facility Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap');
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
        
        .editorial-shadow {
          box-shadow: 0 20px 40px rgba(26, 28, 25, 0.06);
        }
      `}</style>
    </div>
  );
};

export default Quality;
