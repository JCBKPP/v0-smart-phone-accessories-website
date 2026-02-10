"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useRef, useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
  {
    name: "George Majunting",
    quote:
      "The lady staff here is very helpful and friendly. She gives good recommendations based on our needs and even helps to install the screen protector neatly. The prices are reasonable and worth it. Highly recommended!",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "AFiey 90",
    quote:
      "I've been to this shop couples of times and the services given was beyond perfectionist. The staff was amazingly good and very friendly. They were very helpful in fulfilling my request. Everything that I am looking for can be found here by the help of their great staff. Highly recommended!",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Venom",
    quote:
      "The best shop for phone accessories. Good quality and lowest price. Staff also helpful & friendly to customer.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Nadiamemey Sanusol",
    quote:
      "Very nice shop. Good service and price low.. staff very friendly and accommodating.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Alex 5589",
    quote:
      "Good staff friendly.. phone accessories paling complete. Harga yg mantap dan quality, no complaint.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Sylvovel Yuni",
    quote:
      "Recommended untuk kalian yang cari casing dan tempered glass harga mampu milik.. Service pun sangat friendly. Overall semua nice.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Tujuh Belas",
    quote: "Good staff and also good products.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "MiszNorafifah Exo",
    quote: "Nice & good.",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "Zuan Mar",
    quote:
      "Staff grand merdeka sangat bagus, aku suka cara durang layan customer. Nanti aku datang lagi...",
    rating: 5,
    source: "Facebook Review",
  },
  {
    name: "Firdaus Muhammad",
    quote:
      "Staff grand merdeka memang friendly.. lagi satu dorang layan customer dgn mesra. Semua brg berkualiti dan pekerja sangat bgus dlm melayan customer.",
    rating: 5,
    source: "Facebook Review",
  },
  {
    name: "Ida Zara",
    quote:
      "Staff grand merdeka sangat bagus jangan lupa ya guys datang, tidak rugi.",
    rating: 5,
    source: "Facebook Review",
  },
  {
    name: "Mark Sylvester",
    quote:
      "Saya sokong 100% Smart Phone Accessories Sdn Bhd buka di Area Kepayan Lintas.",
    rating: 5,
    source: "Facebook Review",
  },
  {
    name: "Rosnah Japall",
    quote:
      "Cheap stuff, service okay. Staff are all friendly suka tolong lagi. Very recommended.",
    rating: 5,
    source: "Facebook Review",
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

function TestimonialCard({
  review,
}: {
  review: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="rounded-xl glass-card p-5 flex flex-col gap-3 shadow-sm h-full min-h-[180px]">
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
        {review.source}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollPosRef = useRef(0);

  // Duplicate the array for seamless infinite loop
  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

  const animate = useCallback(() => {
    const container = scrollRef.current;
    if (!container || isPaused) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    scrollPosRef.current += 0.5; // pixels per frame (~30px/sec at 60fps)

    // Reset seamlessly when we've scrolled past the first set
    const halfWidth = container.scrollWidth / 2;
    if (scrollPosRef.current >= halfWidth) {
      scrollPosRef.current -= halfWidth;
    }

    container.scrollLeft = scrollPosRef.current;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  // Sync scrollPosRef when user manually scrolls
  const handleScroll = () => {
    if (scrollRef.current && isPaused) {
      scrollPosRef.current = scrollRef.current.scrollLeft;
    }
  };

  return (
    <section className="py-12 md:py-16 section-transparent">
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

        {/* Slow auto-sliding carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicated.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-[340px]"
            >
              <TestimonialCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
