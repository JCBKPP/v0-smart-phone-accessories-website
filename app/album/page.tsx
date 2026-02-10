"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { PRODUCTS, type Product } from "@/lib/products";
import type { TranslationKey } from "@/lib/translations";

/* ── filter chips ────────────────────────────────────────────── */

const FILTERS: { key: string; labelKey: TranslationKey }[] = [
  { key: "all", labelKey: "filterAll" },
  { key: "accessories", labelKey: "filterAccessories" },
  { key: "screen-protectors", labelKey: "filterScreenProtectors" },
  { key: "others", labelKey: "filterOthers" },
];

/* ── helpers ─────────────────────────────────────────────────── */

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/* ── mobile auto-slide row ───────────────────────────────────── */

function CarouselRow({
  items,
  direction,
}: {
  items: Product[];
  direction: "left" | "right";
}) {
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
      className="flex gap-3 overflow-x-auto scrollbar-hide"
      style={{ scrollBehavior: "auto" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      {[...items, ...items].map((product, idx) => (
        <div
          key={`${product.id}-${idx}`}
          className="shrink-0 w-36 rounded-xl border border-border/60 bg-secondary/30 overflow-hidden"
        >
          <div className="aspect-square relative bg-secondary/60">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.label}
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
          <div className="p-2">
            <h3 className="text-[11px] font-semibold text-foreground leading-tight line-clamp-2">
              {product.label}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── animation variants ──────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

/* ── page ────────────────────────────────────────────────────── */

export default function AlbumPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.filter === activeFilter);

  const rows = chunkArray(filtered, 3);

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

      {/* Mobile: auto-slide carousel (same as homepage) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 md:hidden">
        <div className="flex flex-col gap-3">
          {rows.map((row, rowIndex) => (
            <CarouselRow
              key={rowIndex}
              items={row}
              direction={rowIndex % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>

      {/* Desktop: image grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 hidden md:block">
        <motion.div
          key={activeFilter}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group rounded-xl border border-border/60 bg-secondary/30 overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md"
            >
              <div className="aspect-square relative bg-secondary/60">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.label}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                  sizes="(min-width:1024px) 280px, 220px"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">
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
