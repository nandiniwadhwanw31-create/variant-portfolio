import type { ReactNode } from 'react'

/** Inline **bold** and *italic* in archive log bodies */
export function formatArchiveText(text: string): ReactNode[] {
  const parts: ReactNode[] = []
  let key = 0
  let i = 0

  while (i < text.length) {
    if (text.startsWith('**', i)) {
      const end = text.indexOf('**', i + 2)
      if (end !== -1) {
        parts.push(
          <strong key={key++} className="font-bold">
            {text.slice(i + 2, end)}
          </strong>,
        )
        i = end + 2
        continue
      }
    }
    if (text[i] === '*') {
      const end = text.indexOf('*', i + 1)
      if (end !== -1) {
        parts.push(
          <em key={key++} className="italic">
            {text.slice(i + 1, end)}
          </em>,
        )
        i = end + 1
        continue
      }
    }

    let next = text.length
    const boldAt = text.indexOf('**', i)
    const italicAt = text.indexOf('*', i)
    if (boldAt !== -1 && boldAt < next) next = boldAt
    if (italicAt !== -1 && italicAt < next) next = italicAt

    if (next > i) {
      parts.push(text.slice(i, next))
      i = next
    } else {
      parts.push(text[i])
      i += 1
    }
  }

  return parts
}
