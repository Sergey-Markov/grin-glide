"use client";

import BackBtn from "@/components/BackBtn/BackBtn";
import { roadStages } from "@/constants";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const completedStages = roadStages.filter(({ isComplete }) => isComplete);
const unCompletedStages = roadStages.filter(({ isComplete }) => !isComplete);

const RoadMap = () => {
  const t = useTranslations("RoadMap");
  const router = useRouter();

  const backHandler = () => router.back();

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
          <div className="mb-7 flex flex-row justify-between items-center">
            <BackBtn onClick={backHandler} />
            <h2 className="text-primary text-4xl font-mono font-bold">
              {t("title")}
            </h2>
          </div>
          <ul className="steps steps-vertical">
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
