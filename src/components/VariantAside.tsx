import { site } from '../data/site'

export function VariantAside() {
  return (
    <>
      <div className="window-border bg-black overflow-hidden relative group h-[300px]">
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
          <div className="text-zinc-700 mono text-9xl font-bold opacity-10 select-none">NW</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full border-4 border-pink-500 border-dashed animate-[spin_20s_linear_infinite]"
                aria-hidden
              />
              <img
                src="/images/profile.jpg"
                alt={site.name}
                className="relative z-10 w-[11.5rem] h-[11.5rem] rounded-full object-cover object-[center_22%] border-2 border-black"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <div className="flex justify-between items-end">
            <div className="mono text-xs text-white">
              <span className="block text-pink-400">IDENT: {site.ident}</span>
              <span>LOC: {site.location}</span>
            </div>
            <i className="ri-fingerprint-line text-3xl text-pink-400" aria-hidden />
          </div>
        </div>
      </div>

      <div id="about" className="window-border bg-[#d8b4fe] text-black p-6 flex flex-col h-[176px]">
        <div className="flex justify-between items-start mb-4">
          <h2 className="mono text-sm font-bold uppercase flex items-center gap-2">
            <i className="ri-user-smile-line" aria-hidden />
            Bio.sys
          </h2>
          <span className="mono text-[10px] opacity-50">VER 4.2.0</span>
        </div>
        <p className="text-sm leading-relaxed overflow-y-auto scrollbar-custom pr-2">{site.bio}</p>
      </div>
    </>
  )
}
