"use client";

import Image from "next/image";
import { investorStatus } from "@/constants";
import { getFirstAndLastLetter } from "@/utils";
import PointGringImg from "../PointGringImg/PointGringImg";

export type TFriend = {
  id: string;
  name: string;
  avatar: string;
  points: number;
  investor: boolean;
};

interface IFriend {
  options: TFriend;
}

const Friend = ({ options }: IFriend) => (
  <li
    key={options.id}
    className="flex items-center bg-emerald-700 rounded-full p-2 pr-4"
  >
    <div
      id="optionsAvatar"
      className="relative"
    >
      {options.avatar ? (
        <Image
          src={options.avatar}
          alt={options.name}
          className="w-12 h-12 rounded-full mr-3"
        />
      ) : (
        <p className="w-12 h-12 rounded-full mr-3 uppercase bg-teal-950 flex items-center justify-center">
          {getFirstAndLastLetter(options.name)}
        </p>
      )}
    </div>
    <div className="flex-grow">
      <h2 className="font-semibold">{options.name}</h2>
      <div className="flex items-center text-sm text-emerald-300">
        <span className="text-lg mr-1">{options.points}</span>
        <PointGringImg variant="small" />
      </div>
    </div>
    {options.investor && <p className="text-yellow-500 ">{investorStatus}</p>}
  </li>
);

export default Friend;
