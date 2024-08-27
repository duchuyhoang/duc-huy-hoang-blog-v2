/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/Typography";
import Link from "next/link";
import avatar from "../../../../../public/avatar.webp";
import { FaReact } from "react-icons/fa";
import Vuejs from "@/components/Icons/vue.svg";
import {
  Express,
  Mongo,
  MySql,
  Nestjs,
  Postgres,
  Typescript,
} from "@/components/Icons";
import "./style.css";
import { motion } from "framer-motion";

const ICONS = [
  <Typescript className="size-full" key={`ts`} />,
  <FaReact className="text-[#61dafb] size-full" key={"react"} />,
  <Vuejs className="size-full" key={"vue"} />,
  <Express className="size-full" key={"express"} />,
  <Nestjs className="size-full" key={"nest"} />,
  <Postgres className="size-full" key={"pg"} />,
  <MySql className="size-full" key={"sql"} />,
  <Mongo className="size-full" key={"mongo"} />,
];

const SelfInfo = () => (
  <section className="grid grid-cols-12 gap-4 lg:gap-8">
    <div className="col-span-12 lg:col-span-6 flex flex-col">
      <Typography
        component="h1"
        className="!text-[2rem] lg:!text-[3.2rem] !font-bold"
      >
        Hey, there{" "}
        <span className="inline-block w-max animate-waving-hand">👋</span>
        <br />
        I’m
        <span className="ml-[0.5rem] text-secondary dark:text-secondary-dark">
          Hoang Duc Huy 🚀
        </span>
      </Typography>

      <Typography
        component="p"
        className="lg:text-[1.2rem] mb-[0.5rem] lg:mb-[1.5rem]"
      >
        I’m a Software Engineer and Technical Writer with over{" "}
        <b className="text-secondary dark:text-secondary-dark">3</b> years
        experience working with several companies to write technical articles
        that pushes the product of the company.
      </Typography>

      <Typography
        component="p"
        className="lg:text-[1.2rem] mb-[0.5rem] lg:mb-[1.5rem]"
      >
        I’m a fullstack developer. I have approximately{" "}
        <b className="text-secondary dark:text-secondary-dark">4.5</b> years of
        experience in frontend developer and{" "}
        <b className="text-secondary dark:text-secondary-dark">2</b> years of
        experience in backend developer.
      </Typography>

      <Typography
        component="p"
        className="lg:text-[1.2rem] mb-[0.5rem] lg:mb-[1.5rem]"
      >
        I currenty work at{" "}
        <Link
          href={"/"}
          className="text-secondary dark:text-secondary-dark hover:underline font-bold"
        >
          VMO
        </Link>
        , as a Technical Editor where I write content, review content, curate
        ideas that contribute to the growth of the company.
      </Typography>

      <motion.div
        className="mt-1 flex justify-start lg:justify-center gap-[16px]"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial={"hidden"}
        whileInView={"show"}
      >
        {ICONS.map((icon, index) => (
          <motion.div
            className="size-[32px] md:size-[64px]"
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
            key={`self_${index}`}
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
    <div className="col-span-12 lg:col-span-6 flex justify-end">
      <motion.img
        src={avatar.src}
        className="self-image object-cover object-top rounded-[20px] w-[100%] lg:w-[90%]"
        style={{
          aspectRatio: 1,
        }}
        alt="self"
        initial={{
          clipPath: "circle(0% at 0 0)",
        }}
        whileInView={{
          clipPath: "circle(200% at 0 0)",
        }}
        transition={{
          duration: 3,
        }}
      />
    </div>
  </section>
);

export default SelfInfo;
