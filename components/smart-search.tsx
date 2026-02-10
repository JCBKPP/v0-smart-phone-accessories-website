"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const CATEGORY_KEYS = [
  "phoneCases",
  "screenProtectors",
  "chargingCables",
  "powerBanks",
  "phoneHolders",
  "earphones",
  "cameraAccessories",
  "phoneGrips",
  "cleaningKits",
  "storage",
] as const;

export function SmartSearch() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = CATEGORY_KEYS.map((key) => t(key));

  // Filter: match items that START with the query, or whose words start with the query
  const filtered =
    query.length > 0
      ? categories.filter((name) => {
          const q = query.toLowerCase();
          const lower = name.toLowerCase();
          // Match if the full name starts with the query
          if (lower.startsWith(q)) return true;
          // Match if any word in the name starts with the query
          return lower.split(/\s+/).some((word) => word.startsWith(q));
        })
      : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="search"
          placeholder={t("searchPlaceholder")}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (query.length > 0) setIsOpen(true);
          }}
          className="h-9 w-full rounded-full border border-border bg-secondary pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary/40 focus:outline-none transition-all"
          aria-label={t("searchPlaceholder")}
          aria-expanded={isOpen && filtered.length > 0}
          aria-haspopup="listbox"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && filtered.length > 0 && (
        <div
          className="absolute top-full left-0 right-0 z-50 mt-1.5 rounded-xl border border-border bg-background shadow-lg overflow-hidden"
          role="listbox"
        >
          {filtered.map((name) => (
            <button
              key={name}
              type="button"
              className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors text-left"
              onClick={() => {
                setQuery(name);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={false}
            >
              <Search className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <span>{name}</span>
              <span className="ml-auto text-xs text-primary font-medium">
                {t("category")}
              </span>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length > 0 && filtered.length === 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 rounded-xl border border-border bg-background shadow-lg overflow-hidden">
          <p className="px-4 py-3 text-sm text-muted-foreground">
            No matching categories found.
          </p>
        </div>
      )}
    </div>
  );
}
