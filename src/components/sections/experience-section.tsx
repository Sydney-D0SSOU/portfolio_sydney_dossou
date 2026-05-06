"use client";

import { motion } from "framer-motion";

type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  details: string;
  website?: string;
};

type ExperienceSectionProps = {
  isEn: boolean;
  experiences: ExperienceItem[];
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
};

export function ExperienceSection({ isEn, experiences, fadeUp }: ExperienceSectionProps) {
  const getFaviconSrc = (website?: string) => {
    if (!website) return null;
    try {
      const url = new URL(website);
      return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`;
    } catch {
      return null;
    }
  };

  return (
    <motion.section variants={fadeUp} id="experience">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-accent)]">{isEn ? "Experience" : "Experience"}</p>
        <h2 className="mt-2 text-4xl font-bold text-foreground md:text-6xl">{isEn ? "Professional Journey" : "Parcours Professionnel"}</h2>
      </div>
      <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-[var(--border-accent)]">
        {experiences.map((item, idx) => (
          <div key={item.period} className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className={idx % 2 === 0 ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"}>
              {getFaviconSrc(item.website) && (
                <div className={`mb-3 flex ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--glass-border)]/80 bg-card/45 p-2 transition-all hover:border-[var(--border-accent)]/70 hover:shadow-[0_16px_30px_-20px_var(--glow)]"
                    aria-label={`${isEn ? "Visit" : "Visiter"} ${item.org}`}
                  >
                    <img src={getFaviconSrc(item.website) ?? ""} alt={`${item.org} logo`} className="h-6 w-6 rounded-sm object-contain" loading="lazy" />
                  </a>
                </div>
              )}
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-accent)]">{item.period}</p>
              <h3 className="mt-1 text-3xl font-bold text-foreground">{item.role}</h3>
              {item.website ? (
                <a href={item.website} target="_blank" rel="noreferrer" className="text-lg text-muted-foreground underline-offset-4 hover:text-[var(--text-accent)] hover:underline">
                  {item.org}
                </a>
              ) : (
                <p className="text-lg text-muted-foreground">{item.org}</p>
              )}
            </div>
            <div className={idx % 2 === 0 ? "md:pl-10" : "md:order-1 md:pr-10"}>
              <div className="glass-panel rounded-4xl p-6">
                <p className="text-lg leading-relaxed text-foreground/90">{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
