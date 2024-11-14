"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";

// Динамический импорт для оптимизации загрузки
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

interface ConfettiWrapperProps {
  children: React.ReactNode;
}

export default function ConfettiWrapper({ children }: ConfettiWrapperProps) {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const triggerConfetti = useCallback(() => {
    setIsConfettiActive(true);
    const timer = setTimeout(() => setIsConfettiActive(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  // Преобразуем дочерние элементы и передаем пропс triggerConfetti
  const childrenWithProps = React.Children.map(children, (child) => {
    // Проверяем, является ли это валидным элементом React
    if (React.isValidElement(child) && typeof child.type !== "string") {
      // Типизация через React.cloneElement
      return React.cloneElement(child as React.ReactElement<any>, {
        triggerConfetti, // Передаем функцию как пропс
      });
    }
    return child;
  });

  return (
    <div className="relative overflow-hidden">
      {isConfettiActive && (
        <Confetti
          width={typeof window !== "undefined" ? window.innerWidth : 0}
          height={typeof window !== "undefined" ? window.innerHeight : 0}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      {childrenWithProps}
    </div>
  );
}
