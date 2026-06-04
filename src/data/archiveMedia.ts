export interface ArchiveMediaItem {
  id: string
  src: string
  alt: string
  popoutTitle: string
}

export interface ArchiveNodeGallery {
  images: ArchiveMediaItem[]
}

export const archiveGalleries: Record<string, ArchiveNodeGallery> = {
  '01': {
    images: [
      {
        id: 'yoga-pose',
        src: '/images/archive/yoga-group-pose.png',
        alt: 'Children practicing yoga outdoors',
        popoutTitle: 'ORIGIN_FIELD_01.LOG // 4K',
      },
      {
        id: 'yoga-formal',
        src: '/images/archive/yoga-rashtrapati.png',
        alt: 'Rashtrapati Bhavan — President Pranab Mukherjee',
        popoutTitle: 'ORIGIN_RECOGNITION_02.LOG // 4K',
      },
      {
        id: 'yoga-cert',
        src: '/images/archive/yoga-certificate.png',
        alt: 'Dr. Archika Foundation certificate of achievement',
        popoutTitle: 'ORIGIN_CERT_03.LOG // 4K',
      },
    ],
  },
  '02': {
    images: [
      {
        id: 'music-cert',
        src: '/images/archive/music-gandharva-certificate.png',
        alt: 'Gandharva Mahavidyalaya — Praveshika Purna, Vocal',
        popoutTitle: 'CLASSICAL_PERFORMANCE_01.SYS // 4K',
      },
      {
        id: 'music-research',
        src: '/images/archive/music-research-paper.png',
        alt: 'ICM as a multi-dimensional mathematical system',
        popoutTitle: 'ICM_MATHEMATICS_02.SYS // 4K',
      },
    ],
  },
  '03': {
    images: [
      {
        id: 'leadership-badge',
        src: '/images/archive/leadership-spotlight-badge.png',
        alt: 'President Spotlight — Sanskriti School',
        popoutTitle: 'SPOTLIGHT_AUTH_01.LOG // 4K',
      },
    ],
  },
}

export function getGalleryImage(noteId: string, index: number): ArchiveMediaItem | null {
  const gallery = archiveGalleries[noteId]
  if (!gallery || gallery.images.length === 0) return null
  const safeIndex = ((index % gallery.images.length) + gallery.images.length) % gallery.images.length
  return gallery.images[safeIndex]
}

export const archivePopoutPositions: Record<string, string> = {
  '01': 'top-[72px] left-[460px]',
  '02': 'top-[140px] left-[800px]',
  '03': 'top-[248px] left-[520px]',
}
