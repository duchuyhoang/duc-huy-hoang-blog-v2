"use client";
import { PostExtract } from "@/types/post";
import React, { useContext, useEffect, useMemo, useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

import dayjs from "dayjs";
dayjs.extend(LocalizedFormat);
dayjs.extend(customParseFormat);

const DataContext = React.createContext<{
  posts: Array<PostExtract>;
  tags: string[];
}>({
  posts: [],
  tags: [],
});

interface DataContextWrapperProps extends React.PropsWithChildren {
  posts: Array<PostExtract>;
}

const DataContextWrapper = ({ posts, children }: DataContextWrapperProps) => {
  const sortedPosts = useMemo(() => {
    return posts.sort(
      (a, b) =>
        dayjs(b.metadata.date, "DD-MM-YYYY").toDate().getTime() -
        dayjs(a.metadata.date, "DD-MM-YYYY").toDate().getTime()
    );
  }, [posts]);

  const tags = useMemo(() => {
    return posts.reduce((prev, post) => {
      post.metadata.tags.forEach((tag) => {
        prev.add(tag);
      });
      return prev;
    }, new Set<string>());
  }, [posts]);

  return (
    <DataContext.Provider
      value={{
        posts: sortedPosts,
        tags: Array.from(tags),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataContextWrapper;
