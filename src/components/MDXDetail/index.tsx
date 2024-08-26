"use client";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Quote from "@/components/Quote";
import Typography from "../Typography";
import Article from "./Article";
import FullSizeImage from "@/components/FullSizeImage";
import CodeTag from "./Code";
import CodeBlock from "../CodeBlock";
import Divider from "../Divider";
import Img from "../Img";

import "./style.css";

export interface MDXDetailProps extends MDXRemoteProps {}

const components = {
  p: (props: any) => (
    <Typography
      component="p"
      className="text-justify lg:text-start font-medium"
      {...props}
    />
  ),
  FullSizeImage: FullSizeImage,
  Article: Article,
  code: CodeTag,
  pre: CodeBlock,
  li: (props: any) => (
    <Typography
      component="li"
      className="text-justify lg:text-start font-medium"
      {...props}
    />
  ),
  hr: Divider,
  img: Img,
  Quote: Quote,
};

const MDXDetail = (props: MDXDetailProps) => {
  return (
    <>
      <MDXRemote {...props} components={components as any} />
    </>
  );
};

export default MDXDetail;
