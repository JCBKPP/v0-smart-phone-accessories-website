"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, MessageCircle, Facebook, Headset } from "lucide-react";
import { LanguageSelector } from "@/components/language-selector";
import { useLanguage } from "@/lib/language-context";
import { AnimatePresence, motion } from "framer-motion";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [socialDrawerOpen, setSocialDrawerOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const NAV_LINKS = [
    { href: "/", label: t("home") },
    { href: "/#what-we-sell", label: t("whatWeSell") },
    { href: "/find-us", label: t("findUs") },
    { href: "/about", label: t("about") },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center group">
            <Image
              src="/images/sp-logo.png"
              alt="SP Accessories logo"
              width={100}
              height={40}
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const base = link.href.split("#")[0];
              const isActive =
                link.href === "/" ? pathname === "/" : base !== "/" && pathname.startsWith(base);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop: language + social button */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <LanguageSelector />
            <button
              type="button"
              onClick={() => setSocialDrawerOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors min-h-[44px] min-w-[44px]"
              aria-label={t("connectWithUs")}
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile: language + social + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            <LanguageSelector />
            <button
              type="button"
              onClick={() => setSocialDrawerOpen(true)}
              className="inline-flex items-center justify-center p-2 text-muted-foreground hover:text-primary transition-colors min-h-[44px] min-w-[44px]"
              aria-label={t("connectWithUs")}
            >
              <MessageCircle className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border/50">
            <nav className="flex flex-col py-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => {
                const base = link.href.split("#")[0];
                const isActive =
                  link.href === "/" ? pathname === "/" : base !== "/" && pathname.startsWith(base);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Social media slide-out drawer */}
      <AnimatePresence>
        {socialDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm"
              onClick={() => setSocialDrawerOpen(false)}
            />
            {/* Drawer from right */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-72 sm:w-80 bg-background border-l border-border shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <h2 className="text-base font-semibold text-foreground">{t("connectWithUs")}</h2>
                <button
                  type="button"
                  onClick={() => setSocialDrawerOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-2 p-5">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100063548379785&ref=bookmarks#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border p-4 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200 group"
                >
                  <Facebook className="h-5 w-5 text-[#1877F2] shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{t("facebook")}</p>
                    <p className="text-xs text-muted-foreground">Smart Phone Accessories</p>
                  </div>
                </a>

                {/* WhatsApp -- Coming Soon */}
                <div className="flex items-center gap-3 rounded-xl border border-border p-4 opacity-60 cursor-default">
                  <MessageCircle className="h-5 w-5 text-[#25D366] shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{t("whatsapp")}</p>
                    <p className="text-xs text-muted-foreground">{t("comingSoon")}</p>
                  </div>
                </div>

                {/* Live Agent -- Coming Soon */}
                <div className="flex items-center gap-3 rounded-xl border border-border p-4 opacity-60 cursor-default">
                  <Headset className="h-5 w-5 text-primary shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{t("liveAgent")}</p>
                    <p className="text-xs text-muted-foreground">{t("comingSoon")}</p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
