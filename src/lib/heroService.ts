import { toast } from 'sonner';

const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';

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

// Fetch Hero Data from DynamoDB via API
export const fetchHeroData = async (): Promise<HeroData | null> => {
  try {
    console.log('📡 Fetching hero data from API...');
    const response = await fetch(`${API_URL}/cms/hero`);

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Hero data fetched from API:', data);
      
      // Handle API response format (has slides array)
      if (data.slides && Array.isArray(data.slides)) {
        const activeSlide = data.slides.find((s: any) => s.isActive) || data.slides[0];
        if (activeSlide) {
          return {
            id: activeSlide.id || 'hero-1',
            headline: activeSlide.headline || activeSlide.title || '',
            description: activeSlide.description || activeSlide.subtitle || '',
            tagline: activeSlide.tagline || '',
            button1Text: activeSlide.button1Text || activeSlide.buttonText || '',
            button1Link: activeSlide.button1Link || activeSlide.buttonLink || '',
            button2Text: activeSlide.button2Text || '',
            button2Link: activeSlide.button2Link || '',
            imageUrl: activeSlide.imageUrl || activeSlide.image || '',
            isActive: activeSlide.isActive !== false,
            updatedAt: data.updatedAt || new Date().toISOString()
          };
        }
      }
      
      // Handle single hero object format
      if (data.headline || data.title) {
        return {
          id: data.id || 'hero-1',
          headline: data.headline || data.title || '',
          description: data.description || data.subtitle || '',
          tagline: data.tagline || '',
          button1Text: data.button1Text || data.buttonText || '',
          button1Link: data.button1Link || data.buttonLink || '',
          button2Text: data.button2Text || '',
          button2Link: data.button2Link || '',
          imageUrl: data.imageUrl || data.image || '',
          isActive: data.isActive !== false,
          updatedAt: data.updatedAt || new Date().toISOString()
        };
      }
    }
  } catch (error: any) {
    console.log('⚠️ API error:', error.message);
  }

  // Return null if API fails - Home.tsx will use S3 images fallback
  return null;
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
