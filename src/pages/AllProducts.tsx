import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Hardcoded product data - in production this would come from an API or database
const allProductsData = {
  version: "1.0.0",
  lastUpdated: "2026-03-28T00:00:00Z",
  categories: [
    {
      id: "rice-spices",
      name: "Rice & Spices",
      description: "Sourcing long-grain Basmati, Jasmine, and rare heritage spices directly from cooperatives across South Asia and the Mediterranean.",
      image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=800",
      products: [
        {
          id: "aged-basmati",
          name: "Aged Basmati Rice",
          origin: "Punjab Region, India",
          description: "Premium 2-year aged Basmati with exceptional grain length and aromatic profile",
          image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
          specifications: {
            grainLength: "8.4mm+",
            aroma: "Nutty & Floral",
            aging: "24 months"
          },
          moq: "10 MT",
          packaging: "25kg/50kg bags"
        },
        {
          id: "jasmine-rice",
          name: "Thai Jasmine Rice",
          origin: "Thailand",
          description: "Fragrant Hom Mali rice with soft texture and subtle pandan aroma",
          image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
          specifications: {
            grainLength: "7.2mm",
            aroma: "Pandan & Floral",
            type: "Hom Mali 105"
          },
          moq: "15 MT",
          packaging: "5kg/10kg/25kg bags"
        },
        {
          id: "saffron",
          name: "Spanish Saffron Grade 1",
          origin: "La Mancha, Spain",
          description: "Premium Grade 1 saffron threads with intense color and aroma",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            grade: "Category I",
            color: "250+ ISO",
            aroma: "Safranal >30"
          },
          moq: "5 kg",
          packaging: "100g/500g sealed"
        },
        {
          id: "black-pepper",
          name: "Tellicherry Black Pepper",
          origin: "Kerala, India",
          description: "Large grade black pepper with bold flavor and citrus notes",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            grade: "Tellicherry Garbled",
            size: "4.5mm+",
            astacol: "400+"
          },
          moq: "5 MT",
          packaging: "25kg jute bags"
        }
      ]
    },
    {
      id: "fruits-vegetables",
      name: "Fruits & Vegetables",
      description: "Seasonal harvests and year-round staples maintained through precision temperature-controlled logistics from farm gate to port.",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800",
      products: [
        {
          id: "alphonso-mango",
          name: "Alphonso Mangoes",
          origin: "Ratnagiri, India",
          description: "Hand-picked premium Alphonso with fiber-less texture and rich sweetness",
          image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600",
          specifications: {
            variety: "Hapus/Alphonso",
            season: "April-June",
            brix: "18-22%"
          },
          moq: "5 MT",
          packaging: "4-layer corrugated boxes"
        },
        {
          id: "kishu-mandarin",
          name: "Kishu Mandarin Oranges",
          origin: "Ehime, Japan",
          description: "Seedless, easy-peel citrus with exceptional sweetness",
          image: "https://images.unsplash.com/photo-1582979512210-99b6a53385f9?w=600",
          specifications: {
            variety: "Kishu",
            size: "S-M",
            brix: "12-14%"
          },
          moq: "3 MT",
          packaging: "5kg cartons"
        },
        {
          id: "baby-corn",
          name: "Fresh Baby Corn",
          origin: "Thailand",
          description: "Tender baby corn harvested at peak freshness for premium markets",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            length: "6-8cm",
            grade: "Class I",
            coldChain: "Required"
          },
          moq: "2 MT",
          packaging: "5kg vacuum packs"
        }
      ]
    },
    {
      id: "nuts-flavors",
      name: "Nuts & Flavors",
      description: "High-yield almonds, cashews, and botanical extracts tailored for large-scale food manufacturing and gourmet retail bulk buy.",
      image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=800",
      products: [
        {
          id: "california-almonds",
          name: "California Almonds",
          origin: "California, USA",
          description: "Premium Nonpareil almonds with uniform size and clean taste",
          image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d49?w=600",
          specifications: {
            variety: "Nonpareil",
            size: "23-25 count/oz",
            grade: "Extra No. 1"
          },
          moq: "10 MT",
          packaging: "25lb vacuum bags"
        },
        {
          id: "vietnam-cashews",
          name: "Vietnam Cashews W320",
          origin: "Dong Nai, Vietnam",
          description: "Whole white cashews with crisp texture and buttery flavor",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            grade: "W320",
            type: "Whole White",
            moisture: "<5%"
          },
          moq: "5 MT",
          packaging: "25kg nitrogen flush"
        },
        {
          id: "pistachios",
          name: "Iranian Pistachios",
          origin: "Kerman, Iran",
          description: "Naturally opened Akbari pistachios with rich flavor",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            variety: "Akbari",
            size: "28-30 count/oz",
            openShell: "98%+"
          },
          moq: "5 MT",
          packaging: "10kg vacuum bags"
        }
      ]
    },
    {
      id: "canned-goods",
      name: "Canned Foods",
      description: "Advanced preservation techniques that lock in peak-season nutrition for long-haul stability and inventory resilience.",
      image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=800",
      products: [
        {
          id: "canned-tomatoes",
          name: "Italian San Marzano Tomatoes",
          origin: "Campania, Italy",
          description: "DOP certified whole peeled tomatoes in rich juice",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            variety: "San Marzano DOP",
            brix: "4.5-5.5",
            ph: "4.2-4.4"
          },
          moq: "1000 cartons",
          packaging: "400g/800g cans"
        },
        {
          id: "canned-corn",
          name: "Sweet Corn Kernels",
          origin: "Thailand",
          description: "Premium sweet corn in brine, harvested at peak ripeness",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            grade: "Class A",
            brix: "14-16%",
            color: "Golden Yellow"
          },
          moq: "500 cartons",
          packaging: "425g/3kg cans"
        },
        {
          id: "canned-mushrooms",
          name: "Button Mushrooms",
          origin: "China",
          description: "Whole button mushrooms in brine, firm texture",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            grade: "Whole A",
            size: "22-28mm",
            ph: "3.8-4.2"
          },
          moq: "500 cartons",
          packaging: "400g/3kg cans"
        }
      ]
    },
    {
      id: "meat-seafood",
      name: "Meat & Seafood",
      description: "Sustainably sourced protein from certified ethical producers, adhering to rigorous cold-chain protocols for global export.",
      image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=800",
      products: [
        {
          id: "wagyu-ribeye",
          name: "Japanese A5 Wagyu Ribeye",
          origin: "Miyazaki, Japan",
          description: "Premium A5 certified ribeye with exceptional marbling",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            grade: "A5 BMS 10-12",
            cut: "Ribeye Roll",
            aging: "28 days"
          },
          moq: "100 kg",
          packaging: "Vacuum sealed, frozen"
        },
        {
          id: "atlantic-salmon",
          name: "Norwegian Atlantic Salmon",
          origin: "Norway",
          description: "Fresh ASC certified salmon fillets, premium grade",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            grade: "Superior",
            fat: "16-18%",
            certification: "ASC"
          },
          moq: "500 kg",
          packaging: "MAP fresh, iced"
        },
        {
          id: "lamb-carcass",
          name: "New Zealand Lamb Carcass",
          origin: "New Zealand",
          description: "Grass-fed lamb carcass, Halal certified",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            weight: "16-20kg",
            grade: "Prime",
            certification: "Halal"
          },
          moq: "50 carcasses",
          packaging: "Frozen whole"
        }
      ]
    },
    {
      id: "bakery-products",
      name: "Bakery Products",
      description: "Par-baked and artisanal grain solutions designed for high-volume hospitality and international distribution networks.",
      image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=800",
      products: [
        {
          id: "sourdough-loaf",
          name: "Artisan Sourdough Loaves",
          origin: "France",
          description: "Traditional long-fermentation sourdough, par-baked",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            weight: "500g",
            fermentation: "48 hours",
            shelfLife: "12 months frozen"
          },
          moq: "2000 units",
          packaging: "Individually wrapped"
        },
        {
          id: "croissants",
          name: "French Butter Croissants",
          origin: "France",
          description: "Pure butter croissants, ready-to-bake frozen",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            butter: "AOP Charentes",
            layers: "27 folds",
            weight: "65g"
          },
          moq: "5000 units",
          packaging: "Tray packed frozen"
        },
        {
          id: "ciabatta",
          name: "Italian Ciabatta Rolls",
          origin: "Italy",
          description: "Authentic high-hydration ciabatta with open crumb",
          image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
          specifications: {
            hydration: "80%",
            weight: "80g",
            type: "Par-baked"
          },
          moq: "3000 units",
          packaging: "Bulk frozen"
        }
      ]
    }
  ]
};

const AllProducts = () => {
  return (
    <div className="bg-[#fafaf5] min-h-screen font-sans antialiased">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#00450d] py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-[#ffdeac] text-[#604100] font-sans text-[0.75rem] uppercase tracking-widest rounded-sm mb-6">
                Complete Portfolio
              </span>
              <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                All Products
              </h1>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                Explore our complete range of premium agricultural commodities, sourced from the world's most fertile regions with uncompromising traceability.
              </p>
            </div>
          </div>
        </section>

        {/* Products by Category */}
        {allProductsData.categories.map((category, categoryIndex) => (
          <section key={category.id} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-[#fafaf5]' : 'bg-[#eeeee9]'}`}>
            <div className="max-w-7xl mx-auto px-8">
              {/* Category Header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-12 bg-[#00450d]"></div>
                  <h2 className="font-headline text-3xl font-bold text-[#00450d]">{category.name}</h2>
                </div>
                <p className="text-[#41493e] text-lg max-w-3xl">{category.description}</p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden editorial-shadow group hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#00450d] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                          Bulk Available
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="font-headline text-xl font-bold text-[#00450d] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-[#41493e] text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Origin Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-[#00450d] text-sm">public</span>
                        <span className="text-sm text-[#41493e]">{product.origin}</span>
                      </div>

                      {/* Specifications */}
                      <div className="border-t border-[#c0c9bb] pt-4 mb-4">
                        <div className="space-y-2">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
                              <span className="text-[#41493e] capitalize">{key}</span>
                              <span className="text-[#1a1c19] font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* MOQ & Packaging */}
                      <div className="flex justify-between text-xs text-[#41493e] mb-4">
                        <div>
                          <span className="font-semibold">MOQ:</span> {product.moq}
                        </div>
                        <div className="text-right">
                          <span className="font-semibold">Packaging:</span> {product.packaging}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link
                        to="/contact"
                        className="w-full py-3 bg-[#00450d] text-white rounded font-semibold text-sm hover:bg-[#1b5e20] transition-colors flex items-center justify-center gap-2"
                      >
                        Enquire for Bulk
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-[#1b5e20]">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white mb-6">
              Need a Custom Sourcing Solution?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Our procurement specialists can architect a supply chain tailored to your specific volume and quality requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-[#00450d] rounded-md font-bold text-lg hover:bg-[#fafaf5] transition-all editorial-shadow"
              >
                Request Custom Quote
              </Link>
              <Link
                to="/procurement"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-md font-bold text-lg hover:bg-white/10 transition-all"
              >
                Learn About Procurement
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllProducts;
