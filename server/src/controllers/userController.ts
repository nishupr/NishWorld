import { Request, Response, NextFunction } from 'express'

export const getUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Get user profile - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const updateUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Update user profile - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const addFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Add favorite - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const removeFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Remove favorite - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const getReadingHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Get reading history - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}
