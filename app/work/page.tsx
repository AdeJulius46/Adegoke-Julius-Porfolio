import type { Metadata } from "next";
import { SectionTitle } from "@/components/layout/section-title";
import { SelectedWork } from "@/components/work/selected-work";
import { ProjectFilterGrid } from "@/components/work/project-filter-grid";
import { ExperimentsSection } from "@/components/work/experiments-section";

const title = "Work — Adegoke Julius";
const description =
  "Fullstack projects by Adegoke Julius, including STAX (a Next.js mini-ERP) and a job posting platform, plus Next.js and WordPress work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { title, description, url: "/work" },
  twitter: { title, description },
};

export default function WorkPage() {
  return (
    <>
      <SectionTitle>Work</SectionTitle>
      <p className="text-light-gray mt-4 mb-10 text-[length:var(--fs-6)] leading-relaxed font-light sm:mb-14">
        A selection of complete web applications and sites I&apos;ve built —
        from fullstack apps with their own databases and auth, to Next.js
        sites and WordPress builds.
      </p>

      <SelectedWork />
      <ProjectFilterGrid />
      <ExperimentsSection />
    </>
  );
}
