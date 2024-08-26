import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostExtract, PostMetaData } from "@/types/post";

export const getMDXPostsDataAndMetaData = async (
  dir: string
): Promise<PostExtract[]> => {
  const postFileNames = await fs.readdirSync(dir);

  return postFileNames.map((fileName) => {
    const fileContent = matter(
      fs.readFileSync(path.join(dir.split("/").join("/"), fileName))
    );
    const metadata = matter(fileContent).data;

    return {
      // id: metadata.slug,
      // id: metadata.slug,
      id: fileName.split(".mdx")[0],
      metadata: metadata as PostMetaData,
      content: fileContent?.content,
    };
  });
};
