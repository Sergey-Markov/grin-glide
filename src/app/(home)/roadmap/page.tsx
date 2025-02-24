"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import BackBtn from "@/components/BackBtn/BackBtn";
import { roadStages } from "@/constants";

const completedStages = roadStages.filter(({ isComplete }) => isComplete);
const unCompletedStages = roadStages.filter(({ isComplete }) => !isComplete);

const RoadMap = () => {
  const t = useTranslations("RoadMap");

  return (
    <main
      className="hero min-h-screen text-white font-sans font-light items-start "
      style={{
        backgroundImage: "url(/assets/images/bgRoadMap.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div>
        <section className="p-4 pb-24 md:p-8 md:pb-24 space-y-6">
          <div className="flex flex-row justify-between items-center">
            <Link href="/">
              <BackBtn />
            </Link>
            <h2 className="text-primary text-4xl font-mono font-bold">
              {t("title")}
            </h2>
          </div>
          <ul className="steps steps-vertical px-1">
            {completedStages.map(({ id, title }) => (
              <li
                key={id}
                className="step step-primary "
              >
                <p className="text-left">{t(title)}</p>
              </li>
            ))}
            {unCompletedStages.map(({ id, title }) => (
              <li
                key={id}
                className="step text-left"
              >
                <p className="text-left">{t(title)}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default RoadMap;
