import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkMdxCodeMeta from "remark-mdx-code-meta";

export const getMDXPostsDataAndMetaData = async (dir: string) => {
  const postFileNames = await fs.readdirSync(dir);

  return postFileNames.map((fileName) => {
    const fileContent = matter(
      fs.readFileSync(path.join(dir.split("/").join("/"), fileName))
    );
    console.log("dadd", fileName);
    return {
      id: fileName.split(".mdx")[0],
      // id: fileContent?.data?.slug || "dada",
      content: fileContent?.content,
    };
  });
};
