
# HealthSphere - AI-Powered Healthcare Management Platform

HealthSphere is a comprehensive healthcare management platform designed specifically for the Kenyan healthcare ecosystem. The application aims to bridge the gap between patients and healthcare services by leveraging artificial intelligence, machine learning, and natural language processing technologies.

## MongoDB Backend Setup Guide

This application is designed to work with a MongoDB backend. Follow these steps to set up your MongoDB database and connect it to HealthSphere.

### Option 1: MongoDB Atlas (Cloud Database)

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account
   - Create a new project and build a new cluster (the free tier is sufficient for development)

2. **Set Up Database Access**
   - Create a database user with password authentication
   - Note down the username and password for your connection string

3. **Configure Network Access**
   - Add your IP address to the IP Access List
   - For development, you can allow access from anywhere (0.0.0.0/0)

4. **Get Your Connection String**
   - Click "Connect" on your cluster
   - Select "Connect your application"
   - Copy the connection string, which looks like:
     ```
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/healthsphere?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with your database user credentials

5. **Update Application Configuration**
   - Open `src/services/mongodb/config.ts`
   - Replace the placeholder connection string with your actual MongoDB Atlas connection string

### Option 2: Setting Up a Backend API with MongoDB

For a production application, you should set up a dedicated backend API:

1. **Create a Node.js Express Backend**
   - Set up a new Node.js project
   - Install Express.js and the MongoDB Node.js driver
   - Create API endpoints that correspond to the operations in `mongoService.ts`

2. **Connect Your Backend to MongoDB**
   - Use the MongoDB Node.js driver to connect to your database
   - Implement CRUD operations for each collection

3. **Deploy Your Backend**
   - Deploy your backend API to a hosting service (Heroku, Vercel, AWS, etc.)
   - Update the `API_BASE_URL` in `mongoService.ts` to point to your deployed backend

4. **Enable CORS**
   - Configure your backend to accept requests from your frontend domain

### Database Schema

The HealthSphere application uses the following collections:

1. **users**
   - User profiles, authentication info, and preferences

2. **healthRecords**
   - Health metrics, symptoms, and medical history

3. **appointments**
   - Virtual consultation scheduling and records

4. **articles**
   - Health education content and resources

### Development Workflow

During development:

1. Use the MongoDB service interfaces defined in the application
2. Initially, these will use mock data or localStorage for testing
3. Once your backend is set up, update the service methods to make actual API calls

### Security Considerations

- Never store MongoDB credentials in your frontend code in production
- Use environment variables to manage sensitive configuration
- Implement proper authentication and authorization in your backend API
- Use HTTPS for all API communication

For more detailed information on setting up a full MongoDB backend, refer to the [MongoDB documentation](https://docs.mongodb.com/).
