"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LanguageSelector } from "@/components/language-selector";
import { useLanguage } from "@/lib/language-context";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const NAV_LINKS = [
    { href: "/", label: t("home") },
    { href: "/#what-we-sell", label: t("whatWeSell") },
    { href: "/find-us", label: t("findUs") },
    { href: "/about", label: t("about") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/70 backdrop-blur-xl">
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

        {/* Desktop: language selector */}
        <div className="hidden md:flex items-center ml-auto">
          <LanguageSelector />
        </div>

        {/* Mobile: language + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <LanguageSelector />
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
        <div className="md:hidden bg-background/90 backdrop-blur-xl border-t border-border/30">
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
  );
}
