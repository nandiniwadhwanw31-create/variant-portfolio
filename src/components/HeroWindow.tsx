import { site } from '../data/site'

export function HeroWindow() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="window-border bg-[#fdf2f8] text-black overflow-hidden flex flex-col h-[500px]">
      <div className="window-header px-4 py-2 flex justify-between items-center">
        <span className="mono text-xs font-bold uppercase">{site.heroPath}</span>
        <div className="flex gap-2">
          <div className="w-4 h-4 border-2 border-black" />
          <div className="w-4 h-4 border-2 border-black bg-black" />
          <div className="w-4 h-4 border-2 border-black" />
        </div>
      </div>
      <div className="p-8 flex flex-col justify-center h-full relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 mono text-[10px] opacity-20 pointer-events-none text-right">
          LAT: 28.6139° N
          <br />
          LNG: 77.2090° E
          <br />
          PORT: 8080
          <br />
          STATUS: ACTIVE
        </div>
        <h1 className="serif text-7xl lg:text-8xl leading-none italic mb-4 glitch-text relative z-10">
          {site.nameLine1} <br />
          <span className="not-italic">{site.nameLine2}</span>
        </h1>
        <p className="mono text-[13px] max-w-lg border-l-4 border-purple-500 pl-4 py-1 leading-[1.65] tracking-[0.01em]">
          {site.tagline}
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={scrollToWork}
            data-cursor="hover"
            className="bg-black text-white px-6 py-3 mono text-sm uppercase window-border hover:bg-pink-600 transition-colors"
          >
            Access Research Archive
          </button>
          <div className="flex items-center gap-2 text-xs mono opacity-60">
            <i className="ri-pulse-line animate-pulse text-pink-600" aria-hidden />
            SYSTEMS NOMINAL
          </div>
        </div>
      </div>
    </div>
  )
}
