export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "twitter" | "github" | "linkedin";
}

export interface WhatIDoItem {
  title: string;
  description: string;
  icon: "code" | "server" | "database" | "gauge";
}

export interface SiteContent {
  name: string;
  title: string;
  tagline: string;
  techLine: string[];
  badge: string;
  badgeUrl: string;
  location: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  avatarImage: string;
  resumeHref: string;
  ctas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  socials: SocialLink[];
  nav: NavLink[];
  whatIDo: WhatIDoItem[];
}

/**
 * A GitHub/LinkedIn handle wasn't available from the owner at content-authoring
 * time. Grep this constant to find where to add one later.
 */
export const TODO_ADD_SOCIAL = "GitHub/LinkedIn handle not yet provided";

export const site: SiteContent = {
  name: "Adegoke Julius",
  title: "Fullstack Developer",
  tagline:
    "I build complete web applications — from responsive React interfaces to the APIs, databases, and business logic behind them.",
  techLine: ["Next.js", "TypeScript", "Node", "PHP", "PostgreSQL"],
  badge: "NASA Space Apps regional winner",
  badgeUrl:
    "https://www.linkedin.com/posts/adegoke-julius_nasaspaceapps-innovation-hackathon-activity-7381793986018963456-nnPq",
  location: "Lagos, Nigeria",
  email: "adegokejulius46@gmail.com",
  phoneDisplay: "0810 430 3528",
  phoneHref: "tel:+2348104303528",
  avatarImage: "/images/adegoke-julius.png",
  resumeHref: "/resume.pdf",
  ctas: {
    primary: { label: "View Work", href: "/work" },
    secondary: { label: "Download Resume", href: "/resume.pdf" },
  },
  socials: [
    {
      label: "Facebook",
      href: "https://web.facebook.com/julius.adegoke.395",
      icon: "facebook",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/AdegokeJulius7",
      icon: "twitter",
    },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Experience", href: "/experience" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  whatIDo: [
    {
      title: "Frontend Engineering",
      description:
        "React, Next.js, TypeScript. Accessible, performant UIs.",
      icon: "code",
    },
    {
      title: "Backend & APIs",
      description:
        "Node.js, PHP, REST APIs, authentication, integrations (Paystack, Stripe, SES).",
      icon: "server",
    },
    {
      title: "Databases & Data",
      description:
        "PostgreSQL, Prisma, schema design, TanStack Table.",
      icon: "database",
    },
    {
      title: "Performance",
      description:
        "Core Web Vitals, Lighthouse; 35% load-time reduction on a production React dashboard.",
      icon: "gauge",
    },
  ],
};
