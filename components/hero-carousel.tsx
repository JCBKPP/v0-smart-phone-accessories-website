"use client";

import React from "react"

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const SLIDES = [
  {
    image: "/images/banner-storefront-red.webp",
    alt: "SP Smart Phone Accessories Sdn Bhd storefront with red signboard",
  },
  {
    image: "/images/banner-storefront-welcome.webp",
    alt: "SP Accessories storefront with Welcome Selamat Datang signboard",
  },
  {
    image: "/images/banner-storefront-vivo.webp",
    alt: "Smart Phone Accessories store in shopping complex with Vivo branding",
  },
  {
    image: "/images/banner-interior-cables.webp",
    alt: "Inside SP Accessories store with organized shelves of cables, tripods, and ring lights",
  },
  {
    image: "/images/banner-interior-earphones.webp",
    alt: "Inside SP Accessories store showing earphones, tempered glass, and accessories",
  },
  {
    image: "/images/banner-mall-store.webp",
    alt: "SP Accessories store in mall with illuminated 3D SP logo",
  },
  {
    image: "/images/banner-storefront-pink.webp",
    alt: "SP Accessories storefront with Welcome Selamat Datang and well-lit interior",
  },
  {
    image: "/images/2025-11-01.jpg",
    alt: "Inside SP Accessories store with aisles of phone cases and gadgets",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const { t } = useLanguage();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative w-full overflow-hidden bg-foreground"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Store photos"
    >
      {/* Responsive height: shorter on mobile, taller on desktop */}
      <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${current + 1} of ${SLIDES.length}`}
          >
            <Image
              src={SLIDES[current].image || "/placeholder.svg"}
              alt={SLIDES[current].alt}
              fill
              className="object-cover"
              priority={current === 0}
              sizes="100vw"
            />
            {/* Subtle gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Tagline overlay */}
        <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 z-10 text-center px-4">
          <motion.p
            key={`tagline-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-background drop-shadow-lg"
          >
            {t("heroTagline")}
          </motion.p>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-20 -translate-x-1/2 flex items-center gap-1.5">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? "h-2 w-6 bg-background"
                : "h-2 w-2 bg-background/40 hover:bg-background/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
