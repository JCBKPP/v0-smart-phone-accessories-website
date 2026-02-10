"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ShoppingBag,
  ShieldCheck,
  Headset,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/lib/translations";

interface ValueItem {
  icon: LucideIcon;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

const VALUES: ValueItem[] = [
  {
    icon: MapPin,
    titleKey: "convenientLocations",
    descKey: "convenientLocationsDesc",
  },
  { icon: ShoppingBag, titleKey: "wideRange", descKey: "wideRangeDesc" },
  {
    icon: ShieldCheck,
    titleKey: "qualityGuaranteed",
    descKey: "qualityGuaranteedDesc",
  },
  { icon: Headset, titleKey: "expertService", descKey: "expertServiceDesc" },
  {
    icon: BadgeDollarSign,
    titleKey: "competitivePricing",
    descKey: "competitivePricingDesc",
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-foreground text-balance"
          >
            {t("aboutHeroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            {t("aboutHeroSubtitle")}
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground"
          >
            <p>{t("storyP1")}</p>
            <p>{t("storyP2")}</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              {t("whyChooseUs")}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6"
          >
            {VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titleKey}
                  variants={fadeUp}
                  className="text-center"
                >
                  <Icon
                    className="h-7 w-7 text-primary mx-auto mb-3"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              {t("ourStores")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                src: "/images/store-team.jpg",
                alt: "SP Accessories store interior",
              },
              {
                src: "/images/gallery-1.jpg",
                alt: "Phone accessories display",
              },
              {
                src: "/images/gallery-2.jpg",
                alt: "Accessories wall display",
              },
            ].map((img) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-12 bg-secondary/50 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              {t("visitUsToday")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              {t("visitUsTodaySubtitle")}
            </p>
            <Link
              href="/find-us"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors min-h-[44px]"
            >
              {t("findOurStores")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
