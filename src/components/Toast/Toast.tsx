"use client";

import { useTranslations } from "next-intl";

const Toast = () => {
  const t = useTranslations("Toast");

  return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-warning">
        <span>{t("failedCopyLink")}</span>
      </div>
    </div>
  );
};

export default Toast;
