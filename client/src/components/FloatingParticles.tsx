import { useEffect, useRef } from 'react'
import './FloatingParticles.css'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

interface FloatingParticlesProps {
  count?: number
  speed?: 'slow' | 'medium' | 'fast'
}

const FloatingParticles = ({ count = 50, speed = 'slow' }: FloatingParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Speed multiplier
    const speedMultiplier = speed === 'fast' ? 0.5 : speed === 'medium' ? 0.3 : 0.15

    // Initialize particles
    const particles: Particle[] = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * speedMultiplier,
        speedY: (Math.random() - 0.5) * speedMultiplier,
        opacity: Math.random() * 0.5 + 0.1
      })
    }

    // Get theme
    const getTheme = () => {
      return document.documentElement.getAttribute('data-theme') || 'light'
    }

    // Animation loop
    const animate = () => {
      const theme = getTheme()
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        // Move particle
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        
        if (theme === 'dark') {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.3})`
        } else {
          ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity * 0.15})`
        }
        
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = particle.size * 2
        ctx.shadowColor = theme === 'dark' 
          ? `rgba(139, 92, 246, ${particle.opacity * 0.3})` 
          : `rgba(249, 168, 212, ${particle.opacity * 0.2})`
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [count, speed])

  return (
    <canvas
      ref={canvasRef}
      className="floating-particles"
      aria-hidden="true"
    />
  )
}

export default FloatingParticles
