import { Request, Response, NextFunction } from 'express'

export const getCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Get all characters - Coming soon',
      data: []
    })
  } catch (error) {
    next(error)
  }
}

export const getCharacterById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Get character by ID - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const createCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(201).json({
      success: true,
      message: 'Create character - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const updateCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Update character - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}

export const deleteCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Delete character - Coming soon'
    })
  } catch (error) {
    next(error)
  }
}
