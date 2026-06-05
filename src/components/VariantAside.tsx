import { useCallback, useRef } from 'react'
import { site } from '../data/site'

const BIO_SCROLL_STEP = 56

export function VariantAside() {
  const bioScrollRef = useRef<HTMLParagraphElement>(null)

  const scrollBio = useCallback((direction: 'up' | 'down') => {
    const el = bioScrollRef.current
    if (!el) return
    el.scrollBy({
      top: direction === 'down' ? BIO_SCROLL_STEP : -BIO_SCROLL_STEP,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="wmp-ident-shell shrink-0">
        <img
          src="/images/wmp-ident-frame.png"
          alt=""
          className="wmp-ident-frame"
          aria-hidden
        />

        <div className="wmp-ident-viewport">
          <div className="wmp-ident-centered">
            <div className="wmp-ident-photo-unit">
              <div className="ident-portrait-ring relative">
                <div
                  className="ident-portrait-glow absolute -inset-2 rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-500 to-pink-600 opacity-50 blur-md"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 rounded-full border-[3px] border-pink-500 border-dashed animate-[spin_22s_linear_infinite] shadow-[0_0_20px_rgba(236,72,153,0.45)]"
                  aria-hidden
                />
                <div className="absolute inset-[5px] rounded-full overflow-hidden border-[3px] border-pink-600 bg-pink-200 shadow-inner">
                  <img
                    src="/images/profile.jpg"
                    alt={site.name}
                    className="ident-portrait-img w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="wmp-ident-caption">
              <p className="wmp-ident-name">{site.name}</p>
              <p className="wmp-ident-meta">IDENT: {site.ident}</p>
              <p className="wmp-ident-sub">
                {site.location}
                <span className="mx-1 opacity-50" aria-hidden>
                  ·
                </span>
                AGE: {site.age}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="bio-sys-window window-border bg-[#d8b4fe] text-black p-6 flex flex-col shrink-0 scroll-mt-28"
      >
        <div className="flex justify-between items-start shrink-0 mb-3">
          <h2 className="mono text-sm font-bold uppercase flex items-center gap-2">
            <i className="ri-user-smile-line" aria-hidden />
            Bio.sys
          </h2>
          <span className="mono text-[10px] opacity-50">VER 4.2.0</span>
        </div>

        <div className="bio-sys-scroll-wrap border-t-2 border-black/15 pt-3">
          <p
            ref={bioScrollRef}
            className="bio-sys-scroll text-[13px] leading-[1.65] overflow-y-auto pr-1 tracking-[0.01em]"
          >
            {site.bio}
          </p>

          <div className="bio-sys-vscroll" aria-label="Scroll bio">
            <button
              type="button"
              className="bio-sys-scroll-btn"
              onClick={() => scrollBio('up')}
              aria-label="Scroll up"
            >
              ▲
            </button>
            <div className="bio-sys-vscroll-track" aria-hidden>
              <div className="bio-sys-vscroll-thumb" />
            </div>
            <button
              type="button"
              className="bio-sys-scroll-btn"
              onClick={() => scrollBio('down')}
              aria-label="Scroll down"
            >
              ▼
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
