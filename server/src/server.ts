import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import dotenv from 'dotenv'
import { connectDB } from './config/database.js'
import { errorHandler } from './middleware/errorHandler.js'

// Import routes
import characterRoutes from './routes/characterRoutes.js'
import storyRoutes from './routes/storyRoutes.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import quizRoutes from './routes/quizRoutes.js'

// Load environment variables
dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 5000

// Connect to database
connectDB()

// Middleware
app.use(helmet()) // Security headers
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(compression()) // Compress responses
app.use(morgan('dev')) // Logging
app.use(express.json()) // Parse JSON
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded data

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Nish\'s World API is running',
    timestamp: new Date().toISOString()
  })
})

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/characters', characterRoutes)
app.use('/api/stories', storyRoutes)
app.use('/api/users', userRoutes)
app.use('/api/quiz', quizRoutes)

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

// Error handling middleware (must be last)
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║   🌸 NISH'S WORLD API SERVER 🌸      ║
  ╠════════════════════════════════════════╣
  ║   Server running on port ${PORT}        ║
  ║   Environment: ${process.env.NODE_ENV || 'development'}           ║
  ║   URL: http://localhost:${PORT}          ║
  ╚════════════════════════════════════════╝
  `)
})

export default app
