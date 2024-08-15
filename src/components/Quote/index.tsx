import React from "react";
// import { CgDanger } from "react-icons/cg";
import { MdDangerous } from "react-icons/md";
import "./quote.css";
import { Info } from "../Icons";
import { PiSealWarningBold } from "react-icons/pi";

enum QUOTE_TYPE {
  INFO = "INFO",
  WARNING = "WARNING",
  DANGER = "DANGER",
}

const QuoteClassMap = {
  INFO: "info",
  WARNING: "warning",
  DANGER: "danger",
};

export interface IQuote {
  title: string;
  type: QUOTE_TYPE;
}

const Quote = ({ title, type, children }: React.PropsWithChildren<IQuote>) => {
  return (
    <div
      className={`quote mt-5 mb-5 ${
        QuoteClassMap[type] || QuoteClassMap[QUOTE_TYPE.INFO]
      }`}
    >
      <div className="icon-wrapper flex justify-center items-center size-[36px] rounded-full absolute bg-primary dark:bg-dark-primary top-[-18px] left-[-18px]">
        {type === QUOTE_TYPE.INFO && <Info className="size-[24px]" />}

        {type === QUOTE_TYPE.DANGER && (
          <MdDangerous color="#ed3c50" className="size-[32px]" />
        )}
        {type === QUOTE_TYPE.WARNING && (
          <PiSealWarningBold className="size-[32px]" color="#ad850e" />
        )}
      </div>

      <h3 className="quote_title">{title}</h3>
      {children}
    </div>
  );
};

export default Quote;
