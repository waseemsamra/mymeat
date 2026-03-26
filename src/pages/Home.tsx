import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { fetchHeroData, type HeroData } from '../lib/heroService';
import { HOMEPAGE_S3_IMAGES } from '../data/s3Images';

const Home = () => {
  // Initialize with S3 images to prevent flicker
  const [heroData, setHeroData] = useState<HeroData>({
    id: 'hero-1',
    headline: 'Nurturing the Global Harvest.',
    description: 'We bridge the distance between origin and table through sophisticated logistics and uncompromising standards of agricultural curation.',
    tagline: 'Established 1984 — Global Curators',
    button1Text: 'View Portfolios',
    button1Link: '/products',
    button2Text: 'Our Reach',
    button2Link: '/about',
    imageUrl: HOMEPAGE_S3_IMAGES.heroMain,
    isActive: true,
    updatedAt: new Date().toISOString()
  });

  useEffect(() => {
    loadHeroData();
  }, []);

  const loadHeroData = async () => {
    // Load hero data from API (which gets it from S3/DynamoDB)
    try {
      const data = await fetchHeroData();
      if (data) {
        console.log('✅ Hero data loaded from API/S3');
        console.log('🖼️ Image URL from API:', data.imageUrl);
        
        // Check if image URL is the placeholder or doesn't exist
        const isPlaceholder = data.imageUrl?.includes('hero-image.jpg') || !data.imageUrl;
        
        if (isPlaceholder) {
          console.log('⚠️ Placeholder image detected, using S3 fallback');
          // Use S3 images from configuration
          setHeroData({
            ...data,
            imageUrl: HOMEPAGE_S3_IMAGES.heroMain
          });
        } else {
          // Use image from API
          setHeroData(data);
        }
        return;
      }
    } catch (error) {
      console.log('⚠️ API not available, using S3 images');
    }
    
    // Fallback: Use S3 images directly
    console.log('📸 Using S3 images from configuration');
  };

  return (
    <div className="bg-[#fafaf5] font-body text-on-surface antialiased selection:bg-[#acf4a4] selection:text-[#002203]">
      {/* Top Navigation */}
      <Navigation />

      <main className="pt-20">
        {/* Section 1: Hero Slider (Cinematic) */}
        <section className="relative h-[829px] w-full overflow-hidden bg-[#00450d]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Hero slide"
              className="w-full h-full object-cover opacity-80 scale-105"
              src={heroData?.imageUrl || HOMEPAGE_S3_IMAGES.heroMain}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00450d]/60 via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10 flex flex-col justify-end h-full px-12 pb-24 max-w-7xl mx-auto">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-[#ffdeac] mb-6 block">
              {heroData?.tagline || 'Established 1984 — Global Curators'}
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter mb-8 max-w-4xl">
              {heroData?.headline || 'Nurturing the Global Harvest.'}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10">
              {heroData?.description || 'We bridge the distance between origin and table through sophisticated logistics and uncompromising standards of agricultural curation.'}
            </p>
            <div className="flex gap-4">
              <Link
                to={heroData?.button1Link || '/products'}
                className="bg-white text-[#00450d] px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-md hover:bg-[#e8e8e3] transition-all"
              >
                {heroData?.button1Text || 'View Portfolios'}
              </Link>
              <Link
                to={heroData?.button2Link || '/about'}
                className="border border-white/30 text-white backdrop-blur-sm px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-md hover:bg-white/10 transition-all"
              >
                {heroData?.button2Text || 'Our Reach'}
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: The Curated Portfolios (Asymmetric Grid) */}
        <section className="py-32 px-12 bg-[#fafaf5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-[#00450d]">The Portfolios</h2>
              <p className="max-w-md text-[#41493e] leading-relaxed">Six distinct categories, sourced with surgical precision from the world's most fertile regions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* Item 1: Large Rice/Spices */}
              <Link to="/products/rice-spices" className="md:col-span-8 group relative overflow-hidden rounded-xl h-[500px] cursor-pointer">
                <img
                  alt="Overhead view of artisanal spices"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={HOMEPAGE_S3_IMAGES.portfolioRiceSpices}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#ffdeac] mb-2 block">Origin: South Asia</span>
                  <h3 className="text-3xl font-headline font-bold">Rice & Rare Spices</h3>
                </div>
              </Link>
              {/* Item 2: Vertical Fruits */}
              <Link to="/products/fruits-vegetables" className="md:col-span-4 group relative overflow-hidden rounded-xl h-[500px] cursor-pointer mt-12 md:mt-24">
                <img
                  alt="Close-up of fresh organic citrus fruits"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={HOMEPAGE_S3_IMAGES.portfolioCitrus}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#ffdeac] mb-2 block">Origin: Mediterranean</span>
                  <h3 className="text-3xl font-headline font-bold">Seasonal Citrus</h3>
                </div>
              </Link>
              {/* Item 3: Grain Portfolio */}
              <div className="md:col-span-5 group relative overflow-hidden rounded-xl h-[400px] cursor-pointer">
                <img
                  alt="Golden wheat field being harvested"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={HOMEPAGE_S3_IMAGES.portfolioGrains}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#ffdeac] mb-2 block">Origin: Central Plains</span>
                  <h3 className="text-3xl font-headline font-bold">Global Grains</h3>
                </div>
              </div>
              {/* Item 4: Logistics/Packaging */}
              <div className="md:col-span-7 group relative overflow-hidden rounded-xl h-[400px] cursor-pointer md:-mt-12">
                <img
                  alt="Fresh vibrant vegetables artfully arranged"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={HOMEPAGE_S3_IMAGES.portfolioProduce}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#ffdeac] mb-2 block">Origin: Global Tropics</span>
                  <h3 className="text-3xl font-headline font-bold">Organic Root Produce</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Leadership & Vision Section */}
        <section className="py-32 bg-[#fafaf5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-12">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
              <div className="w-full md:w-1/2">
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#7a5649] mb-8 block">Leadership Vision</span>
                <blockquote className="relative">
                  <span className="absolute -top-10 -left-10 text-[12rem] text-[#00450d]/5 font-serif pointer-events-none">"</span>
                  <p className="font-headline text-3xl md:text-5xl font-light text-[#00450d] leading-tight mb-12 relative z-10 italic">
                    Food security is the ultimate global bridge. We don't just export commodities; we transport trust and heritage from one soil to another.
                  </p>
                  <cite className="not-italic">
                    <span className="block text-lg font-bold text-[#00450d]">Elena Vasseur</span>
                    <span className="block text-sm uppercase tracking-widest text-[#41493e] font-semibold">Chief Executive Officer</span>
                  </cite>
                </blockquote>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    alt="Portrait of CEO Elena Vasseur"
                    className="w-full h-full object-cover"
                    src={HOMEPAGE_S3_IMAGES.leadershipCeo}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-2xl">
                  <p className="text-sm font-bold text-[#00450d] mb-1">Curation Philosophy</p>
                  <p className="text-xs text-[#41493e] leading-relaxed max-w-[200px]">Balancing ancestral farming techniques with modern traceability protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Global Infrastructure (Technical Elegance) */}
        <section className="py-32 bg-[#eeeee9]">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#acf4a4]/30 rounded-full blur-3xl"></div>
                <img
                  alt="Modern automated refrigerated logistics center"
                  className="relative z-10 rounded-xl shadow-2xl object-cover aspect-square"
                  src={HOMEPAGE_S3_IMAGES.infrastructureLogistics}
                />
                <div className="absolute -bottom-8 -right-8 z-20 bg-[#00450d] p-8 rounded-lg shadow-2xl max-w-[280px]">
                  <p className="text-white text-3xl font-headline font-bold mb-2">99.8%</p>
                  <p className="text-[#acf4a4] text-xs uppercase tracking-widest font-semibold">Cold-Chain Reliability Rate</p>
                </div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#7a5649] mb-6 block">Our Backbone</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-[#00450d] mb-8 leading-tight">Mastering the <br/>Art of Transit.</h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00450d] shrink-0">
                      <span className="material-symbols-outlined">ac_unit</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-[#00450d]">Advanced Cold-Chain</h4>
                      <p className="text-[#41493e] text-sm leading-relaxed">Integrated real-time temperature monitoring from harvest to final destination port.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00450d] shrink-0">
                      <span className="material-symbols-outlined">route</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-[#00450d]">Route Optimization AI</h4>
                      <p className="text-[#41493e] text-sm leading-relaxed">Proprietary algorithms that minimize transit time and carbon footprint for every container.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00450d] shrink-0">
                      <span className="material-symbols-outlined">eco</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-[#00450d]">Sustainability Charter</h4>
                      <p className="text-[#41493e] text-sm leading-relaxed">Zero-waste packaging initiatives and ethically vetted grower networks across five continents.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Strategic Network Map (Dark Section) */}
        <section className="py-32 bg-[#0c0a09] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-12">
            <div className="mb-20">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#ffdeac] mb-4 block">Strategic Scale</span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Global Logistics Matrix</h2>
              <p className="text-stone-400 max-w-2xl leading-relaxed">Our infrastructure spans 42 countries, forming a resilient web of trade corridors designed for speed and product integrity.</p>
            </div>
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 bg-stone-900 shadow-2xl">
              <img
                alt="Detailed high-resolution technical world map"
                className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                src={HOMEPAGE_S3_IMAGES.networkMap}
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg border border-white/10 pointer-events-auto cursor-default">
                    <p className="text-[10px] uppercase tracking-widest text-[#ffdeac] font-bold mb-1">Rotterdam Hub</p>
                    <p className="text-xs text-stone-300">Status: Optimized</p>
                    <p className="text-xs text-stone-300">Volume: +12% MoM</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg border border-white/10 pointer-events-auto cursor-default">
                    <p className="text-[10px] uppercase tracking-widest text-[#ffdeac] font-bold mb-1">Singapore Gateway</p>
                    <p className="text-xs text-stone-300">Status: Active</p>
                    <p className="text-xs text-stone-300">Automation: Level 4</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#00450d] text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-[#0c5216] transition-all pointer-events-auto">
                    Access Live Vessel Tracker
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-headline font-extrabold text-[#ffdeac] mb-2">42</p>
                <p className="text-white/40 uppercase tracking-widest text-[10px]">Origin Countries</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-headline font-extrabold text-[#ffdeac] mb-2">18</p>
                <p className="text-white/40 uppercase tracking-widest text-[10px]">Global Logistics Hubs</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-headline font-extrabold text-[#ffdeac] mb-2">800+</p>
                <p className="text-white/40 uppercase tracking-widest text-[10px]">Certified Growers</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-headline font-extrabold text-[#ffdeac] mb-2">12M</p>
                <p className="text-white/40 uppercase tracking-widest text-[10px]">Metric Tons P.A.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CSR & ESG Section (Editorial Style) */}
        <section className="py-32 px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#7a5649] mb-6 block">Legacy of Stewardship</span>
                <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-[#00450d] leading-tight mb-8">Responsibility <br/>by Design.</h2>
                <p className="text-[#41493e] text-lg leading-relaxed mb-10">Our ESG framework is not a compliance checklist; it's the core philosophy that governs every harvest and every transit.</p>
                <div className="space-y-8">
                  <div className="border-l-4 border-[#ffdeac] pl-6 py-2">
                    <p className="text-2xl font-bold text-[#00450d] mb-1">Carbon Neutral by 2030</p>
                    <p className="text-sm text-[#41493e]">Through fleet electrification and regenerative farming offset programs.</p>
                  </div>
                  <div className="border-l-4 border-[#ffdeac] pl-6 py-2">
                    <p className="text-2xl font-bold text-[#00450d] mb-1">100% Traceability</p>
                    <p className="text-sm text-[#41493e]">Full supply chain transparency enabled by blockchain integration.</p>
                  </div>
                  <div className="border-l-4 border-[#ffdeac] pl-6 py-2">
                    <p className="text-2xl font-bold text-[#00450d] mb-1">Ethical Sourcing</p>
                    <p className="text-sm text-[#41493e]">Vetted partnerships ensuring living wages for all plantation staff.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mt-12">
                  <img
                    alt="Close up of sun-drenched soil being held in calloused hands"
                    className="w-full h-full object-cover"
                    src={HOMEPAGE_S3_IMAGES.csrSoilHands}
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    alt="Aerial view of solar panels integrated into a modern warehouse"
                    className="w-full h-full object-cover"
                    src={HOMEPAGE_S3_IMAGES.csrSolarPanels}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investor & Partner News (Carousel/Journal) */}
        <section className="py-32 bg-[#f4f4ef] overflow-hidden">
          <div className="max-w-7xl mx-auto px-12">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#7a5649] mb-4 block">Corporate Journal</span>
                <h2 className="font-headline text-4xl font-bold text-[#00450d]">Strategic Insights</h2>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-[#00450d]/20 flex items-center justify-center text-[#00450d] hover:bg-[#00450d]/5 transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-[#00450d]/20 flex items-center justify-center text-[#00450d] hover:bg-[#00450d]/5 transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="flex gap-8 overflow-x-auto pb-12 -mx-12 px-12">
              <div className="min-w-[400px] group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    alt="Modern corporate meeting room in Geneva"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={HOMEPAGE_S3_IMAGES.newsGenevaMeeting}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#7a5649] mb-3 block">Trade Agreement | Q3 2024</span>
                <h3 className="text-xl font-headline font-bold text-[#00450d] mb-4 group-hover:underline underline-offset-4 transition-all">Expanding the South-East Asian Grain Corridor</h3>
                <p className="text-[#41493e] text-sm line-clamp-2">The Global Agrarian formalizes partnership with ASEAN trade commission to streamline rice exports.</p>
              </div>
              <div className="min-w-[400px] group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    alt="Close up of a high-tech agricultural laboratory"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={HOMEPAGE_S3_IMAGES.newsAgriLab}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#7a5649] mb-3 block">Innovation | Aug 2024</span>
                <h3 className="text-xl font-headline font-bold text-[#00450d] mb-4 group-hover:underline underline-offset-4 transition-all">Next-Gen Bio-Preservation Labs</h3>
                <p className="text-[#41493e] text-sm line-clamp-2">Opening of the Geneva R&D center focused on extending organic shelf-life without additives.</p>
              </div>
              <div className="min-w-[400px] group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    alt="Professional handshake in a coffee field"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={HOMEPAGE_S3_IMAGES.newsCoffeeHandshake}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#7a5649] mb-3 block">ESG Report | Q2 2024</span>
                <h3 className="text-xl font-headline font-bold text-[#00450d] mb-4 group-hover:underline underline-offset-4 transition-all">Sustainability Award: Global Excellence</h3>
                <p className="text-[#41493e] text-sm line-clamp-2">Our zero-waste packaging initiative recognized by the International Green Trade Council.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action (Corporate Inquiry) */}
        <section className="py-32 bg-[#fafaf5]">
          <div className="max-w-5xl mx-auto px-12">
            <div className="bg-[#00450d] rounded-2xl p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  alt="Abstract pattern of wheat stalks"
                  className="w-full h-full object-cover"
                  src={HOMEPAGE_S3_IMAGES.ctaWheatPattern}
                />
              </div>
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#ffdeac] mb-8 block">Strategic Engagement</span>
                <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">Become a <br/>Strategic Partner</h2>
                <p className="text-white/70 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">Access our full operational capacity, proprietary trade insights, and bulk procurement portal. We invite institutional partners to lead the next era of food security.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="/contact" className="bg-white text-[#00450d] px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-md hover:bg-[#e8e8e3] transition-all">
                    Bulk Inquiry Portal
                  </Link>
                  <Link to="/contact" className="border border-white/30 text-white backdrop-blur-sm px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-md hover:bg-white/10 transition-all">
                    Request Trade Catalog
                  </Link>
                </div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-12">Verified B2B corporate access required for institutional procurement.</p>
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

        .font-headline {
          font-family: 'Manrope', sans-serif;
        }

        .font-body, .font-sans, .font-label {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Home;
