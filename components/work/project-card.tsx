import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Lock, PlayCircle } from "lucide-react";
import type { Project } from "@/content/projects";
import { GithubIcon } from "@/components/icons/social-icons";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const detailHref = `/projects/${project.slug}`;

  return (
    <article className="bg-card border-border rounded-content-card shadow-[var(--shadow-2)] group flex h-full flex-col overflow-hidden border">
      <Link
        href={detailHref}
        className="bg-muted relative block aspect-video overflow-hidden"
      >
        <Image
          src={project.images[0]}
          alt={`${project.title} screenshot`}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div>
          <h3>
            <Link
              href={detailHref}
              className={`text-white-2 hover:text-vegas-gold font-medium transition-colors ${featured ? "text-[length:var(--fs-3)]" : "text-[length:var(--fs-4)]"}`}
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-light-gray mt-1.5 text-[length:var(--fs-6)] leading-relaxed font-light">
            {project.summary}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-muted text-light-gray-70 border-border rounded-full border px-2.5 py-1 text-[length:var(--fs-8)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="border-border flex items-center gap-4 border-t pt-3 text-[length:var(--fs-7)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-vegas-gold inline-flex items-center gap-1.5 hover:underline"
            >
              <ExternalLink size={14} />
              Live site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray-70 hover:text-light-gray inline-flex items-center gap-1.5"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {project.githubPrivate && !project.githubUrl && (
            <span className="text-light-gray-70 inline-flex items-center gap-1.5">
              <Lock size={13} />
              Private repository
            </span>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray-70 hover:text-light-gray inline-flex items-center gap-1.5"
            >
              <PlayCircle size={14} />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
