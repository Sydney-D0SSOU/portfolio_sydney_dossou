"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AppCopy } from "@/lib/copy";

type AboutSectionProps = {
  copy: AppCopy;
  isEn: boolean;
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
};

export function AboutSection({ copy, isEn, fadeUp }: AboutSectionProps) {
  return (
    <motion.section variants={fadeUp} id="about" className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
      <Card className="glass-panel overflow-hidden rounded-4xl">
        <CardContent className="p-0">
          <Image src="/images/profile/3.png" alt="About portrait" width={900} height={1400} className="h-[420px] w-full object-cover object-top" />
        </CardContent>
      </Card>
      <Card className="glass-panel rounded-4xl">
        <CardHeader>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-accent)]">{isEn ? "About me" : "A propos"}</p>
          <CardTitle className="text-4xl md:text-6xl">{isEn ? "Building Robust Systems" : "Construire des systemes robustes"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>{copy.sections.aboutBody}</p>
          <p>{copy.sections.aboutMaster}</p>
        </CardContent>
      </Card>
    </motion.section>
  );
}
