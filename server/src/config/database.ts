import mongoose from 'mongoose'

export const connectDB = async (): Promise<void> => {
  try {
    const MONGO_URI = process.env.MONGO_URI

    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables')
    }

    const conn = await mongoose.connect(MONGO_URI)

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error)
    process.exit(1)
  }
}

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('📦 Mongoose connected to database')
})

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err)
})

mongoose.connection.on('disconnected', () => {
  console.log('⚠️  Mongoose disconnected from database')
})

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close()
  console.log('🛑 Mongoose connection closed due to app termination')
  process.exit(0)
})
