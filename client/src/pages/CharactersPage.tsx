import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FloatingParticles from '../components/FloatingParticles'
import AnimatedGrid from '../components/AnimatedGrid'
import GradientText from '../components/GradientText'

interface Character {
  id: string
  name: string
  title: string
  emoji: string
  gender: 'male' | 'female'
  category: string
  image: string
  description: string
}

const characters: Character[] = [
  {
    id: 'lexi',
    name: 'Lexi',
    title: 'The Rockstar with a Heart',
    emoji: '🎤',
    gender: 'female',
    category: 'Rockstar',
    image: 'https://imgcdn.stablediffusionweb.com/2024/12/22/fc19cb5e-9bba-48e9-9c00-23cf727129d0.jpg',
    description: 'Fierce, fearless, and undeniably talented. A world icon who found love beyond fame.'
  },
  {
    id: 'alex',
    name: 'Alex',
    title: 'The Melody of Dreams',
    emoji: '🎸',
    gender: 'male',
    category: 'Musician',
    image: 'https://img.freepik.com/free-photo/anime-character-playing-guitar_23-2151103495.jpg',
    description: 'Born from struggle, he rose through music and love to become a legend.'
  },
  {
    id: 'bella',
    name: 'Bella',
    title: 'The Secret of Evermist Academy',
    emoji: '🌸',
    gender: 'female',
    category: 'Student',
    image: 'https://w0.peakpx.com/wallpaper/644/678/HD-wallpaper-school-vibes-anime-girl-cute-sky-view-uniform.jpg',
    description: 'Curious and kind, she awakened the magic hidden within Evermist Academy.'
  },
  {
    id: 'kai',
    name: 'Kai',
    title: 'Rooftops & Revelations',
    emoji: '⚡',
    gender: 'male',
    category: 'Guardian',
    image: 'https://i.pinimg.com/736x/46/a5/e0/46a5e0f623fec0bd3cffad1a12109e15.jpg',
    description: 'A spark in every room, he became a guardian protecting the balance between worlds.'
  },
  {
    id: 'luna',
    name: 'Luna',
    title: 'The Silent Flame',
    emoji: '🌙',
    gender: 'female',
    category: 'Flame Bearer',
    image: 'https://i.pinimg.com/236x/6d/4a/22/6d4a2216ef416deaaabf03def93dc550.jpg',
    description: 'Bearer of the Eclipsa Flame, she found her match in the most unexpected enemy.'
  },
  {
    id: 'vik',
    name: 'Vik',
    title: 'Shadows of the Forgotten',
    emoji: '🛡️',
    gender: 'male',
    category: 'Guardian',
    image: 'https://i.pinimg.com/736x/44/d9/29/44d9296e901703500ad2d470008a6e24.jpg',
    description: 'The Unbroken. Silent, powerful, and eternally protective of those in need.'
  },
  {
    id: 'blaze',
    name: 'Blaze',
    title: 'Burn the Rulebook',
    emoji: '🔥',
    gender: 'female',
    category: 'Rebel',
    image: 'https://i.pinimg.com/736x/bb/2f/52/bb2f52ab166107088ef7153de6c5588a.jpg',
    description: 'A wildfire of rebellion who burned down her past and built a revolution.'
  },
  {
    id: 'zade',
    name: 'Zade',
    title: 'The Game of Shadows',
    emoji: '♟️',
    gender: 'male',
    category: 'Strategist',
    image: 'https://cdn.talkie-ai.com/talkie/prod/img/abb520af-b4a5-41f6-8ca1-b750c80d1568.jpeg',
    description: 'A genius strategist who rewrote the rules and liberated a city.'
  },
  {
    id: 'sky',
    name: 'Sky',
    title: 'The Wildfire and the Wind',
    emoji: '🌩️',
    gender: 'female',
    category: 'Wanderer',
    image: 'https://i.pinimg.com/564x/1d/7d/50/1d7d50bdace5fffda5ad58a390b8d3e4.jpg',
    description: 'A storm in motion who found stillness in unexpected love.'
  },
  {
    id: 'rex',
    name: 'Rex',
    title: 'The Pulse Beneath the Chaos',
    emoji: '🏍️',
    gender: 'male',
    category: 'Leader',
    image: 'https://i.pinimg.com/736x/f9/0f/e3/f90fe34c5a50fec1bcd0b4cfa354cdef.jpg',
    description: 'Living life at full throttle, he races to protect lost souls from the machine.'
  }
]

const CharactersPage = () => {
  const [filter, setFilter] = useState<'all' | 'male' | 'female'>('all')

  const filteredCharacters = filter === 'all' 
    ? characters 
    : characters.filter(c => c.gender === filter)

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Animated Background */}
      <FloatingParticles count={25} speed="slow" />
      <AnimatedGrid variant="dots" spacing={50} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm mb-4" style={{ color: 'var(--text-tertiary)' }}>The Universe</p>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            <GradientText variant="hero">Meet the Characters</GradientText>
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            10 souls, each with their own journey. Rich backstories, 
            emotional depth, and unforgettable narratives.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 mb-12 pb-6"
          style={{ borderBottom: '1px solid var(--border-color)' }}
        >
          <button
            onClick={() => setFilter('all')}
            className="px-6 py-2 rounded-full text-sm transition-all transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: filter === 'all' ? 'var(--text-primary)' : 'var(--bg-tertiary)',
              color: filter === 'all' ? 'var(--bg-primary)' : 'var(--text-secondary)'
            }}
          >
            All Characters ({characters.length})
          </button>
          <button
            onClick={() => setFilter('female')}
            className="px-6 py-2 rounded-full text-sm transition-all transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: filter === 'female' ? 'var(--text-primary)' : 'var(--bg-tertiary)',
              color: filter === 'female' ? 'var(--bg-primary)' : 'var(--text-secondary)'
            }}
          >
            Female (5)
          </button>
          <button
            onClick={() => setFilter('male')}
            className="px-6 py-2 rounded-full text-sm transition-all transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: filter === 'male' ? 'var(--text-primary)' : 'var(--bg-tertiary)',
              color: filter === 'male' ? 'var(--bg-primary)' : 'var(--text-secondary)'
            }}
          >
            Male (5)
          </button>
        </motion.div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link to={`/story/${character.id}`}>
                {/* Image with enhanced effects */}
                <div className="aspect-[3/4] rounded-lg mb-4 overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-shadow duration-500" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating emoji on hover */}
                  <motion.div 
                    className="absolute top-4 right-4 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {character.emoji}
                  </motion.div>
                  
                  {/* Category badge overlay */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
                    {character.category}
                  </div>
                </div>

                {/* Info with stagger animation */}
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {character.emoji}
                    </motion.span>
                    <h3 className="text-xl font-medium group-hover:underline transition-all">
                      {character.name}
                    </h3>
                  </div>
                  <p className="text-sm italic" style={{ color: 'var(--text-secondary)' }}>{character.title}</p>
                  <p className="text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all" style={{ color: 'var(--text-tertiary)' }}>
                    {character.description}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <motion.span 
                      className="text-xs font-medium group-hover:scale-105 transition-transform"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Read story →
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quiz CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center py-16 rounded-2xl"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          <p className="text-sm mb-4" style={{ color: 'var(--text-tertiary)' }}>Discover Yourself</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Which character are <span className="italic font-serif">you</span>?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Take our personality quiz to find out which character from 
            Nish's World resonates with your soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz/girl">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full transition-colors" 
                style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}
              >
                Girl Quiz
              </motion.button>
            </Link>
            <Link to="/quiz/boy">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 rounded-full transition-all" 
                style={{ borderColor: 'var(--text-primary)' }}
              >
                Boy Quiz
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default CharactersPage
