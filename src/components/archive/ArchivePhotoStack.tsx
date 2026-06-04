import type { ArchiveMediaItem } from '../../data/archiveMedia'

interface Props {
  items: ArchiveMediaItem[]
  activeIndex: number
  isActive: boolean
  onPreviewClick: (e: React.MouseEvent) => void
}

export function ArchivePhotoStack({ items, activeIndex, isActive, onPreviewClick }: Props) {
  if (items.length === 0) return null

  const count = items.length

  return (
    <div className="archive-photo-stack">
      <span className="archive-photo-stack__label mono">
        IMG_PREVIEW {isActive ? `// ${activeIndex + 1}/${count}` : `// ${count} FILES`}
      </span>
      <button
        type="button"
        className="archive-photo-stack__hit"
        onClick={onPreviewClick}
        aria-label={`Open image preview. ${activeIndex + 1} of ${count}. Click to rotate.`}
      >
        <div className="archive-photo-stack__frames">
          {items.map((item, index) => {
            const offset = (index - activeIndex + count) % count
            const isFront = offset === 0
            return (
              <span
                key={item.id}
                className={`archive-photo-stack__frame ${isFront ? 'archive-photo-stack__frame--front' : ''}`}
                style={{
                  zIndex: count - offset,
                  transform: `translate(${offset * 6}px, ${offset * -4}px) rotate(${offset * 2.5 - 2}deg)`,
                }}
                aria-hidden={!isFront}
              >
                <img src={item.src} alt="" className="archive-photo-stack__img" loading="lazy" />
              </span>
            )
          })}
        </div>
        <span className="archive-photo-stack__hint mono">
          {count > 1 ? 'CLICK TO ROTATE' : 'CLICK TO OPEN'}
        </span>
      </button>
    </div>
  )
}
