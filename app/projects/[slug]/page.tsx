import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectDetail } from "@/components/projects/project-detail";

function getProject(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  if (!project || project.category === "Experiment") return undefined;
  return project;
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.category !== "Experiment")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — Adegoke Julius`;
  const description = project.summary;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      images: [project.images[0]],
    },
    twitter: { title, description, images: [project.images[0]] },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
