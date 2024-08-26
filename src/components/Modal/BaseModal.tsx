import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export interface IBaseModalProps extends React.PropsWithChildren {
  open: boolean;
  center: boolean;
  onClose: (open: boolean) => void;
}

const BaseModal = ({ open, onClose, center, children }: IBaseModalProps) => {
  return (
    <section
      className={twMerge("fixed inset-0 z-[1000] hidden", open && "flex")}
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClose(false);
      }}
    >
      <div
        className={twMerge(center && "absolute top-[50%] left-[50%]")}
        style={{
          ...(center && {
            transform: "translate(-50%,-50%)",
          }),
        }}
      >
        <motion.div
          className={twMerge(
            "relative p-8 rounded-lg bg-primary dark:bg-dark-primary"
          )}
          variants={{
            hide: {
              y: -100,
              visibility: "hidden",
              opacity: 0,
            },
            show: {
              y: 0,
              visibility: "visible",
              opacity: 1,
            },
          }}
          initial={"hide"}
          animate={open ? "show" : "hide"}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <IoClose
            className="absolute size-6 right-4 top-4 cursor-pointer dark:text-text-color-dark"
            onClick={(e) => {
              onClose(false);
              e.stopPropagation();
            }}
          />
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default BaseModal;
