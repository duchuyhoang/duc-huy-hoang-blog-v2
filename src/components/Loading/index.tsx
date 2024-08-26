import { twMerge } from "tailwind-merge";
import { MiniLoading } from "../Icons";

interface LoadingProps {
  size: "sm" | "md" | "lg";
  className?: string;
}

const Loading = ({ size, className }: LoadingProps) => {
  return (
    <div className={twMerge("flex justify-center items-center", className)}>
      <MiniLoading
        className={twMerge(
          "animate-spin text-text-color-dark",
          size === "sm" && "size-4",
          size === "md" && "size-6",
          size === "lg" && "size-12"
        )}
        style={{
          animationDuration: 0.25,
        }}
      />
    </div>
  );
};

export default Loading;
