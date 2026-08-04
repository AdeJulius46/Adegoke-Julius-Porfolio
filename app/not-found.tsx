import Link from "next/link";
import { SectionTitle } from "@/components/layout/section-title";

export default function NotFound() {
  return (
    <>
      <SectionTitle>Page not found</SectionTitle>
      <p className="text-light-gray mt-4 text-[length:var(--fs-6)] leading-relaxed font-light">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="text-primary mt-6 inline-block text-[length:var(--fs-6)] hover:underline"
      >
        Back to home
      </Link>
    </>
  );
}
