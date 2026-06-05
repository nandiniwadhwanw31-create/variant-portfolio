import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function CustomCursor() {
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState(false)
  const [hovering, setHovering] = useState(false)
  const spring = { stiffness: 480, damping: 28, mass: 0.3 }
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

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
    <motion.img
      src="/images/cursor-star-transparent.png"
      alt=""
      aria-hidden
      className="cursor-star fixed top-0 left-0 z-[300] pointer-events-none object-contain select-none"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: hovering ? 40 : 30,
        height: hovering ? 40 : 30,
      }}
      animate={
        reduced
          ? undefined
          : {
              rotate: hovering ? [0, 12, -8, 0] : [0, 360],
              scale: hovering ? 1.15 : 1,
            }
      }
      transition={{
        rotate: { repeat: Infinity, duration: hovering ? 0.9 : 5, ease: 'linear' },
      }}
    />
  )
}
