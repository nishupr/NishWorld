import mongoose, { Schema, Document } from 'mongoose'

export interface IStory extends Document {
  title: string
  content: string
  character: mongoose.Types.ObjectId
  characterName: string
  image?: string
  tags: string[]
  readTime: number
  views: number
  likes: number
  createdAt: Date
  updatedAt: Date
}

const StorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Story title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    content: {
      type: String,
      required: [true, 'Story content is required']
    },
    character: {
      type: Schema.Types.ObjectId,
      ref: 'Character',
      required: [true, 'Character reference is required']
    },
    characterName: {
      type: String,
      required: [true, 'Character name is required'],
      trim: true
    },
    image: {
      type: String
    },
    tags: [{
      type: String,
      trim: true,
      lowercase: true
    }],
    readTime: {
      type: Number,
      required: true,
      min: 1,
      default: 5 // Default 5 minutes
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

// Calculate read time based on content length (average 200 words per minute)
StorySchema.pre('save', function (next) {
  if (this.isModified('content')) {
    const wordCount = this.content.split(/\s+/).length
    this.readTime = Math.ceil(wordCount / 200)
  }
  next()
})

// Indexes for faster queries
StorySchema.index({ character: 1 })
StorySchema.index({ characterName: 1 })
StorySchema.index({ tags: 1 })
StorySchema.index({ views: -1 })
StorySchema.index({ likes: -1 })
StorySchema.index({ createdAt: -1 })

export default mongoose.model<IStory>('Story', StorySchema)
