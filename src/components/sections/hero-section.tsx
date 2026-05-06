"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { AppCopy } from "@/lib/copy";

type HeroSectionProps = {
  copy: AppCopy;
  isEn: boolean;
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
  stagger: { hidden: { opacity: number }; show: { opacity: number; transition: { staggerChildren: number; delayChildren: number } } };
};

export function HeroSection({ copy, isEn, fadeUp, stagger }: HeroSectionProps) {
  return (
    <motion.section id="about" variants={fadeUp} className="grid gap-10 py-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-12">
      <motion.div variants={fadeUp} className="group relative mx-auto w-full max-w-[500px] md:mx-0">
        <div className="pointer-events-none absolute -left-8 -top-8 h-36 w-28 rounded-3xl border border-[var(--border-accent)]/45" />
        <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-3xl border border-[var(--border-accent)]/40" />
        <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(circle_at_22%_18%,rgba(255,111,56,0.26),transparent_65%)] blur-3xl" />

        <div className="relative overflow-hidden rounded-[2.1rem]">
          <Image
            src="/images/profile/7.png"
            alt="Sydney Dossou portrait"
            width={1000}
            height={1250}
            className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#f8efe4]/97 via-[#f8efe4]/78 to-transparent px-8 pb-9 pt-16 dark:from-[#03070b]/95 dark:via-[#03070b]/82">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-accent)]">{isEn ? "About Me" : "A Propos"}</p>
            <p className="mt-3 font-serif text-4xl font-bold text-[#1d130b] md:text-5xl dark:text-foreground">{isEn ? "My Journey" : "Mon Parcours"}</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={stagger} className="flex flex-col justify-center">
        <motion.div variants={fadeUp} className="mb-5">
          <Badge variant="secondary" className="w-fit rounded-full border border-[var(--border-accent)] bg-[var(--accent-subtle)] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-accent)]">
            {isEn ? "About Me" : "A Propos"}
          </Badge>
        </motion.div>
        <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {isEn ? "Building Robust Systems" : "Construire des systemes robustes"}
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">{isEn ? `Hi, I'm ${copy.name}` : `Salut, moi c'est ${copy.name}`}</span>{" "}
          {copy.sections.aboutBody}
        </motion.p>
        <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {copy.sections.aboutMaster}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
