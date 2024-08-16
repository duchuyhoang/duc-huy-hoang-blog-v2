import React from "react";
import { PostExtract } from "@/types/post";
import FullSizeImage from "../FullSizeImage";
import Typography from "../Typography";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
interface IPostCard {
  post: PostExtract;
}

const PostCard = ({ post }: IPostCard) => {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="w-full group/card ">
        <FullSizeImage
          src={post.metadata.image}
          className="!rounded-[16px]"
          imgClassName="group-hover/card:scale-[1.2] transition-all duration-500 group-hover/card:grayscale-[0.5]"
        />
        <div className="flex items-center mt-3">
          <FaCalendarAlt className="size-[16px] !text-gray-light dark:!text-gray" />
          <Typography className="ml-2 !text-gray-light dark:!text-gray !text-[0.8rem] lg!text-[0.875rem] font-semibold">
            {dayjs(post.metadata.date, "DD-MM-YYYY").format("LL")}
          </Typography>
        </div>

        <Typography
          // min-h-[108px]
          className="my-2 font-bold text-[1.2rem] lg:text-[1.5rem] overflow-hidden group-hover/card:underline"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.metadata.title}
        </Typography>
        <Typography
          className="text-[0.875rem] lg:text-[1rem] !text-gray-light dark:!text-gray overflow-hidden font-medium"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.metadata.description}
        </Typography>
      </div>
    </Link>
  );
};

export default PostCard;
