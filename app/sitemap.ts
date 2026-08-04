import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/experience", "/blog", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
    }),
  );

  const projectRoutes = projects
    .filter((p) => p.category !== "Experiment")
    .map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      lastModified: new Date(),
    }));

  return [...staticRoutes, ...projectRoutes];
}
