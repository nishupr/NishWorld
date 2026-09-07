import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

interface IQuizResult {
  quizType: 'boy' | 'girl'
  result: string
  answers: Record<string, string>
  completedAt: Date
}

interface IReadingHistory {
  storyId: mongoose.Types.ObjectId
  progress: number
  lastRead: Date
}

export interface IUser extends Document {
  username: string
  email: string
  password: string
  avatar?: string
  bio?: string
  favorites: mongoose.Types.ObjectId[]
  quizResults: IQuizResult[]
  readingHistory: IReadingHistory[]
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

const QuizResultSchema = new Schema({
  quizType: {
    type: String,
    enum: ['boy', 'girl'],
    required: true
  },
  result: {
    type: String,
    required: true
  },
  answers: {
    type: Map,
    of: String,
    required: true
  },
  completedAt: {
    type: Date,
    default: Date.now
  }
})

const ReadingHistorySchema = new Schema({
  storyId: {
    type: Schema.Types.ObjectId,
    ref: 'Story',
    required: true
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  lastRead: {
    type: Date,
    default: Date.now
  }
})

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      minlength: [3, 'Username must be at least 3 characters'],
      maxlength: [30, 'Username cannot exceed 30 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false // Don't return password by default
    },
    avatar: {
      type: String,
      default: 'https://ui-avatars.com/api/?background=e74c64&color=fff&name='
    },
    bio: {
      type: String,
      maxlength: [200, 'Bio cannot exceed 200 characters']
    },
    favorites: [{
      type: Schema.Types.ObjectId,
      ref: 'Story'
    }],
    quizResults: [QuizResultSchema],
    readingHistory: [ReadingHistorySchema]
  },
  {
    timestamps: true
  }
)

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// Set default avatar with username
UserSchema.pre('save', function (next) {
  if (!this.avatar || this.avatar.includes('ui-avatars.com/api/?background=e74c64&color=fff&name=')) {
    this.avatar = `https://ui-avatars.com/api/?background=e74c64&color=fff&name=${encodeURIComponent(this.username)}`
  }
  next()
})

// Method to compare passwords
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.model<IUser>('User', UserSchema)
