import type { ArchiveMediaItem } from '../../data/archiveMedia'

interface Props {
  media: ArchiveMediaItem
  windowTitle: string
  positionClass: string
  frameIndex: number
  frameTotal: number
  onClose: () => void
  onRotate: () => void
}

export function ArchiveSystemView({
  media,
  windowTitle,
  positionClass,
  frameIndex,
  frameTotal,
  onClose,
  onRotate,
}: Props) {
  return (
    <div
      className={`archive-system-view absolute ${positionClass} z-[60] w-[min(420px,calc(100vw-2rem))]`}
      role="dialog"
      aria-label={windowTitle}
    >
      <div className="archive-system-view__chrome">
        <header className="archive-system-view__header mono">
          <span className="archive-system-view__title">{windowTitle}</span>
          <span className="archive-system-view__frame-count">
            {frameIndex + 1}/{frameTotal}
          </span>
          <button
            type="button"
            className="archive-system-view__close"
            onClick={onClose}
            aria-label="Close system view"
          >
            <i className="ri-close-line" aria-hidden />
          </button>
        </header>
        <div className="archive-system-view__body">
          <button
            type="button"
            className="archive-system-view__image-btn"
            onClick={onRotate}
            aria-label={frameTotal > 1 ? 'Show next image' : 'Image preview'}
          >
            <img
              key={media.id}
              src={media.src}
              alt={media.alt}
              className="archive-system-view__image"
              loading="eager"
            />
          </button>
          <p className="archive-system-view__caption mono">{media.alt}</p>
          {frameTotal > 1 && (
            <button type="button" className="archive-system-view__rotate mono" onClick={onRotate}>
              NEXT_FRAME &gt;&gt;
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
