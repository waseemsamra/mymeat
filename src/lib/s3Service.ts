// S3 Service for Image Storage
import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client, awsConfig } from '../lib/aws';

export interface UploadImageResult {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

class S3Service {
  private bucketName: string;

  constructor() {
    this.bucketName = awsConfig.s3.bucket;
  }

  /**
   * Upload an image to S3
   * @param file - The image file to upload
   * @param folder - The folder in S3 (e.g., 'hero', 'products', 'about')
   * @returns The public URL of the uploaded image
   */
  async uploadImage(file: File, folder: string): Promise<UploadImageResult> {
    try {
      const fileExtension = file.name.split('.').pop();
      const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`;

      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);

      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
        ACL: 'public-read',
      });

      await s3Client.send(command);

      const imageUrl = `https://${this.bucketName}.s3.${awsConfig.s3.region}.amazonaws.com/${fileName}`;

      return {
        success: true,
        imageUrl,
      };
    } catch (error) {
      console.error('Error uploading image:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to upload image',
      };
    }
  }

  /**
   * Get a signed URL for temporary access to a private image
   * @param key - The S3 key of the image
   * @param expiresIn - Expiration time in seconds (default: 1 hour)
   * @returns Signed URL
   */
  async getSignedUrl(key: string, expiresIn: number = 3600): Promise<string> {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      return await getSignedUrl(s3Client, command, { expiresIn });
    } catch (error) {
      console.error('Error generating signed URL:', error);
      throw error;
    }
  }

  /**
   * Delete an image from S3
   * @param imageUrl - The full URL of the image to delete
   */
  async deleteImage(imageUrl: string): Promise<{ success: boolean; error?: string }> {
    try {
      // Extract key from URL
      const url = new URL(imageUrl);
      const key = url.pathname.substring(1); // Remove leading '/'

      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      await s3Client.send(command);

      return { success: true };
    } catch (error) {
      console.error('Error deleting image:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete image',
      };
    }
  }

  /**
   * List all images in a folder
   * @param folder - The folder to list (e.g., 'hero', 'products')
   */
  async listImages(folder: string): Promise<{ success: boolean; images?: string[]; error?: string }> {
    try {
      const command = new ListObjectsV2Command({
        Bucket: this.bucketName,
        Prefix: folder,
      });

      const response = await s3Client.send(command);
      const images = response.Contents?.map((obj) => `https://${this.bucketName}.s3.${awsConfig.s3.region}.amazonaws.com/${obj.Key}`) || [];

      return {
        success: true,
        images,
      };
    } catch (error) {
      console.error('Error listing images:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to list images',
      };
    }
  }
}

export const s3Service = new S3Service();
