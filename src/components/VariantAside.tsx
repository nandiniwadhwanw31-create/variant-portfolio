import { site } from '../data/site'

export function VariantAside() {
  return (
    <div className="flex flex-col gap-6 flex-1 min-h-0 w-full">
      <div className="word-ident-shell relative h-[400px] shrink-0 overflow-hidden group window-border">
        <img
          src="/images/word-frame-pink.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
          aria-hidden
        />

        <div className="word-doc-surface absolute top-[64px] left-[20px] right-[20px] bottom-[44px] z-10 flex flex-col overflow-hidden">
          <div className="flex flex-1 items-center justify-center min-h-0 pt-2 pb-1">
            <div className="ident-portrait-ring relative w-[12.5rem] h-[12.5rem] shrink-0">
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

          <div className="word-caption w-full shrink-0 px-3 py-2.5 text-center">
            <p className="serif text-lg italic text-[#701a75] leading-tight tracking-tight">
              {site.name}
            </p>
            <p className="mono text-[9px] uppercase tracking-[0.25em] text-[#9d174d] mt-1 font-bold">
              IDENT: {site.ident}
            </p>
            <p className="mono text-[9px] text-[#be185d]/90 mt-0.5">
              {site.location} · AGE: {site.age}
            </p>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="bio-sys-window window-border bg-[#d8b4fe] text-black p-6 flex flex-col flex-1 min-h-[200px]"
      >
        <div className="flex justify-between items-start shrink-0 mb-3">
          <h2 className="mono text-sm font-bold uppercase flex items-center gap-2">
            <i className="ri-user-smile-line" aria-hidden />
            Bio.sys
          </h2>
          <span className="mono text-[10px] opacity-50">VER 4.2.0</span>
        </div>
        <div className="bio-sys-scroll-wrap flex-1 min-h-0 border-t-2 border-black/15 pt-3">
          <p className="bio-sys-scroll text-sm leading-relaxed overflow-y-auto scrollbar-custom pr-2 h-full">
            {site.bio}
          </p>
        </div>
      </div>
    </div>
  )
}
