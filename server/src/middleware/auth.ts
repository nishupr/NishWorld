import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AppError } from './errorHandler.js'

interface JwtPayload {
  userId: string
  email: string
}

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
    }
  }
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined

    // Check for token in Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      return next(new AppError('Not authorized to access this route', 401))
    }

    // Verify token
    const JWT_SECRET = process.env.JWT_SECRET
    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined')
    }

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload

    // Attach user info to request
    req.user = decoded

    next()
  } catch (error) {
    next(new AppError('Not authorized to access this route', 401))
  }
}

// Optional auth - doesn't throw error if no token
export const optionalAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (token) {
      const JWT_SECRET = process.env.JWT_SECRET
      if (JWT_SECRET) {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
        req.user = decoded
      }
    }

    next()
  } catch (error) {
    // Continue without auth
    next()
  }
}
