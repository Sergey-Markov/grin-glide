"use client";

import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { LuRocket, LuSun, LuMoonStar } from "react-icons/lu";
import { FaCloud } from "react-icons/fa";
import { COMING_SOON } from "@/constants";
import Stars from "./Stars";
import Clouds from "./Clouds/Clouds";

import s from "./ComingSoon.module.css";

export default function ComingSoon() {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      const hours = new Date().getHours();
      setIsDay(hours >= 6 && hours < 18);
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.innerView}>
        {isDay ? (
          <>
            <LuSun className={s.icon} />
            {[...Array(6)].map((_, i) => (
              <Clouds
                key={uuid()}
                delay={i * 3}
              />
            ))}
          </>
        ) : (
          <>
            <LuMoonStar className={s.icon} />
            {[...Array(25)].map((_, i) => (
              <Stars
                key={uuid()}
                delay={i * 0.5}
              />
            ))}
          </>
        )}
        <div className={s.content}>
          <div className={s.rocketBox}>
            <div className={s.bgRocket} />
            <LuRocket className={s.rocketIcon} />
          </div>
          <div className={s.textBox}>
            <p className={s.text}>{COMING_SOON}</p>
          </div>
        </div>
        <div className={s.staticCloudBox} />
        {[...Array(8)].map(() => (
          <FaCloud
            key={uuid()}
            className={s.cloud}
            size={90}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `scale(${0.5 + Math.random() * 0.5})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
