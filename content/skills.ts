export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Liquid"],
  },
  {
    group: "Backend",
    items: ["Node.js", "PHP", "REST APIs", "Auth.js", "Prisma"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL"],
  },
  {
    group: "CMS / Commerce",
    items: ["WordPress", "Shopify"],
  },
  {
    group: "Tools & Infra",
    items: ["Git", "Vercel", "AWS SES", "Zapier/Make"],
  },
];
