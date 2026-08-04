"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/content/projects";
import { ProjectCard } from "@/components/work/project-card";

const filters: { label: string; value: ProjectCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Fullstack", value: "Fullstack" },
  { label: "Next.js", value: "Next.js" },
  { label: "WordPress", value: "WordPress" },
];

const gridProjects = projects.filter((p) => p.category !== "Experiment");

export function ProjectFilterGrid() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? gridProjects
        : gridProjects.filter((p) => p.category === active),
    [active],
  );

  return (
    <section className="mt-12 sm:mt-16">
      <h3 className="text-white-2 mb-5 text-[length:var(--fs-2)] font-medium sm:mb-6">
        All Projects
      </h3>

      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="mb-6 flex flex-wrap gap-2 sm:gap-3"
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={active === filter.value}
            onClick={() => setActive(filter.value)}
            className={`rounded-full border px-3.5 py-1.5 text-[length:var(--fs-6)] transition-colors ${
              active === filter.value
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted text-light-gray hover:text-light-gray-70 border-border"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {visible.length === 0 && (
        <p className="text-light-gray-70 text-[length:var(--fs-6)]">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
