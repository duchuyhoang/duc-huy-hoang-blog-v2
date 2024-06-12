"use client";
import MDXDetail, { MDXDetailProps } from "@/components/MDXDetail";
import PostDetailHeader from "@/components/PostDetailHeader";
import { PostMetaData } from "@/types/post";

interface PostDetailPageProps {
  postDetailCompliedData: MDXDetailProps;
  metadata: PostMetaData;
}

const PostDetailPage = ({
  postDetailCompliedData,
  metadata,
}: PostDetailPageProps) => {
  return (
    <div className="flex flex-col">
      <PostDetailHeader metadata={metadata} />
      <MDXDetail {...postDetailCompliedData} />
    </div>
  );
};

export default PostDetailPage;
