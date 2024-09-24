import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-green-950 h-screen w-full ">
      <p>{t("title")}</p>
      <button
        type="button"
        className="btn btn-primary"
      >
        language
      </button>
    </div>
  );
}
