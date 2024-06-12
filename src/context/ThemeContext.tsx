"use client";
import React, { useContext, useLayoutEffect, useState } from "react";
// (localStorage.getItem("theme") || "light") as
const ThemeContext = React.createContext({
  theme: "light",
  setTheme: (theme: "light" | "dark") => {},
});

const ThemeContextWrapper = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useLayoutEffect(() => {
    const localStorageTheme = (localStorage.getItem("theme") || "light") as
      | "light"
      | "dark";
    setTheme(localStorageTheme);
    if (localStorageTheme == "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (v) => {
          setTheme(v);
          localStorage.setItem("theme", v);
          document.documentElement.classList.toggle("dark");
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContextWrapper;
