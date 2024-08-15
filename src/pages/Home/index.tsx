"use client";
import Container from "@/components/Container";
import SelfInfo from "./components/SelfInfo";
import Divider from "@/components/Divider";
import MainPostSection from "./components/MainPostSection";
import { useDataContext } from "@/context/DataContext";
import { useMemo } from "react";
import PostList from "./components/PostList";

const HomePage = () => {
  const { posts } = useDataContext();

  const featurePost = useMemo(() => {
    return posts.filter((post) => post.metadata.isFeature)[0];
  }, [posts]);

  const sectionPosts = useMemo(() => {
    return posts
      .filter((post) => post.metadata.isFeature && post.id !== featurePost?.id)
      .slice(0, 0);
  }, [posts, featurePost]);

  const recentPosts = useMemo(() => {
    return posts.filter((post) => {
      return (
        post.id !== featurePost?.id &&
        !sectionPosts.find((sp) => sp.id === post.id)
      );
    });
  }, [posts, featurePost, sectionPosts]);

  return (
    <Container className="flex flex-col pb-8">
      <SelfInfo />

      <Divider className="my-[3rem]" />

      <MainPostSection featurePost={featurePost} posts={sectionPosts} />
      <Divider className="my-[3rem]" />

      <div className="mt-4">
        <PostList posts={recentPosts} />
      </div>
    </Container>
  );
};

export default HomePage;
