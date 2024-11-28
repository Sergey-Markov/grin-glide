"use client";

import BackBtn from "@/components/BackBtn/BackBtn";
import { aboutContent } from "@/constants";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const t = useTranslations("About");

  const backHandler = () => router.back();
  return (
    <main className=" min-h-screen p-4 pb-24 md:p-8 text-white md:pb-24">
      <div className="mb-7 flex flex-row justify-between items-center">
        <BackBtn onClick={backHandler} />
        <h2 className="text-primary text-4xl font-mono font-bold">
          {t("title")}
        </h2>
      </div>
      <ul className="space-y-4">
        {aboutContent.map(({ id, title, text, description }) => {
          const isDescription = description?.length;
          return (
            <li
              key={id}
              className="px-1"
            >
              {title && (
                <h3 className="text-primary text-2xl font-mono font-bold mb-1">
                  {t(title)}
                </h3>
              )}
              {text && <p className="px-2 font-light ">{t(text)}</p>}
              {isDescription && (
                <ul className="list-disc pl-2">
                  {description.map(({ id: key, subTitle, subText }) => (
                    <li key={key}>
                      {subTitle && (
                        <h3 className="text-accent font-mono">{t(subTitle)}</h3>
                      )}
                      <p className="px-2 font-extralight">{t(subText)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default About;
