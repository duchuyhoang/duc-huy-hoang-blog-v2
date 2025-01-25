/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@/components/Container";
import {
  AWS,
  Firebase,
  GCP,
  HTML,
  Java,
  Javascript,
  MySql,
  Nestjs,
  Nodejs,
  Postgres,
  Nginx,
  Nextjs,
  Express,
  Mongo,
} from "@/components/Icons";
import Typography from "@/components/Typography";
import Link from "next/link";
import aboutMe1 from "@/assets/about-me.jpg";
import bg from "@/assets/bg.jpeg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import Vuejs from "@/components/Icons/vue.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN, X_TWITTER } from "@/constants";
import "./style.css";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const TECH_STACK_DATAS = [
  {
    label: "Web Development",
    icons: [
      <HTML key={"web_1"} />,
      <FaReact className="text-[#61dafb]" key={1} />,
      <Vuejs key={2} />,
      <Nextjs key={3} />,
    ],
  },
  {
    label: "Backend Development",
    icons: [
      <Java key={"be-1"} />,
      <Nodejs key={4} />,
      <Nestjs key={5} />,
      <Express key={6} />,
    ],
  },
  {
    label: "Database",
    icons: [
      <MySql key={"db_0"} />,
      <Postgres key={"db_1"} />,
      <AWS key={"db_2"} />,
      <Firebase key={"db_3"} />,
      <Mongo key={"db_4"} />,
    ],
  },
  {
    label: "Web Server",
    icons: [<Nginx key={"sr_1"} />],
  },
  {
    label: "DevOps & Cloud Service",
    icons: [<AWS key={"do_1"} />, <GCP key={"do_2"} />],
  },
];

const AboutMePage = () => {
  return (
    <>
      <Container className="lg:mt-[3rem]">
        <section className="grid grid-cols-12">
          <div className="flex col-span-12 lg:col-span-7 flex-col">
            <Typography
              component="h1"
              className="text-[2rem] lg:!text-[3rem] font-semibold mb-2 lg:mb-0"
            >
              Pleased to meet you 🙇
            </Typography>
            <Typography component="p" className="lg:!text-[1.05rem] mb-[1rem]">
              Hey, I’m Hoang Duc Huy (
              <span className="text-secondary dark:text-secondary-dark mx-[1px]">
                Henry
              </span>
              ) a 👨‍💻 and Technical Writer who currently works at{" "}
              <Link
                href={"/"}
                className="text-secondary dark:text-secondary-dark hover:underline"
              >
                VMO
              </Link>
              , as a Technical Editor where I write content, review content,
              curate ideas that contribute to the growth of the company.
            </Typography>
            <Typography component="p" className="lg:!text-[1.05rem] mb-[1rem]">
              I’m passionate about making the web accessible to everyone by
              always looking for ways to give back to the tech community 💪
            </Typography>
            <Typography
              component="label"
              className="lg:!text-[1.05rem] mb-[1rem]"
            >
              I’m a big fan of{" "}
              <Javascript className="w-[18px] h-[18px] min-w-[20px] inline-block mx-[1.5px]" />{" "}
              and very passionate about learning. And yeah I love working with
              other 👨‍💻, helping them with my knowledges about technology.
            </Typography>
            <Typography component="p" className="!text-[1.05rem] mb-[1rem]">
              Please checkout my contact below 👇
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
          </div>
          <div className="flex col-span-12 lg:col-span-5 justify-center md:justify-end mt-12 lg:mt-0">
            <img
              src={aboutMe1.src}
              className="box-border size-[80dvw] md:w-[338px] md:h-[338px] object-cover border-dashed border-4 border-fainted-text dark:border-fainted-text-dark rounded-[10px]
              filter grayscale transition-all duration-[0.5s] ease-in-out transform rotate-[15deg] origin-center scale-[1]
              hover:rotate-0 hover:grayscale-0 hover:scale-[1.1]  
              "
              alt="about"
              style={{
                objectPosition: "top left",
              }}
            />
          </div>
        </section>
      </Container>

      <section className="mt-[3rem] lg:mt-[5rem]">
        <div
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
          className="w-full bg-cover flex flex-col py-[24px] lg:py-[40px] items-center"
        >
          <Typography
            component="h1"
            className="text-[2rem] lg:!text-[3rem] !font-bold text-text-color-dark"
          >
            MY TECH STACKS
          </Typography>
          <Typography
            component="h5"
            className="text-center max-w-[calc(100dvw_-_32px)] !text-[0.875rem] lg:!text-[24px] font-bold text-text-color-dark"
          >
            I’m here to solve your problem and delivers your need
          </Typography>
          <div className="w-full max-w-[calc(100dvw_-_32px)] lg:max-w-[1200px] bg-white  rounded-[12px] mt-3 lg:mt-[1.5rem]">
            <div className="lg:max-w-[1074px] m-[0px_auto_auto] lg:m-[18px_auto_auto]">
              {TECH_STACK_DATAS.map(({ icons, label }, index) => (
                <>
                  <div
                    className={twMerge(
                      "flex flex-col lg:flex-row lg:items-center p-[8px_16px] md:p-[23px] border-fainted-text dark:border-fainted-text-dark border-b-[1px]",
                      index === TECH_STACK_DATAS.length - 1 && "border-none"
                    )}
                  >
                    <Typography
                      component="p"
                      className="!text-black text-[1.125rem] lg:text-[1.5rem] w-full lg:w-[calc(29.42%_+_68px)]"
                    >
                      {label}
                    </Typography>
                    <motion.div
                      className="flex items-center mt-2 lg:mt-0 gap-[16px] lg:gap-[32px] [&_svg]:size-[2.5rem] lg:[&_svg]:size-[4rem]"
                      variants={{
                        hidden: { opacity: 0, visibility: "hidden" },
                        show: {
                          visibility: "visible",
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.3,
                          },
                        },
                      }}
                      transition={{
                        duration: 0.2,
                        type: "tween",
                      }}
                      initial="hidden"
                      whileInView={"show"}
                    >
                      {icons.map((icon, index) => (
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, scale: 0 },
                            show: {
                              opacity: 1,
                              scale: 1,
                              transition: {
                                duration: 0.5,
                              },
                            },
                          }}
                          key={index}
                          className="tech-stack"
                        >
                          {icon}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMePage;
