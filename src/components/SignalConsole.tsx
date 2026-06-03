import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const terminalLines = [
  '> SIGNAL_CONSOLE v2.1 — CHANNEL OPEN',
  '> ENCRYPTION: AES-256 · FREQ: 88.4 MHz',
  '> AWAITING TRANSMISSION FROM REMOTE NODE...',
]

export function SignalConsole() {
  const reduced = usePrefersReducedMotion()
  const [lineIndex, setLineIndex] = useState(reduced ? terminalLines.length : 0)
  const [frequency, setFrequency] = useState(88.4)

  useEffect(() => {
    if (reduced) return
    if (lineIndex < terminalLines.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 700)
      return () => clearTimeout(t)
    }
    const pulse = setInterval(() => {
      setFrequency((f) => Math.round((f + (Math.random() - 0.5) * 0.2) * 10) / 10)
    }, 1200)
    return () => clearInterval(pulse)
  }, [lineIndex, reduced])

  return (
    <footer id="contact" className="col-span-12 mt-20 mb-12 scroll-mt-28">
      <div className="window-border bg-black overflow-hidden">
        <div className="window-header px-4 py-2 flex justify-between items-center">
          <span className="mono text-xs font-bold uppercase">SIGNAL_TRANSMISSION.EXE</span>
          <span className="mono text-[10px] animate-pulse text-lime-400">LIVE</span>
        </div>

        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="serif text-4xl md:text-5xl italic leading-tight mb-4 text-[#fdf2f8]">
              Transmit a <span className="not-italic text-pink-400">Signal</span>
            </h2>
            <p className="mono text-sm text-zinc-400 leading-relaxed max-w-md">
              Collaborative research, creative technology, venture intelligence, or an open
              conversation — the terminal is listening.
            </p>

            <div
              className="mt-6 p-4 bg-zinc-950 border border-pink-500/30 mono text-[11px] text-lime-400/90 min-h-[120px] space-y-1"
              aria-live="polite"
            >
              {terminalLines.slice(0, lineIndex).map((line) => (
                <motion.div key={line} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {line}
                </motion.div>
              ))}
              {lineIndex >= terminalLines.length && (
                <span className="text-pink-400 animate-pulse">█</span>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="mono text-[10px] space-y-3">
              <div className="flex justify-between border-b border-pink-500/20 pb-2">
                <span className="text-zinc-500">FREQUENCY</span>
                <span className="text-pink-400">{frequency} MHz</span>
              </div>
              <div className="flex gap-1 h-8 items-end">
                {[20, 50, 80, 100, 70, 40].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-pink-500/80 rounded-sm"
                    animate={
                      reduced ? { height: `${h}%` } : { height: [`${h}%`, `${h * 0.4}%`, `${h}%`] }
                    }
                    transition={{ repeat: Infinity, duration: 0.8 + i * 0.1, repeatType: 'reverse' }}
                  />
                ))}
              </div>
              <p className="text-zinc-500 uppercase tracking-widest text-[9px]">Signal Strength: 94%</p>
            </div>

            <a
              href={`mailto:${site.email}?subject=Signal%20from%20Portfolio`}
              data-cursor="hover"
              className="window-border bg-[#ff7eb9] text-black hover:bg-pink-300 px-8 py-5 mono text-center text-sm uppercase font-bold flex items-center justify-center gap-3 transition-colors"
            >
              <i className="ri-radar-line text-lg" aria-hidden />
              Initiate Contact
            </a>

            <p className="mono text-[10px] text-zinc-600 text-center">{site.email}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center mono text-[10px] opacity-40 uppercase tracking-widest gap-4">
        <span>{site.copyright}</span>
        <div className="flex gap-8">
          <span>UPTIME: 99.98%</span>
          <span>MEM: 64GB DDR5</span>
          <span>CORES: 16_ACTIVE</span>
        </div>
        <span>DESIGNED IN THE VOID</span>
      </div>
    </footer>
  )
}
