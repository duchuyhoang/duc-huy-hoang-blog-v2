"use client";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const UIContext = React.createContext({
  documentScrollTop: 0,
  isTriggerScrollTop: false,
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,
  is2Xl: false,
});

const UIContextWrapper = ({ children }: React.PropsWithChildren) => {
  const [documentScrollTop, setDocumentScrollTop] = useState(0);

  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");
  const is2Xl = useMediaQuery("(min-width: 1536px)");

  useLayoutEffect(() => {
    const handleScroll = () => {
      setDocumentScrollTop(document.documentElement.scrollTop);
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTriggerScrollTop = useMemo(() => {
    return documentScrollTop - 80 > 0;
  }, [documentScrollTop]);

  return (
    <UIContext.Provider
      value={{
        documentScrollTop,
        isTriggerScrollTop,
        isSm,
        isMd,
        is2Xl,
        isLg,
        isXl,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
export const useUI = () => useContext(UIContext);

export default UIContextWrapper;
