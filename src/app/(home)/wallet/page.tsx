"use client";

/* eslint-disable no-console */
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useTonConnectUI } from "@tonconnect/ui-react";
// import Address from "@tonconnect/sdk";
import Link from "next/link";
// import Image from "next/image";
// import { BiCheckDouble, BiWallet } from "react-icons/bi";
// import { walletsList } from "@/constants";
import BackBtn from "@/components/BackBtn/BackBtn";
import Preloader from "@/components/Preloader/Preloader";
import { BiWallet } from "react-icons/bi";

const Wallet = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [tonWalletAddress, setTonWalletAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("Wallet");

  const handleWalletConnection = useCallback((address: string) => {
    setTonWalletAddress(address);
    console.log("Wallet connected successfully");
    setIsLoading(false);
  }, []);

  const handleWalletDisconnection = useCallback(() => {
    setTonWalletAddress(null);
    console.log("Wallet disconnected successfully");
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (tonConnectUI.account?.address) {
        handleWalletConnection(tonConnectUI.account?.address);
      } else {
        handleWalletDisconnection();
      }
    };
    checkWalletConnection();

    const unsubscribe = tonConnectUI.onStatusChange((wallet) => {
      if (wallet) {
        handleWalletConnection(wallet.account.address);
      } else {
        handleWalletDisconnection();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [tonConnectUI, handleWalletConnection, handleWalletDisconnection]);

  const handleWalletAction = async () => {
    if (tonConnectUI.connected) {
      setIsLoading(true);
      await tonConnectUI.disconnect();
    } else {
      await tonConnectUI.openModal();
    }
  };

  const formatAddress = (address: string) => {
    const normalizeString = `${address.slice(0, 4)}...${address.slice(-4)}`;
    return normalizeString;
  };
  // const tempAddress = Address.name(address);
  // const tempAddress = Address.parse(address).toString();
  // return `${tempAddress.slice(0, 4)}...${tempAddress.slice(-4)}`;

  if (isLoading) {
    return (
      <main className="min-h-screen flex-col items-center justify-center">
        <div className="mb-7">
          <Preloader />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4 md:p-8 text-white pb-24 space-y-6">
      <div className="mb-7 flex flex-row justify-between items-center">
        <Link href="/">
          <BackBtn />
        </Link>
        <h2 className="text-primary text-4xl font-mono font-bold">
          {t("title")}
        </h2>
      </div>
      <div className="flex items-center justify-between bg-emerald-700 rounded-full p-2 pr-4">
        <BiWallet className="w-12 h-12 rounded-full mr-3 bg-teal-950 p-2" />
        <p className="font-semibold">
          {tonWalletAddress
            ? formatAddress(tonWalletAddress)
            : "Connect a wallet"}
        </p>
        <button
          type="button"
          onClick={handleWalletAction}
        >
          {tonWalletAddress ? "disconnect" : "connect"}
        </button>
      </div>

      {/* <ul className="space-y-4">
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
      </ul> */}
    </main>
  );
};

export default Wallet;
