import Image from "next/image";
import pointImg from "@images/coin_png_sqooshed.webp";
import classNames from "classnames";

interface PointGringImgProps {
  variant: "small" | "middle";
}

const PointGringImg = ({ variant }: PointGringImgProps) => (
  <Image
    src={pointImg}
    alt="point"
    className={classNames([
      variant === "small" && "w-5 h-5 ",
      variant === "middle" && "w-9 h-9 ",
    ])}
  />
);

export default PointGringImg;
