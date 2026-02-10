"use client";

import {
  Smartphone,
  Shield,
  Cable,
  BatteryCharging,
  Navigation,
  Headphones,
  Camera,
  Hand,
  Sparkles,
  HardDrive,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Category {
  name: string;
  icon: LucideIcon;
  description: string;
}

const CATEGORIES: Category[] = [
  { name: "Phone Cases", icon: Smartphone, description: "Protective & stylish cases" },
  { name: "Screen Protectors", icon: Shield, description: "Tempered glass & film" },
  { name: "Charging Cables", icon: Cable, description: "USB-C, Lightning & more" },
  { name: "Power Banks", icon: BatteryCharging, description: "Portable charging solutions" },
  { name: "Phone Holders", icon: Navigation, description: "Car & desk mounts" },
  { name: "Earphones", icon: Headphones, description: "Wired & wireless audio" },
  { name: "Camera Accessories", icon: Camera, description: "Lenses, lights & tripods" },
  { name: "Phone Grips", icon: Hand, description: "PopSockets & ring holders" },
  { name: "Cleaning Kits", icon: Sparkles, description: "Screen cleaners & cloths" },
  { name: "Storage", icon: HardDrive, description: "Memory cards & adapters" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function CategoryGrid() {
  return (
    <section id="accessories" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Browse Accessories
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Find the perfect accessory for your smartphone at competitive prices.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
        >
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.name}
                type="button"
                variants={itemVariants}
                className="group flex flex-col items-center gap-4 p-6 text-center cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-2xl transition-colors"
              >
                <Icon className="h-12 w-12 md:h-14 md:w-14 text-foreground transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground hidden sm:block">
                    {category.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
