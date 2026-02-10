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

export function CategoryGrid() {
  return (
    <section id="accessories" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Browse Accessories
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Find the perfect accessory for your smartphone. We carry a wide range of quality products at competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                type="button"
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 sm:p-6 text-center transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none min-h-[44px]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground hidden sm:block">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Browse
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
