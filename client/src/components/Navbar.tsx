import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, BookOpen, Users, Feather, Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { path: '/discover', label: 'Discover', icon: BookOpen },
    { path: '/characters', label: 'Authors', icon: Users },
    { path: '/create', label: 'Create', icon: Feather },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg"
      style={{ 
        backgroundColor: 'rgba(250, 247, 242, 0.9)',
        borderBottom: '1px solid rgba(229, 231, 235, 0.5)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={24} style={{ color: '#8B5CF6' }} />
            </motion.div>
            <span 
              className="text-xl font-serif font-semibold tracking-tight group-hover:opacity-70 transition-opacity"
              style={{ color: '#1A1A1A' }}
            >
              Nish's World
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              const active = isActive(link.path)
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                    style={{
                      backgroundColor: active ? '#F3E8FF' : 'transparent',
                      color: active ? '#7C3AED' : '#6B7280'
                    }}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">
                      {link.label}
                    </span>
                  </motion.div>
                </Link>
              )
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105"
              style={{ backgroundColor: '#F3F4F6' }}
            >
              {theme === 'dark' ? (
                <Sun size={18} style={{ color: '#F59E0B' }} />
              ) : (
                <Moon size={18} style={{ color: '#6B7280' }} />
              )}
            </button>

            {/* CTA Button */}
            <Link to="/create">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <Sparkles size={16} />
                <span>Create a story</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
              style={{ backgroundColor: '#F3F4F6' }}
            >
              {theme === 'dark' ? (
                <Sun size={18} style={{ color: '#F59E0B' }} />
              ) : (
                <Moon size={18} style={{ color: '#6B7280' }} />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
              style={{ backgroundColor: '#F3F4F6', color: '#1A1A1A' }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-6"
              style={{ borderTop: '1px solid rgba(229, 231, 235, 0.5)' }}
            >
              <div className="pt-4 space-y-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon
                  const active = isActive(link.path)
                  
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                      >
                        <div
                          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
                          style={{
                            backgroundColor: active ? '#F3E8FF' : 'transparent',
                            color: active ? '#7C3AED' : '#6B7280'
                          }}
                        >
                          <Icon size={20} />
                          <span className="font-medium">
                            {link.label}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <Link to="/create" onClick={() => setIsOpen(false)}>
                    <button
                      className="w-full px-4 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#1A1A1A' }}
                    >
                      <Sparkles size={18} />
                      <span>Create a story</span>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
