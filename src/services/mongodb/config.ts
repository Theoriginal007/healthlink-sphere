
// MongoDB configuration

// Using MongoDB Atlas connection string
// Replace with your actual MongoDB Atlas connection string when deploying
export const MONGODB_URI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/healthsphere?retryWrites=true&w=majority";

// Collection names
export const COLLECTIONS = {
  USERS: 'users',
  HEALTH_RECORDS: 'healthRecords',
  APPOINTMENTS: 'appointments',
  ARTICLES: 'articles',
};

// This is a frontend application, so we'll use this URI in a separate backend service
// or serverless functions. For now, this serves as configuration documentation.
