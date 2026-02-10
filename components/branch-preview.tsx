"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BRANCHES = [
  {
    name: "Inanam",
    phone: "016-743 4011",
    address: "Inanam Business Centre, Block H, PH2, Jalan Tuaran, 88450 Kota Kinabalu",
  },
  {
    name: "City Prade, KK",
    phone: "016-878 4311",
    address: "Lot G 29, City Prade, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu",
  },
  {
    name: "Karamunsing, KK",
    phone: "016-937 5611",
    address: "A-0-1, Lot 1 Block A, Karamunsing Capital, 88450 Kota Kinabalu",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function BranchPreview() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Visit Our Stores
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            3 convenient locations across Kota Kinabalu, Sabah.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {BRANCHES.map((branch) => (
            <motion.div
              key={branch.name}
              variants={itemVariants}
              className="rounded-2xl border border-border bg-background p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:border-muted-foreground/30"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                {branch.name}
              </h3>
              <a
                href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
              >
                {branch.phone}
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {branch.address}
              </p>
              <Link
                href="/find-us"
                className="text-sm font-medium text-primary hover:text-accent transition-colors group inline-flex items-center gap-1"
              >
                {"View Location"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
