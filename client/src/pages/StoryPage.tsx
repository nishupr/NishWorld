import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface StoryData {
  id: string
  name: string
  title: string
  emoji: string
  image: string
  story: string
  category: string
  traits: string[]
}

const stories: Record<string, StoryData> = {
  lexi: {
    id: 'lexi',
    name: 'Lexi',
    title: '🎤 Lexi: The Rockstar with a Heart',
    emoji: '🎤',
    image: 'https://imgcdn.stablediffusionweb.com/2024/12/22/fc19cb5e-9bba-48e9-9c00-23cf727129d0.jpg',
    category: 'Rockstar',
    traits: ['Fearless', 'Talented', 'Passionate', 'Loyal'],
    story: `Lexi stood under the blinding spotlight, microphone in hand, a sea of fans screaming her name. She was the world's icon — fierce, fearless, and undeniably talented. Her voice echoed in every arena she stepped into, and her face graced every magazine cover. But fame, for all its glamour, came with loneliness.

Behind the scenes, Lexi craved something real — something not built on flashing cameras and PR deals. One evening, while taking a break from her chaotic tour life, Lexi wandered into a small café tucked away in a quiet corner of the city. 

There, under dim fairy lights and a stage that barely fit two people, a young man was singing — raw, passionate, and completely immersed in his music. His name was Noah. He wasn't famous. He didn't have a record label or a viral video. But there was something magical in the way he sang, as if every word was drawn from the deepest parts of his soul.

Lexi sat in silence, mesmerized. That night, she stayed after the show and introduced herself — not as Lexi the celebrity, but just Lexi, a lover of music. Their connection was instant. Noah didn't treat her like a superstar. He spoke to her like she was human — flawed, curious, and full of dreams.

Over time, their friendship blossomed into a quiet romance. Lexi started writing songs with him in secret, meeting late at night in studios no one knew about. Their worlds were so different, yet their hearts beat to the same rhythm.

But the world didn't stay quiet for long. When news of their relationship broke, the internet erupted. Lexi was trolled relentlessly. "Why him?" they said. "A nobody with no fame?" Headlines spun cruel stories, fans turned against her, and producers warned her she was risking everything.

But Lexi didn't flinch. She stood by Noah — through the noise, the hate, and the storms. She helped him believe in his voice, gave him the platform he needed, but never overshadowed his path. And Noah? He rose. Not because of her fame, but because of his raw, undeniable talent.

A few years later, Noah won Artist of the Year, standing on the same stage where Lexi had once stood. That night, he proposed to her — right there, in front of millions, with tears in his eyes and a heart full of gratitude.

They got married in a private garden under the stars, far away from flashing lights and red carpets. Years passed, and they had two beautiful kids who grew up surrounded by music, laughter, and the most genuine love.

Lexi and Noah became legends — not just as artists, but as soulmates who defied the odds, silenced the critics, and proved that love rooted in trust and respect could weather any storm. Their story was turned into a movie, a bestseller, and a timeless tale told to every generation that dreams of both fame and love.

They weren't just stars. They were a constellation — lighting up the world, together.`
  },
  // Add placeholder for other characters
  alex: {
    id: 'alex',
    name: 'Alex',
    title: '🎸 Alex: The Melody of Dreams',
    emoji: '🎸',
    image: 'https://img.freepik.com/free-photo/anime-character-playing-guitar_23-2151103495.jpg',
    category: 'Musician',
    traits: ['Determined', 'Artistic', 'Humble', 'Romantic'],
    story: 'Story coming soon...'
  }
}

const StoryPage = () => {
  const { id } = useParams<{ id: string }>()
  const [readProgress, setReadProgress] = useState(0)
  
  const story = stories[id || ''] || stories.lexi

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setReadProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate read time (200 words per minute)
  const wordCount = story.story.split(/\s+/).length
  const readTime = Math.ceil(wordCount / 200)

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <motion.div
          className="h-full bg-black"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={story.image}
            alt={story.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
        </div>

        <div className="relative h-full flex items-end pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white"
          >
            <p className="text-sm mb-4 opacity-80">{story.category}</p>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              {story.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              {story.title.replace(/^[🎤🎸🌸⚡🌙🛡️🔥♟️🌩️🏍️]\s+/, '').replace(/^[^:]+:\s+/, '')}
            </p>
            <div className="flex gap-4 text-sm opacity-75">
              <span>{readTime} min read</span>
              <span>•</span>
              <span>{wordCount} words</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        
        {/* Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12 pb-12 border-b border-gray-200"
        >
          {story.traits.map((trait) => (
            <span
              key={trait}
              className="px-4 py-2 bg-gray-100 text-sm rounded-full"
            >
              {trait}
            </span>
          ))}
        </motion.div>

        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          {story.story.split('\n\n').map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-700 leading-relaxed mb-6 text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* End Divider */}
        <div className="my-16 text-center">
          <div className="w-16 h-px bg-black mx-auto" />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center py-12 border-t border-gray-200">
          <Link to="/characters">
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <span>←</span>
              <span>All Characters</span>
            </button>
          </Link>
          <Link to="/quiz/girl">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Take the Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StoryPage
