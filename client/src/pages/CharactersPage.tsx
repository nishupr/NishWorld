import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Feather } from 'lucide-react'

interface Author {
  id: string
  name: string
  displayName: string
  emoji: string
  image: string
  bio: string
  stories: {
    id: string
    title: string
    category: string
  }[]
  traits: string[]
  genre: string
}

const authors: Author[] = [
  {
    id: 'lexi',
    name: 'Lexi',
    displayName: 'Lexi Hart',
    emoji: '🎤',
    image: 'https://imgcdn.stablediffusionweb.com/2024/12/22/fc19cb5e-9bba-48e9-9c00-23cf727129d0.jpg',
    bio: 'A storyteller of fame, music, and the hearts that beat behind the spotlight.',
    stories: [
      { id: 'lexi', title: 'The Lantern Keeper', category: 'Romance' }
    ],
    traits: ['Fearless', 'Passionate', 'Authentic'],
    genre: 'Contemporary Romance'
  },
  {
    id: 'alex',
    name: 'Alex',
    displayName: 'Alex Rivers',
    emoji: '🎸',
    image: 'https://img.freepik.com/free-photo/anime-character-playing-guitar_23-2151103495.jpg',
    bio: 'Crafting tales of dreams, struggles, and the melodies that connect souls.',
    stories: [
      { id: 'alex', title: 'The Melody of Dreams', category: 'Inspirational' }
    ],
    traits: ['Determined', 'Artistic', 'Humble'],
    genre: 'Musical Drama'
  },
  {
    id: 'bella',
    name: 'Bella',
    displayName: 'Bella Moonwright',
    emoji: '🌸',
    image: 'https://w0.peakpx.com/wallpaper/644/678/HD-wallpaper-school-vibes-anime-girl-cute-sky-view-uniform.jpg',
    bio: 'Weaver of magical worlds where kindness is the greatest power.',
    stories: [
      { id: 'bella', title: 'The Secret of Evermist', category: 'Fantasy' }
    ],
    traits: ['Curious', 'Kind', 'Magical'],
    genre: 'Whimsical Fantasy'
  },
  {
    id: 'kai',
    name: 'Kai',
    displayName: 'Kai Storm',
    emoji: '⚡',
    image: 'https://i.pinimg.com/736x/46/a5/e0/46a5e0f623fec0bd3cffad1a12109e15.jpg',
    bio: 'Chronicles of adrenaline, rooftops, and the balance between chaos and duty.',
    stories: [
      { id: 'kai', title: 'Rooftops & Revelations', category: 'Action' }
    ],
    traits: ['Adventurous', 'Loyal', 'Fearless'],
    genre: 'Urban Fantasy'
  },
  {
    id: 'luna',
    name: 'Luna',
    displayName: 'Luna Shadowflame',
    emoji: '🌙',
    image: 'https://i.pinimg.com/236x/6d/4a/22/6d4a2216ef416deaaabf03def93dc550.jpg',
    bio: 'Tales of fire and ice, where enemies become lovers and destiny bends.',
    stories: [
      { id: 'luna', title: 'The Silent Flame', category: 'Fantasy Romance' }
    ],
    traits: ['Mysterious', 'Powerful', 'Resilient'],
    genre: 'Epic Fantasy'
  },
  {
    id: 'vik',
    name: 'Vik',
    displayName: 'Vik Ashborne',
    emoji: '🛡️',
    image: 'https://i.pinimg.com/736x/44/d9/29/44d9296e901703500ad2d470008a6e24.jpg',
    bio: 'Stories of shadows, redemption, and the unbroken spirit of guardians.',
    stories: [
      { id: 'vik', title: 'Shadows of the Forgotten', category: 'Thriller' }
    ],
    traits: ['Silent', 'Protective', 'Honorable'],
    genre: 'Dark Fiction'
  },
  {
    id: 'blaze',
    name: 'Blaze',
    displayName: 'Blaze Nova',
    emoji: '🔥',
    image: 'https://i.pinimg.com/736x/bb/2f/52/bb2f52ab166107088ef7153de6c5588a.jpg',
    bio: 'Rebellion, fire, and the courage to burn down empires for freedom.',
    stories: [
      { id: 'blaze', title: 'Burn the Rulebook', category: 'Action' }
    ],
    traits: ['Rebellious', 'Fearless', 'Revolutionary'],
    genre: 'Dystopian Action'
  },
  {
    id: 'zade',
    name: 'Zade',
    displayName: 'Zade Vex',
    emoji: '♟️',
    image: 'https://cdn.talkie-ai.com/talkie/prod/img/abb520af-b4a5-41f6-8ca1-b750c80d1568.jpeg',
    bio: 'Master of intrigue, strategy, and games where loyalty gets you killed.',
    stories: [
      { id: 'zade', title: 'The Game of Shadows', category: 'Thriller' }
    ],
    traits: ['Strategic', 'Charming', 'Cunning'],
    genre: 'Psychological Thriller'
  },
  {
    id: 'sky',
    name: 'Sky',
    displayName: 'Sky Wilder',
    emoji: '🌩️',
    image: 'https://i.pinimg.com/564x/1d/7d/50/1d7d50bdace5fffda5ad58a390b8d3e4.jpg',
    bio: 'Where wildfire meets wind, storms collide, and love finds its way.',
    stories: [
      { id: 'sky', title: 'Wildfire & Wind', category: 'Romance' }
    ],
    traits: ['Wild', 'Free', 'Passionate'],
    genre: 'Contemporary Romance'
  }
]

const CharactersPage = () => {
  const [hoveredAuthor, setHoveredAuthor] = useState<string | null>(null)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF7F2' }}>
      {/* Header Section */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#B8860B' }}>
              THE AUTHORS
            </p>
            <h1 className="text-5xl md:text-7xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
              Meet the
            </h1>
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6" style={{ color: '#8B5CF6' }}>
              storytellers.
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Every character is an author. Every story is a journey. 
              Dive into the worlds they've crafted with heart and soul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <motion.div
                key={author.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredAuthor(author.id)}
                onHoverEnd={() => setHoveredAuthor(null)}
                className="group"
              >
                <div
                  className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    transform: hoveredAuthor === author.id ? 'translateY(-8px)' : 'translateY(0)'
                  }}
                >
                  {/* Author Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={author.image}
                      alt={author.displayName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl">{author.emoji}</span>
                        <div>
                          <p className="text-white font-serif text-xl font-semibold">
                            {author.displayName}
                          </p>
                          <p className="text-white/80 text-xs uppercase tracking-wide">
                            {author.genre}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="p-6">
                    {/* Bio */}
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B7280' }}>
                      {author.bio}
                    </p>

                    {/* Traits */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {author.traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            backgroundColor: '#F3E8FF',
                            color: '#7C3AED'
                          }}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>

                    {/* Stories */}
                    <div className="pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={16} style={{ color: '#9CA3AF' }} />
                        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#9CA3AF' }}>
                          Stories
                        </p>
                      </div>
                      {author.stories.map((story) => (
                        <Link 
                          key={story.id} 
                          to={`/story/${story.id}`}
                          className="block mb-2 group/story"
                        >
                          <div className="flex items-center justify-between p-3 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: '#FAF7F2' }}>
                            <div>
                              <p className="font-serif font-medium mb-1" style={{ color: '#1A1A1A' }}>
                                {story.title}
                              </p>
                              <p className="text-xs" style={{ color: '#9CA3AF' }}>
                                {story.category}
                              </p>
                            </div>
                            <span className="text-lg group-hover/story:translate-x-1 transition-transform">
                              →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* View Profile Button */}
                    <Link to={`/story/${author.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-4 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                        style={{ 
                          backgroundColor: '#1A1A1A',
                          color: '#FFFFFF'
                        }}
                      >
                        <Feather size={16} />
                        <span>Read Their Story</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{ backgroundColor: '#FFF7ED' }}
          >
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#EA580C' }}>
                BECOME AN AUTHOR
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: '#1A1A1A' }}>
                Your story <span className="italic" style={{ color: '#F59E0B' }}>awaits.</span>
              </h2>
              <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
                Every author started with a single word. What will yours be?
              </p>
              <Link to="/create">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-md font-medium text-white inline-flex items-center gap-2"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  <Feather size={18} />
                  Start writing
                </motion.button>
              </Link>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 text-8xl opacity-10">📖</div>
            <div className="absolute -bottom-10 -right-10 text-8xl opacity-10">✨</div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CharactersPage
