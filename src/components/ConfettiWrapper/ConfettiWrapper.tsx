"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Динамічний імпорт для оптимізації завантаження
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

interface AutoConfettiWrapperProps {
  children: React.ReactNode;
  interval?: number; // Інтервал між запусками конфеті (в мілісекундах)
  duration?: number; // Тривалість показу конфеті (в мілісекундах)
}

export default function AutoConfettiWrapper({
  children,
  interval = 8000, // За замовчуванням, запускаємо кожні 10 секунд
  duration = 5000, // За замовчуванням, показуємо протягом 5 секунд
}: AutoConfettiWrapperProps) {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Встановлюємо початкові розміри вікна
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Оновлюємо розміри при зміні розміру вікна
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Функція для запуску конфеті
    const triggerConfetti = () => {
      setIsConfettiActive(true);
      setTimeout(() => setIsConfettiActive(false), duration);
    };

    // Запускаємо конфеті одразу при монтуванні компонента
    triggerConfetti();

    // Встановлюємо інтервал для періодичного запуску конфеті
    const confettiInterval = setInterval(triggerConfetti, interval);

    // Очищення при розмонтуванні компонента
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
          numberOfPieces={200}
        />
      )}
      {children}
    </>
  );
}
