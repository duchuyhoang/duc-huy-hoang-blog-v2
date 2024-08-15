import Container from "@/components/Container";
import { getMDXPostsDataAndMetaData } from "@/utils";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import { PostMetaData } from "@/types/post";
import PostDetailPage from "@/pages/PostDetail";
import remarkDirectives from "remark-directive";

const MDX_POST_DIR = path.join(process.cwd(), "src/posts");

export async function generateStaticParams() {
  const datas = await getMDXPostsDataAndMetaData(MDX_POST_DIR);

  return datas.map((data) => ({
    id: data.id,
    slug: data.id,
  }));
}

const PostDetail = async ({ params }: any) => {
  const fileContent = matter(
    fs.readFileSync(path.join(MDX_POST_DIR, `${params.id}.mdx`))
  );

  const metadatas: PostMetaData = matter(fileContent).data as PostMetaData;

  const serializedDatas = await serialize(fileContent.content, {
    mdxOptions: {
      remarkPlugins: [remarkDirectives],
      rehypePlugins: [rehypeMdxCodeProps],
    },
  });

  return (
    <>
      <Container>
        <PostDetailPage
          metadata={metadatas}
          postDetailCompliedData={serializedDatas}
        />
      </Container>
    </>
  );
};

export default PostDetail;
