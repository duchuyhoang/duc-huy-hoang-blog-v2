/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { getImageSource } from "@/utils/image";
import React, {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
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

  useEffect(() => {
    setImg(getImageSource(src || ""));
  }, [src]);
  // const avatarImage = useMemo(() => {
  //   return ;
  // }, [src]);
  return (
    <img
      {...rest}
      src={img}
      className={twMerge("rounded-full object-cover", className)}
      onError={() => {
        // setImg(anonymous.src);
      }}
    />
  );
};

export default Avatar;
