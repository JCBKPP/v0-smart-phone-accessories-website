"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BranchDetailProps {
  name: string;
  phone: string;
  address: string;
  mapQuery: string;
  hours?: string;
}

export function BranchDetail({
  name,
  phone,
  address,
  mapQuery,
  hours = "Mon - Sat: 9:30 AM - 7:00 PM | Sun: 10:00 AM - 5:00 PM",
}: BranchDetailProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col lg:flex-row gap-8 lg:gap-12"
    >
      {/* Info */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        <h3 className="text-2xl font-semibold text-foreground text-balance">
          {name}
        </h3>
        <a
          href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
          className="text-xl text-foreground hover:text-primary transition-colors font-medium"
        >
          {phone}
        </a>
        <p className="text-muted-foreground leading-relaxed">
          {address}
        </p>
        <p className="text-sm text-muted-foreground">
          {hours}
        </p>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors group mt-2 self-start"
        >
          {"Get Directions"}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Map */}
      <div className="flex-1 min-h-[300px] lg:min-h-[400px] rounded-xl overflow-hidden border border-border">
        <iframe
          src={mapSrc}
          className="h-full w-full min-h-[300px] lg:min-h-[400px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${name}`}
        />
      </div>
    </motion.div>
  );
}
