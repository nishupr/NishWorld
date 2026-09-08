import { ReactNode } from 'react'
import './GradientText.css'

interface GradientTextProps {
  children: ReactNode
  variant?: 'hero' | 'subtle' | 'vibrant'
  animate?: boolean
  className?: string
}

const GradientText = ({ 
  children, 
  variant = 'hero', 
  animate = true,
  className = '' 
}: GradientTextProps) => {
  return (
    <span 
      className={`gradient-text ${variant} ${animate ? 'animated' : ''} ${className}`}
      data-text={typeof children === 'string' ? children : ''}
    >
      {children}
    </span>
  )
}

export default GradientText
