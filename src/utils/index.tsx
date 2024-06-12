import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { SITE_PREFIX } from "@/constants";

export const getMDXPostsDataAndMetaData = async (dir: string) => {
  const postFileNames = await fs.readdirSync(dir);

  return postFileNames.map((fileName) => {
    const fileContent = matter(
      fs.readFileSync(path.join(dir.split("/").join("/"), fileName))
    );

    return {
      id: fileName.split(".mdx")[0],
      // id: fileContent?.data?.slug || "dada",
      content: fileContent?.content,
    };
  });
};
