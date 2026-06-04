import { useCallback, useMemo, useState } from 'react'
import {
  archiveGalleries,
  archivePopoutPositions,
  getGalleryImage,
} from '../data/archiveMedia'
import { backgroundNotes } from '../data/backgroundArchive'
import { ArchiveSystemView } from './archive/ArchiveSystemView'
import { BackgroundNoteCard } from './BackgroundNoteCard'

export function ArchiveMapSection() {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null)
  const [imageIndexByNode, setImageIndexByNode] = useState<Record<string, number>>({
    '01': 0,
    '02': 0,
    '03': 0,
  })

  const activeIndex = activeNodeId ? (imageIndexByNode[activeNodeId] ?? 0) : 0

  const resolvedMedia = useMemo(() => {
    if (!activeNodeId) return null
    return getGalleryImage(activeNodeId, activeIndex)
  }, [activeNodeId, activeIndex])

  const frameTotal = activeNodeId ? (archiveGalleries[activeNodeId]?.images.length ?? 0) : 0

  const advanceImage = useCallback((noteId: string) => {
    const total = archiveGalleries[noteId]?.images.length ?? 0
    if (total <= 1) return
    setImageIndexByNode((prev) => ({
      ...prev,
      [noteId]: ((prev[noteId] ?? 0) + 1) % total,
    }))
  }, [])

  const handlePreviewClick = useCallback(
    (noteId: string, e: React.MouseEvent) => {
      e.stopPropagation()
      if (activeNodeId === noteId) {
        advanceImage(noteId)
      } else {
        setActiveNodeId(noteId)
        setImageIndexByNode((prev) => ({ ...prev, [noteId]: 0 }))
      }
    },
    [activeNodeId, advanceImage],
  )

  const handleCloseView = useCallback(() => {
    setActiveNodeId(null)
  }, [])

  const handleRotateInView = useCallback(() => {
    if (activeNodeId) advanceImage(activeNodeId)
  }, [activeNodeId, advanceImage])

  const popoutPosition =
    activeNodeId && archivePopoutPositions[activeNodeId]
      ? archivePopoutPositions[activeNodeId]
      : archivePopoutPositions['02']

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

      <div className="archive-canvas w-full relative window-border bg-black/40">
        <div className="archive-canvas-inner">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
            <path className="mapping-line" d="M 180 180 C 280 140, 380 280, 500 260" />
            <path className="mapping-line" d="M 500 260 C 620 220, 780 380, 900 360" />
            <path className="mapping-line" d="M 500 260 C 380 420, 280 580, 200 700" />
            <path className="mapping-line" d="M 200 700 C 420 780, 680 760, 820 780" />
            <path className="mapping-line" d="M 900 360 C 950 520, 880 680, 820 780" />
          </svg>

          {backgroundNotes.map((note) => (
            <BackgroundNoteCard
              key={note.id}
              note={note}
              gallery={archiveGalleries[note.id]}
              isActive={activeNodeId === note.id}
              activeImageIndex={imageIndexByNode[note.id] ?? 0}
              onPreviewClick={(e) => handlePreviewClick(note.id, e)}
            />
          ))}

          {activeNodeId && resolvedMedia && frameTotal > 0 && (
            <ArchiveSystemView
              media={resolvedMedia}
              windowTitle={resolvedMedia.popoutTitle}
              positionClass={popoutPosition}
              frameIndex={activeIndex}
              frameTotal={frameTotal}
              onClose={handleCloseView}
              onRotate={handleRotateInView}
            />
          )}

          <div className="absolute bottom-4 left-4 mono text-[10px] text-pink-500 animate-pulse pointer-events-none z-10">
            [SYS] 5 MEMORIES — CLICK PREVIEW TO ROTATE
          </div>
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
