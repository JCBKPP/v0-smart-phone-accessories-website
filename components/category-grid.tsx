"use client";

import {
  Smartphone,
  Shield,
  Cable,
  BatteryCharging,
  Navigation,
  Headphones,
  Camera,
  Hand,
  Sparkles,
  HardDrive,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/lib/translations";

interface Category {
  nameKey: TranslationKey;
  descKey: TranslationKey;
  icon: LucideIcon;
}

const CATEGORIES: Category[] = [
  { nameKey: "phoneCases", descKey: "phoneCasesDesc", icon: Smartphone },
  { nameKey: "screenProtectors", descKey: "screenProtectorsDesc", icon: Shield },
  { nameKey: "chargingCables", descKey: "chargingCablesDesc", icon: Cable },
  { nameKey: "powerBanks", descKey: "powerBanksDesc", icon: BatteryCharging },
  { nameKey: "phoneHolders", descKey: "phoneHoldersDesc", icon: Navigation },
  { nameKey: "earphones", descKey: "earphonesDesc", icon: Headphones },
  { nameKey: "cameraAccessories", descKey: "cameraAccessoriesDesc", icon: Camera },
  { nameKey: "phoneGrips", descKey: "phoneGripsDesc", icon: Hand },
  { nameKey: "cleaningKits", descKey: "cleaningKitsDesc", icon: Sparkles },
  { nameKey: "storage", descKey: "storageDesc", icon: HardDrive },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function CategoryGrid() {
  const { t } = useLanguage();

  return (
    <section id="what-we-sell" className="py-12 md:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {t("whatWeSellTitle")}
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            {t("whatWeSellSubtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.nameKey}
                variants={itemVariants}
                className="group flex flex-col items-center gap-2.5 rounded-xl border border-border/60 bg-secondary/50 p-4 md:p-5 text-center transition-all duration-200 hover:border-primary/30 hover:bg-secondary"
              >
                <Icon
                  className="h-8 w-8 md:h-9 md:w-9 text-primary/80 transition-transform duration-200 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">
                    {t(cat.nameKey)}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground hidden sm:block">
                    {t(cat.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
