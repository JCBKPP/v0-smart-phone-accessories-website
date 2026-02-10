"use client";

import { Shield, Sparkles, Package, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
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
  {
    nameKey: "letUsKnow",
    descKey: "letUsKnowDesc",
    icon: MessageCircle,
    whatsapp: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.nameKey}
                variants={itemVariants}
                className="group rounded-xl border border-border/60 bg-secondary/40 p-5 md:p-6 flex flex-col gap-3 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
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
          })}
        </motion.div>
      </div>
    </section>
  );
}
