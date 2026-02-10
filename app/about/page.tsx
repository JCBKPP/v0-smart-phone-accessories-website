"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ShoppingBag, ShieldCheck, Headset, BadgeDollarSign, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    icon: MapPin,
    title: "Convenient Locations",
    description: "Three stores across Kota Kinabalu means you are never far from quality accessories.",
  },
  {
    icon: ShoppingBag,
    title: "Wide Product Range",
    description: "From cases to chargers, audio to storage -- accessories for all major phone brands.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "We carefully select every product, ensuring reliable accessories that last.",
  },
  {
    icon: Headset,
    title: "Expert Service",
    description: "Our knowledgeable staff help you find the perfect accessories for your needs.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description: "Great products at fair prices -- quality accessories accessible to everyone.",
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero - white, centered, minimal */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
          >
            Better In Your Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Smart Phone Accessories Sdn Bhd -- your trusted phone accessories retailer in Sabah, Malaysia.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 md:pb-32 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              We began with a simple mission: to make quality phone accessories accessible and affordable for everyone in Kota Kinabalu. Starting from our first shop, we quickly earned trust through excellent products and genuine service.
            </p>
            <p>
              Today we operate three branches -- Inanam Business Centre, City Prade downtown, and Karamunsing Capital -- each carrying a comprehensive selection of accessories for all major smartphone brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - minimal grid, no cards */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Why Choose Us
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          >
            {VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="text-center"
                >
                  <Icon className="h-8 w-8 text-foreground mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Our Stores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/store-team.jpg", alt: "SP Accessories store interior" },
              { src: "/images/gallery-1.jpg", alt: "Phone accessories display" },
              { src: "/images/gallery-2.jpg", alt: "Accessories wall display" },
            ].map((img) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Visit Us Today
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
              Find the perfect accessories for your device at any of our three locations.
            </p>
            <Link
              href="/find-us"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors min-h-[44px]"
            >
              Find Our Stores
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
