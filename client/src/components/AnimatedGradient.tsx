import { useEffect, useRef } from 'react'
import './AnimatedGradient.css'

interface AnimatedGradientProps {
  variant?: 'hero' | 'subtle'
}

const AnimatedGradient = ({ variant = 'hero' }: AnimatedGradientProps) => {
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

    // Gradient animation parameters
    let time = 0
    const speed = variant === 'hero' ? 0.0005 : 0.0003

    // Get theme
    const getTheme = () => {
      return document.documentElement.getAttribute('data-theme') || 'light'
    }

    const animate = () => {
      const theme = getTheme()
      time += speed

      // Create animated gradient
      const gradient = ctx.createLinearGradient(
        Math.sin(time) * canvas.width,
        Math.cos(time) * canvas.height,
        Math.cos(time + Math.PI / 2) * canvas.width,
        Math.sin(time + Math.PI / 2) * canvas.height
      )

      if (theme === 'dark') {
        // Dark mode: subtle purple/blue gradients
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.03)')
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)')
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0.03)')
      } else {
        // Light mode: soft pastel gradients
        gradient.addColorStop(0, 'rgba(249, 168, 212, 0.15)')
        gradient.addColorStop(0.5, 'rgba(191, 219, 254, 0.15)')
        gradient.addColorStop(1, 'rgba(253, 230, 138, 0.1)')
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className={`animated-gradient ${variant}`}
      aria-hidden="true"
    />
  )
}

export default AnimatedGradient
