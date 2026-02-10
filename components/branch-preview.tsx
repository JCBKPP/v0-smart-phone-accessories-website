import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const BRANCHES = [
  {
    name: "Inanam",
    phone: "016-743 4011",
    address: "Inanam Business Centre, Block H, PH2, Jalan Tuaran, 88450 Kota Kinabalu",
  },
  {
    name: "City Prade, KK",
    phone: "016-878 4311",
    address: "Lot G 29, City Prade, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu",
  },
  {
    name: "Karamunsing, KK",
    phone: "016-937 5611",
    address: "A-0-1, Lot 1 Block A, Karamunsing Capital, 88450 Kota Kinabalu",
  },
];

export function BranchPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Visit Our Stores
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            We have 3 conveniently located branches across Kota Kinabalu, Sabah. Drop by anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {BRANCHES.map((branch) => (
            <div
              key={branch.name}
              className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground">
                  {branch.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {branch.address}
                </p>
              </div>
              <a
                href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline min-h-[44px]"
              >
                <Phone className="h-4 w-4" />
                {branch.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/find-us"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors min-h-[44px]"
          >
            View All Locations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
