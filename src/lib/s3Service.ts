import { Storage } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

class S3Service {
  // Upload image to S3
  async uploadImage(file, folder = 'images') {
    try {
      // Validate file
      if (!file) throw new Error('No file provided');
      
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error('Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.');
      }
      
      // Check file size (max 5MB)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        throw new Error('File too large. Maximum size is 5MB.');
      }
      
      // Generate unique filename
      const fileExtension = file.name.split('.').pop();
      const fileName = `${folder}/${uuidv4()}-${Date.now()}.${fileExtension}`;
      
      // Upload to S3
      const result = await Storage.put(fileName, file, {
        contentType: file.type,
        level: 'private',
        metadata: {
          originalName: file.name,
          uploadedAt: new Date().toISOString(),
          size: file.size.toString()
        }
      });
      
      // Get the URL
      const url = await Storage.get(fileName, { level: 'private' });
      
      return {
        success: true,
        key: fileName,
        url: url,
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
  async deleteImage(key) {
    try {
      await Storage.remove(key, { level: 'private' });
      return { success: true };
    } catch (error) {
      console.error('Delete error:', error);
      throw error;
    }
  }
  
  // Get image URL
  async getImageUrl(key) {
    try {
      const url = await Storage.get(key, { level: 'private' });
      return url;
    } catch (error) {
      console.error('Get URL error:', error);
      return null;
    }
  }
  
  // List all images in a folder
  async listImages(folder = 'images') {
    try {
      const result = await Storage.list(`${folder}/`, { level: 'private' });
      return result;
    } catch (error) {
      console.error('List error:', error);
      return [];
    }
  }
  
  // Upload multiple images
  async uploadMultipleImages(files, folder = 'images') {
    const uploadPromises = files.map(file => this.uploadImage(file, folder));
    const results = await Promise.allSettled(uploadPromises);
    
    const successful = results
      .filter(r => r.status === 'fulfilled')
      .map(r => r.value);
    
    const failed = results
      .filter(r => r.status === 'rejected')
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
