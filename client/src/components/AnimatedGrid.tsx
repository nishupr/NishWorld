import { useEffect, useRef } from 'react'
import './AnimatedGrid.css'

interface AnimatedGridProps {
  variant?: 'dots' | 'lines'
  spacing?: number
}

const AnimatedGrid = ({ variant = 'dots', spacing = 30 }: AnimatedGridProps) => {
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

    let animationFrame: number
    let time = 0

    // Get theme
    const getTheme = () => {
      return document.documentElement.getAttribute('data-theme') || 'light'
    }

    const drawDots = () => {
      const theme = getTheme()
      time += 0.01

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing
          const y = j * spacing

          // Create wave effect
          const distance = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + 
            Math.pow(y - canvas.height / 2, 2)
          )
          const wave = Math.sin(distance * 0.01 - time) * 0.5 + 0.5
          const opacity = wave * 0.3

          ctx.beginPath()
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
          
          if (theme === 'dark') {
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.4})`
          } else {
            ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.2})`
          }
          
          ctx.fill()
        }
      }

      animationFrame = requestAnimationFrame(drawDots)
    }

    const drawLines = () => {
      const theme = getTheme()
      time += 0.005

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += spacing) {
        const wave = Math.sin(y * 0.01 + time) * 5
        ctx.beginPath()
        ctx.moveTo(0, y + wave)
        ctx.lineTo(canvas.width, y + wave)
        
        if (theme === 'dark') {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
        } else {
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.03)'
        }
        
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += spacing) {
        const wave = Math.sin(x * 0.01 + time) * 5
        ctx.beginPath()
        ctx.moveTo(x + wave, 0)
        ctx.lineTo(x + wave, canvas.height)
        
        if (theme === 'dark') {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
        } else {
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.03)'
        }
        
        ctx.lineWidth = 1
        ctx.stroke()
      }

      animationFrame = requestAnimationFrame(drawLines)
    }

    if (variant === 'dots') {
      drawDots()
    } else {
      drawLines()
    }

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [variant, spacing])

  return (
    <canvas
      ref={canvasRef}
      className="animated-grid"
      aria-hidden="true"
    />
  )
}

export default AnimatedGrid
