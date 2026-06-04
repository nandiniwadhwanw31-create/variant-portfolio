import type { CSSProperties } from 'react'
import type { BackgroundNote } from '../data/backgroundArchive'
import type { ArchiveNodeGallery } from '../data/archiveMedia'
import { ArchivePhotoStack } from './archive/ArchivePhotoStack'
import { formatArchiveText } from '../utils/formatArchiveText'

const variantStyles = {
  light: {
    card: 'window-border bg-[#fdf2f8] text-black',
    header: 'window-header',
    stream: 'text-purple-900/70',
    extract: 'border-purple-400/40 text-purple-950',
    body: 'text-black/85',
    signals: 'text-purple-700/80 border-purple-300',
    signalsLabel: 'text-purple-900/50',
    status: 'text-pink-600',
    progressTrack: 'bg-purple-200',
    progressFill: 'bg-pink-500',
  },
  lilac: {
    card: 'window-border bg-[#d8b4fe] text-black',
    header: 'window-header',
    stream: 'text-purple-950/70',
    extract: 'border-purple-700/35 text-purple-950',
    body: 'text-black/85',
    signals: 'text-purple-900/70 border-purple-400/50',
    signalsLabel: 'text-purple-900/50',
    status: 'text-pink-700',
    progressTrack: 'bg-purple-300/50',
    progressFill: 'bg-pink-600',
  },
  spotlight: {
    card: 'window-border bg-zinc-950 border-cyan-500/60 text-cyan-50',
    header: 'px-2 py-1 border-b border-cyan-500/50 bg-cyan-950/50',
    stream: 'text-cyan-400/80',
    extract: 'border-cyan-500/35 text-cyan-50',
    body: 'text-cyan-100/85',
    signals: 'text-cyan-400/90 border-cyan-500/30',
    signalsLabel: 'text-cyan-500/60',
    status: 'text-cyan-300',
    progressTrack: 'bg-cyan-950',
    progressFill: 'bg-cyan-400',
  },
  constituent: {
    card: 'window-border bg-black border-pink-500 text-pink-100',
    header: 'px-2 py-1 border-b border-pink-500/50',
    stream: 'text-pink-300/80',
    extract: 'border-pink-500/35 text-pink-50',
    body: 'text-pink-100/85',
    signals: 'text-pink-400/90 border-pink-500/30',
    signalsLabel: 'text-pink-500/60',
    status: 'text-pink-400',
    progressTrack: 'bg-pink-950',
    progressFill: 'bg-pink-500',
  },
  signal: {
    card: 'window-border bg-black border-white text-white',
    header: 'px-2 py-1 border-b border-white/80',
    stream: 'text-pink-300/80',
    extract: 'border-white/25 text-pink-100',
    body: 'text-white/85',
    signals: 'text-pink-300 border-white/20',
    signalsLabel: 'text-white/40',
    status: 'text-pink-300',
    progressTrack: 'bg-zinc-900',
    progressFill: 'bg-pink-400',
  },
} as const

interface Props {
  note: BackgroundNote
  gallery?: ArchiveNodeGallery
  isActive?: boolean
  activeImageIndex?: number
  onNodeActivate: (noteId: string) => void
  onPreviewClick: (e: React.MouseEvent) => void
}

export function BackgroundNoteCard({
  note,
  gallery,
  isActive = false,
  activeImageIndex = 0,
  onNodeActivate,
  onPreviewClick,
}: Props) {
  const styles = variantStyles[note.variant]
  const isSignal = note.variant === 'signal'
  const paragraphs = note.body.split('\n\n').filter(Boolean)
  const hasGallery = Boolean(gallery?.images.length)

  const cardStyle = {
    '--archive-rotate': note.rotate,
  } as CSSProperties

  return (
    <article
      className={`archive-memory-card fragment-card absolute ${note.position} ${styles.card} ${note.opacity} ${
        isActive ? 'archive-memory-card--active' : ''
      } ${hasGallery ? 'archive-memory-card--interactive' : ''}`}
      style={cardStyle}
      data-variant={note.variant}
      data-note-id={note.id}
      onClick={hasGallery ? () => onNodeActivate(note.id) : undefined}
      onKeyDown={
        hasGallery
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onNodeActivate(note.id)
              }
            }
          : undefined
      }
      role={hasGallery ? 'button' : undefined}
      tabIndex={hasGallery ? 0 : undefined}
      aria-pressed={hasGallery ? isActive : undefined}
    >
      <header className={`archive-memory-card__header ${styles.header} mono`}>
        <span className="archive-memory-card__header-filename">{note.filename}</span>
        <span className={`archive-memory-card__header-status ${styles.status}`}>
          {note.status}
        </span>
      </header>

      <div className={`archive-memory-card__scroll scrollbar-custom mono ${styles.body}`}>
        <p className={`archive-memory-card__extract ${styles.extract}`}>
          &quot;{note.title}&quot;
        </p>

        <div className="archive-memory-card__content">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{formatArchiveText(paragraph)}</p>
          ))}
        </div>

        {note.showProgress && (
          <div className="archive-memory-card__progress">
            <div className={`archive-memory-card__progress-label ${styles.stream}`}>
              <span>PARSE</span>
              <span>{note.progressPercent}%</span>
            </div>
            <div className={`archive-memory-card__progress-track ${styles.progressTrack}`}>
              <div
                className={`archive-memory-card__progress-fill ${styles.progressFill}`}
                style={{ width: `${note.progressPercent ?? 77}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <footer className={`archive-memory-card__signals ${styles.signals}`}>
        {hasGallery && gallery && (
          <ArchivePhotoStack
            items={gallery.images}
            activeIndex={activeImageIndex}
            isActive={isActive}
            onPreviewClick={onPreviewClick}
          />
        )}

        <span className={`archive-memory-card__signals-label ${styles.signalsLabel}`}>
          {isSignal ? 'Core Protocol' : 'Signals'}
        </span>
        <span className="archive-memory-card__signals-text mono">{note.signals}</span>
      </footer>
    </article>
  )
}
