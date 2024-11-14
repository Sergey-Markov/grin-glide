"use client";

/* eslint-disable no-plusplus */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ConfettiWrapperProps {
  children: React.ReactNode;
  duration?: number;
  colors?: string[];
  particleCount?: number;
}

const ConfettiWrapper: React.FC<ConfettiWrapperProps> = ({
  children,
  duration = 4,
  colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
  particleCount = 50,
}) => {
  const [confetti, setConfetti] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    const newConfetti = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 200 - 100; // Random x position
      const y = Math.random() * -100 - 50; // Start above the container
      const rotation = Math.random() * 360; // Random rotation
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5; // Random size between 5 and 15

      newConfetti.push(
        <motion.div
          key={i}
          className="absolute"
          style={{
            backgroundColor: color,
            width: size,
            height: size,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%", // Mix of circles and squares
          }}
          initial={{ x, y, rotate: 0, opacity: 1 }}
          animate={{
            y: [y, 200], // Fall down
            x: [x, x + (Math.random() * 100 - 50)], // Slight horizontal movement
            rotate: [0, rotation],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration,
            ease: "easeInOut",
            times: [0, 0.8, 1],
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        />
      );
    }

    setConfetti(newConfetti);
  }, [colors, duration, particleCount]);

  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-[300px] min-w-[300px]">
      {confetti}
      {children}
    </div>
  );
};

export default ConfettiWrapper;
