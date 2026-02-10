"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function WarrantyReturnPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("backToHome")}
        </Link>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
          {t("warrantyTitle")}
        </h1>

        <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("warrantyIntro")}
        </p>

        <div className="mt-8 flex flex-col gap-8">
          {/* Product Warranty */}
          <div>
            <h2 className="text-base md:text-lg font-semibold text-foreground">
              {t("warrantyTermsTitle")}
            </h2>
            <p className="mt-1.5 text-sm md:text-base text-muted-foreground leading-relaxed">
              {t("warrantyTermsText")}
            </p>
          </div>

          {/* Return Conditions */}
          <div>
            <h2 className="text-base md:text-lg font-semibold text-foreground">
              {t("returnTitle")}
            </h2>
            <p className="mt-1.5 text-sm md:text-base text-muted-foreground leading-relaxed">
              {t("returnText")}
            </p>
          </div>

          {/* Defective Products */}
          <div>
            <h2 className="text-base md:text-lg font-semibold text-foreground">
              {t("defectTitle")}
            </h2>
            <p className="mt-1.5 text-sm md:text-base text-muted-foreground leading-relaxed">
              {t("defectText")}
            </p>
          </div>

          {/* How to Claim */}
          <div>
            <h2 className="text-base md:text-lg font-semibold text-foreground">
              {t("claimTitle")}
            </h2>
            <ul className="mt-2 flex flex-col gap-2">
              <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {t("claimStep1")}
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {t("claimStep2")}
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {t("claimStep3")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
