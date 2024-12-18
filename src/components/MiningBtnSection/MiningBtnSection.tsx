"use client";

import { useRef, useState } from "react";
import LogoIcon from "../LogoIcon/LogoIcon";

const MiningBtnSection = () => {
  const [isSearching, setIsSearching] = useState(false);
  // const [coordinates, setCoordinates] = useState<string | null>(null);
  const searchTimeout = useRef<any | null>(null);

  const startSearch = () => {
    setIsSearching(true);
    // setCoordinates(null);

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      // const randomLat = (Math.random() * 180 - 90).toFixed(6);
      // const randomLng = (Math.random() * 360 - 180).toFixed(6);
      // setCoordinates(`${randomLat}, ${randomLng}`);
      setIsSearching(false);
    }, 10000);
  };

  const stopSearch = () => {
    setIsSearching(false);
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
  };

  return (
    <button
      type="button"
      className={`relative  flex justify-center items-center mb-8 bg-transparent  p-4 md:p-8 cursor-pointer ${
        isSearching ? "animate-pulse" : ""
      }`}
      onMouseDown={startSearch}
      onMouseUp={stopSearch}
      onMouseLeave={stopSearch}
      onTouchStart={startSearch}
      onTouchEnd={stopSearch}
    >
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,150,0.03)1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.03)1px,transparent_1px)] bg-[size:20px_20px] " />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ring-primary ring-offset-base-100 rounded-full ring ring-offset-2 w-72 h-72 ">
        <LogoIcon />
      </div>
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
