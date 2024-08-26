import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
}

const Button = ({
  className,
  variant,
  size,
  children,
  disabled,
  ...rest
}: React.PropsWithChildren<IButtonProps>) => {
  return (
    <button
      className={twMerge(
        disabled && "opacity-50",
        "group box-border inline-flex justify-center items-center px-[1.5rem]",
        size === "sm" && "h-[40px] leading-[40px] rounded-[20px]",
        variant === "primary" && "bg-blue hover:opacity-[0.8]",
        className
      )}
      disabled={disabled}
      {...rest}
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
