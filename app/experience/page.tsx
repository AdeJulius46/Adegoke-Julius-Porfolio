import type { Metadata } from "next";
import { SectionTitle } from "@/components/layout/section-title";
import { Timeline } from "@/components/experience/timeline";
import { SkillsGrid } from "@/components/experience/skills-grid";

const title = "Experience — Adegoke Julius";
const description =
  "Adegoke Julius's work history and technical skills, from frontend and backend engineering to databases, CMS/commerce platforms, and tooling.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
  openGraph: { title, description, url: "/experience" },
  twitter: { title, description },
};

export default function ExperiencePage() {
  return (
    <>
      <SectionTitle>Experience</SectionTitle>
      <p className="text-light-gray mt-4 mb-10 text-[length:var(--fs-6)] leading-relaxed font-light sm:mb-14">
        Where I&apos;ve worked, and the stack I build with.
      </p>

      <Timeline />
      <SkillsGrid />
    </>
  );
}
