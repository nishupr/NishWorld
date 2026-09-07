# 🚀 Nish's World - Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Either:
  - Local installation - [Download](https://www.mongodb.com/try/download/community)
  - OR MongoDB Atlas (cloud) - [Sign up free](https://www.mongodb.com/cloud/atlas/register)
- **npm** (comes with Node.js)

## 📦 Installation Steps

### 1. Clone/Navigate to Project
```bash
cd nishsworld-main
```

### 2. Install Root Dependencies
```bash
npm install
```

### 3. Install Frontend Dependencies
```bash
cd client
npm install
cd ..
```

### 4. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

## 🗄️ Database Setup

### Option A: Using MongoDB Atlas (Recommended for beginners)

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for a free account

2. **Create a Cluster**
   - Click "Build a Database"
   - Choose "FREE" tier (M0)
   - Select a cloud provider and region
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Set username and password (save these!)
   - Grant "Read and write to any database" role

4. **Whitelist Your IP**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (or add your specific IP)

5. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `nishsworld`

6. **Update `.env` file in server directory**
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/nishsworld?retryWrites=true&w=majority
   ```

### Option B: Using Local MongoDB

1. **Install MongoDB**
   - Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - Follow installation instructions for your OS

2. **Start MongoDB**
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   brew services start mongodb-community
   # OR
   sudo systemctl start mongod
   ```

3. **Verify `.env` file in server directory**
   ```
   MONGO_URI=mongodb://localhost:27017/nishsworld
   ```

## 🌱 Seed the Database

After database setup, populate it with initial character data:

```bash
cd server
npm run seed
```

You should see:
```
✅ Connected to MongoDB
🗑️  Cleared existing data
✅ Inserted 10 characters
🎉 Database seeded successfully!
```

## 🏃‍♂️ Running the Application

### Option 1: Run Both Frontend and Backend Together (Recommended)

From the root directory:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend app on `http://localhost:5173`

### Option 2: Run Separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

## 🌐 Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 🧪 Testing the API

You can test the API endpoints using:

### Using Browser
Visit: http://localhost:5000/health

### Using curl
```bash
# Health check
curl http://localhost:5000/health

# Get all characters
curl http://localhost:5000/api/characters
```

### Using Postman or Insomnia
Import these endpoints:
- GET `http://localhost:5000/api/characters`
- GET `http://localhost:5000/api/stories`
- POST `http://localhost:5000/api/auth/register`
- POST `http://localhost:5000/api/auth/login`

## 📁 Project Structure

```
nishsworld-main/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route pages
│   │   ├── services/    # API calls
│   │   └── App.tsx      # Main app component
│   └── package.json
│
├── server/              # Express backend
│   ├── src/
│   │   ├── config/      # Database configuration
│   │   ├── controllers/ # Route handlers
│   │   ├── models/      # Database models
│   │   ├── routes/      # API routes
│   │   ├── middleware/  # Auth, error handling
│   │   └── server.ts    # Entry point
│   └── package.json
│
├── shared/              # Shared TypeScript types
└── original-files/      # Original HTML/CSS files
```

## 🔧 Environment Variables

### Backend (.env in server/)
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:5173
```

### Frontend (.env in client/)
```env
VITE_API_URL=http://localhost:5000
```

## ❗ Troubleshooting

### Port Already in Use
If you see "Port 5000 is already in use":
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5000 | xargs kill -9
```

Or change the PORT in `server/.env`

### MongoDB Connection Error
- Verify MongoDB is running
- Check connection string in `.env`
- Ensure IP is whitelisted (Atlas)
- Verify username/password (Atlas)

### Dependencies Installation Failed
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Frontend Not Loading
- Check if backend is running
- Verify `VITE_API_URL` in client/.env
- Clear browser cache
- Check browser console for errors

## 🎯 Next Steps

1. ✅ Verify all services are running
2. ✅ Check database has been seeded
3. ✅ Test API endpoints
4. ✅ Explore the frontend
5. 📝 Start implementing additional features!

## 📚 Useful Commands

```bash
# Root directory
npm run dev              # Run both frontend and backend
npm run dev:client       # Run frontend only
npm run dev:server       # Run backend only
npm run build            # Build both for production

# Backend (server/)
npm run dev              # Development with hot reload
npm run build            # Compile TypeScript
npm run start            # Production mode
npm run seed             # Seed database

# Frontend (client/)
npm run dev              # Development server
npm run build            # Build for production
npm run preview          # Preview production build
```

## 🆘 Need Help?

If you encounter issues:
1. Check this guide thoroughly
2. Verify all environment variables
3. Check console/terminal for error messages
4. Ensure all prerequisites are installed
5. Try restarting the services

---

**Made with ❤️ by Nishu Pundir**
