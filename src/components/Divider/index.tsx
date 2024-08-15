import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      className={twMerge(
        "w-full border-b-2 rounded-sm border-primary dark:border-dark-primary outline-none",
        className
      )}
    />
  );
};

export default Divider;
