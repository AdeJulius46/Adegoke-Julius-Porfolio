export interface ExperienceEntry {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Frontend Developer",
    company: "Odio Digital",
    dateRange: "Apr 2025 – Sep 2025",
    location: "Edmonton, Canada",
    bullets: [
      "Managed cross-browser compatibility and responsive design across the site's key pages, resolving layout and rendering issues reported by users.",
      "Regularly updated event listings and promotional content to keep the site's marketing pages current.",
    ],
  },
  {
    title: "WordPress Developer",
    company: "TheMoneyMediaBlog",
    dateRange: "Oct 2024 – 2025",
    location: "Canada",
    bullets: [
      "Organized post/article layouts — preview images, headline, date, summary — for quick scanning.",
      "Built responsive templates so users on desktop, mobile, or tablet can read comfortably.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "OnePac Plus",
    dateRange: "Jul 2024 – Mar 2025",
    location: "Mansfield, TX, United States",
    bullets: [
      "Developed custom Shopify frontend interfaces and integrated RESTful APIs for real-time product updates.",
      "Integrated third-party apps and payment gateways to streamline order and fulfillment operations.",
    ],
  },
];
