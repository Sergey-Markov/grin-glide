import { memo } from "react";
import Image from "next/image";
import babyImg from "@images/gring-baby.png";

const HeroStartTask = memo(() => (
  <div className="relative ring-primary ring-offset-base-100 w-80 h-80 rounded-full ring ring-offset-2">
    <Image
      className="absolute z-10"
      src={babyImg}
      alt="baby"
      priority
    />
    <div className="absolute -top-16 -left-14 xs:-left-2 xs:-top-8  ">
      <p
        className=" text-secondary font-sans font-extrabold text-9xl mb-6 drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-blue-500 xs:text-8xl"
        lang="en"
      >
        WHO
      </p>
      <p
        className="text-primary font-sans font-extrabold text-9xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-secondary-content xs:text-8xl"
        lang="en"
      >
        IS
      </p>
      <h2>PIDARas</h2>
    </div>
  </div>
));

export default HeroStartTask;
