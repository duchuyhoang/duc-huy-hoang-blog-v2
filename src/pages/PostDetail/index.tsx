"use client";
import MDXDetail, { MDXDetailProps } from "@/components/MDXDetail";
import PostDetailHeader from "@/components/PostDetailHeader";
import { PostMetaData } from "@/types/post";
import PostContentTable from "./components/PostContentTable";
import { POST_DETAIL_WRAPPER } from "@/constants";

interface PostDetailPageProps {
  postDetailCompliedData: MDXDetailProps;
  metadata: PostMetaData;
}

const PostDetailPage = ({
  postDetailCompliedData,
  metadata,
}: PostDetailPageProps) => {
  if (!metadata || !postDetailCompliedData) return null;

  return (
    <div className="flex flex-col">
      <PostDetailHeader metadata={metadata} />
      <div className="grid grid-cols-12 mt-3 lg:mt-8">
        <div
          className="col-span-12 md:col-span-9 pr-0 md:pr-8"
          id={POST_DETAIL_WRAPPER}
        >
          <MDXDetail {...postDetailCompliedData} />
        </div>
        <div className="col-span-3 hidden md:!block">
          <PostContentTable />
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
