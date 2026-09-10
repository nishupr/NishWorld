import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Wand2, Heart, Moon, Flame, Cloud, BookOpen } from 'lucide-react'

const tones = [
  { 
    id: 'whimsical', 
    name: 'Whimsical', 
    icon: Sparkles, 
    color: '#F59E0B',
    bgColor: '#FEF3C7',
    description: 'Light-hearted, playful, and full of wonder'
  },
  { 
    id: 'romantic', 
    name: 'Romantic', 
    icon: Heart, 
    color: '#EC4899',
    bgColor: '#FCE7F3',
    description: 'Tender, emotional, and deeply moving'
  },
  { 
    id: 'mysterious', 
    name: 'Mysterious', 
    icon: Moon, 
    color: '#8B5CF6',
    bgColor: '#EDE9FE',
    description: 'Dark, intriguing, and suspenseful'
  },
  { 
    id: 'epic', 
    name: 'Epic', 
    icon: Flame, 
    color: '#EF4444',
    bgColor: '#FEE2E2',
    description: 'Grand, heroic, and action-packed'
  },
  { 
    id: 'dreamy', 
    name: 'Dreamy', 
    icon: Cloud, 
    color: '#06B6D4',
    bgColor: '#CFFAFE',
    description: 'Ethereal, soft, and contemplative'
  }
]

const storyPrompts = [
  'A lighthouse keeper who collects forgotten dreams...',
  'A door suspended inside a drifting cloud...',
  'The last person on Earth who can hear music...',
  'A garden that blooms only in moonlight...',
  'A painter whose art comes alive at midnight...',
  'A library where books remember your name...',
  'A musician who can play people\'s memories...',
  'A traveler who finds portals in reflections...',
  'A street where time moves backwards...',
  'A cafe that serves emotions instead of coffee...'
]

const CreateStoryPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [storySpark, setStorySpark] = useState('')
  const [selectedTone, setSelectedTone] = useState<string | null>(null)
  const [generatedStory, setGeneratedStory] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleUsePrompt = (prompt: string) => {
    setStorySpark(prompt)
  }

  const handleGenerate = () => {
    if (!storySpark.trim() || !selectedTone) return

    setIsGenerating(true)
    
    // Simulate AI generation
    setTimeout(() => {
      const tone = tones.find(t => t.id === selectedTone)
      setGeneratedStory(`Your ${tone?.name.toLowerCase()} story about "${storySpark}" is being crafted...

In a world where ${storySpark.toLowerCase()}, something extraordinary was about to unfold. The air shimmered with possibility, and at the heart of it all stood a figure who would change everything.

This is where your story begins — a tale woven with ${tone?.description}. Every word, every moment, carefully crafted to transport you to a place you've never been, yet somehow always knew existed.

The journey awaits. The characters are ready. And your imagination? It's the key to everything that comes next.

[This is a preview. Your full story will be generated with AI assistance, expanding on your spark and tone to create a complete narrative.]`)
      setIsGenerating(false)
      setStep(3)
    }, 2500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="max-w-4xl w-full">
        <AnimatePresence mode="wait">
          {/* Step 1: Story Spark */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-8 md:p-12 shadow-2xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block mb-4"
                >
                  <Wand2 size={48} style={{ color: '#8B5CF6' }} />
                </motion.div>
                <p className="text-sm uppercase tracking-wider mb-3" style={{ color: '#9CA3AF' }}>
                  THE STORY STUDIO
                </p>
                <h1 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
                  What wants to be
                </h1>
                <h1 className="text-4xl md:text-5xl font-serif italic mb-4" style={{ color: '#8B5CF6' }}>
                  remembered?
                </h1>
                <p className="text-lg" style={{ color: '#6B7280' }}>
                  Start with a character, a feeling, or a place. The rest can unfold.
                </p>
              </div>

              {/* Input */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3" style={{ color: '#1A1A1A' }}>
                  Your story spark
                </label>
                <textarea
                  value={storySpark}
                  onChange={(e) => setStorySpark(e.target.value)}
                  placeholder="A lighthouse keeper who collects forgotten dreams..."
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl border-2 text-lg resize-none focus:outline-none focus:border-purple-400 transition-colors"
                  style={{ 
                    borderColor: '#E5E7EB',
                    backgroundColor: '#FAF7F2',
                    color: '#1A1A1A'
                  }}
                />
                <p className="text-xs mt-2" style={{ color: '#9CA3AF' }}>
                  {storySpark.length}/200 characters
                </p>
              </div>

              {/* Story Prompts */}
              <div className="mb-8">
                <p className="text-sm font-semibold mb-4" style={{ color: '#6B7280' }}>
                  Or try one of these sparks:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {storyPrompts.slice(0, 6).map((prompt) => (
                    <motion.button
                      key={prompt}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleUsePrompt(prompt)}
                      className="text-left px-4 py-3 rounded-lg border transition-all hover:shadow-md"
                      style={{ 
                        borderColor: '#E5E7EB',
                        backgroundColor: '#FAF7F2',
                        color: '#374151'
                      }}
                    >
                      <span className="text-sm">{prompt}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Continue Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => storySpark.trim() && setStep(2)}
                disabled={!storySpark.trim()}
                className="w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all"
                style={{ 
                  backgroundColor: storySpark.trim() ? '#1A1A1A' : '#E5E7EB',
                  color: storySpark.trim() ? '#FFFFFF' : '#9CA3AF',
                  cursor: storySpark.trim() ? 'pointer' : 'not-allowed'
                }}
              >
                <span>Continue</span>
                <span>→</span>
              </motion.button>
            </motion.div>
          )}

          {/* Step 2: Choose Tone */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-8 md:p-12 shadow-2xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <p className="text-sm uppercase tracking-wider mb-3" style={{ color: '#9CA3AF' }}>
                  STEP 2 OF 2
                </p>
                <h1 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
                  Choose your
                </h1>
                <h1 className="text-4xl md:text-5xl font-serif italic mb-4" style={{ color: '#8B5CF6' }}>
                  story's tone
                </h1>
                <div className="max-w-md mx-auto px-4 py-3 rounded-lg mb-6" style={{ backgroundColor: '#F3F4F6' }}>
                  <p className="text-sm italic" style={{ color: '#6B7280' }}>
                    "{storySpark}"
                  </p>
                </div>
              </div>

              {/* Tone Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {tones.map((tone) => {
                  const Icon = tone.icon
                  const isSelected = selectedTone === tone.id
                  
                  return (
                    <motion.button
                      key={tone.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedTone(tone.id)}
                      className="text-left p-6 rounded-2xl border-2 transition-all"
                      style={{ 
                        borderColor: isSelected ? tone.color : '#E5E7EB',
                        backgroundColor: isSelected ? tone.bgColor : '#FFFFFF',
                        transform: isSelected ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: tone.bgColor }}
                        >
                          <Icon size={24} style={{ color: tone.color }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-serif font-semibold mb-2" style={{ color: '#1A1A1A' }}>
                            {tone.name}
                          </h3>
                          <p className="text-sm" style={{ color: '#6B7280' }}>
                            {tone.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-xl font-semibold border-2 transition-all"
                  style={{ 
                    borderColor: '#E5E7EB',
                    color: '#6B7280'
                  }}
                >
                  ← Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGenerate}
                  disabled={!selectedTone}
                  className="flex-1 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all"
                  style={{ 
                    backgroundColor: selectedTone ? '#1A1A1A' : '#E5E7EB',
                    color: selectedTone ? '#FFFFFF' : '#9CA3AF',
                    cursor: selectedTone ? 'pointer' : 'not-allowed'
                  }}
                >
                  <Sparkles size={20} />
                  <span>Create my story</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Generated Story */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-8 md:p-12 shadow-2xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-block mb-4"
                >
                  <BookOpen size={48} style={{ color: '#10B981' }} />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
                  Your story
                </h1>
                <h1 className="text-4xl md:text-5xl font-serif italic mb-6" style={{ color: '#8B5CF6' }}>
                  is ready
                </h1>
              </div>

              {/* Story Preview */}
              <div 
                className="mb-8 p-6 rounded-2xl max-h-96 overflow-y-auto"
                style={{ backgroundColor: '#FAF7F2' }}
              >
                <p className="text-lg leading-relaxed font-serif whitespace-pre-line" style={{ color: '#374151' }}>
                  {generatedStory}
                </p>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setStep(1)
                    setStorySpark('')
                    setSelectedTone(null)
                    setGeneratedStory('')
                  }}
                  className="px-6 py-4 rounded-xl font-semibold border-2 transition-all"
                  style={{ 
                    borderColor: '#E5E7EB',
                    color: '#6B7280'
                  }}
                >
                  Create another
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 rounded-xl font-semibold border-2 transition-all"
                  style={{ 
                    borderColor: '#8B5CF6',
                    color: '#8B5CF6'
                  }}
                >
                  Save to library
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/discover')}
                  className="px-6 py-4 rounded-xl font-semibold transition-all"
                  style={{ 
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF'
                  }}
                >
                  Explore stories
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Loading State */}
          {isGenerating && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl p-12 shadow-2xl text-center"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 1, repeat: Infinity }
                }}
                className="inline-block mb-6"
              >
                <Sparkles size={64} style={{ color: '#8B5CF6' }} />
              </motion.div>
              <h2 className="text-3xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
                Weaving your story...
              </h2>
              <p style={{ color: '#6B7280' }}>
                Every great tale needs a moment to breathe
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CreateStoryPage
