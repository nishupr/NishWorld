import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Hero Section - Chapter I */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-7xl mx-auto w-full"
        >
          {/* Top Meta */}
          <motion.div 
            className="flex justify-between items-start mb-16 text-sm"
            style={{ color: 'var(--text-tertiary)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <p>Independent Storyteller</p>
              <p className="mt-1">based in India</p>
            </div>
            <div className="text-right">
              <p>New Delhi, India</p>
              <p className="mt-1">(GMT+5:30) {currentTime}</p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A journey through
            <br />
            <span className="italic font-serif">worlds of imagination</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Interactive storytelling platform — focused on emotional depth, 
            character-driven narratives, and immersive experiences.
          </motion.p>

          {/* CTA Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="px-4 py-2 text-sm rounded-full" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
              Open for exploration
            </span>
            <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>SCROLL</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent" />
        </motion.div>
      </section>

      {/* Chapter I - Introduction */}
      <section className="min-h-screen px-6 md:px-12 lg:px-24 py-32" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm mb-8" style={{ color: 'var(--text-tertiary)' }}>Chapter I</p>
            <h2 className="text-5xl md:text-7xl font-light mb-16">Quick intro</h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Hi, I'm <span className="font-semibold">Nishu</span> — a storyteller 
                  with a passion for creating immersive narratives, rich characters, 
                  and emotional journeys that resonate.
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-sm mb-2" style={{ color: 'var(--text-tertiary)' }}>Philosophy</p>
                  <p className="text-lg italic" style={{ color: 'var(--text-secondary)' }}>
                    "Stories for the soul. Characters for the heart."
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ color: 'var(--text-tertiary)' }}>Beyond writing</p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Anime aesthetics, emotional depth, character psychology, 
                    and the magic of human connection.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter II - The Characters */}
      <section className="min-h-screen px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm mb-8" style={{ color: 'var(--text-tertiary)' }}>Chapter II</p>
            <h2 className="text-5xl md:text-7xl font-light mb-16">The Characters</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { 
                  name: 'Lexi', 
                  title: 'The Rockstar',
                  image: 'https://imgcdn.stablediffusionweb.com/2024/12/22/fc19cb5e-9bba-48e9-9c00-23cf727129d0.jpg'
                },
                { 
                  name: 'Alex', 
                  title: 'The Melody of Dreams',
                  image: 'https://img.freepik.com/free-photo/anime-character-playing-guitar_23-2151103495.jpg'
                },
                { 
                  name: 'Bella', 
                  title: 'The Secret of Evermist',
                  image: 'https://w0.peakpx.com/wallpaper/644/678/HD-wallpaper-school-vibes-anime-girl-cute-sky-view-uniform.jpg'
                },
                { 
                  name: 'Kai', 
                  title: 'Rooftops & Revelations',
                  image: 'https://picture.lk/files/preview/960x1713/11710586104humg5hwn8tj3klyjym0q3xsg3aqcqavfxgfnjn6vzdexsginvqie52pfpiml81lkdwjj27mthgnou4h8cyayv6inhkmikcxhmsoy.jpg'
                },
                { 
                  name: 'Luna', 
                  title: 'The Silent Flame',
                  image: 'https://i.pinimg.com/236x/6d/4a/22/6d4a2216ef416deaaabf03def93dc550.jpg'
                },
                { 
                  name: 'Vik', 
                  title: 'Shadows of the Forgotten',
                  image: 'https://i.pinimg.com/736x/44/d9/29/44d9296e901703500ad2d470008a6e24.jpg'
                }
              ].map((character, index) => (
                <Link to="/characters" key={character.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[3/4] rounded-lg mb-4 overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                      <img 
                        src={character.image} 
                        alt={character.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-lg font-medium mb-1">{character.name}</p>
                    <p className="text-sm mb-2" style={{ color: 'var(--text-tertiary)' }}>{character.title}</p>
                    <p className="text-xs transition-colors" style={{ color: 'var(--text-tertiary)' }}>View story →</p>
                  </motion.div>
                </Link>
              ))}
            </div>

            <Link to="/characters">
              <button className="px-8 py-4 rounded-full transition-colors" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
                View All Characters
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Chapter III - What I Offer */}
      <section className="min-h-screen px-6 md:px-12 lg:px-24 py-32" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm mb-8" style={{ color: 'var(--text-tertiary)' }}>Chapter III</p>
            <h2 className="text-5xl md:text-7xl font-light mb-16">What I offer?</h2>

            <p className="text-2xl md:text-3xl mb-16 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              Crafting emotional narratives with depth, authenticity, and connection.
            </p>

            <div className="grid gap-12">
              {[
                {
                  num: '01',
                  title: 'Character-Driven Stories',
                  desc: 'Rich, complex characters with deep backstories and emotional arcs.'
                },
                {
                  num: '02',
                  title: 'Interactive Narratives',
                  desc: 'Personality quizzes and immersive reading experiences.'
                },
                {
                  num: '03',
                  title: 'Emotional Depth',
                  desc: 'Stories that explore love, loss, resilience, and redemption.'
                },
                {
                  num: '04',
                  title: 'Visual Storytelling',
                  desc: 'Anime-inspired aesthetics with mood and atmosphere.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8 pt-8"
                  style={{ borderTop: '1px solid var(--border-color)' }}
                >
                  <span className="text-sm w-12" style={{ color: 'var(--text-tertiary)' }}>{item.num}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter IV - Start Your Journey */}
      <section className="min-h-screen px-6 md:px-12 lg:px-24 py-32 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-sm mb-8" style={{ color: 'var(--text-tertiary)' }}>Chapter IV</p>
            <h2 className="text-6xl md:text-8xl font-light mb-12 leading-tight">
              Where stories
              <br />
              <span className="italic font-serif">find their soul</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/characters">
                <button className="px-10 py-5 rounded-full transition-all text-lg" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
                  Explore Characters
                </button>
              </Link>
              <Link to="/quiz/girl">
                <button className="px-10 py-5 border-2 rounded-full transition-all text-lg" style={{ borderColor: 'var(--text-primary)' }}>
                  Take a Quiz
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-16" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-sm mb-2" style={{ color: 'var(--text-tertiary)' }}>AUTHOR & CREATOR</p>
            <p className="text-2xl font-medium">Nishu Pundir</p>
            <p className="mt-1" style={{ color: 'var(--text-secondary)' }}>A mind always wandering into realms unknown ♥</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/nishu-pundir-33a188336"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/hey.niish"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>
          <p>© 2026 — nish's world — edition</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
