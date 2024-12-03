"use client";

import { useTranslations } from "next-intl";

interface IToast {
  message: string;
}

const Toast = ({ message }: IToast) => {
  const t = useTranslations("Toast");

  return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-warning">
        <span>{t(message)}</span>
      </div>
    </div>
  );
};

export default Toast;
