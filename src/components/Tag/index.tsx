import { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface ITagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label: string;
  selected?: boolean;
}

const Tag = ({ label, selected, className, ...rest }: ITagProps) => {
  return (
    <div
      className={twMerge(
        "box-border cursor-pointer text-blue text-[0.875rem] font-medium px-3 py-1 rounded-full border border-blue transition-colors",
        // "hover:bg-blue hover:text-white",
        selected && "bg-blue text-white",
        className
      )}
      {...rest}
    >
      {label}
    </div>
  );
};

export default Tag;
