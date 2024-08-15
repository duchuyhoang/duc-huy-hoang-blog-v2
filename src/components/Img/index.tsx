import { HORIZONTAL_IMAGE_RATIO, VERTICAL_IMAGE_RATION } from "@/constants";
import { getImageSource } from "@/utils/image";
import { useLayoutEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Img = ({ src, className, ...rest }: ImageProps) => {
  const [ratio, setRatio] = useState(HORIZONTAL_IMAGE_RATIO);
  const realImageSource = useMemo(() => {
    return getImageSource(src || "");
  }, [src]);

  useLayoutEffect(() => {
    if (realImageSource) {
      const img = new Image();
      img.src = realImageSource;
      img.onload = (e) => {
        const width = img.width,
          height = img.height;
        const ACCEPT_DISTANCE = 20;

        if (
          width - ACCEPT_DISTANCE === height ||
          height - ACCEPT_DISTANCE === width ||
          width === height
        ) {
          setRatio(1);
        } else if (width > height) {
          setRatio(Math.min(width / height, HORIZONTAL_IMAGE_RATIO));
        } else {
          setRatio(VERTICAL_IMAGE_RATION);
        }
      };
    }
  }, [realImageSource]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={twMerge(`w-full rounded-[5px] aspect-[${ratio}]`, className)}
      src={realImageSource}
      alt=""
      style={{
        aspectRatio: ratio,
      }}
      {...rest}
    />
  );
};

export default Img;
