"use client";

import {
  BracketsCurly,
  ChartLine,
  Cloud,
  Code,
  GitBranch,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import type { AppCopy } from "@/lib/copy";

type StackSectionProps = {
  copy: AppCopy;
  isEn: boolean;
  skillCategories: { title: string; skills: string[] }[];
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
};

export function StackSection({ copy, skillCategories, fadeUp, isEn }: StackSectionProps) {
  const getCategorySkills = (matcher: (title: string) => boolean) =>
    skillCategories.find((category) => matcher(category.title))?.skills ?? [];

  const frontendSkills = getCategorySkills((title) => title.toLowerCase().includes("frontend"));
  const backendSkills = getCategorySkills((title) => title.toLowerCase().includes("backend"));
  const dataSkills = [
    ...getCategorySkills((title) => title.toLowerCase().includes("data")),
    ...getCategorySkills((title) => title.toLowerCase().includes("database") || title.toLowerCase().includes("bases de donnees")),
  ];
  const devopsSkills = getCategorySkills((title) => title.toLowerCase().includes("devops"));
  const apiSkills = backendSkills.filter((skill) => /api|node|express|fastapi|nodemailer/i.test(skill));

  return (
    <motion.section variants={fadeUp} id="stack" className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-accent)]">Technical Stack</p>
        <h2 className="text-4xl font-bold text-foreground md:text-6xl">{copy.sections.stackTitle}</h2>
        <p className="max-w-3xl text-muted-foreground">
          {isEn
            ? "A skill map that reflects how I deliver end-to-end products: frontend experience, backend logic, API bridges, data intelligence, and production delivery."
            : "Une skill map qui montre ma logique de livraison fullstack: experience frontend, logique backend, pont API, intelligence data et mise en production."}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--glass-border)]/80 bg-card/20 px-4 py-8 md:px-8 md:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,111,56,0.14),transparent_48%),radial-gradient(circle_at_50%_100%,rgba(255,111,56,0.16),transparent_42%)]" />

        <svg viewBox="0 0 1000 760" className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" aria-hidden>
          <defs>
            <linearGradient id="woodCore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(139,74,44,0.9)" />
              <stop offset="45%" stopColor="rgba(110,55,34,0.95)" />
              <stop offset="100%" stopColor="rgba(84,41,27,0.95)" />
            </linearGradient>
            <linearGradient id="woodEdge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(252,161,115,0.58)" />
              <stop offset="100%" stopColor="rgba(255,96,45,0.26)" />
            </linearGradient>
            <filter id="barkNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="noise" />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 0.14" />
              </feComponentTransfer>
            </filter>
          </defs>

          <path d="M500 704 C516 620 516 512 500 420" stroke="url(#woodCore)" strokeWidth="34" strokeLinecap="round" fill="none" />
          <path d="M500 430 C454 364 381 315 274 250" stroke="url(#woodCore)" strokeWidth="16" strokeLinecap="round" fill="none" />
          <path d="M500 430 C546 364 619 315 726 250" stroke="url(#woodCore)" strokeWidth="16" strokeLinecap="round" fill="none" />
          <path d="M500 456 C438 410 364 400 298 386" stroke="url(#woodCore)" strokeWidth="11" strokeLinecap="round" fill="none" />
          <path d="M500 456 C562 410 636 400 702 386" stroke="url(#woodCore)" strokeWidth="11" strokeLinecap="round" fill="none" />
          <path d="M500 482 C500 420 500 340 500 275" stroke="url(#woodCore)" strokeWidth="13" strokeLinecap="round" fill="none" />

          <path d="M500 704 C463 742 433 752 404 758" stroke="url(#woodCore)" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M500 704 C536 742 566 752 595 758" stroke="url(#woodCore)" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M500 704 C490 742 478 754 466 760" stroke="url(#woodCore)" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M500 704 C510 742 522 754 534 760" stroke="url(#woodCore)" strokeWidth="4" strokeLinecap="round" fill="none" />

          <path d="M500 704 C516 620 516 512 500 420" stroke="url(#woodEdge)" strokeWidth="36" strokeLinecap="round" fill="none" />
          <path d="M500 430 C454 364 381 315 274 250" stroke="url(#woodEdge)" strokeWidth="18" strokeLinecap="round" fill="none" />
          <path d="M500 430 C546 364 619 315 726 250" stroke="url(#woodEdge)" strokeWidth="18" strokeLinecap="round" fill="none" />

          <g filter="url(#barkNoise)">
            <rect x="479" y="418" width="42" height="292" fill="#000" opacity="0.65" rx="18" />
            <rect x="492" y="434" width="4" height="248" fill="#fff" opacity="0.45" rx="2" />
            <rect x="505" y="446" width="3" height="220" fill="#fff" opacity="0.35" rx="2" />
          </g>

          <g fill="rgba(142,205,88,0.78)" stroke="rgba(52,88,32,0.45)" strokeWidth="1.2">
            <ellipse cx="272" cy="248" rx="8" ry="5" transform="rotate(-18 272 248)" />
            <ellipse cx="298" cy="386" rx="7" ry="4.5" transform="rotate(24 298 386)" />
            <ellipse cx="726" cy="248" rx="8" ry="5" transform="rotate(18 726 248)" />
            <ellipse cx="702" cy="386" rx="7" ry="4.5" transform="rotate(-24 702 386)" />
            <ellipse cx="500" cy="274" rx="7.5" ry="4.5" transform="rotate(2 500 274)" />
          </g>
        </svg>

        <div className="relative z-10 hidden min-h-[620px] md:block">
          <TreeNode title={isEn ? "Frontend" : "Frontend"} icon={BracketsCurly} skills={frontendSkills.slice(0, 6)} className="left-[6%] top-[10%] w-[31%]" />
          <TreeNode title={isEn ? "Backend" : "Backend"} icon={Code} skills={backendSkills.slice(0, 6)} className="right-[6%] top-[10%] w-[31%]" />
          <TreeNode title="APIs" icon={GitBranch} skills={apiSkills.slice(0, 5)} className="left-[9%] top-[39%] w-[28%]" compact />
          <TreeNode title="Data" icon={ChartLine} skills={dataSkills.slice(0, 8)} className="right-[9%] top-[39%] w-[34%]" />
          <TreeNode title="DevOps" icon={Cloud} skills={devopsSkills.slice(0, 6)} className="left-1/2 top-[68%] w-[40%] -translate-x-1/2" />
        </div>

        <div className="relative z-10 grid gap-4 md:hidden">
          <SkillNode title={isEn ? "Frontend" : "Frontend"} icon={BracketsCurly} skills={frontendSkills} />
          <SkillNode title={isEn ? "Backend" : "Backend"} icon={Code} skills={backendSkills} />
          <SkillNode title="APIs" icon={GitBranch} skills={apiSkills} compact />
          <SkillNode title="Data" icon={ChartLine} skills={dataSkills} />
          <SkillNode title="DevOps" icon={Cloud} skills={devopsSkills} />
        </div>
      </div>
    </motion.section>
  );
}

function TreeNode({
  title,
  icon: Icon,
  skills,
  className,
  compact = false,
}: {
  title: string;
  icon: typeof BracketsCurly;
  skills: string[];
  className: string;
  compact?: boolean;
}) {
  return (
    <div className={`absolute rounded-2xl border border-[var(--glass-border)]/75 bg-card/35 p-4 shadow-[0_18px_38px_-28px_var(--shadow-strong)] backdrop-blur-sm ${className}`}>
      <div className="mb-3 flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-subtle)] text-[var(--text-accent)]">
          <Icon size={16} weight="duotone" />
        </span>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <div className={`flex flex-wrap gap-2 ${compact ? "text-xs" : "text-[0.8rem]"}`}>
        {skills.map((skill) => (
          <span key={`${title}-${skill}`} className="rounded-full border border-[var(--glass-border)]/70 bg-background/35 px-2.5 py-1 font-medium text-foreground/90">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillNode({
  title,
  icon: Icon,
  skills,
  centered = false,
  compact = false,
}: {
  title: string;
  icon: typeof BracketsCurly;
  skills: string[];
  centered?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={`glass-panel rounded-3xl border border-[var(--glass-border)]/80 p-5 ${centered ? "mx-auto w-full md:max-w-4xl" : ""}`}>
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--text-accent)]">
          <Icon size={18} weight="duotone" />
        </span>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      </div>
      <div className={`grid gap-2.5 ${compact ? "sm:grid-cols-3" : "sm:grid-cols-2 md:grid-cols-3"}`}>
        {skills.map((skill) => (
          <div key={`${title}-${skill}`} className="rounded-xl border border-[var(--glass-border)]/70 bg-card/35 px-3 py-2 text-sm font-medium text-foreground">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
