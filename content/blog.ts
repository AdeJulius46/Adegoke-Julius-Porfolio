export interface BlogPost {
  title: string;
  url: string;
  category: string;
  date: string;
  excerpt: string;
  bannerImage: string;
}

/**
 * Only real, working Medium posts — the original site's lorem-ipsum
 * placeholder entries (blog-4/5/6, all `#` links) are dropped entirely.
 */
export const blogPosts: BlogPost[] = [
  {
    title: "Everything I Learned as a Beginner in JavaScript",
    url: "https://medium.com/ingenii-pod/everything-i-lernt-as-a-beginner-in-javascript-17895c03627",
    category: "JavaScript",
    date: "July 29, 2022",
    excerpt:
      "It can be difficult to study JavaScript on your own. I had trouble deciding which course to take and how long it would take me to get up to speed.",
    bannerImage:
      "https://miro.medium.com/max/1400/1*bxEkHw1xewxOFjmGunb-Cw.webp",
  },
  {
    title: "A Summary of My Experience at Ingenii Fellowship",
    url: "https://medium.com/@adegokejulius46/a-summary-of-my-experience-at-ingenni-fellowship-855e75481c79",
    category: "Ingenii",
    date: "October 23, 2022",
    excerpt:
      "I was overjoyed to learn that I had been accepted into the fellowship and would be called the following day for a 10-minute interview, after applying to many fellowships without hearing back.",
    bannerImage:
      "https://miro.medium.com/max/720/1*huhh1130EYvULSTsWEWVOQ.webp",
  },
  {
    title: "Don't Just Set Goals. Build Systems",
    url: "https://medium.com/swlh/dont-just-set-goals-build-systems-8158ac541df",
    category: "Goals",
    date: "December 21, 2022",
    excerpt:
      "Insanity is doing the same thing over and over and expecting different results.",
    bannerImage: "https://miro.medium.com/max/720/0*Nz897vaKH2yJhSQJ",
  },
];
