import { Request, Response, NextFunction } from 'express'

export const submitQuiz = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Submit quiz - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const getQuizResults = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Get quiz results - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}
