import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// CMS Content Interfaces
interface HeroContent {
  badge: string;
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage: string;
}

interface AboutContent {
  badge: string;
  title: string;
  subtitle: string;
  features: AboutFeature[];
  stats: AboutStat[];
}

interface AboutFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface AboutStat {
  id: string;
  value: string;
  label: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialsContent {
  badge: string;
  title: string;
  testimonials: Testimonial[];
  clientLogos: string[];
}

interface EnquiryContent {
  badge: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  contactPhone: string;
  contactEmail: string;
  productOptions: string[];
}

interface SiteSettings {
  siteName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

interface CMSData {
  hero: HeroContent;
  about: AboutContent;
  testimonials: TestimonialsContent;
  enquiry: EnquiryContent;
  siteSettings: SiteSettings;
}

interface CMSContextType {
  cmsData: CMSData;
  updateHero: (data: HeroContent) => void;
  updateAbout: (data: AboutContent) => void;
  updateTestimonials: (data: TestimonialsContent) => void;
  updateEnquiry: (data: EnquiryContent) => void;
  updateSiteSettings: (data: SiteSettings) => void;
  isLoading: boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const CMS_STORAGE_KEY = 'agrofeed_cms_data';

// Default CMS Data
const defaultCMSData: CMSData = {
  hero: {
    badge: 'Premium Quality Feed',
    title: 'Premium Animal Feed Products',
    subtitle: 'High-quality hay, alfalfa, straw, and grain products for your livestock needs. Sourced from sustainable farms with a commitment to excellence.',
    primaryButtonText: 'Explore Products',
    secondaryButtonText: 'Contact Us',
    backgroundImage: '/hero-hay.jpg',
  },
  about: {
    badge: 'About Us',
    title: 'Why Choose Our Products?',
    subtitle: 'We provide the highest quality animal feed products sourced from sustainable farms. Our commitment to excellence ensures your livestock receives the best nutrition possible.',
    features: [
      {
        id: '1',
        icon: 'Sprout',
        title: 'Sustainable Farming',
        description: 'Eco-friendly practices that protect the environment while producing premium feed.',
        image: '/about-sustainable.jpg',
      },
      {
        id: '2',
        icon: 'Award',
        title: 'Premium Quality',
        description: 'Rigorous quality control ensures only the highest grade nutrients for your livestock.',
        image: '/about-quality.jpg',
      },
      {
        id: '3',
        icon: 'Leaf',
        title: 'Wide Variety',
        description: 'Complete range of feed products for all types of livestock and animals.',
        image: '/about-variety.jpg',
      },
    ],
    stats: [
      { id: '1', value: '15+', label: 'Years Experience' },
      { id: '2', value: '5000+', label: 'Happy Customers' },
      { id: '3', value: '50+', label: 'Products' },
      { id: '4', value: '99%', label: 'Satisfaction Rate' },
    ],
  },
  testimonials: {
    badge: 'Testimonials',
    title: 'What Our Clients Say',
    testimonials: [
      { id: 1, name: 'John Smith', role: 'Dairy Farm Owner', content: 'Best quality hay we have ever purchased. Our cattle production has increased significantly since switching to AgroFeed products.', rating: 5, avatar: 'JS' },
      { id: 2, name: 'Sarah Johnson', role: 'Horse Trainer', content: 'Reliable delivery and excellent service. The Timothy hay is always fresh and my horses love it.', rating: 5, avatar: 'SJ' },
      { id: 3, name: 'Mike Williams', role: 'Livestock Rancher', content: 'Our livestock loves their products. The alfalfa pellets are a game-changer for winter feeding.', rating: 5, avatar: 'MW' },
      { id: 4, name: 'Emily Davis', role: 'Organic Farmer', content: 'Finally found a supplier that understands sustainable farming. Their eco-friendly practices align perfectly with our values.', rating: 5, avatar: 'ED' },
    ],
    clientLogos: ['FarmCo', 'AgriTech', 'GreenFields', 'LiveStock Pro', 'DairyBest'],
  },
  enquiry: {
    badge: 'Send Enquiry',
    title: 'Request a Quote',
    subtitle: 'Fill out the form below and our team will get back to you within 24 hours with a customized quote for your needs.',
    backgroundImage: '/form-farmer.jpg',
    contactPhone: '+1 (555) 123-4567',
    contactEmail: 'info@agrofeed.com',
    productOptions: [
      'Hay Products',
      'Alfalfa Products',
      'Straw Products',
      'Grain & Silage',
      'Pellets & Capsules',
    ],
  },
  siteSettings: {
    siteName: 'AgroFeed',
    contactEmail: 'info@agrofeed.com',
    contactPhone: '+1 (555) 123-4567',
    address: '123 Farm Road, Agricultural District, Countryside, CA 90210',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
};

const loadCMSData = (): CMSData => {
  const stored = localStorage.getItem(CMS_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  // Save default data
  localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(defaultCMSData));
  return defaultCMSData;
};

export const CMSProvider = ({ children }: { children: ReactNode }) => {
  const [cmsData, setCmsData] = useState<CMSData>(defaultCMSData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = loadCMSData();
    setCmsData(data);
    setIsLoading(false);
  }, []);

  const updateHero = (data: HeroContent) => {
    const newData = { ...cmsData, hero: data };
    setCmsData(newData);
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(newData));
  };

  const updateAbout = (data: AboutContent) => {
    const newData = { ...cmsData, about: data };
    setCmsData(newData);
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(newData));
  };

  const updateTestimonials = (data: TestimonialsContent) => {
    const newData = { ...cmsData, testimonials: data };
    setCmsData(newData);
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(newData));
  };

  const updateEnquiry = (data: EnquiryContent) => {
    const newData = { ...cmsData, enquiry: data };
    setCmsData(newData);
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(newData));
  };

  const updateSiteSettings = (data: SiteSettings) => {
    const newData = { ...cmsData, siteSettings: data };
    setCmsData(newData);
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(newData));
  };

  return (
    <CMSContext.Provider
      value={{
        cmsData,
        updateHero,
        updateAbout,
        updateTestimonials,
        updateEnquiry,
        updateSiteSettings,
        isLoading,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
