import { getImageSource } from "@/utils/image";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable @next/next/no-img-element */
type FullSizeImageProps = {
  vertical?: boolean;
  imgClassName?: string;
} & JSX.IntrinsicElements["img"];

const FullSizeImage = ({
  src,
  className,
  vertical,
  imgClassName,
  ...rest
}: FullSizeImageProps) => {
  const realImageSource = useMemo(() => {
    return getImageSource(src || "");
  }, [src]);

  return (
    <div
      className={twMerge("w-full", !vertical && "aspect-[16/9]", className)}
      style={{ borderRadius: "5px", overflow: "hidden" }}
    >
      <img
        className={twMerge("w-full h-full", imgClassName)}
        style={{ objectFit: "cover", borderRadius: "5px", overflow: "hidden" }}
        src={realImageSource}
        alt={"full-size-image"}
        {...rest}
      />
    </div>
  );
};

export default FullSizeImage;
