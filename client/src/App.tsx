import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Pages
import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import StoryPage from './pages/StoryPage'
import QuizPage from './pages/QuizPage'
import ProfilePage from './pages/ProfilePage'

// Components
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'

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
    <Router>
      <div className="relative min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/story/:id" element={<StoryPage />} />
            <Route path="/quiz/:type" element={<QuizPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
