/* eslint-disable no-console */

"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";
import Link from "next/link";
import BackBtn from "@/components/BackBtn/BackBtn";
import Preloader from "@/components/Preloader/Preloader";
import { BiWallet } from "react-icons/bi";
import { useUser } from "@/app/contexts/AppContext";
import { updateUserFields } from "@/services/updateUserFields";
import Toast from "@/components/Toast/Toast";

const Wallet = () => {
  const t = useTranslations("Wallet");
  const [tonConnectUI] = useTonConnectUI();
  const { user, updateUser, appErrors, setAppError } = useUser();
  const [tonWalletAddress, setTonWalletAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentWallet = tonConnectUI.wallet;

  const handleWalletConnection = useCallback(
    async (address: string) => {
      setTonWalletAddress(address);
      if (user) {
        try {
          const addWallet = {
            wallet: tonWalletAddress,
            wallet_name: currentWallet?.device.appName,
          };
          const result = await updateUserFields(user.telegram_id, {
            ...addWallet,
          });
          if (result) {
            updateUser(result.userDB);
          }
        } catch (error) {
          setAppError({
            message: "TryLater",
            isShow: true,
          });
        } finally {
          setTimeout(() => setAppError(null), 3500);
        }
      }
      setIsLoading(false);
    },
    [
      currentWallet?.device.appName,
      setAppError,
      tonWalletAddress,
      updateUser,
      user,
    ]
  );

  const handleWalletDisconnection = useCallback(async () => {
    setTonWalletAddress(null);
    if (user) {
      try {
        const deletedWallet = {
          wallet: "",
          wallet_name: "",
        };
        const result = await updateUserFields(user.telegram_id, {
          ...deletedWallet,
        });
        if (result) {
          updateUser(result.userDB);
        }
      } catch (error) {
        setAppError({
          message: "Failed",
          isShow: true,
        });
      } finally {
        setTimeout(() => setAppError(null), 3500);
      }
    }
    setIsLoading(false);
  }, [setAppError, updateUser, user]);

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
    <main className="min-h-screen  p-4 md:p-8 text-white pb-24 space-y-6">
      <div className="mb-7 flex flex-row justify-between items-center">
        <Link href="/">
          <BackBtn />
        </Link>
        <h2 className="text-primary text-4xl font-mono font-bold">
          {t("title")}
        </h2>
      </div>
      <div className="flex items-center justify-between bg-emerald-700 rounded-full p-2 pr-4">
        <div className=" flex items-center">
          <BiWallet className="w-10  h-10 rounded-full mr-1 bg-teal-950 p-2" />
          {tonConnectUI && (
            <p className="font-semibold text-slate-900 underline decoration-emerald-900">
              {currentWallet?.device.appName}
            </p>
          )}
        </div>
        <TonConnectButton />
      </div>
      {appErrors && <Toast message={appErrors.message} />}
    </main>
  );
};
export default Wallet;
