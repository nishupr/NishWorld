import { Router } from 'express'
import {
  getCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
} from '../controllers/characterController.js'
import { protect } from '../middleware/auth.js'

const router = Router()

router.get('/', getCharacters)
router.get('/:id', getCharacterById)
router.post('/', protect, createCharacter)
router.put('/:id', protect, updateCharacter)
router.delete('/:id', protect, deleteCharacter)

export default router
