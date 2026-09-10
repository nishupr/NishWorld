import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Context
import { ThemeProvider } from './contexts/ThemeContext'

// Pages
import HomePage from './pages/HomePage'
import DiscoverPage from './pages/DiscoverPage'
import CreateStoryPage from './pages/CreateStoryPage'
import CharactersPage from './pages/CharactersPage'
import StoryPage from './pages/StoryPage'
import QuizPage from './pages/QuizPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

// Components
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          {/* Skip to content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded"
            style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}
          >
            Skip to content
          </a>
          <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <Navbar />
            <main id="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/discover" element={<DiscoverPage />} />
                <Route path="/create" element={<CreateStoryPage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/story/:id" element={<StoryPage />} />
                <Route path="/quiz/:type" element={<QuizPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <ScrollToTopButton />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
