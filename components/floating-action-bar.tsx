"use client";

import { useState } from "react";
import { MessageCircle, Facebook, Headset, Globe, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { LanguageSelector } from "@/components/language-selector";

export function FloatingActionBar() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[55] flex items-center">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mr-1 flex flex-col gap-2 rounded-2xl border border-border/50 bg-background/80 p-3 shadow-xl backdrop-blur-lg"
          >
            {/* Close */}
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
              <Facebook className="h-4.5 w-4.5 text-[#1877F2] shrink-0" />
              <span className="text-xs font-medium text-foreground whitespace-nowrap">
                {t("facebook")}
              </span>
            </a>

            {/* WhatsApp -- disabled */}
            <div className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 opacity-50 cursor-default">
              <MessageCircle className="h-4.5 w-4.5 text-[#25D366] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-medium text-foreground whitespace-nowrap">
                  {t("whatsapp")}
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight">
                  {t("comingSoon")}
                </span>
              </div>
            </div>

            {/* Live Agent -- disabled */}
            <div className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 opacity-50 cursor-default">
              <Headset className="h-4.5 w-4.5 text-primary shrink-0" />
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
              <Globe className="h-4.5 w-4.5 text-muted-foreground shrink-0" />
              <LanguageSelector />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed pill trigger */}
      {!expanded && (
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setExpanded(true)}
          className="flex flex-col items-center gap-3 rounded-l-2xl border border-r-0 border-border/50 bg-background/80 px-1.5 py-4 shadow-lg backdrop-blur-lg hover:bg-background/95 transition-all duration-300"
          aria-label="Open contact and language options"
        >
          <Facebook className="h-4 w-4 text-[#1877F2]" />
          <MessageCircle className="h-4 w-4 text-[#25D366]" />
          <Headset className="h-4 w-4 text-primary" />
          <Globe className="h-4 w-4 text-muted-foreground" />
        </motion.button>
      )}
    </div>
  );
}
