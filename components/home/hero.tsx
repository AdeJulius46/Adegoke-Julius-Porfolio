import { Award, Download } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";
import { SectionTitle } from "@/components/layout/section-title";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <header>
      <SectionTitle>{site.title}</SectionTitle>

      <p className="text-light-gray mt-4 text-[length:var(--fs-3)] leading-relaxed font-light sm:mt-6">
        {site.tagline}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6">
        {site.techLine.map((tech) => (
          <span
            key={tech}
            className="bg-muted text-light-gray border-border rounded-full border px-3 py-1 text-[length:var(--fs-7)] font-light"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={site.badgeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-primary-foreground mt-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[length:var(--fs-7)] font-medium transition-opacity hover:opacity-90 sm:mt-6"
      >
        <Award size={16} />
        {site.badge}
      </a>

      <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
        <Button asChild size="lg">
          <Link href={site.ctas.primary.href}>{site.ctas.primary.label}</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={site.ctas.secondary.href} download>
            <Download />
            {site.ctas.secondary.label}
          </a>
        </Button>
      </div>
    </header>
  );
}
