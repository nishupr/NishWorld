import { Router } from 'express'
import {
  getUserProfile,
  updateUserProfile,
  addFavorite,
  removeFavorite,
  getReadingHistory
} from '../controllers/userController.js'
import { protect } from '../middleware/auth.js'

const router = Router()

router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)
router.post('/favorites/:storyId', protect, addFavorite)
router.delete('/favorites/:storyId', protect, removeFavorite)
router.get('/reading-history', protect, getReadingHistory)

export default router
