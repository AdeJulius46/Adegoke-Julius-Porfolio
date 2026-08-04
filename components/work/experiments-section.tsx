import { ChevronDown, ExternalLink } from "lucide-react";
import { projects } from "@/content/projects";

const experiments = projects.filter((p) => p.category === "Experiment");

export function ExperimentsSection() {
  if (experiments.length === 0) return null;

  return (
    <details className="border-border mt-10 rounded-content-card group border sm:mt-14">
      <summary className="text-light-gray-70 hover:text-light-gray marker:content-none flex cursor-pointer list-none items-center gap-2 px-5 py-4 text-[length:var(--fs-6)] select-none sm:px-6">
        <ChevronDown size={16} className="transition-transform group-open:rotate-180" />
        Experiments ({experiments.length})
      </summary>

      <ul className="border-border grid grid-cols-1 gap-2 border-t p-4 sm:grid-cols-2 sm:p-6">
        {experiments.map((project) => (
          <li key={project.slug}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-primary flex items-center gap-1.5 py-1 text-[length:var(--fs-6)]"
            >
              <ExternalLink size={13} />
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
