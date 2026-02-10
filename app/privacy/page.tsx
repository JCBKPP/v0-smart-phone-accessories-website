"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function PrivacyPage() {
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
          {t("privacyTitle")}
        </h1>

        <div className="mt-6 flex flex-col gap-6">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {t("privacyIntro")}
          </p>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {t("privacyNoCollect")}
          </p>

          <div>
            <h2 className="text-base md:text-lg font-semibold text-foreground">
              {t("privacyCookies")}
            </h2>
            <p className="mt-1.5 text-sm md:text-base text-muted-foreground leading-relaxed">
              {t("privacyCookiesText")}
            </p>
          </div>

          <div>
            <h2 className="text-base md:text-lg font-semibold text-foreground">
              {t("privacyThirdParty")}
            </h2>
            <p className="mt-1.5 text-sm md:text-base text-muted-foreground leading-relaxed">
              {t("privacyThirdPartyText")}
            </p>
          </div>

          <p className="text-sm text-muted-foreground/70 leading-relaxed">
            {t("privacyUpdates")}
          </p>
        </div>
      </div>
    </div>
  );
}
