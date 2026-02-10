"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const BRANCHES = [
  {
    name: "Inanam",
    phone: "016-743 4011",
    address:
      "Inanam Business Centre, Block H, PH2, Jalan Tuaran, 88450 Kota Kinabalu",
  },
  {
    name: "City Prade, KK",
    phone: "016-878 4311",
    address:
      "Lot G 29, City Prade, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu",
  },
  {
    name: "Karamunsing, KK",
    phone: "016-937 5611",
    address:
      "A-0-1, Lot 1 Block A, Karamunsing Capital, 88450 Kota Kinabalu",
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

export function BranchPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {BRANCHES.map((branch) => (
            <motion.div
              key={branch.name}
              variants={itemVariants}
              className="rounded-xl border border-border/60 bg-background p-5 md:p-6 flex flex-col gap-3 transition-all duration-200 hover:shadow-md hover:border-primary/20"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {branch.name}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-base font-semibold text-primary hover:text-accent transition-colors"
                >
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
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {branch.address}
              </p>
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
      </div>
    </section>
  );
}
