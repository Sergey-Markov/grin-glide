"use client";

import { investorStatus } from "@/constants";
import { getFirstAndLastLetter } from "@/utils";

export type TFriend = {
  telegram_id: number;
  username: string;
  status: "investor" | "user";
};

interface IFriend {
  options: TFriend;
}

const Friend = ({ options }: IFriend) => (
  <li
    key={options.telegram_id}
    className="flex items-center bg-emerald-700 rounded-full p-2 pr-4"
  >
    <div
      id="optionsAvatar"
      className="relative"
    >
      <p className="w-12 h-12 rounded-full mr-3 uppercase bg-teal-950 flex items-center justify-center">
        {getFirstAndLastLetter(options.username)}
      </p>
    </div>
    <div className="flex-grow">
      <h2 className="font-semibold">{options.username}</h2>
    </div>
    {options.status === "investor" && (
      <p className="text-yellow-500 ">{investorStatus}</p>
    )}
  </li>
);

export default Friend;
