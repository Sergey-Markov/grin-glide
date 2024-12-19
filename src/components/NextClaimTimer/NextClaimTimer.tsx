"use client";

import { getTimeUntilMidnight } from "@/utils";
import { useEffect, useState } from "react";

const NextClaimTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentCountdownTimer = `claim: ${String(timeLeft.hours).padStart(
    2,
    "0"
  )}:${String(timeLeft.minutes).padStart(2, "0")}:${String(
    timeLeft.seconds
  ).padStart(2, "0")}`;

  return (
    <p className="btn btn-xs text-md text-emerald-400">
      {currentCountdownTimer}
    </p>
  );
};

export default NextClaimTimer;
