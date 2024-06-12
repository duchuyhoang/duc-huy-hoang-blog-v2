import clsx from "clsx";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      className={clsx(
        "w-full h-[3px] rounded-sm bg-divider dark:bg-divider-dark border-none outline-none",
        className
      )}
    />
  );
};

export default Divider;
