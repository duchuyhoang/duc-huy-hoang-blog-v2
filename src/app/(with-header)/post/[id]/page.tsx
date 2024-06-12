// "use client";
import Container from "@/components/Container";
import { getMDXPostsDataAndMetaData } from "@/utils";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import remarkMdxCodeMeta from "remark-mdx-code-meta";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import MDXDetail from "@/components/MDXDetail";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
export const dynamicParams = false;

const MDX_POST_DIR = path.join(process.cwd(), "src/posts");

export async function generateStaticParams() {
  // const postFileNames = await fs.readdirSync(
  //   path.join(process.cwd(), "src/posts")
  // );

  const datas = await getMDXPostsDataAndMetaData(MDX_POST_DIR);
  //   console.log("adadada", datas);

  return datas.map((data) => ({
    id: data.id,
    slug: data.id,
  }));
  // postFileNames.map((post) => ({
  //   id: post,
  //   slug: post,
  // }));
  //   return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

const PostDetailPage = async ({ params }: any) => {
  const fileContent = matter(
    fs.readFileSync(path.join(MDX_POST_DIR, `${params.id}.mdx`))
  );

  const metaData = matter(fileContent);
  console.log(metaData);

  // const serializedDatas = await compileMDX({
  //   source: fileContent.content,
  //   components: {
  //     Quote,
  //   },
  // });

  // console.log(serializedDatas);

  const serializedDatas = await serialize(fileContent.content, {
    mdxOptions: {
      remarkPlugins: [rehypeMdxCodeProps],
    },
  });

  return (
    <>
      <Container>
        {/* {serializedDatas.content} */}
        {/* <MDXRemote {...serializedDatas} /> */}
        <MDXDetail {...serializedDatas} />
      </Container>
    </>
  );
};

export default PostDetailPage;
