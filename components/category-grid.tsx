"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { PRODUCTS, type Product } from "@/lib/products";

/* ── auto-slide row ──────────────────────────────────────────── */

function AutoSlideRow({
  items,
  direction,
  speed = 0.5,
}: {
  items: Product[];
  direction: "left" | "right";
  speed?: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const rafRef = useRef<number>();

  const animate = useCallback(() => {
    const el = scrollRef.current;
    if (el && !paused) {
      const maxScroll = el.scrollWidth / 2;
      if (direction === "left") {
        el.scrollLeft += speed;
        if (el.scrollLeft >= maxScroll) el.scrollLeft = 0;
      } else {
        el.scrollLeft -= speed;
        if (el.scrollLeft <= 0) el.scrollLeft = maxScroll;
      }
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [direction, speed, paused]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  /* initialise right-direction rows to start from far-right */
  useEffect(() => {
    const el = scrollRef.current;
    if (el && direction === "right") {
      el.scrollLeft = el.scrollWidth / 2;
    }
  }, [direction]);

  const handleInteract = () => {
    setPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setPaused(false), 3000);
  };

  /* duplicated items for seamless loop */
  const doubled = [...items, ...items];

  return (
    <div
      ref={scrollRef}
      className="flex gap-3 overflow-x-auto scrollbar-hide"
      style={{ scrollBehavior: "auto" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleInteract}
      onTouchEnd={handleInteract}
    >
      {doubled.map((product, idx) => (
        <Link
          href="/album"
          key={`${product.id}-${idx}`}
          className="shrink-0 w-40 sm:w-48 md:w-56 rounded-xl glass-card overflow-hidden transition-colors hover:border-primary/30"
        >
          <div className="aspect-square relative bg-secondary/60">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.label}
              fill
              className="object-cover"
              sizes="(min-width:768px) 224px, 160px"
            />
          </div>
          <div className="p-2 md:p-3">
            <h3 className="text-[11px] md:text-xs font-semibold text-foreground leading-tight line-clamp-2">
              {product.label}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ── main export ─────────────────────────────────────────────── */

export function CategoryGrid() {
  const { t } = useLanguage();

  /* Split products into 2 rows */
  const mid = Math.ceil(PRODUCTS.length / 2);
  const row1 = PRODUCTS.slice(0, mid);
  const row2 = PRODUCTS.slice(mid);

  return (
    <section id="what-we-sell" className="py-12 md:py-16 section-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {t("whatWeSellTitle")}
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            {t("whatWeSellSubtitle")}
          </p>
        </motion.div>

        {/* 2-row auto-sliding carousel */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <AutoSlideRow items={row1} direction="left" speed={0.4} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            <AutoSlideRow items={row2} direction="right" speed={0.4} />
          </motion.div>
        </div>

        {/* View Album link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-6"
        >
          <Link
            href="/album"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors min-h-[44px]"
          >
            {t("viewAlbum")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
