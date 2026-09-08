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
        // Dark mode: pure black with minimal variation
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.01)')
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.005)')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.01)')
      } else {
        // Light mode: pure black with minimal variation
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.005)')
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.008)')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.005)')
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
