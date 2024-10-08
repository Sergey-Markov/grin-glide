import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { useEffect, useState } from "react";

const Language = () => {
  const [userLg, setUserLg] = useState<Locale>("uk");

  useEffect(() => {
    setUserLocale(userLg);
  }, [userLg]);

  const onClick = (lg: Locale) => {
    setUserLg(lg);
  };
  return (
    <main>
      <ul className="flex ">
        <li>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClick("en")}
          >
            English
          </button>
        </li>
      </ul>
    </main>
  );
};

export default Language;
