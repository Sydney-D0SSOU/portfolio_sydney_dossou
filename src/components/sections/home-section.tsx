"use client";

import {
  BugBeetle,
  BracketsCurly,
  Cloud,
  Code,
  Cpu,
  Database,
  DeviceMobileCamera,
  FigmaLogo,
  GearSix,
  GitBranch,
  GithubLogo,
  Keyboard,
  Mouse,
  Package,
  RocketLaunch,
  TerminalWindow,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { AppCopy } from "@/lib/copy";

type HomeSectionProps = {
  copy: AppCopy;
  isEn: boolean;
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
  stagger: { hidden: { opacity: number }; show: { opacity: number; transition: { staggerChildren: number; delayChildren: number } } };
};

export function HomeSection({ copy, isEn, fadeUp, stagger }: HomeSectionProps) {
  const orbitItems = [
    { Icon: Database, x: 0, y: -170 },
    { Icon: Code, x: 100, y: -140 },
    { Icon: Cloud, x: 156, y: -55 },
    { Icon: GitBranch, x: 160, y: 52 },
    { Icon: GithubLogo, x: 102, y: 138 },
    { Icon: Package, x: 0, y: 170 },
    { Icon: FigmaLogo, x: -101, y: 138 },
    { Icon: BracketsCurly, x: -160, y: 52 },
    { Icon: TerminalWindow, x: -157, y: -54 },
    { Icon: GearSix, x: -100, y: -140 },
  ] as const;
  const sceneIcons = [
    { Icon: Mouse, left: "8%", top: "16%" },
    { Icon: Keyboard, left: "18%", top: "76%" },
    { Icon: Cpu, left: "39%", top: "12%" },
    { Icon: DeviceMobileCamera, left: "60%", top: "14%" },
    { Icon: RocketLaunch, left: "80%", top: "24%" },
    { Icon: BugBeetle, left: "87%", top: "69%" },
    { Icon: Cloud, left: "64%", top: "82%" },
  ];
  const initials = copy.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <motion.section
      id="home"
      variants={fadeUp}
      className="relative left-1/2 -mt-12 mb-[-3.5rem] w-screen -translate-x-1/2 grid min-h-screen gap-10 overflow-hidden px-6 pb-20 pt-24 md:-mt-14 md:mb-[-3.5rem] md:grid-cols-[1.05fr_0.95fr] md:px-14 md:pb-24 md:pt-28 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(255,129,72,0.26),transparent_34%),radial-gradient(circle_at_88%_24%,rgba(255,165,112,0.18),transparent_31%),radial-gradient(circle_at_82%_80%,rgba(255,120,64,0.15),transparent_36%),linear-gradient(125deg,rgba(255,255,255,0.92),rgba(254,248,239,0.86)_48%,rgba(251,239,228,0.82))] dark:bg-[radial-gradient(circle_at_12%_14%,rgba(255,119,56,0.34),transparent_33%),radial-gradient(circle_at_88%_24%,rgba(255,146,88,0.21),transparent_30%),radial-gradient(circle_at_82%_80%,rgba(255,94,43,0.2),transparent_34%),linear-gradient(120deg,rgba(252,248,241,0.09),transparent_36%),linear-gradient(180deg,rgba(8,8,10,0.95),rgba(5,5,7,0.99))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(150deg,transparent_30%,rgba(255,99,48,0.1)_43%,transparent_55%),linear-gradient(25deg,transparent_40%,rgba(255,255,255,0.44)_50%,transparent_60%)] dark:mix-blend-screen dark:bg-[linear-gradient(150deg,transparent_30%,rgba(255,99,48,0.11)_43%,transparent_55%),linear-gradient(25deg,transparent_40%,rgba(245,236,222,0.09)_50%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-65 [background:radial-gradient(120px_50px_at_18%_24%,rgba(255,122,64,0.14),transparent_70%),radial-gradient(140px_55px_at_76%_72%,rgba(255,140,76,0.12),transparent_70%),radial-gradient(130px_48px_at_40%_80%,rgba(130,92,66,0.08),transparent_70%)] dark:opacity-70 dark:[background:radial-gradient(120px_50px_at_18%_24%,rgba(255,122,64,0.2),transparent_70%),radial-gradient(140px_55px_at_76%_72%,rgba(255,140,76,0.16),transparent_70%),radial-gradient(130px_48px_at_40%_80%,rgba(245,236,222,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-15 [background:radial-gradient(circle_at_center,rgba(51,35,22,0.24)_1px,transparent_1px)] [background-size:12px_12px] dark:opacity-35 dark:[background:radial-gradient(circle_at_center,rgba(255,255,255,0.22)_1px,transparent_1px)]" />

      {sceneIcons.map(({ Icon, left, top }, index) => (
        <motion.div
          key={`scene-${Icon.displayName ?? index}`}
          className="pointer-events-none absolute z-10 hidden md:block"
          style={{ left, top }}
          animate={{
            y: [-8, 10, -8],
            rotate: [-5, 5, -5],
            opacity: [0.4, 0.78, 0.4],
          }}
          transition={{
            duration: 6 + index * 0.4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-accent)]/35 bg-white/60 text-[var(--text-accent)] shadow-[0_12px_28px_-20px_var(--glow)] backdrop-blur-sm dark:border-[var(--border-accent)]/40 dark:bg-black/35">
            <Icon size={16} weight="duotone" />
          </div>
        </motion.div>
      ))}

      <motion.div variants={stagger} className="relative z-20 flex flex-col justify-center">
        <motion.p variants={fadeUp} className="w-fit border-b border-[var(--border-accent)]/45 pb-3 text-2xl text-foreground/90">
          {isEn ? "Hello, I'm" : "Bonjour, je suis"}
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          {copy.name}
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          {copy.intro}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
          <Button className="rounded-full bg-[var(--accent-strong)] px-6 text-white shadow-[0_18px_34px_-20px_var(--glow)] hover:-translate-y-px hover:bg-[var(--accent-hover)]">
            {copy.ctaPrimary}
          </Button>
          <Button variant="outline" className="glass-panel rounded-full border-[var(--glass-border)] bg-card/40 text-foreground hover:border-[var(--border-accent)] hover:text-[var(--text-accent)]">
            {copy.ctaSecondary}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} className="relative z-20 mx-auto flex w-full max-w-xl items-center justify-center overflow-hidden p-4 md:p-6 [perspective:1400px]">
        <div className="pointer-events-none absolute -inset-4 bg-[radial-gradient(circle_at_center,rgba(255,97,54,0.14),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,97,54,0.22),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-4 rounded-full border border-[var(--border-accent)]/20" />

        <motion.div
          className="relative flex h-[360px] w-[360px] items-center justify-center md:h-[420px] md:w-[420px]"
          animate={{ rotateX: [8, 14, 8], rotateY: [-8, 6, -8] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full border border-[var(--border-accent)]/30"
            animate={{ rotate: 360 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 26 }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-7 rounded-full border border-[var(--border-accent)]/25"
            animate={{ rotate: -360 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 19 }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-14 rounded-full border border-[var(--border-accent)]/20"
            animate={{ rotate: 360 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 34 }}
          />

          <div className="glass-panel relative z-10 flex h-[230px] w-[230px] items-center justify-center rounded-full border border-[var(--border-accent)]/55 bg-card/70 shadow-[0_18px_44px_-25px_var(--glow)] md:h-[260px] md:w-[260px]">
            <span className="text-5xl font-bold text-[var(--text-accent)] md:text-6xl">{initials || "SD"}</span>
          </div>

          {orbitItems.map(({ Icon, x, y }, index) => {
            return (
              <motion.div
                key={Icon.displayName ?? `home-orbit-${index}`}
                className="absolute left-1/2 top-1/2 z-20"
                style={{ x, y }}
                animate={{
                  y: [y - 6, y + 6, y - 6],
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 3.8 + (index % 3) * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.11,
                }}
              >
                <div className="glass-panel flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-accent)]/55 bg-card/65 text-[var(--text-accent)] shadow-[0_12px_24px_-18px_var(--glow)]">
                  <Icon size={16} weight="duotone" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
