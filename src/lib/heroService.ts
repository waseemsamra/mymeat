import { toast } from 'sonner';

const S3_BASE_URL = 'https://agrofeed-content-agrofeed-536217686312.s3.amazonaws.com';

export interface HeroData {
  id: string;
  headline: string;
  description: string;
  tagline: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
  imageUrl: string;
  isActive: boolean;
  updatedAt: string;
}

// Default hero data
const DEFAULT_HERO: HeroData = {
  id: 'hero-1',
  headline: 'Nurturing the Global Harvest.',
  description: 'We bridge the distance between origin and table through sophisticated logistics and uncompromising standards of agricultural curation.',
  tagline: 'Established 1984 — Global Curators',
  button1Text: 'View Portfolios',
  button1Link: '/products',
  button2Text: 'Our Reach',
  button2Link: '/about',
  imageUrl: `${S3_BASE_URL}/hero/default.jpg`,
  isActive: true,
  updatedAt: new Date().toISOString()
};

// Fetch Hero Data from DynamoDB via API (with localStorage fallback)
export const fetchHeroData = async (): Promise<HeroData | null> => {
  // Skip API - use localStorage directly (API has CORS issues)
  console.log('📂 Loading hero data from localStorage...');
  
  // Check HeroSliderManager format first
  const sliderSlides = localStorage.getItem('agrofeed_hero_slides');
  if (sliderSlides) {
    try {
      const slides = JSON.parse(sliderSlides);
      const activeSlide = slides.find((s: any) => s.isActive) || slides[0];
      if (activeSlide) {
        console.log('✅ Hero data loaded from HeroSliderManager');
        return {
          id: activeSlide.id,
          headline: activeSlide.headline,
          description: activeSlide.description,
          tagline: activeSlide.tagline,
          button1Text: activeSlide.button1Text,
          button1Link: activeSlide.button1Link,
          button2Text: activeSlide.button2Text,
          button2Link: activeSlide.button2Link,
          imageUrl: activeSlide.imageUrl,
          isActive: activeSlide.isActive,
          updatedAt: new Date().toISOString()
        };
      }
    } catch (error) {
      console.log('⚠️ Error parsing slider slides:', error);
    }
  }

  // Fallback to old localStorage key
  const cached = localStorage.getItem('gulflink_hero_content');
  if (cached) {
    console.log('✅ Hero data loaded from old localStorage');
    return JSON.parse(cached);
  }

  // Final fallback to default
  console.log('✅ Using default hero data');
  return DEFAULT_HERO;
};

// Save Hero Data to localStorage (API has CORS issues)
export const saveHeroData = async (heroData: Partial<HeroData>): Promise<boolean> => {
  const dataToSave = {
    id: heroData.id || 'hero-1',
    headline: heroData.headline || '',
    description: heroData.description || '',
    tagline: heroData.tagline || '',
    button1Text: heroData.button1Text || '',
    button1Link: heroData.button1Link || '',
    button2Text: heroData.button2Text || '',
    button2Link: heroData.button2Link || '',
    imageUrl: heroData.imageUrl || '',
    isActive: heroData.isActive !== false,
    updatedAt: new Date().toISOString()
  };

  // Skip API - save directly to localStorage (API has CORS issues)
  console.log('💾 Saving hero data to localStorage...');
  
  // Save in HeroSliderManager format
  saveToHeroSliderFormat(dataToSave);
  
  console.log('✅ Hero data saved to localStorage');
  toast.success('Hero content saved locally!');
  return true;
};

// Helper to save in HeroSliderManager format
const saveToHeroSliderFormat = (heroData: HeroData) => {
  // Get existing slides
  const existingSlides = localStorage.getItem('agrofeed_hero_slides');
  let slides: any[] = [];
  
  if (existingSlides) {
    try {
      slides = JSON.parse(existingSlides);
    } catch (error) {
      console.log('⚠️ Error parsing existing slides, creating new');
    }
  }
  
  // Update or create the active slide
  const activeIndex = slides.findIndex(s => s.isActive);
  const slideData = {
    id: heroData.id,
    headline: heroData.headline,
    description: heroData.description,
    tagline: heroData.tagline,
    button1Text: heroData.button1Text,
    button1Link: heroData.button1Link,
    button2Text: heroData.button2Text,
    button2Link: heroData.button2Link,
    imageUrl: heroData.imageUrl,
    s3Key: heroData.imageUrl.split('/').pop(),
    isActive: heroData.isActive !== false,
    order: 1
  };
  
  if (activeIndex >= 0) {
    slides[activeIndex] = { ...slides[activeIndex], ...slideData };
  } else if (slides.length > 0) {
    slides[0] = { ...slides[0], ...slideData, isActive: true };
  } else {
    slides.push(slideData);
  }
  
  localStorage.setItem('agrofeed_hero_slides', JSON.stringify(slides));
  console.log('💾 Saved to HeroSliderManager format:', slides.length, 'slides');
};

// Upload Hero Image to S3
export const uploadHeroImage = async (file: File): Promise<string | null> => {
  try {
    console.log('📷 Starting S3 upload...', file.name);
    
    // Import S3Service dynamically
    const S3ServiceModule = await import('./S3Service');
    const S3Service = S3ServiceModule.default;
    
    // Upload to S3 using S3Service
    const result = await S3Service.uploadImage(file, 'hero');
    
    console.log('✅ Image uploaded to S3!');
    console.log('🔑 S3 Key:', result.key);
    console.log('🌐 URL:', result.url);
    
    toast.success('Image uploaded to S3 successfully!');
    return result.url;
  } catch (error: any) {
    console.error('❌ S3 upload failed:', error);
    toast.error('Upload failed: ' + (error.message || 'Unknown error'));
    return null;
  }
};
