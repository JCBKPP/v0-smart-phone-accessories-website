"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { PRODUCTS } from "@/lib/products";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function AlbumPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative z-1">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("backToHome")}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {t("productAlbum")}
          </h1>
          <p className="mt-1.5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
            {t("productAlbumSubtitle")}
          </p>
        </div>

        {/* Static image grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group glass-card rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="aspect-square relative bg-secondary/40">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width:640px) 33vw, 50vw"
                />
              </div>
              <div className="p-2.5 md:p-3">
                <h3 className="text-xs md:text-sm font-semibold text-foreground leading-tight line-clamp-2">
                  {product.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
