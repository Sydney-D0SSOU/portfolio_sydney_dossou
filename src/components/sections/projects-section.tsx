"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AppCopy } from "@/lib/copy";

type ProjectItem = {
  name: string;
  desc: string;
  stack: string[];
  impact: string;
};

type ProjectsSectionProps = {
  copy: AppCopy;
  projects: ProjectItem[];
  isEn: boolean;
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
};

export function ProjectsSection({ copy, projects, isEn, fadeUp }: ProjectsSectionProps) {
  return (
    <motion.section variants={fadeUp} id="projects">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground">{copy.sections.projectTitle}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <Card key={project.name} className={`glass-panel rounded-4xl ${idx === 0 ? "md:col-span-2" : ""}`}>
            <CardHeader>
              <CardTitle className="text-lg">{project.name}</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{isEn ? "Stack" : "Stack"}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full border border-[var(--glass-border)] bg-card/45 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="border-t border-border pt-3">
                <p className="text-sm font-semibold text-[var(--text-accent)]">{project.impact}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
