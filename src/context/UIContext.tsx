"use client";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

const UIContext = React.createContext({
  documentScrollTop: 0,
  isTriggerScrollTop: false,
});

const UIContextWrapper = ({ children }: React.PropsWithChildren) => {
  const [documentScrollTop, setDocumentScrollTop] = useState(0);

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
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
export const useUI = () => useContext(UIContext);

export default UIContextWrapper;
