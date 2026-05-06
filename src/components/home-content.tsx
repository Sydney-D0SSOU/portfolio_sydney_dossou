"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "@/components/providers/locale-provider";
import { copyByLocale } from "@/lib/copy";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeSection } from "@/components/sections/home-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";

export function HomeContent() {
  const { locale } = useLocale();
  const copy = copyByLocale[locale];
  const isEn = locale === "en";

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  };

  const skillCategories = isEn
    ? [
        { title: "Frontend Engineering", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"] },
        { title: "Data Analysis & BI", skills: ["Excel", "Power Query", "Power BI", "KPI Dashboards", "Data Visualization", "QGIS"] },
        { title: "Backend Engineering", skills: ["Python", "FastAPI", "Node.js", "Express.js", "REST API", "Nodemailer"] },
        { title: "Databases & Modeling", skills: ["SQL", "SQL Server", "MySQL", "PostgreSQL", "MongoDB", "UML / Merise"] },
        { title: "DevOps & Delivery", skills: ["Docker", "Dokku", "CI/CD", "GitHub", "VPS Linux", "Agile Delivery"] },
      ]
    : [
        { title: "Ingenierie Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"] },
        { title: "Analyse Data & BI", skills: ["Excel", "Power Query", "Power BI", "Dashboards KPI", "Data Visualization", "QGIS"] },
        { title: "Ingenierie Backend", skills: ["Python", "FastAPI", "Node.js", "Express.js", "API REST", "Nodemailer"] },
        { title: "Bases de donnees & Modelisation", skills: ["SQL", "SQL Server", "MySQL", "PostgreSQL", "MongoDB", "UML / Merise"] },
        { title: "DevOps & Livraison", skills: ["Docker", "Dokku", "CI/CD", "GitHub", "VPS Linux", "Livraison Agile"] },
      ];

  const experiences = isEn
    ? [
        {
          period: "2025 - Present",
          role: "Backend Developer (Freelance)",
          org: "Selys-Africa, Abidjan",
          website: "https://selys-africa.com/",
          details:
            "Built and evolved backend modules for enterprise ERP: modular APIs, Prisma schema with 40+ models, payment integrations, real-time notifications, and production reliability.",
        },
        {
          period: "2024 - 2025",
          role: "Full-Stack Developer",
          org: "PSIE",
          website: "https://psie.bj",
          details:
            "Delivered operational web platforms with N8N workflows, real-time dashboards, and API integrations supporting business intelligence use cases.",
        },
        {
          period: "2022 - 2023",
          role: "Web Developer Intern",
          org: "ASIN Benin",
          website: "https://asin.bj",
          details:
            "Contributed to a crowdfunding platform and analytics dashboard with end-to-end features and production-minded implementation.",
        },
      ]
    : [
        {
          period: "2025 - Present",
          role: "Developpeur Backend (Freelance)",
          org: "Selys-Africa, Abidjan",
          website: "https://selys-africa.com/",
          details:
            "Developpement de modules backend ERP: APIs modulaires, schema Prisma 40+ modeles, paiements, notifications temps-reel et fiabilite orientee production.",
        },
        {
          period: "2024 - 2025",
          role: "Developpeur Full-Stack",
          org: "PSIE",
          website: "https://psie.bj",
          details:
            "Livraison de plateformes web operationnelles avec workflows N8N, dashboards temps-reel et integrations API orientees business intelligence.",
        },
        {
          period: "2022 - 2023",
          role: "Developpeur Web Stagiaire",
          org: "ASIN Benin",
          website: "https://asin.bj",
          details:
            "Contribution a une plateforme de financement participatif et un dashboard analytics avec des fonctionnalites end-to-end pretes a la production.",
        },
      ];

  const projects = isEn
    ? [
        {
          name: "BACKENDBTP - Enterprise ERP Backend",
          desc: "Layered architecture with 40+ endpoints, real-time inventory updates, payment flows, and compliance support.",
          stack: ["Express", "Prisma", "MySQL", "Socket.io", "AWS S3"],
          impact: "Serves 100+ concurrent users across complex business workflows with stable production operations.",
        },
        {
          name: "Real-time Analytics Dashboard",
          desc: "E-service usage monitoring, KPI aggregation, and reporting designed for decision-making teams.",
          stack: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
          impact: "20+ business KPIs tracked with near real-time visibility for stakeholders.",
        },
        {
          name: "Automation & Workflow Platform",
          desc: "N8N-backed process automation with document handling and business notification flows.",
          stack: ["N8N", "Node.js", "Nodemailer", "AWS"],
          impact: "Reduced manual input by 80% and automated 95% of recurrent operational flows.",
        },
      ]
    : [
        {
          name: "BACKENDBTP - Backend ERP d'Entreprise",
          desc: "Architecture en couches avec 40+ endpoints, inventaire temps-reel, paiements et suivi conformite.",
          stack: ["Express", "Prisma", "MySQL", "Socket.io", "AWS S3"],
          impact: "Supporte 100+ utilisateurs concurrents sur des workflows metier complexes en production.",
        },
        {
          name: "Dashboard Analytics Temps-reel",
          desc: "Monitoring e-services, aggregations KPI et reporting oriente decision.",
          stack: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
          impact: "20+ KPI metier suivis avec une visibilite quasi temps-reel pour les equipes.",
        },
        {
          name: "Plateforme Automatisation & Workflows",
          desc: "Automatisation de processus avec N8N, documents operationnels et notifications metier.",
          stack: ["N8N", "Node.js", "Nodemailer", "AWS"],
          impact: "80% de reduction de saisie manuelle et 95% des flux recurrents automatises.",
        },
      ];

  return (
    <motion.main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-14 px-6 py-10 md:py-14" initial="hidden" animate="show" variants={stagger}>
      <HomeSection copy={copy} isEn={isEn} fadeUp={fadeUp} stagger={stagger} />
      <HeroSection copy={copy} isEn={isEn} fadeUp={fadeUp} stagger={stagger} />
      <StackSection copy={copy} skillCategories={skillCategories} fadeUp={fadeUp} isEn={isEn} />
      <ExpertiseSection copy={copy} fadeUp={fadeUp} />
      <ExperienceSection isEn={isEn} experiences={experiences} fadeUp={fadeUp} />
      <Separator />
      <ProjectsSection copy={copy} projects={projects} isEn={isEn} fadeUp={fadeUp} />
      <Separator />
      <ContactSection copy={copy} isEn={isEn} fadeUp={fadeUp} />
      <FooterSection copy={copy} isEn={isEn} fadeUp={fadeUp} />
    </motion.main>
  );
}
