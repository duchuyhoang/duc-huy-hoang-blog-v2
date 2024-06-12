/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/Typography";
import Link from "next/link";
import avatar from "../../../../../public/avatar.png";
import { FaReact } from "react-icons/fa";
import Vuejs from "@/components/Icons/vue.svg";
import {
  Express,
  MySql,
  Nestjs,
  Postgres,
  Typescript,
} from "@/components/Icons";
const SelfInfo = () => {
  return (
    <section className="grid grid-cols-12 gap-8">
      <div className="col-span-6 flex flex-col">
        
        <Typography component="h1" className="!text-[3.2rem] !font-bold">
          Hey, there{" "}
          <span className="inline-block w-max animate-waving-hand">👋</span>
          <br />
          I’m
          <span className="ml-[0.5rem] text-secondary dark:text-secondary-dark">
            Hoang Duc Huy 🚀
          </span>
        </Typography>

        <Typography component="p" className="text-[1.2rem] mb-[1.5rem]">
          I’m a Software Engineer and Technical Writer with over 3 years
          experience working with several companies to write technical articles
          that pushes the product of the company.
        </Typography>

        <Typography component="p" className="text-[1.2rem] mb-[1.5rem]">
          I’m a fullstack developer. I have approximately 4.5 years of
          experience in frontend developer and 2 years of experience in backend
          developer.
        </Typography>

        <Typography component="p" className="text-[1.2rem] mb-[1.5rem]">
          I currenty work at{" "}
          <Link
            href={"/"}
            className="text-secondary dark:text-secondary-dark hover:underline"
          >
            VMO
          </Link>
          , as a Technical Editor where I write content, review content, curate
          ideas that contribute to the growth of the company.
        </Typography>

        <div className="flex justify-center gap-[16px]">
          <Typescript className="w-[64px] h-[64px]" />
          <FaReact className="text-[#61dafb] w-[64px] h-[64px]" />
          <Vuejs className="w-[64px] h-[64px]" />
          <Express className="w-[64px] h-[64px]" />
          <Nestjs className="w-[64px] h-[64px]" />
          <Postgres className="w-[64px] h-[64px]" />
          <MySql className="w-[64px] h-[64px]" />
        </div>
      </div>
      <div className="col-span-6 flex justify-end">
        <img
          src={avatar.src}
          //   width={"100%"}
          //   height={"100%"}
          className="object-cover object-top rounded-[20px] w-[100%] lg:w-[90%]"
          style={{
            aspectRatio: 1,
          }}
          alt="self"
        />{" "}
      </div>
    </section>
  );
};

export default SelfInfo;
