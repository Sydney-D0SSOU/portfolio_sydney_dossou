"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/locale-provider";
import { useTheme } from "@/components/providers/theme-provider";
import { copyByLocale } from "@/lib/copy";

export function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const { setTheme, resolvedTheme } = useTheme();
  const copy = copyByLocale[locale];
  const isDark = resolvedTheme !== "light";
  const [activeSection, setActiveSection] = useState("home");
  const navItems = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: copy.nav.about },
      { href: "#stack", label: copy.nav.stack },
      { href: "#expertise", label: copy.nav.expertise },
      { href: "#experience", label: copy.nav.experience },
      { href: "#projects", label: copy.nav.projects },
      { href: "#contact", label: copy.nav.contact },
    ],
    [copy.nav.about, copy.nav.stack, copy.nav.expertise, copy.nav.experience, copy.nav.projects, copy.nav.contact],
  );

  const inactiveLinkMix = (index: number) => {
    if (index === 0) return undefined;
    const maxIndex = navItems.length - 1;
    const ratio = maxIndex > 0 ? index / maxIndex : 0;
    const mixPercent = Math.round(ratio * 44);
    return { "--nav-link-mix": `${mixPercent}%` } as CSSProperties;
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-22% 0px -42% 0px",
        threshold: [0.12, 0.25, 0.4, 0.6, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--glass-border)]/60 bg-[var(--nav-glass)]/82 backdrop-blur-3xl">
      <div className="flex w-full items-center gap-4 px-6 py-3 md:px-10 lg:px-14">
        <p className="rounded-2xl border border-[var(--glass-border)] bg-card/45 px-3 py-2 text-sm font-semibold tracking-[0.16em] text-foreground shadow-[0_10px_30px_-18px_var(--shadow-strong)]">
          &lt;sydney/&gt;
        </p>

        <nav className="nav-pill ml-auto mr-2 hidden items-center gap-0.5 rounded-4xl px-1.5 py-1 lg:mr-3 xl:mr-4 md:flex">
          {navItems.map((item, index) => (
            <div key={item.href} className="relative">
              <a
                href={item.href}
                style={inactiveLinkMix(index)}
                onClick={(event) => {
                  event.preventDefault();
                  const section = document.querySelector(item.href);
                  if (section instanceof HTMLElement) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                    setActiveSection(item.href.slice(1));
                  }
                }}
                className={`relative z-10 rounded-full px-4 py-2 text-sm transition-colors ${activeSection === item.href.slice(1) ? "font-semibold text-foreground" : "nav-pill-link font-medium"}`}
              >
                {item.label}
              </a>
              {activeSection === item.href.slice(1) && (
                <motion.span
                  layoutId="nav-active-glass"
                  className="pointer-events-none absolute inset-0 rounded-full border border-[var(--border-accent)]/40 bg-[color-mix(in_srgb,var(--accent-subtle)_58%,var(--glass-bg)_42%)] shadow-[0_8px_18px_-12px_var(--glow),inset_0_1px_0_rgba(255,255,255,0.25)]"
                  transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.7 }}
                />
              )}
            </div>
          ))}
        </nav>

        <div className="ml-1 flex items-center gap-2">
          <div className="glass-panel relative inline-flex h-10 items-center rounded-full border border-[var(--glass-border)]/75 bg-card/35 p-1">
            {locale === "en" ? (
              <motion.span
                layoutId="locale-active-pill"
                className="pointer-events-none absolute inset-y-1 left-1 w-10 rounded-full border border-[var(--border-accent)]/35 bg-white/20 dark:bg-white/10"
                transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.7 }}
              />
            ) : (
              <motion.span
                layoutId="locale-active-pill"
                className="pointer-events-none absolute inset-y-1 right-1 w-10 rounded-full border border-[var(--border-accent)]/35 bg-white/20 dark:bg-white/10"
                transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.7 }}
              />
            )}
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`relative z-10 inline-flex h-8 w-10 items-center justify-center rounded-full text-[0.68rem] font-semibold tracking-wide transition-colors ${locale === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Switch language to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("fr")}
              className={`relative z-10 inline-flex h-8 w-10 items-center justify-center rounded-full text-[0.68rem] font-semibold tracking-wide transition-colors ${locale === "fr" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Basculer la langue en francais"
            >
              FR
            </button>
          </div>

          <div className="glass-panel relative inline-flex h-10 items-center gap-1 rounded-full border border-[var(--glass-border)]/75 bg-card/35 p-1">
            {isDark ? (
              <motion.span
                layoutId="theme-active-pill"
                className="pointer-events-none absolute inset-y-1 right-1 w-8 rounded-full border border-[var(--border-accent)]/40 bg-white/20 dark:bg-[var(--accent-strong)]/85 shadow-[0_8px_18px_-14px_var(--glow)]"
                transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.7 }}
              />
            ) : (
              <motion.span
                layoutId="theme-active-pill"
                className="pointer-events-none absolute inset-y-1 left-1 w-8 rounded-full border border-[var(--border-accent)]/40 bg-white/20 dark:bg-[var(--accent-strong)]/85 shadow-[0_8px_18px_-14px_var(--glow)]"
                transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.7 }}
              />
            )}
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors ${isDark ? "text-muted-foreground hover:text-foreground" : "text-white"}`}
              aria-label="Enable light mode"
            >
              <Sun size={15} />
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors ${isDark ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Enable dark mode"
            >
              <Moon size={15} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
