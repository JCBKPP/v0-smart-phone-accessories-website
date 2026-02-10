"use client";

import { BranchDetail } from "@/components/branch-detail";
import { useLanguage } from "@/lib/language-context";

const BRANCHES = [
  {
    name: "Smart Phone Accessories (Inanam)",
    phone: "016-743 4011",
    address:
      "LOT 59, GROUND FLOOR INANAM BUSINESS CENTRE, BLOCK H, PH2, Jalan Tuaran, 88450 Kota Kinabalu, Sabah",
    mapQuery:
      "Inanam Business Centre Block H Jalan Tuaran Kota Kinabalu Sabah",
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
  const { t } = useLanguage();

  return (
    <>
      {/* Page Header */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 section-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t("findUsTitle")}
          </h1>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
            {t("findUsSubtitle")}
          </p>
        </div>
      </section>

      {/* Branch Sections */}
      <section className="pb-12 md:pb-16 section-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {BRANCHES.map((branch, index) => (
              <div key={branch.name}>
                <BranchDetail
                  name={branch.name}
                  phone={branch.phone}
                  address={branch.address}
                  mapQuery={branch.mapQuery}
                />
                {index < BRANCHES.length - 1 && (
                  <div className="mt-12 border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
