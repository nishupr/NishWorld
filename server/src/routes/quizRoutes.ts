import { Router } from 'express'
import { submitQuiz, getQuizResults } from '../controllers/quizController.js'
import { protect, optionalAuth } from '../middleware/auth.js'

const router = Router()

router.post('/submit', optionalAuth, submitQuiz)
router.get('/results', protect, getQuizResults)

export default router
