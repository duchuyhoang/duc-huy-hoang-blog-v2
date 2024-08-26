/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import Link from "next/link";
import Container from "../Container";
import Divider from "../Divider";
import Typography from "../Typography";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import astronaut from "../../../public/astronaut.png";
import logo from "../../../public/logo.png";
import { motion, useAnimationControls } from "framer-motion";

import "./style.css";

import { FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN, X_TWITTER } from "@/constants";
import { Comet } from "../Icons";
import { debounce, throttle } from "@/utils/asynchronous";
import { useCallback } from "react";
import { useUI } from "@/context/UIContext";
const Footer = () => {
  const controls = useAnimationControls();
  const astronautControls = useAnimationControls();

  const { isLg, isMd } = useUI();

  const handleCometHover = throttle(
    async () => {
      await controls.set("initial");
      controls.start("animated", {
        duration: 0.5,
      });
    },
    1,
    1000
  );
  const handleAstronautHover = throttle(
    async () => {
      await astronautControls.set("initial");
      astronautControls.start("animated", {
        duration: 0.5,
      });
    },
    1,
    1000
  );

  return (
    <>
      <footer className="max-w-full pt-[0.5rem] pb-[1.5rem] lg:py-[3rem] bg-white dark:bg-gray-lighter-dark">
        <Container>
          <section className="grid grid-cols-12">
            <div className="relative col-span-12 lg:col-span-3 lg:col-start-1 lg flex justify-center">
              <img className="size-[140px] lg:size-[180px]" src={logo.src} />
              <motion.div
                className="absolute cursor-pointer"
                variants={{
                  initial: {
                    opacity: 0,
                    left: isLg ? -200 : -60,
                    top: 100,
                  },
                  animated: {
                    left: isLg ? -50 : 10,
                    top: isLg ? -30 : -4,
                    opacity: 1,
                  },
                }}
                initial={"initial"}
                transition={{
                  duration: 0.7,
                }}
                onClick={handleCometHover}
                // onMouseEnter={handleCometHover}
                whileInView={"animated"}
                animate={controls}
              >
                {/* className="absolute left-[0px] top-[-20px] lg:left-[-50px] lg:top-[-30px]" */}
                <Comet />
              </motion.div>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-4"></div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-7"></div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-col relative">
              <motion.div
                className="absolute size-[100px] lg:size-[120px] right-[0px] md:right-[15%] top-[-60px] lg:right-[-60px] lg:top-[-80px]"
                // className="absolute size-[100px] lg:size-[120px]"
                variants={{
                  initial: {
                    opacity: 0,
                    visibility: "hidden",
                    y: 60,
                    x: isLg ? 150 : 10,
                    // x: -500,
                    // right: isLg ? -100 : isMd ? "10%" : -300,
                    // top: isLg ? -80 : -60,
                  },
                  animated: {
                    // x: 0,
                    // right: isLg ? -60 : isMd ? "15%" : 0,
                    // top: isLg ? -80 : -60,
                    y: 0,
                    x: 0,
                    opacity: 1,
                    visibility: "visible",
                  },
                }}
                transition={{
                  duration: 0.7,
                }}
                initial={"initial"}
                whileInView={"animated"}
                onClick={handleAstronautHover}
                animate={astronautControls}
              >
                <img
                  src={astronaut.src}
                  // className="absolute size-[100px] lg:size-[120px] right-[0px] md:right-[15%] top-[-60px] lg:right-[-60px] lg:top-[-80px]"
                />
              </motion.div>

              <div className="flex flex-col items-center lg:items-start">
                <Typography component="h5" className="link-label">
                  EMAIL ME
                </Typography>
                <Typography
                  component="a"
                  className="footer-link"
                  href={"mailto:huyhoang10032000@gmail.com"}
                >
                  huyhoang10032000@gmail.com
                </Typography>
              </div>
              <div className="flex flex-col items-center lg:items-start my-[0.75rem] lg:my-[1.5rem]">
                <Typography component="h5" className="link-label">
                  MAKE A CALL
                </Typography>
                <Typography
                  component="a"
                  className="footer-link"
                  href={"tel:+84328640767"}
                >
                  +84 32 864 0767
                </Typography>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Typography component="h5" className="link-label">
                  KEEP IN TOUCH WITH ME
                </Typography>
                <div className="flex gap-[16px] mt-2">
                  <Link href={LINKEDIN}>
                    <FaLinkedin className="footer-social-icon" />
                  </Link>
                  <Link href={FACEBOOK}>
                    <FaFacebook className="footer-social-icon" />
                  </Link>
                  <Link href={GITHUB}>
                    <FaGithub className="footer-social-icon" />
                  </Link>
                  <Link href={INSTAGRAM}>
                    <FaInstagram className="footer-social-icon" />
                  </Link>
                  <Link href={X_TWITTER}>
                    <FaXTwitter className="footer-social-icon" />
                  </Link>
                </div>
                {/* <Typography
                  component="a"
                  className="footer-link"
                  href={"tel:+84328640767"}
                >
                  +84 32 864 0767
                </Typography> */}
              </div>
            </div>
          </section>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
