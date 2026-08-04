import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/work/project-card";

export function SelectedWork({
  showViewAllLink = false,
}: {
  showViewAllLink?: boolean;
}) {
  const featured = projects.filter((p) => p.featured);

  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-white-2 text-[length:var(--fs-2)] font-medium">
          Selected Work
        </h3>
        {showViewAllLink && (
          <Link
            href="/work"
            className="text-vegas-gold inline-flex shrink-0 items-center gap-1 text-[length:var(--fs-7)] hover:underline"
          >
            View all work <ArrowRight size={14} />
          </Link>
        )}
      </div>

      <ul className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {featured.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} featured />
          </li>
        ))}
      </ul>
    </section>
  );
}
