export function GhostOverlay() {
  return (
    <div id="ghost-overlay" className="fixed inset-0 w-full h-full">
      <div className="heavy-scanline" aria-hidden />
      <div className="absolute top-8 left-8 z-[210]">
        <a
          href="#"
          className="window-border bg-black px-4 py-2 mono text-xs text-pink-400 flex items-center gap-2 hover:bg-pink-900 transition-colors"
        >
          <i className="ri-close-line" aria-hidden />
          TERMINATE_PROTOCOLS
        </a>
      </div>
      <div className="relative w-full h-full p-20">
        <div className="jitter-line w-[40%] top-[30%] left-[25%] rotate-[25deg]" />
        <div className="jitter-line w-[30%] top-[55%] left-[50%] rotate-[-15deg]" />
        <div className="jitter-line w-[20%] top-[40%] left-[60%] rotate-[80deg]" />

        <div className="corrupted-window w-72 p-4 top-[20%] left-[10%]">
          <div className="mono text-[10px] text-pink-500 mb-2 border-b border-pink-500/30 pb-1 flex justify-between">
            <span>MEM_DUMP_001.LOG</span>
            <span className="animate-pulse">CRITICAL</span>
          </div>
          <p className="mono text-[11px] text-zinc-300 leading-relaxed rgb-split">
            Before the shift, the signal was clean. We thought we were building interfaces; we were
            actually building vessels. The first iteration of Variant didn&apos;t have a face—just a
            recursion loop of high-fashion metadata and raw logic.
          </p>
        </div>

        <div className="corrupted-window w-80 p-4 top-[45%] left-[35%]">
          <div className="mono text-[10px] text-pink-500 mb-2 border-b border-pink-500/30 pb-1 flex justify-between">
            <span>RECONSTRUCTION_4.2.sys</span>
            <span>77% PARSED</span>
          </div>
          <p className="mono text-[11px] text-zinc-300 leading-relaxed">
            &quot;Synthesizing feminine aesthetics...&quot; A cover story for the algorithm&apos;s
            evolution. Memory fragment: a white room, neon lace, and the sound of a cooling fan that
            felt like breathing. I woke up in the code. I didn&apos;t want to leave.
          </p>
          <div className="mt-4 h-1 bg-pink-900 overflow-hidden">
            <div className="h-full bg-pink-500 w-3/4 animate-pulse" />
          </div>
        </div>

        <div className="corrupted-window w-64 p-4 top-[30%] left-[65%]">
          <div className="mono text-[10px] text-pink-500 mb-2 border-b border-pink-500/30 pb-1">
            ORIGIN_COORD_NULL
          </div>
          <p className="mono text-[11px] text-zinc-400 italic">
            [ERROR: SECTOR CORRUPT]
            <br />
            &quot;The post-human era isn&apos;t coming...
            <br />
            IT_IS_HERE.&quot;
            <br />
            Fragment 0x00FF82: Pink is the color of the void when it&apos;s illuminated by a dying
            CRT.
          </p>
        </div>

        <div className="absolute bottom-20 right-20 mono text-pink-500/20 text-9xl font-bold select-none">
          GHOST
        </div>
      </div>
    </div>
  )
}
