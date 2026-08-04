import { SectionTitle } from "@/components/layout/section-title";
import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <>
      <SectionTitle>Contact</SectionTitle>
      <p className="text-light-gray mt-4 text-[length:var(--fs-6)] font-light">
        The contact form is coming in a later build phase. In the
        meantime, reach out directly at{" "}
        <a href={`mailto:${site.email}`} className="text-primary hover:underline">
          {site.email}
        </a>
        .
      </p>
    </>
  );
}
