import { uploadData, remove, list, getUrl } from 'aws-amplify/storage';
import { v4 as uuidv4 } from 'uuid';

class S3Service {
  // Upload image to S3
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
      
      const fileExtension = file.name.split('.').pop();
      const fileName = `${folder}/${uuidv4()}-${Date.now()}.${fileExtension}`;
      
      await uploadData({
        key: fileName,
        data: file,
        options: {
          contentType: file.type,
          metadata: {
            originalName: file.name,
            uploadedAt: new Date().toISOString(),
            size: file.size.toString()
          }
        }
      }).result;
      
      const urlResult = await getUrl({ key: fileName });
      
      return {
        success: true,
        key: fileName,
        url: urlResult.url.toString(),
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
  
  // Get image URL
  async getImageUrl(key: string) {
    try {
      const result = await getUrl({ key });
      return result.url.toString();
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
