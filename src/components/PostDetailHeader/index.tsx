"use client";
import { PostMetaData } from "@/types/post";
import Typography from "../Typography";
import Avatar from "../Avatar";

interface PostDetailHeaderProps {
  metadata: PostMetaData;
}

const PostDetailHeader = ({ metadata }: PostDetailHeaderProps) => {
  console.log(metadata);
  return (
    <section className="flex flex-col">
      <Typography
        component="h1"
        className="my-[1.5rem] text-[4rem] leading-[1.2]"
      >
        {metadata.title}
      </Typography>
      <div className="flex">
        <Avatar src={metadata.image} className="w-[44px] h-[44px]" />
      </div>
    </section>
  );
};

export default PostDetailHeader;
