import { useTranslations } from "next-intl";
import Image from "next/image";
import { BiCheckDouble, BiWallet } from "react-icons/bi";
import { walletsList } from "@/constants";

const Wallet = () => {
  const t = useTranslations("Wallet");

  return (
    <main className="min-h-screen p-4 md:p-8 text-white pb-24">
      <h2 className="text-primary text-4xl font-bold font-mono mb-6">
        {t("title")}
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
};

export default Wallet;
