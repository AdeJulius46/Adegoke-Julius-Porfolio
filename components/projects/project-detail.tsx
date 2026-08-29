import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Lock, PlayCircle } from "lucide-react";
import type { Project } from "@/content/projects";
import { GithubIcon } from "@/components/icons/social-icons";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article>
      <Link
        href="/work"
        className="text-light-gray-70 hover:text-light-gray mb-6 inline-flex items-center gap-1.5 text-[length:var(--fs-7)] sm:mb-8"
      >
        <ArrowLeft size={15} />
        Back to work
      </Link>

      <div className="flex flex-wrap items-center gap-2">
        <span className="bg-muted text-light-gray-70 border-border rounded-full border px-3 py-1 text-[length:var(--fs-8)] uppercase">
          {project.category}
        </span>
        {project.featured && (
          <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-[length:var(--fs-8)] font-medium uppercase">
            Featured
          </span>
        )}
      </div>

      <h1 className="text-white-2 mt-3 text-[length:var(--fs-1)] font-semibold sm:mt-4">
        {project.title}
      </h1>
      <p className="text-light-gray mt-3 text-[length:var(--fs-4)] leading-relaxed font-light">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-[length:var(--fs-6)] sm:mt-8">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium"
          >
            <ExternalLink size={15} />
            Visit live site
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border text-light-gray hover:text-light-gray-70 inline-flex items-center gap-2 rounded-full border px-4 py-2"
          >
            <GithubIcon className="h-4 w-4" />
            View code
          </a>
        )}
        {project.githubPrivate && !project.githubUrl && (
          <span className="text-light-gray-70 inline-flex items-center gap-2">
            <Lock size={15} />
            Private repository
          </span>
        )}
        {project.videoUrl && (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border text-light-gray hover:text-light-gray-70 inline-flex items-center gap-2 rounded-full border px-4 py-2"
          >
            <PlayCircle size={15} />
            Watch demo
          </a>
        )}
      </div>

      <div className="bg-muted relative mt-8 aspect-video overflow-hidden rounded-content-card sm:mt-10">
        <Image
          src={project.images[0]}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:grid-cols-[1fr_260px] lg:gap-12">
        <div className="space-y-8">
          {project.problem && (
            <section>
              <h2 className="text-white-2 text-[length:var(--fs-3)] font-medium">
                The problem
              </h2>
              <p className="text-light-gray mt-2.5 text-[length:var(--fs-6)] leading-relaxed font-light">
                {project.problem}
              </p>
            </section>
          )}

          {project.architecture && (
            <section>
              <h2 className="text-white-2 text-[length:var(--fs-3)] font-medium">
                Architecture &amp; stack
              </h2>
              <p className="text-light-gray mt-2.5 text-[length:var(--fs-6)] leading-relaxed font-light">
                {project.architecture}
              </p>
            </section>
          )}
        </div>

        <aside className="border-border space-y-6 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <div>
            <h3 className="text-light-gray-70 text-[length:var(--fs-8)] uppercase">
              Role
            </h3>
            <p className="text-white-2 mt-1 text-[length:var(--fs-6)]">
              {project.role}
            </p>
          </div>
          <div>
            <h3 className="text-light-gray-70 text-[length:var(--fs-8)] uppercase">
              Stack
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-muted text-light-gray-70 border-border rounded-full border px-2.5 py-1 text-[length:var(--fs-8)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
