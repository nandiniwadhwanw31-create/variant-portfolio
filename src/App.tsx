import { ArchivesSection } from './components/ArchivesSection'
import { ArchiveMapSection } from './components/ArchiveMapSection'
import { CrtOverlay } from './components/CrtOverlay'
import { CustomCursor } from './components/effects/CustomCursor'
import { GhostOverlay } from './components/GhostOverlay'
import { CdPlayerPanel } from './components/CdPlayerPanel'
import { HeroWindow } from './components/HeroWindow'
import { Nav } from './components/Nav'
import { Scanline } from './components/Scanline'
import { SignalConsole } from './components/SignalConsole'
import { SignalWidget } from './components/SignalWidget'
import { VariantAside } from './components/VariantAside'
import { WireframeCube } from './components/WireframeCube'

function App() {
  return (
    <div className="w-full flex flex-col items-center relative">
      <CustomCursor />
      <CrtOverlay />
      <Scanline />
      <GhostOverlay />
      <Nav />

      <main className="w-full max-w-7xl mt-24 px-8 grid grid-cols-12 gap-8 relative" id="page-home">
        <section className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <HeroWindow />
          <CdPlayerPanel />
        </section>

        <aside className="col-span-12 lg:col-span-5 flex flex-col gap-6 lg:self-stretch">
          <VariantAside />
        </aside>

        <div className="col-span-12">
          <ArchiveMapSection />
        </div>

        <ArchivesSection />
        <SignalConsole />
      </main>
      <SignalWidget />
      <WireframeCube />
    </div>
  )
}

export default App
