"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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

// Splits array into rows of N
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function MobileCarousel({ categories, t }: { categories: Category[]; t: (key: TranslationKey) => string }) {
  const rows = chunkArray(categories, 5);
  return (
    <div className="flex flex-col gap-3 md:hidden">
      {rows.map((row, rowIndex) => (
        <CarouselRow key={rowIndex} items={row} t={t} direction={rowIndex % 2 === 0 ? "left" : "right"} />
      ))}
    </div>
  );
}

function CarouselRow({ items, t, direction }: { items: Category[]; t: (key: TranslationKey) => string; direction: "left" | "right" }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [userInteracting, setUserInteracting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const scroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || userInteracting) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (direction === "left") {
      if (el.scrollLeft >= maxScroll - 1) el.scrollLeft = 0;
      else el.scrollLeft += 1;
    } else {
      if (el.scrollLeft <= 1) el.scrollLeft = maxScroll;
      else el.scrollLeft -= 1;
    }
  }, [direction, userInteracting]);

  useEffect(() => {
    const id = setInterval(scroll, 30);
    return () => clearInterval(id);
  }, [scroll]);

  const handleTouchStart = () => {
    setUserInteracting(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchEnd = () => {
    timeoutRef.current = setTimeout(() => setUserInteracting(false), 2000);
  };

  return (
    <div
      ref={scrollRef}
      className="flex gap-2.5 overflow-x-auto scrollbar-hide"
      style={{ scrollBehavior: "auto" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      {items.map((cat) => {
        const Icon = cat.icon;
        return (
          <div
            key={cat.nameKey}
            className="shrink-0 flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-secondary/50 p-3 text-center w-32"
          >
            <Icon className="h-7 w-7 text-primary/80" strokeWidth={1.5} />
            <h3 className="text-xs font-semibold text-foreground leading-tight">{t(cat.nameKey)}</h3>
          </div>
        );
      })}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
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
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {t("whatWeSellTitle")}
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            {t("whatWeSellSubtitle")}
          </p>
        </motion.div>

        {/* Mobile: 2-row auto-scrolling carousel */}
        <MobileCarousel categories={CATEGORIES} t={t} />

        {/* Desktop: grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.nameKey}
                variants={itemVariants}
                className="group flex flex-col items-center gap-2.5 rounded-xl border border-border/60 bg-secondary/50 p-4 lg:p-5 text-center transition-all duration-200 hover:border-primary/30 hover:bg-secondary hover:shadow-md hover:-translate-y-0.5"
              >
                <Icon
                  className="h-8 w-8 lg:h-9 lg:w-9 text-primary/80 transition-transform duration-200 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-foreground leading-tight">
                    {t(cat.nameKey)}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
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
