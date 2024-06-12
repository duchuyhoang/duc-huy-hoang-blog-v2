import clsx from "clsx";
import React, { ReactHTML, useMemo } from "react";

type TypographyProps<T extends keyof ReactHTML> = {
  component?: T;
  className?: string;
} & JSX.IntrinsicElements[T];

const Typography = <T extends keyof ReactHTML>({
  children,
  className,
  component,
  ...rest
}: React.PropsWithChildren<TypographyProps<T>>) => {
  return (
    <>
      {React.createElement(
        component || "p",
        {
          className: clsx(
            "font-normal text-text-color dark:text-text-color-dark",
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
