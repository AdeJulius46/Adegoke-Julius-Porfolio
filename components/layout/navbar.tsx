"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/work") return pathname === "/work" || pathname.startsWith("/projects");
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[var(--bg-gradient-jet)] border-border shadow-[var(--shadow-2)] fixed inset-x-0 bottom-0 z-20 rounded-t-xl border backdrop-blur-md sm:rounded-t-[20px] xl:absolute xl:inset-x-auto xl:top-0 xl:right-0 xl:bottom-auto xl:z-10 xl:w-max xl:rounded-none xl:rounded-tr-[20px] xl:rounded-bl-[20px] xl:px-5 xl:shadow-none">
      <ul className="flex flex-wrap items-center justify-center gap-2 px-2 sm:gap-5 xl:gap-7.5 xl:px-0">
        {site.nav.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`block px-1.5 py-5 text-[length:var(--fs-8)] transition-colors sm:text-[14px] xl:text-[15px] xl:font-medium ${
                  active
                    ? "text-vegas-gold"
                    : "text-light-gray hover:text-light-gray-70"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li className="py-2 xl:py-0">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
