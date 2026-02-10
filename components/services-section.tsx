"use client";

import { Shield, Sparkles, Package, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/lib/translations";

interface Service {
  nameKey: TranslationKey;
  descKey: TranslationKey;
  icon: LucideIcon;
  whatsapp?: boolean;
}

const SERVICES: Service[] = [
  { nameKey: "screenInstall", descKey: "screenInstallDesc", icon: Shield },
  { nameKey: "deviceCleaning", descKey: "deviceCleaningDesc", icon: Sparkles },
  {
    nameKey: "bulkOrders",
    descKey: "bulkOrdersDesc",
    icon: Package,
    whatsapp: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ServiceCard({ svc, index }: { svc: Service; index: number }) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });
  const Icon = svc.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      className="group rounded-xl glass-card p-5 md:p-6 flex flex-col gap-3 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 ${isInView ? "animate-icon-pulse" : ""}`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">
        {t(svc.nameKey)}
      </h3>
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">
        {t(svc.descKey)}
      </p>
      {svc.whatsapp && (
        <a
          href="https://wa.me/60167434011"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline mt-1"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          {t("contactWhatsApp")}
        </a>
      )}
    </motion.div>
  );
}

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 section-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {t("servicesTitle")}
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            {t("servicesSubtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.nameKey} svc={svc} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
