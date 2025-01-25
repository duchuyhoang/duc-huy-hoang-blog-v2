/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { getImageSource } from "@/utils/image";
import React, {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import anonymous from "../../../public/anonymous.jpg";

interface AvatarProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Avatar = ({ className, src, ...rest }: AvatarProps) => {
  const [img, setImg] = useState("");

  useLayoutEffect(() => {
    setImg(getImageSource(src || ""));
  }, [src]);

  if (!img) return null;

  return (
    <img
      {...rest}
      src={img}
      className={twMerge("rounded-full object-cover", className)}
      onError={() => {
        setImg(anonymous.src); 
      }}
    />
  );
};

export default Avatar;
