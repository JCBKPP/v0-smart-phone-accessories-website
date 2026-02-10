"use client";

import React from "react"

import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useState, useEffect, useCallback, useRef } from "react";

const TESTIMONIALS = [
  {
    name: "Zuan Mar",
    quote:
      "staff grand merdeka sngt bagus aku juga cara durang layan cust. nanti aku datang lagi...",
    rating: 5,
  },
  {
    name: "Firdaus Muhammad",
    quote:
      "Staff grand merdeka mmg friendly..lagi satu drg layan cust dgn mesra..ndk pernah mengecewakan cust...sya sarankan utk cust yg d luar sana cuba try dahulu brg'd grand merdeka ni sbb semua nya berkualiti dan pekerja pun sngat bgus dlm melyan cust",
    rating: 5,
  },
  {
    name: "Ida Zara",
    quote:
      "Staff grand merdeka sangat bagus jangan lupa ya guys datang ndak rugi la k ndak mau caka banyak la nnty datang la sendiri ok",
    rating: 5,
  },
  {
    name: "Mark Sylvester",
    quote:
      "Saya sokong 100% Smart Phone Accessories Sdn Bhd buka di Area Kepayan Lintas",
    rating: 5,
  },
  {
    name: "Rosnah Japall",
    quote:
      "cheap stuff, service okay. staff are all friendly suka tolong lagi. very recommended.",
    rating: 5,
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function TestimonialCard({ review }: { review: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="rounded-xl border border-border/60 bg-background p-5 md:p-6 flex flex-col gap-3 shadow-sm h-full">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
          {getInitials(review.name)}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-3 w-3 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {`"${review.quote}"`}
      </p>
      <p className="text-xs text-muted-foreground/60 mt-auto">
        Facebook Review
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {t("testimonialsTitle")}
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            {t("testimonialsSubtitle")}
          </p>
        </motion.div>

        {/* Mobile/Tablet: single card auto-slide carousel */}
        <div
          className="md:hidden relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <TestimonialCard review={TESTIMONIALS[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setCurrent(i); setIsPaused(true); setTimeout(() => setIsPaused(false), 3000); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: also carousel but showing 3 at a time */}
        <div
          className="hidden md:block relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((offset) => {
              const idx = (current + offset) % TESTIMONIALS.length;
              return (
                <AnimatePresence mode="wait" key={offset}>
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: offset * 0.05 }}
                  >
                    <TestimonialCard review={TESTIMONIALS[idx]} />
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setCurrent(i); setIsPaused(true); setTimeout(() => setIsPaused(false), 3000); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
