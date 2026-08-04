"use client";

import { motion } from "framer-motion";
import { Code2, Database, Gauge, Server } from "lucide-react";
import { site } from "@/content/site";
import type { WhatIDoItem } from "@/content/site";

const icons: Record<WhatIDoItem["icon"], typeof Code2> = {
  code: Code2,
  server: Server,
  database: Database,
  gauge: Gauge,
};

export function WhatIDo() {
  return (
    <section className="mt-10 sm:mt-14">
      <h3 className="text-white-2 mb-5 text-[length:var(--fs-2)] font-medium sm:mb-6">
        What I Do
      </h3>

      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {site.whatIDo.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="bg-[image:var(--bg-gradient-jet)] shadow-[var(--shadow-2)] flex flex-col items-center gap-3 rounded-content-card p-5 text-center sm:flex-row sm:items-start sm:gap-4.5 sm:p-7.5 sm:text-left"
            >
              <div className="bg-[var(--border-gradient-onyx)] text-primary shadow-[var(--shadow-1)] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <Icon size={20} />
              </div>
              <div>
                <h4 className="text-white-2 mb-1.5 text-[length:var(--fs-4)] font-medium">
                  {item.title}
                </h4>
                <p className="text-light-gray text-[length:var(--fs-6)] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
