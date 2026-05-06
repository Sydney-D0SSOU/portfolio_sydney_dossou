"use client";

import { Brain, Code, Database } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AppCopy } from "@/lib/copy";

type ExpertiseSectionProps = {
  copy: AppCopy;
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
};

export function ExpertiseSection({ copy, fadeUp }: ExpertiseSectionProps) {
  return (
    <motion.section variants={fadeUp} id="expertise">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground">{copy.sections.expertiseTitle}</h2>
        <p className="mt-2 text-muted-foreground">{copy.sections.expertiseSubtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass-panel rounded-4xl">
          <CardHeader>
            <Code size={24} className="text-primary" />
            <CardTitle>{copy.expertise.backend.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>{copy.expertise.backend.description}</p>
          </CardContent>
        </Card>
        <Card className="glass-panel rounded-4xl">
          <CardHeader>
            <Brain size={24} className="text-primary" />
            <CardTitle>{copy.expertise.frontend.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>{copy.expertise.frontend.description}</p>
          </CardContent>
        </Card>
        <Card className="glass-panel rounded-4xl">
          <CardHeader>
            <Database size={24} className="text-primary" />
            <CardTitle>{copy.expertise.data.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>{copy.expertise.data.description}</p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
