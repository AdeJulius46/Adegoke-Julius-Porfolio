import { Layers } from "lucide-react";
import { skills } from "@/content/skills";

export function SkillsGrid() {
  return (
    <section className="mt-10 sm:mt-14">
      <div className="mb-6 flex items-center gap-3.5 sm:mb-8">
        <div className="bg-[var(--border-gradient-onyx)] text-primary shadow-[var(--shadow-1)] rounded-icon-box flex h-8 w-8 shrink-0 items-center justify-center sm:h-12 sm:w-12">
          <Layers size={18} className="sm:size-5" />
        </div>
        <h3 className="text-white-2 text-[length:var(--fs-2)] font-medium">
          Skills
        </h3>
      </div>

      <div className="bg-[image:var(--bg-gradient-jet)] rounded-content-card grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:gap-8 sm:p-8">
        {skills.map((group) => (
          <div key={group.group}>
            <h4 className="text-light-gray-70 text-[length:var(--fs-8)] font-medium uppercase">
              {group.group}
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-muted text-light-gray border-border rounded-full border px-3 py-1 text-[length:var(--fs-7)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
