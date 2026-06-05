import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ArchivesSection() {
  return (
    <section id="work" className="col-span-12 mt-8 scroll-mt-28">
      <div className="flex items-end justify-between mb-8 border-b-2 border-pink-500/30 pb-4">
        <div className="mono">
          <h3 className="text-2xl uppercase font-bold tracking-[0.12em] text-pink-400 flex items-center gap-3 leading-tight">
            <i className="ri-archive-drawer-line" aria-hidden />
            ARCHIVES_RESEARCH
          </h3>
          <p className="text-xs opacity-60 mt-1">
            DATA × CREATIVITY × BEHAVIOURAL INTELLIGENCE / CLASSIFIED DOSSIERS
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-8 mono text-[10px] opacity-40 uppercase">
          <span>Archive View</span>
          <span className="w-px h-4 bg-pink-500/40" aria-hidden />
          <span>Intel Render: High</span>
          <span className="w-px h-4 bg-pink-500/40" aria-hidden />
          <span>{projects.length} Objects Recovered</span>
        </div>
      </div>

      <div className="archives-research-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
