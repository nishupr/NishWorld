import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Clock, Tag } from 'lucide-react'

// Story data with categories
const stories = [
  {
    id: 'lexi',
    title: 'The Lantern Keeper',
    subtitle: 'When the last star goes missing',
    author: 'By LuminaTales',
    image: 'https://imgcdn.stablediffusionweb.com/2024/12/22/fc19cb5e-9bba-48e9-9c00-23cf727129d0.jpg',
    category: 'FAIRYTALE',
    readTime: '8 min read',
    description: 'A curious seeker follows its glow beyond the edge of the map.',
    tags: ['Romance', 'Music', 'Fame']
  },
  {
    id: 'alex',
    title: 'The Door in the Cloud',
    subtitle: 'A wandering cartographer discovers a door',
    author: 'By Yuu',
    image: 'https://img.freepik.com/free-photo/anime-character-playing-guitar_23-2151103495.jpg',
    category: 'MYSTERIOUS FANTASY',
    readTime: '7 min read',
    description: 'Suspended inside a drifting cloud and follows it into a mystery that reshapes the meaning of maps.',
    tags: ['Dreams', 'Music', 'Perseverance']
  },
  {
    id: 'bella',
    title: 'The Fox and the Hidden Moon Garden',
    subtitle: 'A whimsical interactive tale',
    author: 'By Yuu',
    image: 'https://w0.peakpx.com/wallpaper/644/678/HD-wallpaper-school-vibes-anime-girl-cute-sky-view-uniform.jpg',
    category: 'WHIMSICAL FANTASY',
    readTime: '7 min read',
    description: 'About a curious fox who discovers a secret garden that blooms only in moonlight.',
    tags: ['Magic', 'School', 'Mystery']
  },
  {
    id: 'kai',
    title: 'Moss & Moonlight',
    subtitle: 'A small creature, a sleeping mountain',
    author: 'By the Vale',
    image: 'https://i.pinimg.com/736x/46/a5/e0/46a5e0f623fec0bd3cffad1a12109e15.jpg',
    category: 'NATURE TALE',
    readTime: '12 min read',
    description: 'And one enormous promise.',
    tags: ['Urban', 'Action', 'Guardian']
  },
  {
    id: 'luna',
    title: 'The Paper Kingdom',
    subtitle: 'Every fold is a door',
    author: 'By Sarah Wren',
    image: 'https://i.pinimg.com/236x/6d/4a/22/6d4a2216ef416deaaabf03def93dc550.jpg',
    category: 'WONDER',
    readTime: '9 min read',
    description: 'Every story remembers your name.',
    tags: ['Fantasy', 'War', 'Love']
  },
  {
    id: 'vik',
    title: 'The Keeper of Forgotten Songs',
    subtitle: 'An elderly musician collects melodies',
    author: 'By the Vale',
    image: 'https://i.pinimg.com/736x/44/d9/29/44d9296e901703500ad2d470008a6e24.jpg',
    category: 'NATURE TALE',
    readTime: '11 min read',
    description: 'That people no longer sing—until one day, a child remembers.',
    tags: ['Dark', 'Redemption', 'Brotherhood']
  },
  {
    id: 'blaze',
    title: 'Embers of Tomorrow',
    subtitle: 'She burned the past to build the future',
    author: 'By Crimson Tales',
    image: 'https://i.pinimg.com/736x/bb/2f/52/bb2f52ab166107088ef7153de6c5588a.jpg',
    category: 'REBELLION',
    readTime: '10 min read',
    description: 'A fierce revolutionary who defied an empire.',
    tags: ['Action', 'Rebellion', 'Freedom']
  },
  {
    id: 'zade',
    title: 'Crown of Shadows',
    subtitle: 'The game of kings and serpents',
    author: 'By Midnight Chronicles',
    image: 'https://cdn.talkie-ai.com/talkie/prod/img/abb520af-b4a5-41f6-8ca1-b750c80d1568.jpeg',
    category: 'THRILLER',
    readTime: '13 min read',
    description: 'Where loyalty gets you killed and strategy keeps you alive.',
    tags: ['Strategy', 'Intrigue', 'Power']
  },
  {
    id: 'sky',
    title: 'Wildfire & Wind',
    subtitle: 'The storm in motion',
    author: 'By Sky Chronicles',
    image: 'https://i.pinimg.com/564x/1d/7d/50/1d7d50bdace5fffda5ad58a390b8d3e4.jpg',
    category: 'ROMANCE',
    readTime: '12 min read',
    description: 'When wildfire meets the wind and stillness finds its spark.',
    tags: ['Romance', 'Adventure', 'Freedom']
  }
]

const categories = ['All stories', 'Fairytales', 'Mystery', 'Short reads', 'Nature tales', 'Romance']

const DiscoverPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All stories')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter stories based on category and search
  const filteredStories = useMemo(() => {
    return stories.filter(story => {
      const matchesCategory = selectedCategory === 'All stories' || 
        story.category.toLowerCase().includes(selectedCategory.toLowerCase().replace(' tales', '').replace('ies', 'y'))
      
      const matchesSearch = searchQuery === '' || 
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

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
              THE STORY SHELF
            </p>
            <h1 className="text-5xl md:text-7xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
              Find your next
            </h1>
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6" style={{ color: '#8B5CF6' }}>
              escape.
            </h1>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2" size={20} style={{ color: '#9CA3AF' }} />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 text-lg"
                style={{ 
                  borderColor: '#E5E7EB',
                  backgroundColor: '#FFFFFF',
                  color: '#1A1A1A'
                }}
              />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center mb-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'text-white'
                    : ''
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? '#1A1A1A' : '#FFFFFF',
                  color: selectedCategory === category ? '#FFFFFF' : '#6B7280',
                  border: selectedCategory === category ? 'none' : '1px solid #E5E7EB'
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Story Count */}
          <p className="text-center text-sm" style={{ color: '#9CA3AF' }}>
            {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Link to={`/story/${story.id}`} key={story.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  {/* Story Card */}
                  <div className="rounded-2xl overflow-hidden shadow-lg relative mb-4" style={{ backgroundColor: '#FFFFFF' }}>
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span 
                        className="px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide"
                        style={{ 
                          backgroundColor: '#FFFFFF',
                          color: '#1A1A1A'
                        }}
                      >
                        {story.category}
                      </span>
                    </div>

                    {/* Favorite Icon */}
                    <button 
                      className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                      onClick={(e) => {
                        e.preventDefault()
                        // Add to favorites logic
                      }}
                    >
                      <span className="text-xl">♡</span>
                    </button>

                    {/* Image */}
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-semibold mb-2" style={{ color: '#1A1A1A' }}>
                        {story.title}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
                        {story.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
                        <p className="text-xs" style={{ color: '#9CA3AF' }}>
                          {story.author}
                        </p>
                        <div className="flex items-center gap-1">
                          <Clock size={14} style={{ color: '#9CA3AF' }} />
                          <span className="text-xs" style={{ color: '#9CA3AF' }}>
                            {story.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredStories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl font-serif mb-2" style={{ color: '#1A1A1A' }}>
                No stories found
              </p>
              <p style={{ color: '#6B7280' }}>
                Try adjusting your filters or search query
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 md:p-16 text-center"
            style={{ backgroundColor: '#E9D5FF' }}
          >
            <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#7C3AED' }}>
              YOUR BLANK PAGE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: '#1A1A1A' }}>
              Bring a world <span className="italic" style={{ color: '#8B5CF6' }}>to life.</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
              Give us a spark. We'll help you find the story hiding inside it.
            </p>
            <Link to="/create">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-md font-medium text-white inline-flex items-center gap-2"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                Open story studio
                <span>✨</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DiscoverPage
