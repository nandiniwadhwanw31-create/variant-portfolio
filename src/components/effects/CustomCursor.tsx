import { motion, useSpring } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const SPARKLE_OFFSETS = [
  { x: 14, y: 0, delay: 0 },
  { x: -12, y: 8, delay: 0.15 },
  { x: 6, y: -14, delay: 0.3 },
  { x: -8, y: -10, delay: 0.45 },
  { x: 0, y: 16, delay: 0.6 },
]

export function CustomCursor() {
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState(false)
  const [hovering, setHovering] = useState(false)
  const spring = { stiffness: 420, damping: 26, mass: 0.35 }
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)
  const sparkles = useMemo(() => SPARKLE_OFFSETS, [])

  useEffect(() => {
    if (reduced) return
    const fine = window.matchMedia('(pointer: fine)')
    const apply = () => {
      const on = fine.matches
      setActive(on)
      document.body.classList.toggle('custom-cursor-active', on)
    }
    apply()
    fine.addEventListener('change', apply)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovering(!!t.closest('a, button, [data-cursor="hover"]'))
    }
    document.addEventListener('mouseover', onOver)

    return () => {
      fine.removeEventListener('change', apply)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [reduced, x, y])

  if (reduced || !active) return null

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none" aria-hidden>
      <motion.div
        className="absolute top-0 left-0"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        {/* Soft glitter halo */}
        <motion.div
          animate={{
            scale: hovering ? [1, 1.35, 1.2] : [1, 1.15, 1],
            opacity: hovering ? [0.55, 0.75, 0.6] : [0.35, 0.5, 0.4],
          }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="absolute -inset-6 rounded-full bg-gradient-to-tr from-pink-500/40 via-fuchsia-400/30 to-[#fdf2f8]/20 blur-md"
        />

        {/* Orbiting sparkle particles */}
        {sparkles.map((s, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#ffe4f1]"
            style={{
              left: s.x,
              top: s.y,
              boxShadow: '0 0 6px #ff7eb9, 0 0 12px #ff7eb9, 0 0 2px #fff',
            }}
            animate={{
              opacity: [0.2, 1, 0.3],
              scale: [0.6, 1.4, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.9,
              delay: s.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Core cursor — pink glitter gem */}
        <motion.div
          animate={{
            scale: hovering ? 1.5 : 1,
            rotate: hovering ? [0, 12, -8, 0] : [0, 180, 360],
          }}
          transition={{
            scale: { type: 'spring', stiffness: 400, damping: 18 },
            rotate: { repeat: Infinity, duration: hovering ? 0.6 : 4, ease: 'linear' },
          }}
          className="relative w-3.5 h-3.5 rounded-full cursor-glitter-core border border-white/80"
        />

        {/* Outer ring */}
        <motion.div
          animate={{
            width: hovering ? 52 : 34,
            height: hovering ? 52 : 34,
            opacity: hovering ? 0.5 : 0.28,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-pink-400/60 border-dashed"
          style={{
            boxShadow: '0 0 14px rgba(255, 126, 185, 0.45), inset 0 0 8px rgba(255, 126, 185, 0.2)',
          }}
        />
      </motion.div>
    </div>
  )
}
