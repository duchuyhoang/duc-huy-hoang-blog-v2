"use client";
import React, { useContext, useLayoutEffect, useState } from "react";
// (localStorage.getItem("theme") || "light") as
const ThemeContext = React.createContext({
  theme: "light",
  setTheme: (theme: "light" | "dark") => {},
});

const ThemeContextWrapper = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isLoaded, setIsLoaded] = useState(false);
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

    // const canvas = document.getElementById("starfield");
    // const context = (canvas as any).getContext("2d"),
    //   stars = 50000;

    // for (let i = 0; i < stars; i++) {
    //   let x = Math.random() * canvas!.offsetWidth;
    //   let y = Math.random() * canvas!.offsetHeight;
    //   context.fillStyle = "white";
    //   context.fillRect(x, y, 1, 1);
    // }

    setIsLoaded(true);
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
      {isLoaded && <> {children}</>}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContextWrapper;
