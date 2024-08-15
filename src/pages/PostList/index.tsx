"use client";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import Tag from "@/components/Tag";
import Typography from "@/components/Typography";
import { useDataContext } from "@/context/DataContext";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const PostListPage = () => {
  const [filterTags, setFilterTags] = useState<Array<string>>([]);
  const { posts: rawPosts, tags } = useDataContext();

  const filterPosts = useMemo(() => {
    if (filterTags.length === 0) return rawPosts;
    return rawPosts.filter((post) =>
      post.metadata.tags.some((tag) => filterTags.includes(tag))
    );
  }, [rawPosts, filterTags]);

  return (
    <>
      <Container>
        <div className="flex flex-col mb-8">
          <Typography component="h1" className="!text-[3rem] font-semibold">
            Posts
          </Typography>

          <section className="flex gap-2 flex-wrap mt-4 mb-10">
            {tags.map((tag) => {
              return (
                <Tag
                  label={tag}
                  key={tag}
                  onClick={() => {
                    const tagsSet = new Set(filterTags);
                    tagsSet.has(tag) ? tagsSet.delete(tag) : tagsSet.add(tag);
                    setFilterTags(Array.from(tagsSet));
                  }}
                  selected={filterTags.includes(tag)}
                />
              );
            })}
          </section>

          <section className="grid grid-cols-12 gap-6 overflow-hidden">
            {(filterPosts || []).map((post) => (
              <motion.div
                className="col-span-4"
                key={post.id}
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  // type: "spring",
                }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </section>
        </div>
      </Container>
    </>
  );
};

export default PostListPage;
