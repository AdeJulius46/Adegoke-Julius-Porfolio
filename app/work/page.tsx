import type { Metadata } from "next";
import { SectionTitle } from "@/components/layout/section-title";
import { SelectedWork } from "@/components/work/selected-work";
import { ProjectFilterGrid } from "@/components/work/project-filter-grid";
import { ExperimentsSection } from "@/components/work/experiments-section";

export const metadata: Metadata = {
  title: "Work — Adegoke Julius",
  description:
    "Fullstack projects by Adegoke Julius, including STAX (a Next.js mini-ERP) and a job posting platform, plus Next.js and WordPress work.",
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
