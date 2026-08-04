import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-border mt-8 border-t pt-6 pb-4 sm:mt-16 sm:pt-8">
      <p className="text-light-gray-70 text-[length:var(--fs-8)]">
        © {new Date().getFullYear()} {site.name}. Built with Next.js.
      </p>
    </footer>
  );
}
