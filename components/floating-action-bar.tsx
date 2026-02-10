"use client";

import React from "react"

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Facebook, Headset, Globe, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { LanguageSelector } from "@/components/language-selector";

export function FloatingActionBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrollFaded, setScrollFaded] = useState(false);
  const { t } = useLanguage();
  const scrollTimer = useRef<ReturnType<typeof setTimeout>>();
  const touchStartX = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Fade on any scroll (up or down), restore when scrolling stops
  useEffect(() => {
    const handleScroll = () => {
      setScrollFaded(true);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setScrollFaded(false), 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  // Swipe from right edge to open
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const x = e.touches[0].clientX;
      if (x > window.innerWidth - 30) {
        touchStartX.current = x;
      }
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (diff < -40) {
        setExpanded(true);
      }
      touchStartX.current = null;
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Swipe panel to the right to close
  const panelTouchStart = useRef<number | null>(null);
  const handlePanelTouchStart = (e: React.TouchEvent) => {
    panelTouchStart.current = e.touches[0].clientX;
  };
  const handlePanelTouchEnd = (e: React.TouchEvent) => {
    if (panelTouchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - panelTouchStart.current;
    if (diff > 60) setExpanded(false);
    panelTouchStart.current = null;
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[54] bg-black/35"
            onClick={() => setExpanded(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Floating bar */}
      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[55] flex items-center transition-opacity duration-300"
        style={{ opacity: scrollFaded && !expanded ? 0.4 : 1 }}
      >
        <AnimatePresence>
          {expanded && (
            <motion.div
              ref={panelRef}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mr-0 flex flex-col gap-2 rounded-l-2xl border border-r-0 border-border/30 bg-background/75 p-3 shadow-xl backdrop-blur-xl"
              onTouchStart={handlePanelTouchStart}
              onTouchEnd={handlePanelTouchEnd}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="self-end p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close action bar"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100063548379785"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 hover:bg-secondary transition-colors group"
              >
                <Facebook className="h-5 w-5 text-[#1877F2] shrink-0" />
                <span className="text-xs font-medium text-foreground whitespace-nowrap">
                  {t("facebook")}
                </span>
              </a>

              {/* WhatsApp HQ */}
              <a
                href="https://wa.me/60167114848"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 hover:bg-secondary transition-colors group"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366] shrink-0" />
                <span className="text-xs font-medium text-foreground whitespace-nowrap">
                  {t("whatsapp")}
                </span>
              </a>

              {/* Live Agent -- disabled */}
              <div className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 opacity-50 cursor-default">
                <Headset className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    {t("liveAgent")}
                  </span>
                  <span className="text-[10px] text-muted-foreground leading-tight">
                    {t("comingSoon")}
                  </span>
                </div>
              </div>

              {/* Language */}
              <div className="flex items-center gap-2.5 rounded-xl px-3 py-2.5">
                <Globe className="h-5 w-5 text-muted-foreground shrink-0" />
                <LanguageSelector />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collapsed pill trigger with chevron */}
        {!expanded && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setExpanded(true)}
            className="flex flex-col items-center gap-2.5 rounded-l-2xl border border-r-0 border-border/30 bg-background/60 px-1.5 py-3 shadow-lg backdrop-blur-xl hover:bg-background/80 transition-all duration-300"
            aria-label="Open contact and language options"
          >
            <ChevronLeft className="h-3.5 w-3.5 text-muted-foreground" />
            <Facebook className="h-4 w-4 text-[#1877F2]" />
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <Headset className="h-4 w-4 text-primary" />
            <Globe className="h-4 w-4 text-muted-foreground" />
          </motion.button>
        )}
      </div>
    </>
  );
}
