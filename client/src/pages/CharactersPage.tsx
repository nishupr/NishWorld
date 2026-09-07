import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
    image: 'https://picture.lk/files/preview/960x1713/11710586104humg5hwn8tj3klyjym0q3xsg3aqcqavfxgfnjn6vzdexsginvqie52pfpiml81lkdwjj27mthgnou4h8cyayv6inhkmikcxhmsoy.jpg',
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
    <div className="bg-white text-black min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm text-gray-400 mb-4">The Universe</p>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Meet the Characters
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            10 souls, each with their own journey. Rich backstories, 
            emotional depth, and unforgettable narratives.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 mb-12 border-b border-gray-200 pb-6"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              filter === 'all'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Characters ({characters.length})
          </button>
          <button
            onClick={() => setFilter('female')}
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              filter === 'female'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Female (5)
          </button>
          <button
            onClick={() => setFilter('male')}
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              filter === 'male'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
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
              className="group"
            >
              <Link to={`/story/${character.id}`}>
                {/* Image */}
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{character.emoji}</span>
                    <h3 className="text-xl font-medium group-hover:underline">
                      {character.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 italic">{character.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {character.description}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="px-3 py-1 bg-gray-100 text-xs rounded-full">
                      {character.category}
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-black transition-colors">
                      Read story →
                    </span>
                  </div>
                </div>
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
          className="mt-24 text-center py-16 bg-gray-50 rounded-2xl"
        >
          <p className="text-sm text-gray-400 mb-4">Discover Yourself</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Which character are <span className="italic font-serif">you</span>?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our personality quiz to find out which character from 
            Nish's World resonates with your soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz/girl">
              <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                Girl Quiz
              </button>
            </Link>
            <Link to="/quiz/boy">
              <button className="px-8 py-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all">
                Boy Quiz
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default CharactersPage
