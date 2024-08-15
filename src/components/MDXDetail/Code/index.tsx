import React from "react";
import { twMerge } from "tailwind-merge";

interface CodeTagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const CodeTag = ({ className, children, ...rest }: CodeTagProps) => {
  return (
    <code
      className={twMerge(
        "py-[1.5px] px-[4px] bg-code-bg dark:bg-dark-tag rounded-[5px] dark:text-text-color-dark text-[0.875rem]",
        className
      )}
    >
      {children}
    </code>
  );
};
export default CodeTag;
