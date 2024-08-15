export const getImageSource = (src: string) => {
  const sitePrefix = process.env.NEXT_PUBLIC_BASE_HREF || "";

  return src.startsWith("https://") || src.startsWith("http://")
    ? src
    : `${sitePrefix}/${src}`.replace("//", "/");
};
