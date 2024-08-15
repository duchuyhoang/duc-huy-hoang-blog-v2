import React, { ReactHTML, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps<T extends keyof ReactHTML> = {
  component?: T;
  className?: string;
  overflowToolTip?: boolean;
} & JSX.IntrinsicElements[T];

const Typography = <T extends keyof ReactHTML>({
  children,
  className,
  component,
  overflowToolTip,
  ...rest
}: React.PropsWithChildren<TypographyProps<T>>) => {
  return (
    <>
      {React.createElement(
        component || "p",
        {
          className: twMerge(
            "font-normal text-text-color dark:text-text-color-dark antialiased",
            className
          ),
          ...rest,
        },
        children
      )}
    </>
  );
};

export default Typography;
