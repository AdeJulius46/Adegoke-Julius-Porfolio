import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/layout/section-title";
import { blogPosts } from "@/content/blog";

const title = "Blog — Adegoke Julius";
const description =
  "Writing by Adegoke Julius on JavaScript, fellowships, and building systems — published on Medium.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog" },
  twitter: { title, description },
};

export default function BlogPage() {
  return (
    <>
      <SectionTitle>Blog</SectionTitle>
      <p className="text-light-gray mt-4 mb-10 text-[length:var(--fs-6)] leading-relaxed font-light sm:mb-14">
        A few things I&apos;ve written, published on Medium.
      </p>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <li key={post.url}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border-border rounded-content-card shadow-[var(--shadow-2)] group flex h-full flex-col overflow-hidden border"
            >
              <div className="bg-muted relative aspect-video overflow-hidden">
                <Image
                  src={post.bannerImage}
                  alt={`Cover image for "${post.title}"`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                <div className="text-light-gray-70 flex items-center gap-2 text-[length:var(--fs-8)] uppercase">
                  <span>{post.category}</span>
                  <span aria-hidden="true">•</span>
                  <time>{post.date}</time>
                </div>
                <h3 className="text-white-2 group-hover:text-vegas-gold text-[length:var(--fs-5)] leading-snug font-medium transition-colors">
                  {post.title}
                </h3>
                <p className="text-light-gray text-[length:var(--fs-6)] leading-relaxed font-light">
                  {post.excerpt}
                </p>
                <span className="text-vegas-gold mt-auto inline-flex items-center gap-1 pt-2 text-[length:var(--fs-7)]">
                  Read on Medium
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
