"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function SiteFooter() {
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t("home") },
    { href: "/#what-we-sell", label: t("whatWeSell") },
    { href: "/find-us", label: t("findUs") },
    { href: "/about", label: t("about") },
  ];

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/sp-logo.png"
              alt="SP Accessories logo"
              width={100}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Nav links */}
          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-1"
            aria-label="Footer navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Policy links + Copyright */}
        <div className="mt-6 pt-4 border-t border-border flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-[11px] text-muted-foreground/60 hover:text-muted-foreground hover:underline transition-colors"
            >
              {t("privacyTitle")}
            </Link>
            <span className="text-muted-foreground/30 text-[11px]">|</span>
            <Link
              href="/warranty-return"
              className="text-[11px] text-muted-foreground/60 hover:text-muted-foreground hover:underline transition-colors"
            >
              {t("warrantyTitle")}
            </Link>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
