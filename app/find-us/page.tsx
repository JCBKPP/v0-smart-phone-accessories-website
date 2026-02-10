import type { Metadata } from "next";
import { BranchDetail } from "@/components/branch-detail";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find Smart Phone Accessories branches in Kota Kinabalu, Sabah. Visit us at Inanam, City Prade, or Karamunsing Capital.",
};

const BRANCHES = [
  {
    name: "Smart Phone Accessories (Inanam)",
    phone: "016-743 4011",
    address:
      "LOT 59, GROUND FLOOR INANAM BUSINESS CENTRE, BLOCK H, PH2, Jalan Tuaran, 88450 Kota Kinabalu, Sabah",
    mapQuery: "Inanam Business Centre Block H Jalan Tuaran Kota Kinabalu Sabah",
  },
  {
    name: "Smart Phone Accessories (City Prade, KK)",
    phone: "016-878 4311",
    address:
      "Lot G 29, City Prade, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah",
    mapQuery: "City Prade Pusat Bandar Kota Kinabalu Sabah",
  },
  {
    name: "Smart Phone Accessories (Karamunsing Mall, KK)",
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
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Find Us
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
            Visit any of our 3 branches across Kota Kinabalu, Sabah.
          </p>
        </div>
      </section>

      {/* Branch Sections */}
      <section className="pb-20 md:pb-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {BRANCHES.map((branch, index) => (
              <div key={branch.name}>
                <BranchDetail
                  name={branch.name}
                  phone={branch.phone}
                  address={branch.address}
                  mapQuery={branch.mapQuery}
                />
                {index < BRANCHES.length - 1 && (
                  <div className="mt-20 border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            Need Help Finding Us?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
            Give us a call and we will guide you to our store.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0167434011"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors min-h-[44px]"
            >
              Call Inanam: 016-743 4011
            </a>
            <a
              href="tel:0168784311"
              className="inline-flex items-center gap-2 rounded-full border border-muted-foreground/30 text-foreground px-8 py-3 text-sm font-semibold hover:border-muted-foreground/50 hover:bg-secondary transition-all min-h-[44px]"
            >
              Call City Prade: 016-878 4311
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
