"use client";

import { motion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";

type ToolItem = { name: string; icon: Icon };

type DailyToolsSectionProps = {
  isEn: boolean;
  dailyTools: ToolItem[];
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
  stagger: { hidden: { opacity: number }; show: { opacity: number; transition: { staggerChildren: number; delayChildren: number } } };
};

export function DailyToolsSection({ isEn, dailyTools, fadeUp, stagger }: DailyToolsSectionProps) {
  return (
    <>
      <motion.section variants={fadeUp} className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.13em] text-[var(--text-accent)]">{isEn ? "Daily Stack" : "Stack du quotidien"}</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">{isEn ? "Tools I use to ship clean systems" : "Les outils que j'utilise pour livrer proprement"}</h2>
        </div>
      </motion.section>

      <motion.section variants={stagger} className="grid gap-3 md:grid-cols-3">
        {dailyTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <motion.div key={tool.name} variants={fadeUp} className="glass-panel flex items-center gap-3 rounded-3xl px-4 py-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--text-accent)]">
                <Icon size={18} weight="duotone" />
              </div>
              <p className="text-sm font-semibold text-foreground">{tool.name}</p>
            </motion.div>
          );
        })}
      </motion.section>
    </>
  );
}
