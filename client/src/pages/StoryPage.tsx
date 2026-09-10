import { motion, AnimatePresence } from 'framer-motion'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { X, BookOpen, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react'

interface StoryData {
  id: string
  name: string
  title: string
  subtitle: string
  author: string
  image: string
  chapters: {
    number: number
    title: string
    content: string[]
  }[]
  readTime: string
  category: string
}

const stories: Record<string, StoryData> = {
  lexi: {
    id: 'lexi',
    name: 'Lexi',
    title: 'The Lantern Keeper',
    subtitle: 'When the last star goes missing',
    author: 'LuminaTales',
    image: 'https://imgcdn.stablediffusionweb.com/2024/12/22/fc19cb5e-9bba-48e9-9c00-23cf727129d0.jpg',
    category: 'FAIRYTALE',
    readTime: '8 min read',
    chapters: [
      {
        number: 1,
        title: 'The Last Light',
        content: [
          'Lexi stood under the blinding spotlight, microphone in hand, a sea of fans screaming her name. She was the world\'s icon — fierce, fearless, and undeniably talented. Her voice echoed in every arena she stepped into, and her face graced every magazine cover.',
          'But fame, for all its glamour, came with loneliness. Behind the scenes, Lexi craved something real — something not built on flashing cameras and PR deals.',
          'One evening, while taking a break from her chaotic tour life, Lexi wandered into a small café tucked away in a quiet corner of the city.'
        ]
      },
      {
        number: 2,
        title: 'A Voice in the Shadows',
        content: [
          'There, under dim fairy lights and a stage that barely fit two people, a young man was singing — raw, passionate, and completely immersed in his music. His name was Noah.',
          'He wasn\'t famous. He didn\'t have a record label or a viral video. But there was something magical in the way he sang, as if every word was drawn from the deepest parts of his soul.',
          'Lexi sat in silence, mesmerized. That night, she stayed after the show and introduced herself — not as Lexi the celebrity, but just Lexi, a lover of music.'
        ]
      },
      {
        number: 3,
        title: 'Hearts in Harmony',
        content: [
          'Their connection was instant. Noah didn\'t treat her like a superstar. He spoke to her like she was human — flawed, curious, and full of dreams.',
          'Over time, their friendship blossomed into a quiet romance. Lexi started writing songs with him in secret, meeting late at night in studios no one knew about.',
          'Their worlds were so different, yet their hearts beat to the same rhythm.'
        ]
      },
      {
        number: 4,
        title: 'The Storm',
        content: [
          'But the world didn\'t stay quiet for long. When news of their relationship broke, the internet erupted. Lexi was trolled relentlessly. "Why him?" they said. "A nobody with no fame?"',
          'Headlines spun cruel stories, fans turned against her, and producers warned her she was risking everything. But Lexi didn\'t flinch.',
          'She stood by Noah — through the noise, the hate, and the storms. She helped him believe in his voice, gave him the platform he needed, but never overshadowed his path.'
        ]
      },
      {
        number: 5,
        title: 'A Constellation',
        content: [
          'A few years later, Noah won Artist of the Year, standing on the same stage where Lexi had once stood. That night, he proposed to her — right there, in front of millions, with tears in his eyes and a heart full of gratitude.',
          'They got married in a private garden under the stars, far away from flashing lights and red carpets. Years passed, and they had two beautiful kids who grew up surrounded by music, laughter, and the most genuine love.',
          'Lexi and Noah became legends — not just as artists, but as soulmates who defied the odds, silenced the critics, and proved that love rooted in trust and respect could weather any storm.',
          'They weren\'t just stars. They were a constellation — lighting up the world, together.'
        ]
      }
    ]
  },
  alex: {
    id: 'alex',
    name: 'Alex',
    title: 'The Melody of Dreams',
    subtitle: 'From rooftops to stadiums',
    author: 'Echo Studios',
    image: 'https://img.freepik.com/free-photo/anime-character-playing-guitar_23-2151103495.jpg',
    category: 'ROMANCE',
    readTime: '10 min read',
    chapters: [
      {
        number: 1,
        title: 'The Beginning',
        content: [
          'Alex wasn\'t born into fame. He didn\'t have the luxury of polished studios or high-profile mentors. His world was small — a second-hand guitar, a cramped apartment, and a heart bursting with music.',
          'From the moment he held that worn six-string, he knew — music wasn\'t just a passion; it was his soul\'s language.'
        ]
      }
    ]
  },
  bella: {
    id: 'bella',
    name: 'Bella',
    title: 'The Secret of Evermist',
    subtitle: 'Magic hidden in plain sight',
    author: 'Mystic Chronicles',
    image: 'https://w0.peakpx.com/wallpaper/644/678/HD-wallpaper-school-vibes-anime-girl-cute-sky-view-uniform.jpg',
    category: 'FANTASY',
    readTime: '12 min read',
    chapters: [
      {
        number: 1,
        title: 'Evermist Academy',
        content: [
          'In a quaint town nestled between rolling hills and dense forests stood Evermist Academy — an age-old school known for its ivy-covered walls, whispering hallways, and a curious reputation of being just a little bit different.'
        ]
      }
    ]
  },
  kai: {
    id: 'kai',
    name: 'Kai',
    title: 'Rooftops & Revelations',
    subtitle: 'Where thrill meets destiny',
    author: 'Urban Legends',
    image: 'https://i.pinimg.com/736x/46/a5/e0/46a5e0f623fec0bd3cffad1a12109e15.jpg',
    category: 'ACTION',
    readTime: '11 min read',
    chapters: [
      {
        number: 1,
        title: 'The City Above',
        content: [
          'Kai had always been the spark in every room — the kind of guy who\'d climb school rooftops, slide down railings, prank teachers (with style), and still manage to flash that disarming grin that got him out of trouble.'
        ]
      }
    ]
  },
  luna: {
    id: 'luna',
    name: 'Luna',
    title: 'The Silent Flame',
    subtitle: 'Where fire meets ice',
    author: 'Winter Chronicles',
    image: 'https://i.pinimg.com/236x/6d/4a/22/6d4a2216ef416deaaabf03def93dc550.jpg',
    category: 'FANTASY',
    readTime: '13 min read',
    chapters: [
      {
        number: 1,
        title: 'The Snow Kingdom',
        content: [
          'In the snow-veiled realm of Kureha, where ancient whispers echoed through icy trees, Luna lived quietly, tucked away in a shadowed cabin beyond the village.'
        ]
      }
    ]
  },
  vik: {
    id: 'vik',
    name: 'Vik',
    title: 'Shadows of the Forgotten',
    subtitle: 'A guardian\'s oath',
    author: 'Dark Tales',
    image: 'https://i.pinimg.com/736x/44/d9/29/44d9296e901703500ad2d470008a6e24.jpg',
    category: 'THRILLER',
    readTime: '14 min read',
    chapters: [
      {
        number: 1,
        title: 'The Underground',
        content: [
          'In the sprawling underground city of Droskar, where sunlight never reaches and neon lights flicker like dying stars, Vik was a name spoken in whispers.'
        ]
      }
    ]
  },
  blaze: {
    id: 'blaze',
    name: 'Blaze',
    title: 'Burn the Rulebook',
    subtitle: 'Fire and freedom',
    author: 'Rebel Tales',
    image: 'https://i.pinimg.com/736x/bb/2f/52/bb2f52ab166107088ef7153de6c5588a.jpg',
    category: 'ACTION',
    readTime: '10 min read',
    chapters: [
      {
        number: 1,
        title: 'Born from Fire',
        content: [
          'No one knew where Blaze came from. Rumors spread like smoke: She broke out of a maximum-security prison at thirteen. She burned down an underground arena and walked away smiling.'
        ]
      }
    ]
  },
  zade: {
    id: 'zade',
    name: 'Zade',
    title: 'The Game of Shadows',
    subtitle: 'Play well or be played',
    author: 'Midnight Tales',
    image: 'https://cdn.talkie-ai.com/talkie/prod/img/abb520af-b4a5-41f6-8ca1-b750c80d1568.jpeg',
    category: 'THRILLER',
    readTime: '15 min read',
    chapters: [
      {
        number: 1,
        title: 'The Invitation',
        content: [
          'Zade wasn\'t born into the light. He was born beneath it — in the underground corridors of Virelia, a gleaming metropolis where the rich built towers into the clouds and the forgotten were buried beneath them.'
        ]
      }
    ]
  },
  sky: {
    id: 'sky',
    name: 'Sky',
    title: 'Wildfire & Wind',
    subtitle: 'When opposites collide',
    author: 'Sky Chronicles',
    image: 'https://i.pinimg.com/564x/1d/7d/50/1d7d50bdace5fffda5ad58a390b8d3e4.jpg',
    category: 'ROMANCE',
    readTime: '12 min read',
    chapters: [
      {
        number: 1,
        title: 'The Storm',
        content: [
          'Sky was a storm in motion. With hair like wildfire and eyes that burned brighter than city lights, she lived her life above the world—literally.'
        ]
      }
    ]
  }
}

const StoryPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [currentChapter, setCurrentChapter] = useState(0)
  const [liked, setLiked] = useState(false)

  const story = id ? stories[id] : null

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4" style={{ color: '#1A1A1A' }}>Story not found</h2>
          <Link to="/discover">
            <button className="px-6 py-3 rounded-md" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>
              Back to Stories
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const chapter = story.chapters[currentChapter]
  const isFirstChapter = currentChapter === 0
  const isLastChapter = currentChapter === story.chapters.length - 1

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-hidden"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      >
        {/* Close button */}
        <button
          onClick={() => navigate('/discover')}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
        >
          <X size={24} style={{ color: '#FFFFFF' }} />
        </button>

        <div className="h-full overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                {/* Left Side - Image */}
                <div className="relative h-[300px] md:h-auto">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Story meta on image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span 
                      className="inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide mb-3"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#1A1A1A' }}
                    >
                      {story.category}
                    </span>
                    <p className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      By {story.author} • {story.readTime}
                    </p>
                  </div>
                </div>

                {/* Right Side - Story Content */}
                <div className="flex flex-col h-[600px] md:h-[700px]">
                  {/* Header */}
                  <div className="px-8 py-8 border-b" style={{ borderColor: '#E5E7EB' }}>
                    <p className="text-xs uppercase tracking-wider mb-2" style={{ color: '#9CA3AF' }}>
                      CHAPTER {chapter.number}
                    </p>
                    <h1 className="text-3xl font-serif font-bold mb-2" style={{ color: '#1A1A1A' }}>
                      {chapter.title}
                    </h1>
                    <p className="text-sm italic" style={{ color: '#6B7280' }}>
                      {story.subtitle}
                    </p>
                  </div>

                  {/* Story Text - Scrollable */}
                  <div className="flex-1 overflow-y-auto px-8 py-8">
                    <motion.div
                      key={currentChapter}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-6"
                    >
                      {chapter.content.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-lg leading-relaxed font-serif"
                          style={{ color: '#374151' }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>
                  </div>

                  {/* Footer - Navigation & Actions */}
                  <div className="px-8 py-6 border-t" style={{ borderColor: '#E5E7EB' }}>
                    {/* Chapter Navigation */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => setCurrentChapter(prev => Math.max(0, prev - 1))}
                        disabled={isFirstChapter}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                          isFirstChapter ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'
                        }`}
                        style={{ 
                          backgroundColor: isFirstChapter ? '#E5E7EB' : '#1A1A1A',
                          color: '#FFFFFF'
                        }}
                      >
                        <ChevronLeft size={18} />
                        <span className="text-sm font-medium">Previous</span>
                      </button>

                      <div className="flex gap-2">
                        {story.chapters.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentChapter(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentChapter ? 'w-8' : ''
                            }`}
                            style={{ 
                              backgroundColor: idx === currentChapter ? '#8B5CF6' : '#D1D5DB'
                            }}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => {
                          if (isLastChapter) {
                            navigate('/discover')
                          } else {
                            setCurrentChapter(prev => Math.min(story.chapters.length - 1, prev + 1))
                          }
                        }}
                        className="flex items-center gap-2 px-4 py-2 rounded-md transition-all hover:scale-105"
                        style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}
                      >
                        <span className="text-sm font-medium">
                          {isLastChapter ? 'Close book' : 'Next'}
                        </span>
                        {!isLastChapter && <ChevronRight size={18} />}
                        {isLastChapter && <BookOpen size={18} />}
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setLiked(!liked)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md border-2 transition-all hover:scale-105"
                        style={{ 
                          borderColor: liked ? '#EC4899' : '#E5E7EB',
                          backgroundColor: liked ? '#FDF2F8' : 'transparent',
                          color: liked ? '#EC4899' : '#6B7280'
                        }}
                      >
                        <Heart size={18} fill={liked ? '#EC4899' : 'none'} />
                        <span className="text-sm font-medium">
                          {liked ? 'Saved' : 'Save'}
                        </span>
                      </button>

                      <button
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md border-2 transition-all hover:scale-105"
                        style={{ borderColor: '#E5E7EB', color: '#6B7280' }}
                      >
                        <Share2 size={18} />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default StoryPage
