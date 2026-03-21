// DynamoDB Service for Content Storage
// Single table design for all content
import {
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
  QueryCommand,
} from '@aws-sdk/lib-dynamodb';
import { dynamoDBDocumentClient, awsConfig } from '../lib/aws';

// Content Types
export type ContentType =
  | 'hero'
  | 'about'
  | 'testimonials'
  | 'enquiry'
  | 'siteSettings'
  | 'product'
  | 'user'
  | 'order';

export interface ContentItem {
  PK: string; // Partition Key: #TYPE#ID
  SK: string; // Sort Key: METADATA
  type: ContentType;
  data: any;
  createdAt: string;
  updatedAt: string;
  version: number;
}

class DynamoDBService {
  private tableName: string;

  constructor() {
    this.tableName = awsConfig.dynamodb.tableName;
  }

  /**
   * Generate a unique ID
   */
  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(7)}`;
  }

  /**
   * Save content (create or update)
   * @param type - Content type
   * @param id - Optional ID (generated if not provided)
   * @param data - Content data
   */
  async saveContent(type: ContentType, data: any, id?: string): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      const contentId = id || this.generateId();
      const now = new Date().toISOString();
      const PK = `${type.toUpperCase()}#${contentId}`;

      // Check if item exists
      const existing = await this.getContent(type, contentId);

      const item: ContentItem = {
        PK,
        SK: 'METADATA',
        type,
        data,
        createdAt: existing?.data?.createdAt || now,
        updatedAt: now,
        version: (existing?.data?.version || 0) + 1,
      };

      const command = new PutCommand({
        TableName: this.tableName,
        Item: item,
      });

      await dynamoDBDocumentClient.send(command);

      return {
        success: true,
        id: contentId,
      };
    } catch (error) {
      console.error('Error saving content:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to save content',
      };
    }
  }

  /**
   * Get content by type and ID
   * @param type - Content type
   * @param id - Content ID
   */
  async getContent(type: ContentType, id: string): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const PK = `${type.toUpperCase()}#${id}`;

      const command = new GetCommand({
        TableName: this.tableName,
        Key: {
          PK,
          SK: 'METADATA',
        },
      });

      const response = await dynamoDBDocumentClient.send(command);

      if (!response.Item) {
        return {
          success: false,
          error: 'Content not found',
        };
      }

      return {
        success: true,
        data: response.Item.data,
      };
    } catch (error) {
      console.error('Error getting content:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get content',
      };
    }
  }

  /**
   * Get all content of a specific type
   * @param type - Content type
   */
  async getAllContent(type: ContentType): Promise<{ success: boolean; data?: any[]; error?: string }> {
    try {
      const command = new QueryCommand({
        TableName: this.tableName,
        IndexName: 'TypeIndex', // GSI on type
        KeyConditionExpression: '#type = :type',
        ExpressionAttributeNames: {
          '#type': 'type',
        },
        ExpressionAttributeValues: {
          ':type': type,
        },
      });

      const response = await dynamoDBDocumentClient.send(command);

      const data = response.Items?.map((item) => item.data) || [];

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('Error getting all content:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get content',
      };
    }
  }

  /**
   * Get all site content (for home page)
   */
  async getSiteContent(): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const contentTypes: ContentType[] = ['hero', 'about', 'testimonials', 'enquiry', 'siteSettings'];
      const result: any = {};

      for (const type of contentTypes) {
        const response = await this.getAllContent(type);
        if (response.success && response.data && response.data.length > 0) {
          result[type] = response.data[0]; // Get first item of each type
        }
      }

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error('Error getting site content:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get site content',
      };
    }
  }

  /**
   * Update specific fields in content
   * @param type - Content type
   * @param id - Content ID
   * @param updates - Fields to update
   */
  async updateContent(
    type: ContentType,
    id: string,
    updates: Partial<any>
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const PK = `${type.toUpperCase()}#${id}`;

      const updateExpressions: string[] = [];
      const expressionAttributeValues: Record<string, any> = {};
      const expressionAttributeNames: Record<string, string> = {};

      Object.entries(updates).forEach(([key, value]) => {
        const placeholder = `:${key}`;
        updateExpressions.push(`#data.${key} = ${placeholder}`);
        expressionAttributeValues[placeholder] = value;
      });

      updateExpressions.push('#updatedAt = :now');
      updateExpressions.push('#version = #version + :one');
      expressionAttributeValues[':now'] = new Date().toISOString();
      expressionAttributeValues[':one'] = 1;
      expressionAttributeNames['#data'] = 'data';
      expressionAttributeNames['#updatedAt'] = 'updatedAt';
      expressionAttributeNames['#version'] = 'version';

      const command = new UpdateCommand({
        TableName: this.tableName,
        Key: {
          PK,
          SK: 'METADATA',
        },
        UpdateExpression: `SET ${updateExpressions.join(', ')}`,
        ExpressionAttributeValues: expressionAttributeValues,
        ExpressionAttributeNames: expressionAttributeNames,
        ReturnValues: 'ALL_NEW',
      });

      await dynamoDBDocumentClient.send(command);

      return { success: true };
    } catch (error) {
      console.error('Error updating content:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update content',
      };
    }
  }

  /**
   * Delete content
   * @param type - Content type
   * @param id - Content ID
   */
  async deleteContent(type: ContentType, id: string): Promise<{ success: boolean; error?: string }> {
    try {
      const PK = `${type.toUpperCase()}#${id}`;

      const command = new DeleteCommand({
        TableName: this.tableName,
        Key: {
          PK,
          SK: 'METADATA',
        },
      });

      await dynamoDBDocumentClient.send(command);

      return { success: true };
    } catch (error) {
      console.error('Error deleting content:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete content',
      };
    }
  }

  /**
   * Batch save multiple content items
   * @param items - Array of { type, data, id? }
   */
  async batchSaveContent(
    items: Array<{ type: ContentType; data: any; id?: string }>
  ): Promise<{ success: boolean; ids?: string[]; error?: string }> {
    try {
      const ids: string[] = [];

      for (const item of items) {
        const result = await this.saveContent(item.type, item.data, item.id);
        if (result.success && result.id) {
          ids.push(result.id);
        }
      }

      return {
        success: true,
        ids,
      };
    } catch (error) {
      console.error('Error batch saving content:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to batch save content',
      };
    }
  }
}

export const dynamoDBService = new DynamoDBService();
