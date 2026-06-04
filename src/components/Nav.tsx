import { site } from '../data/site'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-8 py-4 flex justify-between items-center pointer-events-none">
      <div className="window-border bg-black px-4 py-2 flex items-center gap-3 pointer-events-auto">
        <div className="w-8 h-8 bg-purple-400 flex items-center justify-center font-bold text-black text-sm mono">
          {site.initials}
        </div>
        <span className="mono text-xs uppercase tracking-wide text-white">{site.systemLabel}</span>
      </div>
      <div className="flex gap-4 pointer-events-auto">
        <div className="window-border bg-black px-6 py-2 mono text-xs uppercase text-white flex gap-6 items-center">
          <a
            href="#ghost-overlay"
            className="text-pink-500 hover:text-white transition-colors flex items-center gap-2 group"
            data-cursor="hover"
          >
            <i className="ri-skull-line group-hover:animate-bounce" aria-hidden />
            GHOST_PROTOCOLS
          </a>
          <span className="w-px h-4 bg-zinc-800" aria-hidden />
          <a href="#about" className="hover:text-pink-400 transition-colors" data-cursor="hover">
            About
          </a>
          <a href="#work" className="hover:text-pink-400 transition-colors" data-cursor="hover">
            Archives
          </a>
          <a
            href="#archive-map-section"
            className="hover:text-pink-400 transition-colors text-pink-300"
            data-cursor="hover"
          >
            Background_Archive
          </a>
          <a href="#contact" className="hover:text-pink-400 transition-colors" data-cursor="hover">
            Signal
          </a>
        </div>
      </div>
    </nav>
  )
}
