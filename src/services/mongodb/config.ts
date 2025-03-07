
// MongoDB configuration

// Local MongoDB connection string for development with MongoDB Compass
// This connects to your local MongoDB instance
export const MONGODB_URI = "mongodb://localhost:27017/healthsphere";

// Collection names
export const COLLECTIONS = {
  USERS: 'users',
  HEALTH_RECORDS: 'healthRecords',
  APPOINTMENTS: 'appointments',
  ARTICLES: 'articles',
};

// Note: For a production environment, you would use:
// - MongoDB Atlas (cloud) connection string OR
// - Environment variables to store connection information
