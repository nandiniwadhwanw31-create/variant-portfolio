import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const ease = [0.22, 1, 0.36, 1] as const

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

const dossierVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, rotateX: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.85, ease },
  },
}

interface SectionRevealProps {
  children: ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div'
  dossier?: boolean
}

export function SectionReveal({
  children,
  className,
  id,
  as = 'section',
  dossier = false,
}: SectionRevealProps) {
  const reduced = usePrefersReducedMotion()
  const Component = motion[as]

  if (reduced) {
    const Tag = as
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    )
  }

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: '-60px' }}
      variants={dossier ? dossierVariants : sectionVariants}
      style={dossier ? { transformPerspective: 1200 } : undefined}
    >
      {children}
    </Component>
  )
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}
