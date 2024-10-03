import { walletsPageTitle } from "@/constants";
import Image from "next/image";
import { BiCheckDouble, BiWallet } from "react-icons/bi";

type TWallet = {
  id: string;
  name: string;
  avatarSrc: string;
  linkToWallet?: string;
  isConnect: boolean;
};

const walletsList: TWallet[] = [
  {
    id: "1",
    name: "Tonkeeper",
    avatarSrc: "https://avatars.githubusercontent.com/u/88587596?s=200&v=4",
    isConnect: true,
  },
  {
    id: "2",
    name: "Binance",
    avatarSrc:
      "https://www.logo.wine/a/logo/Binance/Binance-BNB-Icon-Logo.wine.svg",
    isConnect: false,
  },
  {
    id: "3",
    name: "Bybit",
    avatarSrc:
      "https://seeklogo.com/images/B/bybit-logo-4C31FD6A08-seeklogo.com.png",
    isConnect: false,
  },
];

const Wallet = () => (
  <main className="min-h-screen p-4 md:p-8 text-white pb-24">
    <h2 className="text-primary text-4xl font-bold font-mono mb-6">
      {walletsPageTitle}
    </h2>
    <ul className="space-y-4">
      {walletsList.map(({ id, name, avatarSrc, isConnect }) => (
        <li
          key={id}
          className="flex items-center justify-between bg-emerald-700 rounded-full p-2 pr-4"
        >
          <div className="flex items-center">
            {avatarSrc ? (
              <Image
                className="w-12 h-12 rounded-full mr-3"
                src={avatarSrc}
                alt={name}
                width={500}
                height={500}
              />
            ) : (
              <BiWallet className="w-12 h-12 rounded-full mr-3 bg-teal-950 p-2" />
            )}
            <p className="font-semibold">{name}</p>
          </div>
          {isConnect && <BiCheckDouble className="w-9 h-9 text-success " />}
        </li>
      ))}
    </ul>
  </main>
);

export default Wallet;
