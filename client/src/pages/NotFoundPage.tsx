import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
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
          <h1 className="text-9xl font-light text-gray-200">404</h1>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 text-lg mb-8">
          Looks like you've wandered into an unwritten chapter. 
          Let's get you back to the story.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Go Home
            </motion.button>
          </Link>
          <Link to="/characters">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all"
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
