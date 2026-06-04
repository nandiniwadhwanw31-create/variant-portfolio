import { site } from '../data/site'

export function VariantAside() {
  return (
    <>
      <div className="purse-ident-panel relative h-[300px] overflow-hidden group">
        <div className="purse-harlequin absolute inset-0" aria-hidden />
        <div className="purse-swirl absolute inset-0 opacity-30 pointer-events-none" aria-hidden />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative w-52 h-52 flex items-center justify-center">
            {/* Soft glow behind portrait */}
            <div
              className="absolute inset-2 rounded-full bg-gradient-to-br from-pink-300/60 via-fuchsia-400/40 to-[#fce7f3]/80 blur-sm"
              aria-hidden
            />
            {/* Pink rotating ring — unchanged */}
            <div
              className="absolute inset-0 rounded-full border-4 border-pink-500 border-dashed animate-[spin_20s_linear_infinite]"
              aria-hidden
            />
            {/* Ornate gold frame */}
            <div className="purse-ornate-ring absolute inset-1 rounded-full" aria-hidden />
            <img
              src="/images/profile.jpg"
              alt={site.name}
              className="relative z-10 w-[11.25rem] h-[11.25rem] rounded-full object-cover object-[center_22%] border-[3px] border-[#d4a574] shadow-[0_0_0_2px_#5c2d6e,0_4px_20px_rgba(92,45,110,0.35)]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Reference-style plaque (replaces black footer bar) */}
        <div className="purse-plaque absolute bottom-3 left-3 right-3 z-20">
          <p className="serif text-lg italic text-[#5c2d6e] leading-tight drop-shadow-sm">
            {site.name}
          </p>
          <p className="mono text-[9px] uppercase tracking-[0.2em] text-[#9d174d] mt-0.5">
            {site.purseTitle}
          </p>
          <div className="flex justify-between items-end mt-2 gap-2">
            <div className="mono text-[10px] text-[#701a75] leading-snug">
              <span className="block font-bold text-[#be185d]">IDENT: {site.ident}</span>
              <span>NODE: {site.location}</span>
              <span className="block text-[9px] opacity-80 mt-0.5">{site.purseRole}</span>
            </div>
            <span className="purse-charm shrink-0" aria-hidden>
              ✦
            </span>
          </div>
        </div>
      </div>

      <div id="about" className="purse-bio-panel p-6 flex flex-col h-[176px]">
        <div className="flex justify-between items-start mb-4">
          <h2 className="mono text-sm font-bold uppercase flex items-center gap-2 text-[#5c2d6e]">
            <i className="ri-user-smile-line text-[#db2777]" aria-hidden />
            Bio.sys
          </h2>
          <span className="mono text-[10px] text-[#9d174d]/70">VER 4.2.0</span>
        </div>
        <p className="text-sm leading-relaxed overflow-y-auto scrollbar-custom pr-2 text-[#4a044e]">
          {site.bio}
        </p>
      </div>
    </>
  )
}
