import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1440px] px-3 pt-4 pb-28 sm:px-4 sm:pt-8 lg:pb-16 xl:flex xl:items-start xl:gap-6 xl:px-6">
      <Sidebar />
      <div className="min-w-0 xl:relative xl:flex-1">
        <Navbar />
        <main className="bg-card border-border rounded-sidebar shadow-[var(--shadow-1)] w-full border p-4 sm:mx-auto sm:w-[520px] sm:p-8 md:w-[700px] lg:w-[1000px] xl:w-full xl:pt-20 xl:shadow-[var(--shadow-5)]">
          {children}
        </main>
        <div className="sm:mx-auto sm:w-[520px] md:w-[700px] lg:w-[1000px] xl:w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
