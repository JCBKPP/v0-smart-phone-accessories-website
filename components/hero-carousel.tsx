"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "/images/hero-1.jpg",
    title: "Your One-Stop Phone Accessories Shop",
    subtitle: "Quality accessories for every smartphone. Visit any of our 3 branches in Sabah.",
    cta: { label: "Find a Branch", href: "/find-us" },
  },
  {
    image: "/images/hero-2.jpg",
    title: "Premium Accessories, Affordable Prices",
    subtitle: "From cases to cables, power banks to earphones -- we have everything you need.",
    cta: { label: "Browse Categories", href: "/#accessories" },
  },
  {
    image: "/images/hero-3.jpg",
    title: "Better In Your Life",
    subtitle: "Trusted by thousands of customers across Kota Kinabalu since day one.",
    cta: { label: "About Us", href: "/about" },
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      aria-label="Featured promotions"
    >
      <div className="relative h-[400px] sm:h-[480px] lg:h-[560px]">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${SLIDES.length}`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/60" />

            {/* Content */}
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-lg">
                  <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight text-balance"
                  >
                    {slide.title}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-primary-foreground/80 leading-relaxed max-w-md">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.cta.href}
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors min-h-[44px] min-w-[44px]"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-primary-foreground backdrop-blur-sm hover:bg-card/40 transition-colors min-h-[44px] min-w-[44px]"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-primary-foreground backdrop-blur-sm hover:bg-card/40 transition-colors min-h-[44px] min-w-[44px]"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 min-h-[8px] ${
              index === current ? "w-8 bg-primary" : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
