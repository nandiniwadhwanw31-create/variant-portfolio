import type { ReactNode } from 'react'
import type { GhostTerminalBlock } from '../data/ghostProtocol'
import { GhostStreamDivider } from './ghost/GhostTerminalPrimitives'

interface GhostTerminalWindowProps {
  block: GhostTerminalBlock
  children: ReactNode
  className?: string
}

export function GhostTerminalWindow({ block, children, className = '' }: GhostTerminalWindowProps) {
  return (
    <article className={`ghost-terminal ${className}`}>
      <header className="ghost-terminal-header">
        <span className="ghost-terminal-meta-left">{block.metaLeft}</span>
        <span className="ghost-terminal-meta-right shrink-0">{block.metaRight}</span>
      </header>

      <div className="ghost-terminal-body">
        <p className="ghost-stream-line">
          {block.metaLeft} // {block.streamTitle}
        </p>
        <GhostStreamDivider />
        {children}
      </div>

      {block.showProgress && (
        <div
          className="ghost-terminal-progress-wrap"
          aria-label={`${block.progressPercent}% parsed`}
        >
          <div className="ghost-terminal-progress-label">
            <span>RECONSTRUCTION_4.2.sys</span>
            <span>{block.progressPercent}% PARSED</span>
          </div>
          <div className="ghost-terminal-progress-track">
            <div
              className="ghost-terminal-progress-fill"
              style={{ width: `${block.progressPercent ?? 77}%` }}
            />
          </div>
        </div>
      )}
    </article>
  )
}
