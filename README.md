# 🌸 Nish's World - Full Stack Application

*Welcome to Nish's World — An immersive story-based platform with rich characters and emotional narratives.*

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router v6** - Navigation
- **Axios** - API requests

### Backend
- **Node.js** with Express
- **TypeScript** - Type safety
- **MongoDB** with Mongoose - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing

## 📁 Project Structure

```
nishsworld-fullstack/
├── client/           # React frontend
├── server/           # Express backend
├── shared/           # Shared types
├── original-files/   # Original HTML/CSS files
└── README.md
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

1. **Install Frontend Dependencies**
```bash
cd client
npm install
```

2. **Install Backend Dependencies**
```bash
cd server
npm install
```

3. **Configure Environment Variables**

Create `.env` file in the `server` directory:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Create `.env` file in the `client` directory:
```
VITE_API_URL=http://localhost:5000
```

### Running the Application

**Development Mode:**

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend (in a new terminal):
```bash
cd client
npm run dev
```

The app will be available at `http://localhost:5173`

## ✨ Features

- 🎭 Interactive character gallery with 10+ unique characters
- 📖 Immersive story reading experience
- 🎯 Personality quizzes (Boy & Girl characters)
- 👤 User authentication & profiles
- ❤️ Save favorite stories and characters
- 📊 Reading progress tracking
- 🌙 Dark mode support
- 📱 Fully responsive design

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd client
npm run build
# Deploy to Vercel
```

### Backend (Render/Railway)
```bash
cd server
npm run build
# Deploy to your hosting platform
```

## 📬 Contact

Created by **NISHU PUNDIR**

- LinkedIn: [Nishu Pundir](https://www.linkedin.com/in/nishu-pundir-33a188336)
- Instagram: [@hey.niish](https://www.instagram.com/hey.niish)

## 📝 License

This project is open for personal and educational use. All stories and characters are original content.

---

**Made with ❤️ and imagination**
