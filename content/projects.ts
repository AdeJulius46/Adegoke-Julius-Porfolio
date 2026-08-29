export type ProjectCategory =
  | "Fullstack"
  | "Next.js"
  | "WordPress"
  | "Experiment";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem?: string;
  /** Longer architecture/stack writeup shown on the project detail page. */
  architecture?: string;
  role: string;
  stack: string[];
  category: ProjectCategory;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  /** True when a GitHub repo exists but is private — show a label, not a dead link. */
  githubPrivate?: boolean;
  /** Optional demo/walkthrough video (e.g. YouTube). */
  videoUrl?: string;
  images: string[];
}

/**
 * pulse.9ijakids.com didn't come with an owner-supplied title — this is a
 * reasonable placeholder inferred from the domain. Grep this constant to
 * confirm/replace it.
 */
export const TODO_CONFIRM_TITLE = "9ijaKids Pulse";

export const projects: Project[] = [
  // --- Featured fullstack apps ---
  {
    slug: "ai-interview-prep",
    title: "AI Interview Prep",
    summary:
      "Practice behavioral interviews with a live AI avatar interviewer, then get your STAR-format answers scored by Claude.",
    problem:
      "Job seekers rarely get realistic, structured practice for behavioral interviews — AI Interview Prep runs a live, timed interview with an AI avatar and turns the transcript into scored STAR-format feedback.",
    architecture:
      "The frontend is Next.js, talking to a NestJS API with Prisma for data access. Anam powers the live AI avatar interviewer — driving the on-screen interviewer, asking questions, and capturing a live transcript in real time. After the session, the transcript is sent to Claude, which scores each answer against the STAR (Situation, Task, Action, Result) framework and returns structured feedback.",
    role: "Sole developer",
    stack: ["Next.js", "NestJS", "Prisma", "Anam", "Claude"],
    category: "Fullstack",
    featured: true,
    liveUrl: "https://ai-interview-prep-web.vercel.app",
    githubUrl: "https://github.com/AdeJulius46/Ai-interview-prep",
    videoUrl: "https://www.youtube.com/watch?v=65fUWnqoOrc",
    images: ["/images/projects/ai-interview-prep.png"],
  },
  {
    slug: "stax",
    title: "STAX",
    summary:
      "A Next.js mini-ERP for managing customers, inventory, sales, invoicing, receipts, payments, and reporting in one place.",
    problem:
      "Small businesses tracking customers, stock, and sales across spreadsheets or paper lose time and accuracy. STAX centralizes that workflow into one role-based, auditable system.",
    architecture:
      "STAX is built on Next.js 15's App Router with TypeScript throughout the stack. The data layer is a relational schema in PostgreSQL, modeled and queried through Prisma — customers, inventory items, sales, invoices, receipts, and payments are normalized tables with real foreign-key relationships, not flat records, so reporting can join across them directly. Auth.js handles authentication and role-based access, so staff and admin users see different capabilities against the same data. Complex views — the inventory and sales tables in particular — use TanStack Table for sorting, filtering, and pagination over large datasets. Invoice and receipt generation renders structured records into downloadable PDFs. The UI is Tailwind v4 and shadcn/ui components, restyled to a consistent internal design system rather than left on defaults.",
    role: "Sole developer",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind v4",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "TanStack Table",
    ],
    category: "Fullstack",
    featured: true,
    liveUrl: "https://stax-management-software.vercel.app/login",
    githubPrivate: true,
    images: ["/images/projects/stax.png"],
  },
  {
    slug: "kitcheck",
    title: "Kitcheck",
    summary:
      "A restaurant management platform for multi-branch operations — orders, kitchen workflow, inventory, tables, and staff in one dashboard.",
    problem:
      "A restaurant client running multiple branches needed one system to track orders through the kitchen, manage inventory and tables per branch, and keep staff and customer records centralized, rather than juggling per-branch tools.",
    architecture:
      "Kitcheck is a Next.js dashboard application with TypeScript, using Prisma and PostgreSQL to model branches, orders, kitchen status, inventory, tables, staff, and customers as related tables — so a branch switch (via the branch selector) scopes the whole dashboard to that location's data. The kitchen view tracks each order through New → Preparing → Ready → Completed states in real time.",
    role: "Sole developer",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    category: "Fullstack",
    featured: true,
    githubPrivate: true,
    images: ["/images/projects/kitcheck.png"],
  },
  {
    slug: "afloria",
    title: "Afloria",
    summary:
      "A wedding planning platform connecting couples with vendors — guest management, budgeting, RSVPs, and a wedding website builder.",
    problem:
      "Planning a wedding means coordinating guests, a budget, and vendors (photographers, event planners, and more) across disconnected tools. Afloria brings guest management, vendor discovery, budgeting, and a countdown-driven planning dashboard into one place.",
    architecture:
      "Afloria is a Next.js application with TypeScript, using Prisma and PostgreSQL to model couples, guest lists, vendors, bookings, and budget line items. The planning dashboard aggregates RSVP status and budget-utilization charts per couple, alongside a vendor marketplace for discovering and messaging photographers, planners, and other wedding vendors, and a built-in wedding website builder.",
    role: "Sole developer",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    category: "Fullstack",
    featured: true,
    githubPrivate: true,
    images: ["/images/projects/afloria.png"],
  },
  {
    slug: "job-posting-platform",
    title: "Job Posting Platform",
    summary:
      "A job board where employers post openings and candidates browse and apply, built end-to-end on the Next.js/Prisma/Postgres stack.",
    problem:
      "Employers and candidates both need a straightforward place to post and find openings, backed by a real database rather than static listings.",
    architecture:
      "The platform is built with Next.js on the frontend and backend routes, with Prisma modeling job postings, employers, and applications against a PostgreSQL database. Node.js powers the server-side logic that handles job creation, listing, and application flows end-to-end.",
    role: "Sole developer",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Node.js"],
    category: "Fullstack",
    featured: true,
    liveUrl: "https://job-posting-website-chi.vercel.app",
    githubUrl: "https://github.com/AdeJulius46/job-posting-website",
    images: ["/images/projects/job-posting-platform.png"],
  },

  // --- Next.js ---
  {
    slug: "thenodapp",
    title: "TheNodApp",
    summary: "A Next.js web application built and shipped to production.",
    role: "Frontend developer",
    stack: ["Next.js"],
    category: "Next.js",
    featured: false,
    liveUrl: "https://thenodapp.ca/",
    images: ["/images/projects/thenodapp.png"],
  },
  {
    slug: "active-recovery",
    title: "Active Recovery",
    summary: "A Next.js site built for an active-recovery/wellness brand.",
    role: "Frontend developer",
    stack: ["Next.js"],
    category: "Next.js",
    featured: false,
    liveUrl: "https://anime-92d8.vercel.app/",
    images: ["/images/projects/active-recovery.png"],
  },
  {
    slug: "ecommerce-demo",
    title: "Ecommerce Demo",
    summary: "A Next.js ecommerce storefront demo.",
    role: "Frontend developer",
    stack: ["Next.js"],
    category: "Next.js",
    featured: false,
    liveUrl: "https://eccormrce.vercel.app/",
    images: ["/images/projects/ecommerce-demo.png"],
  },
  {
    slug: "3d-animation-site",
    title: "3D Animation Website",
    summary: "A Next.js site featuring 3D animation and visual effects.",
    role: "Frontend developer",
    stack: ["Next.js"],
    category: "Next.js",
    featured: false,
    liveUrl: "https://fussy1.vercel.app/",
    images: ["/images/projects/3d-animation-site.png"],
  },
  {
    slug: "onepac-plus",
    title: "OnePac Plus",
    summary:
      "Custom Shopify frontend interfaces with RESTful API integrations for real-time product updates.",
    role: "Frontend developer",
    stack: ["Next.js", "Shopify", "REST APIs"],
    category: "Next.js",
    featured: false,
    liveUrl: "https://onepacplus.com/",
    images: ["/images/projects/onepac-plus.png"],
  },

  // --- WordPress ---
  {
    slug: "when-african-women-talk",
    title: "When African Women Talk",
    summary: "A WordPress site built for the When African Women Talk brand.",
    role: "WordPress developer",
    stack: ["WordPress"],
    category: "WordPress",
    featured: false,
    liveUrl: "https://whenafricanwomentalk.com/",
    images: ["/images/projects/when-african-women-talk.png"],
  },
  {
    slug: "isc2028",
    title: "ISC 2028",
    summary:
      "A WordPress site for the Sillage Conference, an international conference held in Nigeria.",
    role: "WordPress developer",
    stack: ["WordPress"],
    category: "WordPress",
    featured: false,
    liveUrl: "https://isc2028.ng/",
    images: ["/images/projects/isc2028.png"],
  },
  {
    slug: "hope-rising-ministry",
    title: "Hope Rising Ministry",
    summary:
      "A WordPress site for Hope Rising Ministry, an organization focused on children's welfare.",
    role: "WordPress developer",
    stack: ["WordPress"],
    category: "WordPress",
    featured: false,
    liveUrl: "https://hoperisingministry.org/",
    images: ["/images/projects/hope-rising-ministry.png"],
  },
  {
    slug: "odiohq",
    title: "Odio HQ",
    summary: "A WordPress site built for Odio HQ.",
    role: "WordPress developer",
    stack: ["WordPress"],
    category: "WordPress",
    featured: false,
    liveUrl: "https://odiohq.ca/",
    images: ["/images/projects/odiohq.png"],
  },
  {
    slug: "beststep",
    title: "BestStep",
    summary: "A WordPress site built for BestStep.",
    role: "WordPress developer",
    stack: ["WordPress"],
    category: "WordPress",
    featured: false,
    liveUrl: "https://beststep.ca/",
    images: ["/images/projects/beststep.png"],
  },
  {
    slug: "9ijakids-pulse",
    title: TODO_CONFIRM_TITLE,
    summary: "A WordPress site built for 9ijaKids Pulse.",
    role: "WordPress developer",
    stack: ["WordPress"],
    category: "WordPress",
    featured: false,
    liveUrl: "https://pulse.9ijakids.com/",
    images: ["/images/projects/9ijakids-pulse.png"],
  },
  {
    slug: "ogbomoso-recreation-club",
    title: "Ogbomoso Recreation Club",
    summary: "A WordPress site built for the Ogbomoso Recreation Club.",
    role: "WordPress developer",
    stack: ["WordPress"],
    category: "WordPress",
    featured: false,
    liveUrl: "https://ogbomosorecreationclub.com.ng/",
    images: ["/images/projects/ogbomoso-recreation-club.png"],
  },

  // --- Experiments (de-emphasized) ---
  {
    slug: "dice-game",
    title: "Dice Game",
    summary: "A small browser dice game experiment.",
    role: "Developer",
    stack: ["JavaScript"],
    category: "Experiment",
    featured: false,
    liveUrl: "https://adeg.netlify.app/",
    images: ["/images/projects/dice-game.png"],
  },
  {
    slug: "wizard-game",
    title: "Wizard Game",
    summary: "A small browser game experiment.",
    role: "Developer",
    stack: ["JavaScript"],
    category: "Experiment",
    featured: false,
    liveUrl: "https://ba2.netlify.app/",
    images: ["/images/projects/wizard-game.png"],
  },
  {
    slug: "typing-speed",
    title: "Typing Speed",
    summary: "A typing-speed test app experiment.",
    role: "Developer",
    stack: ["JavaScript"],
    category: "Experiment",
    featured: false,
    liveUrl: "https://typit.netlify.app/",
    images: ["/images/projects/typing-speed.png"],
  },
];
