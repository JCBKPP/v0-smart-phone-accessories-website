"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/lib/translations";

const FAQ_ITEMS: { qKey: TranslationKey; aKey: TranslationKey }[] = [
  { qKey: "faq1Q", aKey: "faq1A" },
  { qKey: "faq2Q", aKey: "faq2A" },
  { qKey: "faq3Q", aKey: "faq3A" },
  { qKey: "faq4Q", aKey: "faq4A" },
  { qKey: "faq5Q", aKey: "faq5A" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function FaqPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative z-1">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("backToHome")}
        </Link>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
          {t("faqTitle")}
        </h1>
        <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
          {t("faqSubtitle")}
        </p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-4"
        >
          {FAQ_ITEMS.map((item) => (
            <motion.div
              key={item.qKey}
              variants={itemVariants}
              className="rounded-xl glass-card p-5 md:p-6"
            >
              <h2 className="text-sm md:text-base font-semibold text-foreground leading-snug">
                {t(item.qKey)}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t(item.aKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
