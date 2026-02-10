"use client";

import { useLanguage } from "@/lib/language-context";
import type { Locale } from "@/lib/translations";

const LANGUAGES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ms", label: "BM" },
  { code: "zh", label: "CN" },
];

export function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-border bg-secondary overflow-hidden">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => setLocale(lang.code)}
          className={`px-2 py-1 text-xs font-medium transition-all min-h-[32px] ${
            locale === lang.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch to ${lang.label}`}
          aria-pressed={locale === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
