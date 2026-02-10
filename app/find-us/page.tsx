"use client";

import { useRef } from "react";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { BRANCH_AREAS } from "@/lib/branches";
import type { Branch } from "@/lib/branches";

function BranchCard({ branch }: { branch: Branch }) {
  const { t } = useLanguage();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&output=embed`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col lg:flex-row gap-6 lg:gap-8"
    >
      {/* Info */}
      <div className="flex-1 flex flex-col justify-center gap-3">
        <h3 className="text-xl font-semibold text-foreground text-balance">
          {branch.name}
        </h3>
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href={`tel:+60${branch.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            {branch.phone}
          </a>
          <a
            href={`https://wa.me/60${branch.phone.replace(/[^0-9]/g, "").replace(/^0/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#25D366] hover:underline font-medium"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
          <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground/60" />
          <span>{branch.address}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
          <span>{branch.hours}</span>
        </div>
        <a
          href={branch.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors group mt-1 self-start"
        >
          {t("getDirections")}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Map */}
      <div className="flex-1 min-h-[240px] lg:min-h-[300px] rounded-xl overflow-hidden border border-border/30 shadow-sm">
        <iframe
          src={mapSrc}
          className="h-full w-full min-h-[240px] lg:min-h-[300px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${branch.name}`}
        />
      </div>
    </motion.div>
  );
}

export default function FindUsPage() {
  const { t } = useLanguage();
  const areaRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToArea = (areaId: string) => {
    const el = areaRefs.current[areaId];
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-12 pb-4 md:pt-16 md:pb-6 section-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t("findUsTitle")}
          </h1>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
            {t("visitStoresSubtitle")}
          </p>
        </div>
      </section>

      {/* Area Navigation */}
      <section className="sticky top-[57px] z-40 border-b border-border/30 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className="flex gap-1 overflow-x-auto py-3 scrollbar-hide"
            aria-label="Store areas"
          >
            {BRANCH_AREAS.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => scrollToArea(area.id)}
                className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors min-h-[36px] border border-border/40 hover:border-primary/30"
              >
                {area.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Branch Sections grouped by area */}
      <section className="pb-12 md:pb-16 section-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 mt-8">
            {BRANCH_AREAS.map((area) => (
              <div
                key={area.id}
                ref={(el) => { areaRefs.current[area.id] = el; }}
                id={`area-${area.id}`}
              >
                {/* Area heading */}
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    {area.label}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    {area.branches.length} {area.branches.length === 1 ? "store" : "stores"}
                  </p>
                </div>

                {/* Branches in this area */}
                <div className="flex flex-col gap-10">
                  {area.branches.map((branch, idx) => (
                    <div key={branch.id}>
                      <BranchCard branch={branch} />
                      {idx < area.branches.length - 1 && (
                        <div className="mt-10 border-t border-border/20" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
