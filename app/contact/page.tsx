import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { SectionTitle } from "@/components/layout/section-title";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/content/site";

const title = "Contact — Adegoke Julius";
const description =
  "Get in touch with Adegoke Julius, a Fullstack Developer based in Lagos, Nigeria, to discuss your next web application.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

export default function ContactPage() {
  return (
    <>
      <SectionTitle>Contact</SectionTitle>
      <p className="text-light-gray mt-4 mb-6 text-[length:var(--fs-6)] leading-relaxed font-light sm:mb-8">
        Have a project in mind, or just want to talk shop? Send a message
        below, or reach out directly.
      </p>

      <div className="mb-8 flex flex-wrap gap-4 sm:mb-10 sm:gap-6">
        <a
          href={`mailto:${site.email}`}
          className="border-border text-light-gray hover:text-white-2 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[length:var(--fs-6)] transition-colors"
        >
          <Mail size={16} className="text-primary" />
          {site.email}
        </a>
        <a
          href={site.phoneHref}
          className="border-border text-light-gray hover:text-white-2 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[length:var(--fs-6)] transition-colors"
        >
          <Phone size={16} className="text-primary" />
          {site.phoneDisplay}
        </a>
      </div>

      <ContactForm />
    </>
  );
}
