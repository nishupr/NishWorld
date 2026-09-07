import { Request, Response, NextFunction } from 'express'

export const getStories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Get all stories - Coming soon',
      data: []
    })
  } catch (error) {
    next(error)
  }
}

export const getStoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Get story by ID - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const createStory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(201).json({
      success: true,
      message: 'Create story - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const updateStory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Update story - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const deleteStory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Delete story - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}
