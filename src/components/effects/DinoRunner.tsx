import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

/** Pink pixel dino runner — Chrome offline game homage */
export function DinoRunner() {
  const reduced = usePrefersReducedMotion()

  return (
    <div
      className={`dino-runner ${reduced ? 'dino-runner--static' : ''}`}
      role="img"
      aria-label="Animated signal strength — pixel dinosaur jumping hurdles"
    >
      <div className="dino-runner__sky" />
      <div className="dino-runner__ground">
        <div className="dino-runner__ground-scroll" />
      </div>
      <div className="dino-runner__dino" aria-hidden />
      <div className="dino-runner__cactus dino-runner__cactus--a" aria-hidden />
      <div className="dino-runner__cactus dino-runner__cactus--b" aria-hidden />
      <div className="dino-runner__cactus dino-runner__cactus--c" aria-hidden />
      <span className="dino-runner__hud mono">HI 0088</span>
    </div>
  )
}
