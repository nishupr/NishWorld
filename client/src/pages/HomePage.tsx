import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, BookOpen, Users } from 'lucide-react'

const HomePage = () => {

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF7F2' }}>
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#B8860B' }}>
                  — A LITTLE WONDER, WAITING
                </p>
                <h1 className="text-5xl md:text-7xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
                  Stories that
                </h1>
                <h1 className="text-5xl md:text-7xl font-serif italic mb-6" style={{ color: '#8B5CF6' }}>
                  stay with you.
                </h1>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Step into worlds made of moonlight, mischief, and maybe a little bit of you.
              </p>

              <div className="flex gap-4">
                <Link to="/discover">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-md font-medium text-white flex items-center gap-2"
                    style={{ backgroundColor: '#1A1A1A' }}
                  >
                    Begin reading
                    <span>→</span>
                  </motion.button>
                </Link>
                <Link to="/discover">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-md font-medium border-2 flex items-center gap-2"
                    style={{ borderColor: '#1A1A1A', color: '#1A1A1A' }}
                  >
                    Explore the library
                    <span>→</span>
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 pt-8"
              >
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white" style={{ backgroundColor: '#FFC0CB' }} />
                  <div className="w-10 h-10 rounded-full border-2 border-white" style={{ backgroundColor: '#E6E6FA' }} />
                  <div className="w-10 h-10 rounded-full border-2 border-white" style={{ backgroundColor: '#FFD700' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>12,400 readers</p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>
                    found their next world
                  </p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>
                    Join them as the stories begin
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"
                  alt="Magical purple forest"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-2xl font-serif italic">
                    The world is wider than it looks.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Choose your path',
                desc: 'Every choice changes the story',
                color: '#8B5CF6'
              },
              {
                icon: BookOpen,
                title: 'Made for wonder',
                desc: 'Stories for every kind of reader',
                color: '#F59E0B'
              },
              {
                icon: Users,
                title: 'Keep the feeling',
                desc: 'Save worlds worth returning to',
                color: '#EC4899'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl"
                style={{ backgroundColor: '#FAF7F2' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon size={24} style={{ color: feature.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A1A1A' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{ backgroundColor: '#E9D5FF' }}
          >
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#7C3AED' }}>
                YOUR BLANK PAGE
              </p>
              <h2 className="text-4xl md:text-6xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
                Bring a world
              </h2>
              <p className="text-4xl md:text-6xl font-serif italic mb-6" style={{ color: '#8B5CF6' }}>
                to life.
              </p>
              <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
                Give us a spark. We'll help you find the story hiding inside it.
              </p>
              <Link to="/create">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-md font-medium text-white flex items-center gap-2 mx-auto"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  Open story studio
                  <Sparkles size={18} />
                </motion.button>
              </Link>
            </div>
            {/* Decorative sparkles */}
            <div className="absolute top-10 left-10 text-4xl opacity-20">✨</div>
            <div className="absolute bottom-10 right-10 text-4xl opacity-20">✨</div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12" style={{ borderTop: '1px solid #E5E7EB' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-lg font-serif font-semibold" style={{ color: '#1A1A1A' }}>
              Nish's World
            </p>
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              Where stories stay with you
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/nishu-pundir-33a188336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
              style={{ color: '#6B7280' }}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/hey.niish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
              style={{ color: '#6B7280' }}
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 text-center text-xs" style={{ color: '#9CA3AF' }}>
          <p>© 2026 Nish's World. Made with imagination.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
