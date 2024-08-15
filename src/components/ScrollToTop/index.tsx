"use client";
import { useUI } from "@/context/UIContext";
import { twMerge } from "tailwind-merge";
import { FaArrowUp } from "react-icons/fa6";
const ScrollToTop = () => {
  const { isTriggerScrollTop } = useUI();

  return (
    <div
      className={twMerge(
        "hidden size-[52px] cursor-pointer rounded-full bottom-5 right-5 fixed z-[1000] justify-center items-center bg-black opacity-80",
        isTriggerScrollTop && "flex"
      )}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <FaArrowUp color="#fff" />
    </div>
  );
};

export default ScrollToTop;
