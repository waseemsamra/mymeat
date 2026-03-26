import { uploadData, remove, list } from 'aws-amplify/storage';

// S3 Bucket configuration
const BUCKET_NAME = 'agrofeed-content-agrofeed-536217686312';
const PUBLIC_S3_URL = `https://${BUCKET_NAME}.s3.amazonaws.com`;
const API_URL = 'https://euwheigeak.execute-api.us-east-1.amazonaws.com/prod';

class S3Service {
  // Upload image to S3 via API Gateway
  async uploadImage(file: File, folder: string = 'images') {
    try {
      if (!file) throw new Error('No file provided');

      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error('Invalid file type.');
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        throw new Error('File too large. Maximum size is 5MB.');
      }

      // Convert file to base64
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
      });

      // Upload via API Gateway
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          file: base64,
          folder: folder,
          contentType: file.type,
          filename: file.name
        })
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      
      // Build public URL
      const publicUrl = `${PUBLIC_S3_URL}/${folder}/${file.name}`;

      return {
        success: true,
        key: `${folder}/${file.name}`,
        url: publicUrl,
        originalName: file.name,
        size: file.size,
        type: file.type
      };
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  }
  
  // Delete image from S3
  async deleteImage(key: string) {
    try {
      await remove({ key });
      return { success: true };
    } catch (error) {
      console.error('Delete error:', error);
      throw error;
    }
  }
  
  // Get image URL (returns public URL)
  async getImageUrl(key: string) {
    try {
      // Return public URL instead of pre-signed URL
      return `${PUBLIC_S3_URL}/${key}`;
    } catch (error) {
      console.error('Get URL error:', error);
      return null;
    }
  }
  
  // List all images in a folder
  async listImages(folder: string = 'images') {
    try {
      const result = await list({ prefix: `${folder}/` });
      return result;
    } catch (error) {
      console.error('List error:', error);
      return [];
    }
  }
  
  // Upload multiple images
  async uploadMultipleImages(files: File[], folder: string = 'images') {
    const uploadPromises = files.map(file => this.uploadImage(file, folder));
    const results = await Promise.allSettled(uploadPromises);
    
    const successful = results
      .filter((r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled')
      .map(r => r.value);
    
    const failed = results
      .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
      .map(r => r.reason);
    
    return {
      success: successful,
      failed: failed,
      total: files.length,
      uploaded: successful.length
    };
  }
}

export default new S3Service();
