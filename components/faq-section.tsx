"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import type { TranslationKey } from "@/lib/translations";

const FAQ_ITEMS: { qKey: TranslationKey; aKey: TranslationKey }[] = [
  { qKey: "faq1Q", aKey: "faq1A" },
  { qKey: "faq2Q", aKey: "faq2A" },
  { qKey: "faq3Q", aKey: "faq3A" },
  { qKey: "faq4Q", aKey: "faq4A" },
  { qKey: "faq5Q", aKey: "faq5A" },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className="pr-4 leading-relaxed">{question}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {t("faqTitle")}
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            {t("faqSubtitle")}
          </p>
        </motion.div>

        <div className="rounded-xl border border-border/60 bg-secondary/20 px-5 md:px-6">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.qKey}
              question={t(item.qKey)}
              answer={t(item.aKey)}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center mt-4">
          <Link
            href="/faq"
            className="text-xs text-muted-foreground hover:text-primary hover:underline transition-colors"
          >
            {t("faqTitle")} {">"}
          </Link>
        </div>
      </div>
    </section>
  );
}
