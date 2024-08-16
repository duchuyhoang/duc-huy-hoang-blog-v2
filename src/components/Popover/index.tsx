import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface PopoverProps extends React.PropsWithChildren {
  open: boolean;
  //   anchorEl:
}

const Popover = ({ open, children }: PopoverProps) => {
  return (
    <motion.div
      className={twMerge(
        "fixed border-1 rounded-lg border-primary dark:border-dark-primary outline-none z-[2000]"
      )}
      variants={{
        popoverHide: {
          visibility: "hidden",
        },
        popoverOpen: {
          visibility: "visible",
        },
      }}
      animate={open ? "popoverOpen" : "popoverHide"}
    >
      {children}
    </motion.div>
  );
};

export default Popover;
