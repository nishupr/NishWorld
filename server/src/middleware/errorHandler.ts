import { Request, Response, NextFunction } from 'express'

interface CustomError extends Error {
  statusCode?: number
  code?: number
  keyValue?: Record<string, any>
  errors?: Record<string, any>
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500
  let message = err.message || 'Internal Server Error'

  // Mongoose duplicate key error
  if (err.code === 11000 && err.keyValue) {
    statusCode = 400
    const field = Object.keys(err.keyValue)[0]
    message = `${field} already exists`
  }

  // Mongoose validation error
  if (err.name === 'ValidationError' && err.errors) {
    statusCode = 400
    const messages = Object.values(err.errors).map((error: any) => error.message)
    message = messages.join(', ')
  }

  // Mongoose cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = 400
    message = 'Invalid ID format'
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401
    message = 'Invalid token'
  }

  if (err.name === 'TokenExpiredError') {
    statusCode = 401
    message = 'Token expired'
  }

  // Log error in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', err)
  }

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}

export class AppError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}
