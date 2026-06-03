import { backgroundNotes } from '../data/backgroundArchive'
import { BackgroundNoteCard } from './BackgroundNoteCard'

export function ArchiveMapSection() {
  return (
    <div
      id="archive-map-section"
      className="w-full flex flex-col relative overflow-hidden border-t-2 border-pink-500/20 mt-8 pt-12"
    >
      <div className="flex items-center gap-4 mb-8">
        <h1 className="mono text-4xl font-bold tracking-tighter text-white flex items-center gap-4">
          <i className="ri-history-line text-pink-500" aria-hidden />
          BACKGROUND_ARCHIVE
        </h1>
        <div className="h-px flex-1 bg-gradient-to-r from-pink-500/50 to-transparent" />
        <span className="mono text-[10px] opacity-40">RECOVERED: 100%</span>
      </div>

      <div className="w-full h-[920px] relative window-border bg-black/40 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <path className="mapping-line" d="M 180 180 C 280 140, 380 280, 500 260" />
          <path className="mapping-line" d="M 500 260 C 620 220, 780 380, 900 360" />
          <path className="mapping-line" d="M 500 260 C 380 420, 280 580, 200 700" />
          <path className="mapping-line" d="M 200 700 C 420 780, 680 760, 820 780" />
          <path className="mapping-line" d="M 900 360 C 950 520, 880 680, 820 780" />
        </svg>

        {backgroundNotes.map((note) => (
          <BackgroundNoteCard key={note.id} note={note} />
        ))}

        <div className="absolute bottom-4 left-4 mono text-[10px] text-pink-500 animate-pulse pointer-events-none">
          [SYS] BACKGROUND NODES SYNCED — 5 MEMORIES INDEXED
        </div>
      </div>

      <footer className="mt-8 flex justify-between items-center mono text-[10px] opacity-40 uppercase tracking-widest mb-10">
        <div className="flex gap-8">
          <span>NANDINI_WADHWA // BACKGROUND_RECOVERY_COMPLETE</span>
          <span>UPTIME: 99.98%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-12 h-1 bg-pink-500/20 overflow-hidden">
            <div className="w-full h-full bg-pink-500 animate-pulse" />
          </div>
          <span>ARCHIVE_LOCKED</span>
        </div>
      </footer>
    </div>
  )
}
