"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { AppCopy } from "@/lib/copy";

type ContactSectionProps = {
  copy: AppCopy;
  isEn: boolean;
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
};

export function ContactSection({ copy, isEn, fadeUp }: ContactSectionProps) {
  return (
    <motion.section variants={fadeUp} id="contact" className="pb-8">
      <h2 className="text-3xl font-bold text-foreground">{copy.sections.contactTitle}</h2>
      <p className="mt-3 text-muted-foreground">{copy.sections.contactBody}</p>
      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <Button className="rounded-full bg-[var(--accent-strong)] text-white shadow-[0_18px_34px_-20px_var(--glow)] hover:-translate-y-px hover:bg-[var(--accent-hover)]">
          {isEn ? "Email Me" : "M'envoyer un mail"}
        </Button>
        <a
          href="mailto:sydneydossou400@gmail.com"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card/30 px-6 py-2 text-sm font-medium text-foreground transition-colors hover:border-[var(--border-accent)] hover:bg-card/60 hover:text-[var(--text-accent)]"
        >
          sydneydossou400@gmail.com
        </a>
      </div>
    </motion.section>
  );
}
