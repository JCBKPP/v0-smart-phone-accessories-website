"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

const CATEGORIES = [
  "Phone Cases",
  "Screen Protectors",
  "Charging Cables",
  "Power Banks",
  "Phone Holders",
  "Earphones",
  "Camera Accessories",
  "Phone Grips",
  "Cleaning Kits",
  "Storage",
];

const PRODUCTS = [
  "iPhone 15 Pro Max Case",
  "Samsung Galaxy S24 Case",
  "Tempered Glass Screen Protector",
  "USB-C Fast Charging Cable",
  "Lightning Cable",
  "20000mAh Power Bank",
  "10000mAh Portable Charger",
  "Car Phone Mount",
  "Magnetic Phone Holder",
  "Wireless Earbuds",
  "Bluetooth Earphones",
  "Phone Camera Lens Kit",
  "Selfie Ring Light",
  "PopSocket Grip",
  "Phone Stand",
  "Microfiber Cleaning Cloth",
  "Screen Cleaning Kit",
  "Memory Card 128GB",
  "OTG Adapter",
  "Wireless Charger Pad",
];

export function SmartSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const allItems = [...CATEGORIES.map((c) => ({ name: c, type: "category" as const })), ...PRODUCTS.map((p) => ({ name: p, type: "product" as const }))];

  const filtered = allItems.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory
      ? item.type === "product" || item.name === selectedCategory
      : true;
    return matchesQuery && matchesCategory;
  });

  const suggestions = query.length > 0 ? filtered.slice(0, 8) : [];

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
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <input
          ref={inputRef}
          type="search"
          placeholder="Search accessories..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (query.length > 0) setIsOpen(true);
          }}
          className="h-10 w-full rounded-lg border border-border bg-card pl-10 pr-10 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
          aria-label="Search accessories"
          aria-expanded={isOpen && suggestions.length > 0}
          aria-haspopup="listbox"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              setSelectedCategory(null);
            }}
            className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && suggestions.length > 0 && (
        <div
          className="absolute top-full left-0 right-0 z-50 mt-1 rounded-lg border border-border bg-card shadow-lg overflow-hidden"
          role="listbox"
        >
          {selectedCategory && (
            <div className="flex items-center gap-2 border-b border-border px-3 py-2 text-xs text-muted-foreground">
              <span>
                {"Filtering: "}
                {selectedCategory}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="text-primary hover:underline"
              >
                Clear
              </button>
            </div>
          )}
          {suggestions.map((item) => (
            <button
              key={item.name}
              type="button"
              className="flex w-full items-center gap-3 px-3 py-2.5 text-sm text-card-foreground hover:bg-secondary transition-colors text-left"
              onClick={() => {
                if (item.type === "category") {
                  setSelectedCategory(item.name);
                  setQuery("");
                  inputRef.current?.focus();
                } else {
                  setQuery(item.name);
                  setIsOpen(false);
                }
              }}
              role="option"
              aria-selected={false}
            >
              <Search className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <span>{item.name}</span>
              {item.type === "category" && (
                <span className="ml-auto text-xs text-primary font-medium">
                  Category
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
