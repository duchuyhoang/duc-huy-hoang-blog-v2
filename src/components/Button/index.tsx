import clsx from "clsx";

interface IButtonProps {
  className?: string;
  type: "primary" | "secondary";
  size: "sm" | "md" | "lg";
}

const Button = ({
  className,
  type,
  size,
  children,
}: React.PropsWithChildren<IButtonProps>) => {
  return (
    <button
      className={clsx(
        "group box-border inline-flex justify-center items-center px-[1.5rem]",
        size === "sm" && "h-[40px] leading-[40px] rounded-[20px]",
        type === "primary" && "bg-blue hover:opacity-[0.8]",
        className
      )}
    >
      {typeof children === "object" ? (
        <>{children}</>
      ) : (
        <p className="text-white font-medium">{children}</p>
      )}
    </button>
  );
};

export default Button;
