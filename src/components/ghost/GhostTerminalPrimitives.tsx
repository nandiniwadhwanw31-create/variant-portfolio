import type { ReactNode } from 'react'

export function GhostStreamDivider() {
  return <hr className="ghost-divider" aria-hidden />
}

export function GhostSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="ghost-section">
      <h3 className="ghost-section-title">{title}</h3>
      {children}
    </section>
  )
}

/** Extracted memory / philosophy fragment */
export function GhostExtract({ children }: { children: ReactNode }) {
  return <p className="ghost-extract">&quot;{children}&quot;</p>
}

export function GhostLog({ items }: { items: ReactNode[] }) {
  return (
    <ul className="ghost-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export function GhostSubLog({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="ghost-sublog">
      <span className="ghost-sublog-label">{label}</span>
      <div className="ghost-sublog-body">{children}</div>
    </div>
  )
}
