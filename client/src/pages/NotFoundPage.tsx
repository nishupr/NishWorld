import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-light" style={{ color: 'var(--border-color)' }}>404</h1>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
          Looks like you've wandered into an unwritten chapter. 
          Let's get you back to the story.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}
            >
              Go Home
            </motion.button>
          </Link>
          <Link to="/characters">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 rounded-full transition-all"
              style={{ borderColor: 'var(--text-primary)' }}
            >
              View Characters
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFoundPage
