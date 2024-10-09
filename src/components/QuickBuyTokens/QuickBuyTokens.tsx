import React, { useState } from "react";
import { useTranslations } from "next-intl";
import PointGringImg from "../PointGringImg/PointGringImg";

type TTokenAmount = {
  amount: number;
  currency: "USDT" | "TON";
};

const tokenAmounts = [2, 4, 6, 8, 10, 20, 30, 40, 50, 100, 1000];
const tokenCurrency = ["USDT", "TON"];
const transactionProcessList = [
  {
    id: 1,
    label: "processList1Item",
  },
  {
    id: 2,
    label: "processList2Item",
  },
  {
    id: 3,
    label: "processList3Item",
  },
  {
    id: 4,
    label: "processList4Item",
  },
];

const QuickBuyTokens = () => {
  const [tokenAmount, setTokenAmount] = useState<TTokenAmount>({
    amount: 2,
    currency: "USDT",
  });
  const t = useTranslations("Investments");

  const onCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTokenAmount((prev) => ({
      ...prev,
      currency: e.target.value as "USDT" | "TON", // Явно вказуємо тип
    }));
  };

  const onAmountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTokenAmount((prev) => ({
      ...prev,
      amount: Number(e.target.value), // Конвертуємо значення у число
    }));
  };

  const handleBuy = (amount: number, currency: string) => {
    // eslint-disable-next-line no-console
    console.log(`Buying GrinG tokens for ${amount} ${currency}`);
    // Тут зазвичай інтегрується система оплати або обміну токенів
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-primary text-lg font-mono font-semibold mb-6 text-center">
        {t("quickBuy")}
      </h2>

      <div className="bg-emerald-700 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-1">
          <PointGringImg variant="middle" />
          {t("selectAmount")}
        </h2>

        <div className="flex gap-1 mb-3">
          <select
            className="select select-primary w-full max-w-xs max-h-20 overflow-y-scroll"
            onChange={onAmountChange}
            value={tokenAmount.amount}
          >
            {tokenAmounts.map((el) => (
              <option
                key={el}
                value={el}
              >
                {el}
              </option>
            ))}
          </select>

          <select
            className="select select-primary w-full max-w-xs"
            onChange={onCurrencyChange}
            value={tokenAmount.currency}
          >
            {tokenCurrency.map((el) => (
              <option
                key={el}
                value={el}
              >
                {el}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="btn btn-success w-full"
          onClick={() => handleBuy(tokenAmount.amount, tokenAmount.currency)}
        >
          {t("completeBtn")}
        </button>
      </div>

      <div className="bg-emerald-700 rounded-lg p-6">
        <h2 className="text-primary text-lg font-mono font-semibold mb-6 text-center">
          {t("transactionProcessTitle")}
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          {transactionProcessList.map(({ id, label }) => (
            <li key={id}>{t(label)}</li>
          ))}
        </ol>
      </div>

      <p className="text-center text-sm text-success mt-6">{t("note")}</p>
    </div>
  );
};

export default QuickBuyTokens;
