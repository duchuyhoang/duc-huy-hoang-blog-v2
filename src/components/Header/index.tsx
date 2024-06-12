"use client";
import Link from "next/link";
import Container from "../Container";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Button from "../Button";
import { LuSearch } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";
import { IoSunnySharp } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
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
        className={clsx(
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
  return (
    <header className="py-[20px]">
      <Container className="flex justify-between items-center">
        <div className="w-[150px]">Logo</div>
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
            <LuSearch className="hover:!text-blue cursor-pointer w-[24px] h-[24px] dark:text-text-color-dark" />
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
  );
};
export default Header;
