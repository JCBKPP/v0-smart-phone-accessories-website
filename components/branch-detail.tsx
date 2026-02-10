"use client";

import { Phone, MapPin, Navigation, Clock } from "lucide-react";

interface BranchDetailProps {
  name: string;
  phone: string;
  address: string;
  mapQuery: string;
  reverse?: boolean;
}

export function BranchDetail({
  name,
  phone,
  address,
  mapQuery,
  reverse = false,
}: BranchDetailProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

  return (
    <div
      className={`flex flex-col gap-6 lg:gap-10 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Map */}
      <div className="flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] rounded-xl overflow-hidden border border-border shadow-sm">
        <iframe
          src={mapSrc}
          className="h-full w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[380px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${name}`}
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-center gap-5 lg:px-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            Branch Location
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground text-balance">
            Smart Phone Accessories
            <br />
            <span className="text-primary">({name})</span>
          </h3>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Phone</p>
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Address</p>
              <p className="text-sm text-foreground leading-relaxed">
                {address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Hours</p>
              <p className="text-sm text-foreground">
                Mon - Sat: 9:30 AM - 7:00 PM
              </p>
              <p className="text-sm text-foreground">
                Sun: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 self-start rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors min-h-[44px]"
        >
          <Navigation className="h-4 w-4" />
          Get Directions
        </a>
      </div>
    </div>
  );
}
