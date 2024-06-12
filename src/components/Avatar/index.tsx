/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { getImageSource } from "@/utils/image";
import clsx from "clsx";
import React, { DetailedHTMLProps, ImgHTMLAttributes, useMemo } from "react";

interface AvatarProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Avatar = ({ className, src, ...rest }: AvatarProps) => {
  const avatarImage = useMemo(() => {
    return getImageSource(src || "");
  }, [src]);
  return (
    <img
      {...rest}
      src={avatarImage}
      className={clsx("rounded-full object-cover", className)}
    />
  );
};

export default Avatar;
