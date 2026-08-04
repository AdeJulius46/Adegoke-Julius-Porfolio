import { Briefcase } from "lucide-react";
import { experience } from "@/content/experience";

export function Timeline() {
  return (
    <section>
      <div className="mb-6 flex items-center gap-3.5 sm:mb-8">
        <div className="bg-[var(--border-gradient-onyx)] text-primary shadow-[var(--shadow-1)] rounded-icon-box flex h-8 w-8 shrink-0 items-center justify-center sm:h-12 sm:w-12">
          <Briefcase size={18} className="sm:size-5" />
        </div>
        <h3 className="text-white-2 text-[length:var(--fs-2)] font-medium">
          Experience
        </h3>
      </div>

      <ol className="ml-4 space-y-6 border-l border-jet pl-6 sm:ml-6 sm:space-y-8 sm:pl-8">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.title}`} className="relative">
            <span
              aria-hidden="true"
              className="from-accent-yellow absolute top-1.5 -left-[27px] h-2.5 w-2.5 rounded-full bg-gradient-to-r to-[hsl(35,100%,68%)] ring-4 ring-jet sm:-left-[35px]"
            />
            <h4 className="text-white-2 text-[length:var(--fs-6)] leading-snug font-medium">
              {entry.title}
            </h4>
            <p className="text-vegas-gold mt-1 text-[length:var(--fs-7)]">
              {entry.company} | {entry.dateRange} | {entry.location}
            </p>
            <ul className="text-light-gray mt-2.5 space-y-1.5 text-[length:var(--fs-6)] leading-relaxed font-light">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true" className="text-light-gray-70">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
