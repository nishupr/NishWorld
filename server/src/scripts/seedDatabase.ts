import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { Character, Story } from '../models/index.js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load character data from JSON file
const charactersPath = join(__dirname, '../data/characters.json')
const seedCharacters = JSON.parse(readFileSync(charactersPath, 'utf-8'))

const seedDatabase = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI

    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables')
    }

    await mongoose.connect(MONGO_URI)
    console.log('✅ Connected to MongoDB')

    // Clear existing data
    await Character.deleteMany({})
    await Story.deleteMany({})
    console.log('🗑️  Cleared existing data')

    // Insert characters
    const characters = await Character.insertMany(seedCharacters)
    console.log(`✅ Inserted ${characters.length} characters`)

    console.log('🎉 Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
