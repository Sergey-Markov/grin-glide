"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface VoteFormProps {
  options: any[];
}

type TVote = {
  futureGrinG: string;
};

const VoteForm = ({ options }: VoteFormProps) => {
  // eslint-disable-next-line no-unused-vars
  const [voteResult, setVoteResult] = useState<TVote | null>(null);
  const t = useTranslations("VoteForm");

  const onChangeHandler = (e: { target: { value: string } }) => {
    setVoteResult({
      futureGrinG: e.target.value,
    });
  };

  return (
    <section
      id="vote-home"
      className="text-center font-serif text-xl"
    >
      <p className="mb-4">{t("1quest")}</p>
      <form className="flex gap-4 flex-col items-center">
        <div className="flex gap-1 justify-center">
          {options.map(({ id, name, valueField, checked }) => (
            <input
              key={id}
              type="radio"
              name={name}
              value={valueField}
              aria-label={t(valueField)}
              className="btn"
              onChange={onChangeHandler}
              defaultChecked={checked}
            />
          ))}
        </div>
        <button
          type="submit"
          className="btn  btn-success"
        >
          {t("confirmBtn")}
        </button>
      </form>
    </section>
  );
};

export default VoteForm;
