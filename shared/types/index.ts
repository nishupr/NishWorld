// Shared TypeScript types for client and server

export interface Character {
  _id?: string;
  name: string;
  displayName: string;
  gender: 'male' | 'female';
  image: string;
  story: string;
  traits: string[];
  category: string;
  emoji: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Story {
  _id?: string;
  title: string;
  content: string;
  character: string; // Character ID or name
  characterId?: string;
  image?: string;
  tags: string[];
  readTime: number; // in minutes
  views: number;
  likes: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  _id?: string;
  username: string;
  email: string;
  password?: string; // Hashed password
  avatar?: string;
  bio?: string;
  favorites: string[]; // Story IDs
  quizResults: QuizResult[];
  readingHistory: ReadingHistory[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface QuizResult {
  quizType: 'boy' | 'girl';
  result: string; // Character name
  answers: Record<string, string>;
  completedAt: Date;
}

export interface ReadingHistory {
  storyId: string;
  progress: number; // 0-100
  lastRead: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: Omit<User, 'password'>;
  token: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  label: string;
  value: string; // Character name
}

export interface QuizSubmission {
  quizType: 'boy' | 'girl';
  answers: Record<string, string>; // question number -> character
}
