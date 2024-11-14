"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

interface AutoConfettiWrapperProps {
  children: React.ReactNode;
  interval?: number;
  duration?: number;
}

export default function AutoConfettiWrapper({
  children,
  interval = 8000,
  duration = 5000,
}: AutoConfettiWrapperProps) {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    const triggerConfetti = () => {
      setIsConfettiActive(true);
      setTimeout(() => setIsConfettiActive(false), duration);
    };

    triggerConfetti();

    const confettiInterval = setInterval(triggerConfetti, interval);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(confettiInterval);
    };
  }, [interval, duration]);

  return (
    <>
      {isConfettiActive && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      {children}
    </>
  );
}
