import type { BackgroundNote } from '../data/backgroundArchive'

const variantStyles = {
  light: {
    card: 'window-border bg-[#fdf2f8] text-black',
    header: 'window-header',
    signals: 'text-purple-700/80 border-purple-300',
    signalsLabel: 'text-purple-900/50',
  },
  lilac: {
    card: 'window-border bg-[#d8b4fe] text-black',
    header: 'window-header',
    signals: 'text-purple-900/70 border-purple-400/50',
    signalsLabel: 'text-purple-900/50',
  },
  spotlight: {
    card: 'window-border bg-zinc-950 border-cyan-500/60 text-cyan-50',
    header: 'px-2 py-1 border-b border-cyan-500/50 bg-cyan-950/50',
    signals: 'text-cyan-400/90 border-cyan-500/30',
    signalsLabel: 'text-cyan-500/60',
  },
  constituent: {
    card: 'window-border bg-black border-pink-500 text-pink-100',
    header: 'px-2 py-1 border-b border-pink-500/50',
    signals: 'text-pink-400/90 border-pink-500/30',
    signalsLabel: 'text-pink-500/60',
  },
  signal: {
    card: 'window-border bg-black border-white text-white',
    header: 'px-2 py-1 border-b border-white/80',
    signals: 'text-pink-300 border-white/20',
    signalsLabel: 'text-white/40',
  },
} as const

interface Props {
  note: BackgroundNote
}

export function BackgroundNoteCard({ note }: Props) {
  const styles = variantStyles[note.variant]
  const isSignal = note.variant === 'signal'

  return (
    <div
      className={`fragment-card absolute ${note.position} ${note.size} ${styles.card} flex flex-col ${note.rotation} ${note.opacity}`}
    >
      <div className={`${styles.header} px-2 py-1 flex justify-between items-center`}>
        <span className="mono text-[9px] font-bold">{note.filename}</span>
        {note.variant === 'spotlight' ? (
          <i className="ri-mic-line text-cyan-400 text-xs" aria-hidden />
        ) : note.variant === 'constituent' ? (
          <i className="ri-government-line text-pink-400 text-xs animate-pulse" aria-hidden />
        ) : isSignal ? (
          <span className="text-[8px] opacity-50 mono">CORE</span>
        ) : (
          <i className="ri-close-line text-xs opacity-60" aria-hidden />
        )}
      </div>
      <div className="p-3 flex-1 overflow-y-auto scrollbar-custom flex flex-col gap-2 min-h-0">
        <h4 className={`serif text-lg italic leading-tight ${isSignal ? 'text-pink-200' : ''}`}>
          &quot;{note.subtitle}&quot;
        </h4>
        <p className="mono text-[10px] leading-relaxed opacity-85">{note.body}</p>
        <div className={`mt-auto pt-2 border-t ${styles.signals}`}>
          <span className={`mono text-[8px] uppercase tracking-wider block mb-1 ${styles.signalsLabel}`}>
            {isSignal ? 'Core Protocol' : 'Signals'}
          </span>
          <span className={`mono text-[8px] uppercase tracking-tight leading-snug`}>{note.signals}</span>
        </div>
      </div>
    </div>
  )
}
