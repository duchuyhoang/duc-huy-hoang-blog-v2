"use client";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Quote from "@/components/Quote";
import Typography from "../Typography";

export interface MDXDetailProps extends MDXRemoteProps {}

const components = {
  p: Typography,
};

const MDXDetail = (props: MDXDetailProps) => {
  return (
    <>
      <MDXRemote {...props} components={components} />
    </>
  );
};

export default MDXDetail;
