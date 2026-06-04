import { ghostTerminalBlocks } from '../data/ghostProtocol'
import { site } from '../data/site'
import {
  GhostExtract,
  GhostLog,
  GhostSection,
  GhostSubLog,
} from './ghost/GhostTerminalPrimitives'
import { GhostTerminalWindow } from './GhostTerminalWindow'

export function GhostOverlay() {
  return (
    <div id="ghost-overlay" className="fixed inset-0 w-full h-full">
      <div className="ghost-crt-scanlines" aria-hidden />
      <div className="heavy-scanline" aria-hidden />

      <div className="absolute top-6 left-6 z-[210]">
        <a href="#" className="ghost-terminate-btn mono text-xs flex items-center gap-2">
          <i className="ri-close-line" aria-hidden />
          TERMINATE_PROTOCOLS
        </a>
      </div>

      <div className="ghost-scroll relative z-[205] h-full overflow-y-auto overflow-x-hidden px-4 py-20 md:px-12 md:py-24">
        <div className="ghost-jitter-layer pointer-events-none" aria-hidden>
          <div className="jitter-line w-[40%] top-[12%] left-[8%] rotate-[25deg]" />
          <div className="jitter-line w-[30%] top-[40%] left-[55%] rotate-[-15deg]" />
          <div className="jitter-line w-[22%] top-[68%] left-[20%] rotate-[80deg]" />
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-6 relative">
          <GhostTerminalWindow block={ghostTerminalBlocks[0]} className="md:-rotate-1">
            <GhostSection title="[THE REBELLION]">
              <p className="ghost-line">Tech became boring.</p>
              <GhostExtract>The internet got ugly and sterile.</GhostExtract>
              <GhostExtract>This website is an act of war against that.</GhostExtract>
            </GhostSection>

            <GhostSection title="[THE HOST]">
              <GhostExtract>Inside my brain, logic and art are the exact same thing.</GhostExtract>
              <p className="ghost-line">
                If a project is beautiful, I will stay up all night making sure the code is
                perfect.
              </p>
            </GhostSection>

            <GhostSection title="[SYSTEM STATUS]">
              <p className="ghost-line">This website is a work in progress.</p>
              <GhostExtract>So am I.</GhostExtract>
            </GhostSection>
          </GhostTerminalWindow>

          <GhostTerminalWindow block={ghostTerminalBlocks[1]} className="md:rotate-[0.5deg] md:ml-4">
            <GhostSection title="[THE MINDSET]">
              <GhostExtract>Everything is connected.</GhostExtract>
              <p className="ghost-line">
                As a professional debater, I don&apos;t just guess—I build data pipelines to prove
                what my gut already knows. I weaponize quantitative data to turn fringe theories
                into absolute logic.
              </p>
            </GhostSection>

            <GhostSection title="[THE PREDICTION // MACRO TO MICRO]">
              <GhostSubLog label="* The Hunch:">
                <GhostExtract>
                  The rise of global Neoconservatism directly mirrors the rise of the &quot;Ozempic
                  Body.&quot;
                </GhostExtract>
              </GhostSubLog>
              <GhostSubLog label="* The Evidence:">
                <p className="ghost-line">
                  Hard market data ($24.5B scaling) proves that as macro politics tighten borders,
                  society chemically forces that same restrictive control onto human biology.
                </p>
                <GhostExtract>Desire is treated like an error code.</GhostExtract>
              </GhostSubLog>
            </GhostSection>

            <GhostSection title="[THE SURPRISE // TIME-TRAVELING DATA]">
              <GhostSubLog label="* The Hunch:">
                <GhostExtract>Modern political chaos is entirely new.</GhostExtract>
              </GhostSubLog>
              <GhostSubLog label="* The Reality:">
                I pulled the publicly available historic Indian Constituent Assembly Debates and
                mapped them against today&apos;s Lok Sabha transcripts.
              </GhostSubLog>
              <GhostSubLog label="* The NLP Sentiment Analysis:">
                The exact same core topics still dominate the parliament floor decades later—only
                the underlying emotional sentiment has radically mutated.
              </GhostSubLog>
            </GhostSection>

            <GhostSection title="[CONCLUSION]">
              <GhostExtract>Data is alive. It is a mirror.</GhostExtract>
              <p className="ghost-line">
                If you track the vectors deep enough, everything connects.
              </p>
            </GhostSection>
          </GhostTerminalWindow>

          <GhostTerminalWindow block={ghostTerminalBlocks[2]} className="md:-rotate-[0.5deg]">
            <GhostSection title="[THE RULES]">
              <p className="ghost-line">
                send me hello to chat if you allign with the vision. Pitch me something you would
                willingly sacrifice a whole weekend of sleep for.
              </p>
              <p className="ghost-line">
                Host is always ready to upgrade thier toolkit to materialise visions.
              </p>
            </GhostSection>

            <GhostSection title="[CHOOSE YOUR DATA]">
              <GhostLog
                items={[
                  <>
                    0x01: A radical UI design or deep sub-cultural theory or creatiev direction for
                    a passion project.
                  </>,
                  <>0x02: A messy dataset (.json / .csv) or a logic problem.</>,
                ]}
              />
            </GhostSection>

            <GhostSection title="[PORTALS]">
              <p className="ghost-portals">
                &gt;&gt; EMAIL:{' '}
                <a href={`mailto:${site.email}`} className="ghost-link">
                  {site.email}
                </a>
              </p>
              <GhostExtract>Let&apos;s build something terrifyingly beautiful.</GhostExtract>
            </GhostSection>
          </GhostTerminalWindow>
        </div>

        <div
          className="pointer-events-none absolute bottom-8 right-6 md:right-12 mono text-[#FF007F]/15 text-7xl md:text-9xl font-bold select-none"
          aria-hidden
        >
          GHOST
        </div>
      </div>
    </div>
  )
}
