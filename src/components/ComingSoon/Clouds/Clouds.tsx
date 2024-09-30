import { FaCloud } from "react-icons/fa6";
import s from "./Cloud.module.css";

const Clouds = ({ delay }: { delay: number }) => (
  <FaCloud
    className={s.icon}
    size={90}
    style={{
      animationDelay: `${delay}ms`,
      animationDuration: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 50}%`,
    }}
  />
);

export default Clouds;
