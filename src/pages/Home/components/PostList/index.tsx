"use client";
import PostCard from "@/components/PostCard";
import Typography from "@/components/Typography";
import { PostExtract } from "@/types/post";
import React, { useState } from "react";

interface PostListProps {
  posts: Array<PostExtract>;
}

const PAGE_SIZE = 9;

const PostList = ({ posts }: PostListProps) => {
  const [page, setPage] = useState(0);

  return (
    <section className="flex flex-col">
      <Typography component="h4" className="text-[1.5rem] font-bold mb-4">
        Most posts
      </Typography>
      <div className="grid grid-cols-12 gap-6">
        {(posts || []).map((post) => (
          <div className="col-span-4" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostList;
