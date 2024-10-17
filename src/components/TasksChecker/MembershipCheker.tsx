/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-shadow */

"use client";

import { useEffect, useState } from "react";
import { BiCheckCircle, BiLogoTelegram } from "react-icons/bi";
import WebApp from "@twa-dev/sdk";

const MembershipChecker = () => {
  const [isChannelMember, setIsChannelMember] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [telegramId, setTelegramId] = useState<string | null>(null);
  const [channelUserName, setChannelUserName] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (WebApp) {
      const initDataString = WebApp.initData;
      if (initDataString) {
        const urlParams = new URLSearchParams(initDataString);
        try {
          const user = JSON.parse(urlParams.get("user") || "{}");
          if (user.id) {
            setTelegramId(user.id.toString());
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    }
  }, []);

  const checkChannelMembership = async () => {
    if (!telegramId) {
      alert("This App can only be used within Telegram");
      return;
    }

    if (!channelUserName) {
      alert(`Please enter a channel username`);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/check-membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          telegramId,
          channelUserName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to check membership");
      }

      const data = await response.json();
      setIsChannelMember(data.isMember);
      setError(null);
    } catch (error) {
      console.error("Error checking channel membership:", error);
      setIsChannelMember(false);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!telegramId) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 ">
        <h1 className="text-4xl font-bold font-mono mb-8 ">
          Telegram channel Membership Check
        </h1>
        <p className="text-xl font-light ">
          This App can only be used within Telegram as a Mini App.
        </p>
      </main>
    );
  }

  return (
    <div>
      <input
        type="text"
        value={channelUserName}
        onChange={(e) => setChannelUserName(e.target.value)}
        placeholder="type your telegram name(@example)"
        className="bg-primary-content font-mono p-2 rounded-full max-w-screen-md "
      />
      <div className="flex items-center justify-between w-full p-4">
        <BiLogoTelegram size={50} />
        <h2>Sibscribe to Gring oficial telegram channel</h2>
        <button
          type="button"
          className="btn btn-circle"
          disabled={isLoading || !channelUserName}
          onClick={checkChannelMembership}
        >
          {isLoading ? "Loading..." : <BiCheckCircle size={40} />}
        </button>
      </div>
      {error && <p>{error}</p>}
      {isChannelMember !== null && !isLoading && (
        <p>{isChannelMember ? "it`s a member" : "It`s not a member"}</p>
      )}
    </div>
  );
};

export default MembershipChecker;
