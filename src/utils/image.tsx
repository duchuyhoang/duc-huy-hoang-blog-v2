import { SITE_PREFIX } from "@/constants";

export const getImageSource = (src: string) => {
  return src.startsWith("https://") || src.startsWith("http://")
    ? src
    : `/${src}`;
};
