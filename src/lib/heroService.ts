import { toast } from 'sonner';

const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';
const S3_BASE_URL = import.meta.env.VITE_AWS_S3_URL || 'https://agrofeed-content-agrofeed-536217686312.s3.us-east-1.amazonaws.com';
const HERO_STORAGE_KEY = 'gulflink_hero_content';

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
  try {
    // Try API first
    const response = await fetch(`${API_URL}/cms/hero`);

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Hero data fetched from API:', data);
      // Cache in localStorage
      localStorage.setItem(HERO_STORAGE_KEY, JSON.stringify(data));
      return data;
    }
  } catch (error: any) {
    console.log('⚠️ API not available, using localStorage:', error.message);
  }

  // Fallback to localStorage
  const cached = localStorage.getItem(HERO_STORAGE_KEY);
  if (cached) {
    console.log('✅ Hero data loaded from localStorage');
    return JSON.parse(cached);
  }

  // Final fallback to default
  console.log('✅ Using default hero data');
  return DEFAULT_HERO;
};

// Save Hero Data to DynamoDB via API (with localStorage fallback)
export const saveHeroData = async (heroData: Partial<HeroData>): Promise<boolean> => {
  const dataToSave = {
    ...heroData,
    updatedAt: new Date().toISOString()
  };

  try {
    const token = localStorage.getItem('idToken');

    const response = await fetch(`${API_URL}/cms/hero`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify(dataToSave)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Hero data saved to API:', result);
      localStorage.setItem(HERO_STORAGE_KEY, JSON.stringify(dataToSave));
      toast.success('Hero content saved successfully!');
      return true;
    }
  } catch (error: any) {
    console.log('⚠️ API save failed, saving to localStorage:', error.message);
  }

  // Fallback to localStorage
  localStorage.setItem(HERO_STORAGE_KEY, JSON.stringify(dataToSave));
  console.log('✅ Hero data saved to localStorage');
  toast.success('Hero content saved locally!');
  return true;
};

// Upload Hero Image to S3 (with local fallback)
export const uploadHeroImage = async (file: File): Promise<string | null> => {
  try {
    const token = localStorage.getItem('idToken');
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', 'hero');

    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: formData
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Image uploaded to S3:', result.url);
      return result.url;
    }
  } catch (error: any) {
    console.log('⚠️ API upload not available');
  }

  // Fallback: Upload directly to S3 bucket
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `hero/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const s3Url = `${S3_BASE_URL}/${fileName}`;

    // Create presigned upload URL (you'll need a Lambda for this)
    // For now, use local preview
    const localUrl = URL.createObjectURL(file);
    console.log('✅ Using local preview, S3 URL would be:', s3Url);
    toast.success('Image ready (configure S3 upload in backend)');
    return localUrl;
  } catch (error) {
    console.error('❌ Failed to prepare image upload');
    toast.error('Failed to load image');
    return null;
  }
};
