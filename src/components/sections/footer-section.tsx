"use client";

import { motion } from "framer-motion";
import type { AppCopy } from "@/lib/copy";

type FooterSectionProps = {
  copy: AppCopy;
  isEn: boolean;
  fadeUp: { hidden: { opacity: number; y: number }; show: { opacity: number; y: number; transition: { duration: number } } };
};

export function FooterSection({ copy, isEn, fadeUp }: FooterSectionProps) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: copy.nav.about },
    { href: "#stack", label: copy.nav.stack },
    { href: "#experience", label: copy.nav.experience },
    { href: "#projects", label: copy.nav.projects },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <motion.footer variants={fadeUp} className="mb-8 rounded-4xl bg-[var(--accent-strong)] px-8 py-10 text-white">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-2xl font-bold">{copy.name}</p>
          <p className="max-w-sm text-white/90">
            {isEn
              ? "Backend developer building reliable APIs and data services that stay dependable under pressure."
              : "Developpeur backend construisant des APIs et services data fiables, meme sous pression."}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xl font-semibold">{isEn ? "Quick Links" : "Liens rapides"}</p>
          <div className="grid gap-1 text-white/95">
            {links.map((item) => (
              <a key={item.href} href={item.href} className="w-fit hover:text-white/80">
                • {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xl font-semibold">{isEn ? "Get In Touch" : "Contact"}</p>
          <a href="mailto:sydneydossou400@gmail.com" className="block text-lg font-medium hover:text-white/80">
            sydneydossou400@gmail.com
          </a>
          <p className="max-w-sm text-white/90">
            {isEn
              ? "Open to backend-focused opportunities: shipping APIs, improving reliability, and delivering business value."
              : "Ouvert aux opportunites backend: livraison d'APIs, fiabilite, et impact business concret."}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
