import { body, ValidationChain } from 'express-validator'

// User validation
export const registerValidation: ValidationChain[] = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
]

export const loginValidation: ValidationChain[] = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required')
]

// Character validation
export const characterValidation: ValidationChain[] = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Character name is required'),
  
  body('displayName')
    .trim()
    .notEmpty()
    .withMessage('Display name is required'),
  
  body('gender')
    .isIn(['male', 'female'])
    .withMessage('Gender must be either male or female'),
  
  body('image')
    .trim()
    .isURL()
    .withMessage('Image must be a valid URL'),
  
  body('story')
    .trim()
    .notEmpty()
    .withMessage('Story is required'),
  
  body('category')
    .trim()
    .notEmpty()
    .withMessage('Category is required'),
  
  body('emoji')
    .trim()
    .notEmpty()
    .withMessage('Emoji is required')
]

// Story validation
export const storyValidation: ValidationChain[] = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters'),
  
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Content is required'),
  
  body('character')
    .trim()
    .notEmpty()
    .withMessage('Character ID is required')
    .isMongoId()
    .withMessage('Invalid character ID'),
  
  body('characterName')
    .trim()
    .notEmpty()
    .withMessage('Character name is required')
]

// Quiz validation
export const quizValidation: ValidationChain[] = [
  body('quizType')
    .isIn(['boy', 'girl'])
    .withMessage('Quiz type must be either boy or girl'),
  
  body('answers')
    .isObject()
    .withMessage('Answers must be an object')
]
