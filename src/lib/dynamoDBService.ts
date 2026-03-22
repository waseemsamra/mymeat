import { API } from 'aws-amplify';

class DynamoDBService {
  // Get content by type
  async getContent(type) {
    try {
      // Using Amplify API (if you have API Gateway)
      // For direct DynamoDB access, you'd need to use AWS SDK
      // This example assumes API Gateway setup
      const response = await API.get('cmsApi', `/content/${type}`);
      return response;
    } catch (error) {
      console.error('Get content error:', error);
      return null;
    }
  }
  
  // Save content
  async saveContent(type, data) {
    try {
      const response = await API.post('cmsApi', '/content', {
        body: {
          type: type,
          data: data,
          updatedAt: new Date().toISOString()
        }
      });
      return response;
    } catch (error) {
      console.error('Save content error:', error);
      throw error;
    }
  }
  
  // Get all testimonials
  async getTestimonials() {
    try {
      const response = await API.get('cmsApi', '/testimonials');
      return response;
    } catch (error) {
      console.error('Get testimonials error:', error);
      return [];
    }
  }
  
  // Add testimonial
  async addTestimonial(testimonial) {
    try {
      const response = await API.post('cmsApi', '/testimonials', {
        body: testimonial
      });
      return response;
    } catch (error) {
      console.error('Add testimonial error:', error);
      throw error;
    }
  }
  
  // Get products
  async getProducts() {
    try {
      const response = await API.get('cmsApi', '/products');
      return response;
    } catch (error) {
      console.error('Get products error:', error);
      return [];
    }
  }
}

export default new DynamoDBService();
