"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
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

interface Product {
  nameKey: TranslationKey;
  descKey: TranslationKey;
  icon: LucideIcon;
  filter: string;
}

const PRODUCTS: Product[] = [
  { nameKey: "phoneCases", descKey: "phoneCasesDesc", icon: Smartphone, filter: "accessories" },
  { nameKey: "screenProtectors", descKey: "screenProtectorsDesc", icon: Shield, filter: "screen-protectors" },
  { nameKey: "chargingCables", descKey: "chargingCablesDesc", icon: Cable, filter: "accessories" },
  { nameKey: "powerBanks", descKey: "powerBanksDesc", icon: BatteryCharging, filter: "accessories" },
  { nameKey: "phoneHolders", descKey: "phoneHoldersDesc", icon: Navigation, filter: "accessories" },
  { nameKey: "earphones", descKey: "earphonesDesc", icon: Headphones, filter: "accessories" },
  { nameKey: "cameraAccessories", descKey: "cameraAccessoriesDesc", icon: Camera, filter: "others" },
  { nameKey: "phoneGrips", descKey: "phoneGripsDesc", icon: Hand, filter: "accessories" },
  { nameKey: "cleaningKits", descKey: "cleaningKitsDesc", icon: Sparkles, filter: "others" },
  { nameKey: "storage", descKey: "storageDesc", icon: HardDrive, filter: "others" },
];

const FILTERS: { key: string; labelKey: TranslationKey }[] = [
  { key: "all", labelKey: "filterAll" },
  { key: "accessories", labelKey: "filterAccessories" },
  { key: "screen-protectors", labelKey: "filterScreenProtectors" },
  { key: "others", labelKey: "filterOthers" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function AlbumPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.filter === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("backToHome")}
        </Link>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
          {t("productAlbum")}
        </h1>
        <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("productAlbumSubtitle")}
        </p>
      </div>

      {/* Filter chips */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setActiveFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                activeFilter === f.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          key={activeFilter}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {filtered.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.nameKey}
                variants={itemVariants}
                className="group rounded-xl border border-border/60 bg-secondary/30 overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                {/* Image placeholder */}
                <div className="aspect-square bg-secondary/60 flex items-center justify-center">
                  <Icon
                    className="h-12 w-12 md:h-16 md:w-16 text-primary/30 transition-transform duration-200 group-hover:scale-110"
                    strokeWidth={1}
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">
                    {t(product.nameKey)}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t(product.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
