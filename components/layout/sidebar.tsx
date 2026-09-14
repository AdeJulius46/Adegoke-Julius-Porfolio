"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/social-icons";

const socialIcon = {
  twitter: XIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
} as const;

export function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`bg-card border-border rounded-sidebar shadow-[var(--shadow-1)] relative mb-4 overflow-hidden border p-4 transition-[max-height] duration-500 ease-in-out sm:mb-8 sm:p-8 xl:sticky xl:top-6 xl:mb-0 xl:w-[300px] xl:shrink-0 xl:overflow-y-auto ${
        expanded ? "max-h-[420px] sm:max-h-[600px]" : "max-h-28 sm:max-h-44"
      } xl:max-h-[80vh]`}
    >
      <div className="relative flex items-center gap-4 sm:gap-6 xl:flex-col">
        <figure className="bg-[var(--bg-gradient-onyx)] shrink-0 overflow-hidden rounded-[20px] sm:rounded-[30px]">
          <Image
            src={site.avatarImage}
            alt={site.name}
            width={150}
            height={150}
            className="h-20 w-20 object-cover sm:h-[120px] sm:w-[120px] xl:h-[150px] xl:w-[150px]"
            priority
          />
        </figure>

        <div className="min-w-0">
          <h1 className="text-white-2 text-[length:var(--fs-3)] font-medium tracking-tight xl:text-center xl:whitespace-nowrap">
            {site.name}
          </h1>
          <p className="text-white-1 bg-muted mt-2 w-max rounded-lg px-3 py-1 text-[length:var(--fs-8)] font-light sm:mt-3.5 sm:px-4.5 sm:py-1.5 xl:mx-auto">
            {site.title}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? "Hide contacts" : "Show contacts"}
          className="bg-[var(--border-gradient-onyx)] text-accent-yellow shadow-[var(--shadow-2)] absolute -top-4 -right-4 flex items-center gap-1 rounded-bl-[15px] rounded-tr-[15px] px-2.5 py-2 text-[13px] transition-colors hover:bg-[var(--bg-gradient-yellow-1)] sm:-top-7.5 sm:-right-7.5 sm:px-4 sm:py-2.5 xl:hidden"
        >
          <span aria-hidden="true" className="hidden text-[length:var(--fs-8)] sm:inline">
            {expanded ? "Hide Contacts" : "Show Contacts"}
          </span>
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform sm:hidden ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div
        className={`transition-opacity duration-500 ${expanded ? "opacity-100" : "opacity-0"} xl:opacity-100`}
      >
        <div className="bg-border my-4 h-px sm:my-8" />

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-1">
          <li className="flex items-center gap-4">
            <div className="bg-[var(--border-gradient-onyx)] shadow-[var(--shadow-1)] text-primary rounded-icon-box flex h-[30px] w-[30px] shrink-0 items-center justify-center sm:h-12 sm:w-12">
              <Mail size={16} className="sm:size-[18px]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-light-gray-70 text-[length:var(--fs-8)] uppercase">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-white-2 block truncate text-[length:var(--fs-7)] hover:underline"
              >
                {site.email}
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="bg-[var(--border-gradient-onyx)] shadow-[var(--shadow-1)] text-primary rounded-icon-box flex h-[30px] w-[30px] shrink-0 items-center justify-center sm:h-12 sm:w-12">
              <MapPin size={16} className="sm:size-[18px]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-light-gray-70 text-[length:var(--fs-8)] uppercase">
                Location
              </p>
              <address className="text-white-2 truncate text-[length:var(--fs-7)] not-italic">
                {site.location}
              </address>
            </div>
          </li>
        </ul>

        <div className="bg-border my-4 opacity-100 sm:my-8 xl:my-4 xl:opacity-0" />

        <ul className="flex items-center gap-4 pl-1 pb-1 xl:justify-center">
          {site.socials.map((social) => {
            const Icon = socialIcon[social.icon];
            if (!Icon) return null;
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-light-gray-70 hover:text-light-gray block"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
