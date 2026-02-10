"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const SLIDES = [
  {
    image: "/images/unnamed.webp",
    alt: "SP Smart Phone Accessories Sdn Bhd storefront with red signboard",
  },
  {
    image: "/images/2025-11-01.jpg",
    alt: "Inside SP Accessories store with aisles of phone cases and gadgets",
  },
  {
    image: "/images/2023-07-24.webp",
    alt: "SP Smart Phone Accessories branch storefront with wide display windows",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

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

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 sm:left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-background/10 text-background backdrop-blur-sm hover:bg-background/25 transition-all duration-300 min-h-[44px] min-w-[44px]"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 sm:right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-background/10 text-background backdrop-blur-sm hover:bg-background/25 transition-all duration-300 min-h-[44px] min-w-[44px]"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

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
