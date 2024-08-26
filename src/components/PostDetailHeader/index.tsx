"use client";
import { PostMetaData } from "@/types/post";
import Typography from "../Typography";
import Avatar from "../Avatar";
import dayjs from "dayjs";
import { POST_COMMENT_ID } from "@/pages/PostDetail/components/PostComments";
import { useRouter, usePathname } from "next/navigation";

interface PostDetailHeaderProps {
  metadata: PostMetaData;
}

const PostDetailHeader = ({ metadata }: PostDetailHeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <section className="flex flex-col">
      <Typography
        component="h1"
        className="mb-3 lg:mb-6 text-[2rem] lg:text-[3rem] leading-[1.2] font-bold"
      >
        {metadata.title}
      </Typography>
      <div className="flex items-center">
        <Avatar
          src={metadata.author.avatar}
          className="size-[36px] lg:size-[44px]"
        />
        <div className="flex justify-between flex-col ml-2">
          <Typography className="font-medium cursor-pointer hover:underline">
            {metadata.author.name}
          </Typography>
          <div className="flex items-center text-[0.875rem] !text-gray-light dark:!text-gray">
            {dayjs(metadata.date, "DD-MM-YYYY").format("MMM DD, YYYY")}
            <span className="mx-1 lg:mx-2">•</span>
            {metadata.minutesRead} min read
            <span className="mx-1 lg:mx-2">•</span>
            <Typography
              onClick={() => {
                router.replace(`${pathname}#${POST_COMMENT_ID}`, {
                  scroll: true,
                });
              }}
              // href={`#${POST_COMMENT_ID}`}
              className="cursor-pointer font-bold hover:underline"
            >
              Leave a comment
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetailHeader;
