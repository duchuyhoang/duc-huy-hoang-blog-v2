/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
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
import logo from "../../../public/logo.png";
import { motion } from "framer-motion";
import "./style.css";
interface INavLink {
  href: string;
  title: string;
}

const NAV_ITEMS: Array<INavLink> = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/posts",
    title: "Posts",
  },
  {
    href: "/contents",
    title: "Contents",
  },
  {
    href: "/about-me",
    title: "About Me",
  },
];

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
  const [openMobileMenu, setOpenMobileMenup] = useState(false);

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
          <Link href={"/"}>
            <div className="size-[80px] relative">
              <img
                className="size-[80px] lg:size-[80px] logo start"
                src={logo.src}
                style={{
                  transition: "margin 0.5s",
                  ...(isTriggerScrollTop && {
                    marginTop: "-10px",
                  }),
                }}
              />
            </div>
          </Link>

          {/* Desktop only */}
          <section className="hidden lg:flex justify-between flex-1">
            <div className="lg:flex items-center">
              {NAV_ITEMS.map(({ href, title }) => (
                <NavLink href={href} title={title} key={`desktop_${href}`} />
              ))}
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

          {/* Mobile only */}
          <section
            className="relative flex lg:hidden justify-end flex-1 mt-2"
            id={"mobile-open"}
          >
            <div
              className="flex flex-col relative w-[32px] justify-center"
              onClick={() => {
                setOpenMobileMenup(!openMobileMenu);
              }}
            >
              <motion.div
                className="line"
                variants={{
                  menuHide: {
                    position: "relative",
                    top: "0%",
                    rotate: 0,
                  },
                  menuOpen: {
                    position: "absolute",
                    top: "40%",
                    rotate: 45,
                  },
                }}
                animate={openMobileMenu ? "menuOpen" : "menuHide"}
              ></motion.div>
              <motion.div
                className={twMerge("line my-2")}
                variants={{
                  menuHide: {
                    opacity: 1,
                  },
                  menuOpen: {
                    opacity: 0,
                  },
                }}
                animate={openMobileMenu ? "menuOpen" : "menuHide"}
                transition={{
                  delay: 0.1,
                }}
              ></motion.div>
              <motion.div
                className="line"
                variants={{
                  menuHide: {
                    position: "relative",
                    top: "0%",
                    rotate: 0,
                  },
                  menuOpen: {
                    position: "absolute",
                    top: "40%",
                    rotate: -45,
                  },
                }}
                animate={openMobileMenu ? "menuOpen" : "menuHide"}
              ></motion.div>
            </div>

            <motion.div
              className={twMerge(
                "w-[201px] box-border bg-white dark:bg-dark-primary p-4",
                "mt-10 fixed border-[1px] rounded-lg border-[#EFEFEF] dark:border-dark-primary outline-none z-[2000]"
              )}
              variants={{
                popoverHide: {
                  visibility: "hidden",
                  opacity: 0,
                  translateY: 50,
                },
                popoverOpen: {
                  visibility: "visible",
                  translateY: 0,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.2,
              }}
              animate={openMobileMenu ? "popoverOpen" : "popoverHide"}
            >
              <div className="flex flex-col">
                {NAV_ITEMS.map(({ href, title }) => (
                  <div
                    key={`mobile_${href}`}
                    className="mb-2 [&_a]:m-0"
                    onClick={() => {
                      setOpenMobileMenup(false);
                    }}
                  >
                    <NavLink href={href} title={title} />
                  </div>
                ))}

                <div className="flex w-full mt-2 mb-4">
                  <Button size="sm" type="primary" className="w-full">
                    Sign in
                  </Button>
                </div>

                <div className="flex justify-between w-full items-center">
                  <LuSearch
                    className="hover:!text-blue cursor-pointer size-[24px] dark:text-text-color-dark"
                    onClick={() => {
                      setOpenMobileMenup(false);
                      setOpenBackdrop(true);
                    }}
                  />

                  {/* Signed */}
                  {/* <Avatar
                    className="size-[32px]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqF8JZNhHlqIQUkMIszufilm-23jFyY8y5jg&s"
                  /> */}

                  {theme === "light" ? (
                    <FiMoon
                      className="cursor-pointer text-text-color hover:text-blue size-[24px]"
                      onClick={() => {
                        setTheme("dark");
                      }}
                    />
                  ) : (
                    <IoSunnySharp
                      className="cursor-pointer text-text-color-dark hover:text-blue size-[24px]"
                      onClick={() => {
                        setTheme("light");
                      }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
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
