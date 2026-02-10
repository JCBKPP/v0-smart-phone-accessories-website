"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useRef } from "react";

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function TestimonialsSection() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

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

        {/* Mobile: horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:hidden -mx-4 px-4"
        >
          {TESTIMONIALS.map((review) => (
            <div
              key={review.name}
              className="min-w-[280px] max-w-[320px] snap-center shrink-0 rounded-xl border border-border/60 bg-background p-5 flex flex-col gap-3 shadow-sm"
            >
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
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                {`"${review.quote}"`}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-auto">
                Facebook Review
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="hidden md:grid md:grid-cols-3 gap-4"
        >
          {TESTIMONIALS.slice(0, 3).map((review) => (
            <motion.div
              key={review.name}
              variants={itemVariants}
              className="rounded-xl border border-border/60 bg-background p-6 flex flex-col gap-3 transition-all duration-200 hover:shadow-md hover:border-primary/20"
            >
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                {`"${review.quote}"`}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-auto">
                Facebook Review
              </p>
            </motion.div>
          ))}
          {/* Second row: 2 cards centered */}
          <div className="col-span-3 flex justify-center gap-4">
            {TESTIMONIALS.slice(3).map((review) => (
              <motion.div
                key={review.name}
                variants={itemVariants}
                className="rounded-xl border border-border/60 bg-background p-6 flex flex-col gap-3 transition-all duration-200 hover:shadow-md hover:border-primary/20 w-full max-w-md"
              >
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {`"${review.quote}"`}
                </p>
                <p className="text-xs text-muted-foreground/60 mt-auto">
                  Facebook Review
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
