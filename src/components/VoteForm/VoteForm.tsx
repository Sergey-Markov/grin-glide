"use client";

/* eslint-disable no-unused-vars */

import { useTranslations } from "next-intl";
import { useState } from "react";

interface VoteFormProps {
  onSend: (voteResult: string) => Promise<any>;
  options: any[];
}

const VoteForm = ({ onSend, options }: VoteFormProps) => {
  const [voteResult, setVoteResult] = useState<string>("pirate");
  const t = useTranslations("VoteForm");

  const onChangeHandler = (e: { target: { value: string } }) => {
    setVoteResult(e.target.value);
  };

  const onClickHandler = async () => {
    try {
      await onSend(voteResult);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <section
      id="vote-home"
      className="text-center font-serif text-xl"
    >
      <p className="mb-4">{t("1quest")}</p>
      <form className="flex gap-4 flex-col items-center">
        <div className="flex gap-1 justify-center">
          {options.map(({ id, name, valueField }) => (
            <input
              key={id}
              type="radio"
              name={name}
              value={valueField}
              aria-label={t(valueField)}
              className="btn"
              onChange={onChangeHandler}
              checked={voteResult === valueField}
            />
          ))}
        </div>
        <button
          type="button"
          className="btn  btn-success"
          onClick={onClickHandler}
        >
          {t("confirmBtn")}
        </button>
      </form>
    </section>
  );
};

export default VoteForm;
