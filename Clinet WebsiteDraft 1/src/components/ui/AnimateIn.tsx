'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'none'
}

export default function AnimateIn({ children, delay = 0, className, direction = 'up' }: Props) {
  const reduced = useReducedMotion()
  const initial = reduced ? { opacity: 0 } : {
    opacity: 0,
    y: direction === 'up' ? 24 : 0,
    x: direction === 'left' ? -20 : 0,
  }
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
