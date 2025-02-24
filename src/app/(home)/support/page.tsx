import { useTranslations } from "next-intl";
import Link from "next/link";
import BackBtn from "@/components/BackBtn/BackBtn";
import Contacts from "@/components/Contacts/Contacts";
import { SUPPORT_CONTENT } from "@/constants";

const Support = () => {
  const t = useTranslations("Support");

  return (
    <main className=" min-h-screen p-4 md:p-8 text-white pb-24 font-extralight space-y-4 z-0">
      <div className="mb-7 flex flex-row justify-between items-center">
        <Link href="/">
          <BackBtn />
        </Link>
        <h2 className="text-primary text-4xl font-mono font-bold">
          {t("title")}
        </h2>
      </div>
      <p className="pl-1 ">{t("mainPageText")}</p>
      <ul className="space-y-4">
        {SUPPORT_CONTENT.map(({ id, title, text }) => {
          const isFirstEl = id === 1;
          return (
            <li
              key={id}
              className="collapse collapse-arrow bg-teal-900 rounded-lg"
            >
              <input
                type="radio"
                name="info"
                defaultChecked={isFirstEl || undefined}
              />
              <h3 className="collapse-title text-lg font-mono font-semibold ">
                {t(title)}
              </h3>
              <div className="collapse-content">
                <p>{t(text)}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <Contacts />
    </main>
  );
};

export default Support;
