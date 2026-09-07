import mongoose, { Schema, Document } from 'mongoose'

export interface ICharacter extends Document {
  name: string
  displayName: string
  gender: 'male' | 'female'
  image: string
  story: string
  traits: string[]
  category: string
  emoji: string
  views: number
  likes: number
  createdAt: Date
  updatedAt: Date
}

const CharacterSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Character name is required'],
      unique: true,
      trim: true
    },
    displayName: {
      type: String,
      required: [true, 'Display name is required'],
      trim: true
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: [true, 'Gender is required']
    },
    image: {
      type: String,
      required: [true, 'Character image URL is required']
    },
    story: {
      type: String,
      required: [true, 'Character story is required']
    },
    traits: [{
      type: String,
      trim: true
    }],
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true
    },
    emoji: {
      type: String,
      required: [true, 'Emoji is required']
    },
    views: {
      type: Number,
      default: 0,
      min: 0
    },
    likes: {
      type: Number,
      default: 0,
      min: 0
    }
  },
  {
    timestamps: true
  }
)

// Index for faster queries
CharacterSchema.index({ name: 1 })
CharacterSchema.index({ gender: 1 })
CharacterSchema.index({ views: -1 })
CharacterSchema.index({ likes: -1 })

export default mongoose.model<ICharacter>('Character', CharacterSchema)
