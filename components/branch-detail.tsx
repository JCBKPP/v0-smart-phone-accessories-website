"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

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
}: BranchDetailProps) {
  const { t } = useLanguage();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col lg:flex-row gap-6 lg:gap-8"
    >
      {/* Info */}
      <div className="flex-1 flex flex-col justify-center gap-3">
        <h3 className="text-xl font-semibold text-foreground text-balance">
          {name}
        </h3>
        <a
          href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
          className="text-lg text-primary hover:text-accent transition-colors font-semibold"
        >
          {phone}
        </a>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {address}
        </p>
        <p className="text-xs text-muted-foreground">{t("hours")}</p>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors group mt-1 self-start"
        >
          {t("getDirections")}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Map */}
      <div className="flex-1 min-h-[260px] lg:min-h-[320px] rounded-xl overflow-hidden border border-border">
        <iframe
          src={mapSrc}
          className="h-full w-full min-h-[260px] lg:min-h-[320px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${name}`}
        />
      </div>
    </motion.div>
  );
}
