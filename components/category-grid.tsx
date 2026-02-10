"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { PRODUCTS, type Product } from "@/lib/products";

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
      {/* duplicate items for seamless loop */}
      {[...items, ...items].map((product, idx) => (
        <Link
          href="/album"
          key={`${product.id}-${idx}`}
          className="shrink-0 w-36 rounded-xl glass-card overflow-hidden transition-colors hover:border-primary/30"
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
        </Link>
      ))}
    </div>
  );
}

function MobileCarousel({ products }: { products: Product[] }) {
  const rows = chunkArray(products, 3);
  return (
    <div className="flex flex-col gap-3 md:hidden">
      {rows.map((row, rowIndex) => (
        <CarouselRow
          key={rowIndex}
          items={row}
          direction={rowIndex % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

/* ── desktop grid ────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

/* ── main export ─────────────────────────────────────────────── */

export function CategoryGrid() {
  const { t } = useLanguage();

  return (
    <section id="what-we-sell" className="py-12 md:py-16 section-transparent">
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
          <Link
            href="/album"
            className="mt-2 inline-block text-xs text-muted-foreground hover:text-primary hover:underline transition-colors"
          >
            {t("viewAlbum")} {">"}
          </Link>
        </motion.div>

        {/* Mobile / Tablet: 2-row auto-scrolling image carousel */}
        <MobileCarousel products={PRODUCTS} />

        {/* Desktop: image grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link
                href="/album"
                className="group flex flex-col rounded-xl glass-card overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="aspect-square relative bg-secondary/60">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.label}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                    sizes="(min-width:1024px) 200px, 220px"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-2">
                    {product.label}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
