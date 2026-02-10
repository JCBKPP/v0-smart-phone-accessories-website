import type { Metadata } from "next";
import { BranchDetail } from "@/components/branch-detail";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find Smart Phone Accessories branches in Kota Kinabalu, Sabah. Visit us at Inanam, City Prade, or Karamunsing Capital.",
};

const BRANCHES = [
  {
    name: "Inanam",
    phone: "016-743 4011",
    address:
      "LOT 59, GROUND FLOOR INANAM BUSINESS CENTRE, BLOCK H, PH2, Jalan Tuaran, 88450 Kota Kinabalu, Sabah",
    mapQuery: "Inanam Business Centre Block H Jalan Tuaran Kota Kinabalu Sabah",
  },
  {
    name: "City Prade, KK",
    phone: "016-878 4311",
    address:
      "Lot G 29, City Prade, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah",
    mapQuery: "City Prade Pusat Bandar Kota Kinabalu Sabah",
  },
  {
    name: "Karamunsing Shopping Mall, KK",
    phone: "016-937 5611",
    address:
      "A-0-1, Lot 1 BLOCK A, GROUND FLOOR, Karamunsing Capital, 88450 Kota Kinabalu, Sabah",
    mapQuery: "Karamunsing Capital Kota Kinabalu Sabah",
  },
];

export default function FindUsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-foreground py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
            Find Us
          </h1>
          <p className="mt-4 text-primary-foreground/70 max-w-lg mx-auto leading-relaxed">
            Visit any of our 3 conveniently located branches across Kota Kinabalu, Sabah.
          </p>
        </div>
      </section>

      {/* Branch Sections */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 lg:gap-24">
            {BRANCHES.map((branch, index) => (
              <div key={branch.name}>
                <BranchDetail
                  name={branch.name}
                  phone={branch.phone}
                  address={branch.address}
                  mapQuery={branch.mapQuery}
                  reverse={index % 2 === 1}
                />
                {index < BRANCHES.length - 1 && (
                  <div className="mt-16 lg:mt-24 border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-secondary text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Need Help Finding Us?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
            Give us a call at any branch and we will guide you to our store.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0167434011"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors min-h-[44px]"
            >
              Call Inanam: 016-743 4011
            </a>
            <a
              href="tel:0168784311"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground hover:bg-secondary transition-colors min-h-[44px]"
            >
              Call City Prade: 016-878 4311
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
