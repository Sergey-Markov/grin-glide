import { GiPolarStar } from "react-icons/gi";

const Stars = ({ delay }: { delay: number }) => (
  <GiPolarStar
    className="absolute text-white rounded-full animate-ping"
    size={8}
    style={{
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 100}%`,
      right: `${Math.random() * 100}%`,
    }}
  />
);

export default Stars;
