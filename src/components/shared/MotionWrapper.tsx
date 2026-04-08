'use client'

import { motion, MotionConfig, useReducedMotion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionSection({ children, className, delay = 0 }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}

interface MotionGridProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function MotionGrid({ children, className, staggerDelay = 0.08 }: MotionGridProps) {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : staggerDelay },
    },
  }

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={itemVariants}>
                {child}
              </motion.div>
            ))
          : children}
      </motion.div>
    </MotionConfig>
  )
}

interface MotionStepProps {
  children: ReactNode
  className?: string
  index: number
}

export function MotionStep({ children, className, index }: MotionStepProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}
