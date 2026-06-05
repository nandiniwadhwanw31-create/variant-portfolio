import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="window-border bg-[#12101f] overflow-hidden flex flex-col h-full group hover:translate-y-[-4px] transition-transform">
      <div className="px-3 py-1.5 flex justify-between items-center bg-black border-b-2 border-pink-500/40">
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="mono text-[10px] text-pink-400/90 font-bold uppercase tracking-tighter truncate">
            {project.filename}
          </span>
          <span className="mono text-[8px] text-zinc-500 uppercase tracking-widest">
            {project.sector}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="mono text-[8px] text-lime-400/80 animate-pulse hidden sm:inline">
            DECRYPTED
          </span>
          <i className="ri-database-2-line text-pink-500/70 text-sm" aria-hidden />
        </div>
      </div>

      <div className="h-44 bg-black relative overflow-hidden border-b border-zinc-800">
        {project.previewClass && <div className={project.previewClass} />}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12101f] via-black/40 to-transparent pointer-events-none" />
        <div className="absolute top-2 left-2 mono text-[8px] text-pink-500/60 uppercase">
          IDX_{project.id}
        </div>
        <div className="absolute bottom-2 right-2 mono text-[8px] text-zinc-500 uppercase">
          ORIGIN: {project.source}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <p className="mono text-[9px] text-pink-400/50 uppercase tracking-[0.2em] mb-1">
            Research Object
          </p>
          <h4 className="serif text-base sm:text-lg leading-snug text-zinc-100 uppercase tracking-[0.04em]">
            {project.title}
          </h4>
        </div>
        <p className="mono text-[11px] text-zinc-400 leading-relaxed border-l-2 border-pink-500/30 pl-3">
          {project.description}
        </p>

        {project.reportUrl && (
          <a
            href={project.reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="window-border bg-black text-pink-400 hover:bg-pink-600 hover:text-white px-4 py-2.5 mono text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 transition-colors w-full"
          >
            <i className="ri-external-link-line" aria-hidden />
            {project.reportLabel ?? 'Open Report'}
          </a>
        )}

        <div className="mt-auto pt-4 border-t border-zinc-800/80 flex flex-col gap-2">
          <span className="mono text-[8px] text-zinc-600 uppercase tracking-widest">
            Methods / Stack
          </span>
          <span className={`text-[9px] mono leading-snug ${project.stackColor}`}>
            {project.stack}
          </span>
        </div>
      </div>
    </article>
  )
}
