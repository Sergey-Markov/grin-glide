"use client";

import BackBtn from "@/components/BackBtn/BackBtn";
import QuickBuyTokens from "@/components/QuickBuyTokens/QuickBuyTokens";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const Investments = () => {
  const t = useTranslations("Investments");
  const router = useRouter();

  const backHandler = () => router.back();

  return (
    <main className=" min-h-screen p-4 md:p-8 text-white pb-24 space-y-6">
      <div className="mb-7 flex flex-row justify-between items-center">
        <BackBtn onClick={backHandler} />
        <h2 className="text-primary text-4xl font-mono font-bold">
          {t("title")}
        </h2>
      </div>
      <p className="font-extralight pl-1">{t("lookingInvestors")}</p>
      <QuickBuyTokens />
    </main>
  );
};

export default Investments;
