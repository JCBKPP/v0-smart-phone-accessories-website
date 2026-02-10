"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { PREVIEW_BRANCHES } from "@/lib/branches";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function BranchPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 section-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {t("visitStores")}
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            {t("visitStoresSubtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {PREVIEW_BRANCHES.map((branch) => (
            <motion.div
              key={branch.id}
              variants={itemVariants}
              className="rounded-xl glass-card p-5 md:p-6 flex flex-col gap-3 transition-all duration-200 hover:shadow-md hover:border-primary/20"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {branch.name}
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={`tel:+60${branch.phone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:text-accent transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {branch.phone}
                </a>
                <a
                  href={`https://wa.me/60${branch.phone.replace(/[^0-9]/g, "").replace(/^0/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#25D366] hover:underline font-medium"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground/60" />
                <span>{branch.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                <span>{branch.hours}</span>
              </div>
              <Link
                href="/find-us"
                className="text-sm font-medium text-primary hover:text-accent transition-colors group inline-flex items-center gap-1 mt-1"
              >
                {t("viewLocation")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* See more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-8"
        >
          <Link
            href="/find-us"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-accent transition-all duration-200 min-h-[44px] group"
          >
            {t("findOurStores")}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
