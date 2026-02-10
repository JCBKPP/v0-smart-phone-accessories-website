"use client";

import Link from "next/link";
import { SpLogo } from "@/components/sp-logo";
import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Company */}
          <div className="flex items-center gap-2.5">
            <SpLogo size={32} />
            <div>
              <p className="text-lg font-semibold text-foreground">SP Accessories</p>
              <p className="text-sm text-muted-foreground">Better In Your Life</p>
            </div>
          </div>

          {/* Center: Quick links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {["Home", "Accessories", "Find Us", "About"].map((label) => {
              const href = label === "Home" ? "/" : label === "Accessories" ? "/#accessories" : label === "Find Us" ? "/find-us" : "/about";
              return (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Contact numbers */}
          <div className="text-sm text-muted-foreground">
            <p className="mb-1">Visit our stores</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="tel:0167434011" className="hover:text-primary transition-colors">016-743 4011</a>
              <a href="tel:0168784311" className="hover:text-primary transition-colors">016-878 4311</a>
              <a href="tel:0169375611" className="hover:text-primary transition-colors">016-937 5611</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            {"2025 Smart Phone Accessories Sdn Bhd"}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
