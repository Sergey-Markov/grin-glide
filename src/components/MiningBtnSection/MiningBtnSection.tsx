"use client";

import { useRef, useState } from "react";
import LogoIcon from "../LogoIcon/LogoIcon";

const MiningBtnSection = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // Таймер на 10 секунд
  const searchTimeout = useRef<any | null>(null);
  const intervalRef = useRef<any | null>(null);

  const startSearch = () => {
    setIsSearching(true);
    setTimeLeft(10); // Устанавливаем начальное значение таймера

    // Обновляем таймер каждую секунду
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current); // Останавливаем таймер
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Устанавливаем таймаут завершения
    searchTimeout.current = setTimeout(() => {
      setIsSearching(false);
      clearInterval(intervalRef.current); // Останавливаем таймер
    }, 10000);
  };

  const stopSearch = () => {
    setIsSearching(false);
    clearTimeout(searchTimeout.current); // Очищаем таймаут
    clearInterval(intervalRef.current); // Останавливаем таймер
    setTimeLeft(10); // Сбрасываем таймер
  };

  return (
    <button
      type="button"
      className={`relative mx-auto my-0 flex justify-center items-center mb-8 bg-transparent  p-4 md:p-8 cursor-pointer ${
        isSearching ? "animate-pulse" : ""
      }`}
      onMouseDown={startSearch}
      onMouseUp={stopSearch}
      onMouseLeave={stopSearch}
      onTouchStart={startSearch}
      onTouchEnd={stopSearch}
      onContextMenu={(e) => e.preventDefault()} // Отключение контекстного меню
      style={{
        userSelect: "none", // Отключение выделения текста
        WebkitUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,150,0.03)1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.03)1px,transparent_1px)] bg-[size:20px_20px] " />

      <div className="ring-primary ring-offset-base-100 rounded-full ring ring-offset-2 w-72 h-72 ">
        <LogoIcon />
      </div>
      {isSearching && (
        <span className="absolute top-full mt-4 text-white text-lg">
          {`${timeLeft}s`}
        </span>
      )}
    </button>
  );
};

export default MiningBtnSection;

// {
//   /* Coordinates Display */
// }
// {
//   coordinates && (
//     <div className="mt-6 text-center">
//       <p className="text-[#00ff96] text-sm uppercase tracking-wider mb-2">
//         Локацію знайдено
//       </p>
//       <div className="bg-black/50 backdrop-blur-sm border border-[#00ff96]/30 rounded-lg p-3">
//         <p
//           className="font-mono text-[#00ff96] cursor-pointer"
//           onClick={() => navigator.clipboard.writeText(coordinates)}
//         >
//           {coordinates}
//         </p>
//       </div>
//     </div>
//   );
// }

// {
//   /* Instructions */
// }
// {
//   !isSearching && !coordinates && (
//     <p className="mt-6 text-[#00ff96]/70 text-sm uppercase tracking-wider">
//       Натисніть та утримуйте для пошуку
//     </p>
//   );
// }
