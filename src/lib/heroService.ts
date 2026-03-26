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
    const response = await fetch(`${API_URL}/cms/hero`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch hero data');
    }
    
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching hero data:', error);
    toast.error('Failed to load hero content');
    return null;
  }
};

// Save Hero Data to DynamoDB via API
export const saveHeroData = async (heroData: Partial<HeroData>): Promise<boolean> => {
  try {
    const token = localStorage.getItem('idToken');
    
    const response = await fetch(`${API_URL}/cms/hero`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({
        ...heroData,
        updatedAt: new Date().toISOString()
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to save hero data');
    }
    
    toast.success('Hero content saved successfully!');
    return true;
  } catch (error: any) {
    console.error('Error saving hero data:', error);
    toast.error('Failed to save hero content');
    return false;
  }
};

// Upload Hero Image to S3
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
    
    if (!response.ok) {
      throw new Error('Upload failed');
    }
    
    const result = await response.json();
    return result.url;
  } catch (error: any) {
    console.error('Error uploading image:', error);
    toast.error('Failed to upload image');
    return null;
  }
};
