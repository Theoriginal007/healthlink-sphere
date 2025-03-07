import axios from 'axios';
import { MongoClient, ObjectId } from 'mongodb';
import { MONGODB_URI, COLLECTIONS } from './config';

// This is a frontend service that will interact with your local MongoDB
// When moving to production, you should create a proper backend API

let client: MongoClient | null = null;

export interface MongoDocument {
  _id?: string;
  [key: string]: any;
}

// Initialize MongoDB connection
async function getMongoClient() {
  if (!client) {
    try {
      client = new MongoClient(MONGODB_URI);
      await client.connect();
      console.log("Connected to MongoDB successfully");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
      throw error;
    }
  }
  return client;
}

export const mongoService = {
  // Get all documents from a collection
  async getAll<T extends MongoDocument>(collection: string): Promise<T[]> {
    try {
      const client = await getMongoClient();
      const db = client.db();
      const result = await db.collection(collection).find().toArray();
      
      // Convert MongoDB ObjectId to string for frontend compatibility
      return result.map(doc => ({
        ...doc,
        _id: doc._id.toString()
      })) as T[];
    } catch (error) {
      console.error(`Error fetching from ${collection}:`, error);
      throw error;
    }
  },
  
  // Get a document by ID
  async getById<T extends MongoDocument>(collection: string, id: string): Promise<T | null> {
    try {
      const client = await getMongoClient();
      const db = client.db();
      const result = await db.collection(collection).findOne({ _id: new ObjectId(id) });
      
      if (!result) return null;
      
      // Convert MongoDB ObjectId to string
      return {
        ...result,
        _id: result._id.toString()
      } as T;
    } catch (error) {
      console.error(`Error fetching document ${id} from ${collection}:`, error);
      throw error;
    }
  },
  
  // Create a new document
  async create<T extends MongoDocument>(collection: string, data: Omit<T, '_id'>): Promise<T> {
    try {
      const client = await getMongoClient();
      const db = client.db();
      const result = await db.collection(collection).insertOne(data);
      
      return { 
        _id: result.insertedId.toString(), 
        ...data 
      } as T;
    } catch (error) {
      console.error(`Error creating document in ${collection}:`, error);
      throw error;
    }
  },
  
  // Update a document
  async update<T extends MongoDocument>(collection: string, id: string, data: Partial<T>): Promise<T> {
    try {
      const client = await getMongoClient();
      const db = client.db();
      
      // Don't try to update the _id field
      const { _id, ...updateData } = data as any;
      
      await db.collection(collection).updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
      
      // Fetch the updated document
      const updated = await db.collection(collection).findOne({ _id: new ObjectId(id) });
      
      if (!updated) {
        throw new Error(`Document with ID ${id} not found after update`);
      }
      
      return {
        ...updated,
        _id: updated._id.toString()
      } as T;
    } catch (error) {
      console.error(`Error updating document ${id} in ${collection}:`, error);
      throw error;
    }
  },
  
  // Delete a document
  async delete(collection: string, id: string): Promise<boolean> {
    try {
      const client = await getMongoClient();
      const db = client.db();
      const result = await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
      
      return result.deletedCount === 1;
    } catch (error) {
      console.error(`Error deleting document ${id} from ${collection}:`, error);
      throw error;
    }
  },
  
  // Query documents with filters
  async query<T extends MongoDocument>(collection: string, filter: Record<string, any>): Promise<T[]> {
    try {
      const client = await getMongoClient();
      const db = client.db();
      
      // Convert string IDs to ObjectId if they exist in the filter
      const mongoFilter = { ...filter };
      if (mongoFilter._id && typeof mongoFilter._id === 'string') {
        mongoFilter._id = new ObjectId(mongoFilter._id);
      }
      
      const results = await db.collection(collection).find(mongoFilter).toArray();
      
      // Convert MongoDB ObjectIds to strings
      return results.map(doc => ({
        ...doc,
        _id: doc._id.toString()
      })) as T[];
    } catch (error) {
      console.error(`Error querying ${collection}:`, error);
      throw error;
    }
  }
};

// Domain-specific service methods that use the generic methods
export const userService = {
  getAll: () => mongoService.getAll(COLLECTIONS.USERS),
  getById: (id: string) => mongoService.getById(COLLECTIONS.USERS, id),
  create: (data: any) => mongoService.create(COLLECTIONS.USERS, data),
  update: (id: string, data: any) => mongoService.update(COLLECTIONS.USERS, id, data),
  delete: (id: string) => mongoService.delete(COLLECTIONS.USERS, id),
  getByEmail: (email: string) => mongoService.query(COLLECTIONS.USERS, { email }),
};

export const healthRecordService = {
  getAll: () => mongoService.getAll(COLLECTIONS.HEALTH_RECORDS),
  getById: (id: string) => mongoService.getById(COLLECTIONS.HEALTH_RECORDS, id),
  create: (data: any) => mongoService.create(COLLECTIONS.HEALTH_RECORDS, data),
  update: (id: string, data: any) => mongoService.update(COLLECTIONS.HEALTH_RECORDS, id, data),
  delete: (id: string) => mongoService.delete(COLLECTIONS.HEALTH_RECORDS, id),
  getByUserId: (userId: string) => mongoService.query(COLLECTIONS.HEALTH_RECORDS, { userId }),
};

export const appointmentService = {
  getAll: () => mongoService.getAll(COLLECTIONS.APPOINTMENTS),
  getById: (id: string) => mongoService.getById(COLLECTIONS.APPOINTMENTS, id),
  create: (data: any) => mongoService.create(COLLECTIONS.APPOINTMENTS, data),
  update: (id: string, data: any) => mongoService.update(COLLECTIONS.APPOINTMENTS, id, data),
  delete: (id: string) => mongoService.delete(COLLECTIONS.APPOINTMENTS, id),
  getByUserId: (userId: string) => mongoService.query(COLLECTIONS.APPOINTMENTS, { userId }),
  getByDoctorId: (doctorId: string) => mongoService.query(COLLECTIONS.APPOINTMENTS, { doctorId }),
};

export const articleService = {
  getAll: () => mongoService.getAll(COLLECTIONS.ARTICLES),
  getById: (id: string) => mongoService.getById(COLLECTIONS.ARTICLES, id),
  create: (data: any) => mongoService.create(COLLECTIONS.ARTICLES, data),
  update: (id: string, data: any) => mongoService.update(COLLECTIONS.ARTICLES, id, data),
  delete: (id: string) => mongoService.delete(COLLECTIONS.ARTICLES, id),
  getByCategory: (category: string) => mongoService.query(COLLECTIONS.ARTICLES, { category }),
};

// Close the MongoDB connection when the application shuts down
window.addEventListener('beforeunload', async () => {
  if (client) {
    await client.close();
    console.log("MongoDB connection closed");
  }
});
