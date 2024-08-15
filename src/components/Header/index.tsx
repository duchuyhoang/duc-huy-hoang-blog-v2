"use client";
import Link from "next/link";
import Container from "../Container";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Button from "../Button";
import { LuSearch } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";
import { IoSunnySharp } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useUI } from "@/context/UIContext";
import { twMerge } from "tailwind-merge";
import SearchBackdrop from "../SearchBackdrop";
import { useDataContext } from "@/context/DataContext";
import logo from "../../../public/5400_6_07-Photoroom.png";
import { motion } from "framer-motion";
import "./style.css";
interface INavLink {
  href: string;
  title: string;
}
const NavLink = ({ href, title }: INavLink) => {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    return pathname === href;
  }, [pathname, href]);
  // const isActive =
  return (
    <>
      <Link
        href={href}
        className={twMerge(
          "relative font-medium text-text-color dark:text-text-color-dark text-[1.125rem] h-[24px] mx-[1rem] cursor-pointer",
          "before:content-[''] before:absolute before:bottom-[-2px] before:h-[3px] before:w-0 before:rounded before:transition-all before:duration-300 before:bg-blue",
          isActive && "!text-blue before:!w-full",
          "hover:!text-blue hover:before:w-full"
        )}
      >
        {title}
      </Link>
    </>
  );
};

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { isTriggerScrollTop } = useUI();
  const [openBackdrop, setOpenBackdrop] = useState(false);

  return (
    <>
      <header
        className={twMerge(
          "z-10 top-0 left-0 pb-5 fixed w-full border-b-[1px] border-solid bg-white dark:bg-dark-primary border-transparent h-[98px]",
          isTriggerScrollTop &&
            "border-primary dark:border-dark-primary h-[81px]"
        )}
        style={{
          transition: "height 0.7s ease-in-out, border-color 0.5s ease-in-out",
          // transitionDelay:
        }}
      >
        <Container className={twMerge("flex justify-between items-center")}>
          <motion.div
            className="w-[80px] h-[80px] relative"
            // initial={{
            //   y: 1000,
            //   opacity: 0,
            // }}
            // animate={{
            //   y: 0,
            //   opacity: 1,
            // }}
            // transition={{
            //   duration: 1,
            // }}
          >
            <img className="w-[80px] h-[80px] logo start" src={logo.src} />
          </motion.div>
          <section className="flex justify-between flex-1">
            <div className="flex items-center">
              <NavLink href="/" title="Home" />
              <NavLink href="/posts" title="Posts" />
              <NavLink href="/contents" title="Contents" />
              <NavLink href="/about-me" title="About Me" />
            </div>
            <div className="flex gap-[2rem] items-center">
              <Button size="sm" type="primary">
                Sign in
              </Button>
              <LuSearch
                className="hover:!text-blue cursor-pointer w-[24px] h-[24px] dark:text-text-color-dark"
                onClick={() => {
                  setOpenBackdrop(true);
                }}
              />
              {theme === "light" ? (
                <FiMoon
                  className="cursor-pointer text-text-color hover:text-blue w-[24px] h-[24px]"
                  onClick={() => {
                    setTheme("dark");
                  }}
                />
              ) : (
                <IoSunnySharp
                  className="cursor-pointer text-text-color-dark hover:text-blue w-[24px] h-[24px]"
                  onClick={() => {
                    setTheme("light");
                  }}
                />
              )}
            </div>
          </section>
        </Container>
      </header>

      <SearchBackdrop
        open={openBackdrop}
        setOpen={(open) => {
          setOpenBackdrop(open);
        }}
      />
    </>
  );
};
export default Header;
