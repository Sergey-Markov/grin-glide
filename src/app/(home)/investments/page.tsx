"use client";

import QuickBuyTokens from "@/components/QuickBuyTokens/QuickBuyTokens";
import { useTranslations } from "next-intl";

const Investments = () => {
  const t = useTranslations("Investments");

  return (
    <main className=" min-h-screen p-4 md:p-8 text-white pb-24">
      <h2 className="text-primary text-4xl font-bold font-mono mb-6">
        {t("title")}
      </h2>
      <p className="font-extralight pl-1 mb-6">{t("lookingInvestors")}</p>
      <QuickBuyTokens />
    </main>
  );
};

export default Investments;
