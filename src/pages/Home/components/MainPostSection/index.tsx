import FullSizeImage from "@/components/FullSizeImage";
import Typography from "@/components/Typography";
import { PostExtract } from "@/types/post";
import Link from "next/link";

interface MainPostSectionProps {
  featurePost: PostExtract;
  posts: Array<PostExtract>;
}

const MainPostSection = ({ featurePost, posts }: MainPostSectionProps) => {
  return (
    <>
      <div className="flex flex-col">
        <Typography className="text-[1.5rem] font-bold">
          Featured Posts
        </Typography>
        <section className="mt-4 grid grid-cols-12 gap-5">
          <div className="col-span-8 flex flex-col">
            {featurePost && (
              <Link href={`/post/${featurePost?.id}`}>
                <div className="flex flex-col">
                  <FullSizeImage
                    src={featurePost.metadata.image}
                    className="!rounded-[20px]"
                  />
                  <Typography
                    component="h1"
                    className="font-bold text-[2.5rem] my-4 leading-[52px]"
                  >
                    {featurePost.metadata.title}
                  </Typography>
                  <Typography
                    className="mb-4 font-bold text-[1.125rem] !text-gray-light dark:!text-gray overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {featurePost.metadata.description}
                  </Typography>
                </div>
              </Link>
            )}
          </div>
          <div className="col-span-4 flex flex-col">
            {(posts || []).map((post, index) => {
              return (
                <div
                  className="grid grid-cols-12"
                  key={`main_post_${post.id}`}
                  style={{
                    ...(index < posts.length - 1 && {
                      marginBottom: "32px",
                    }),
                  }}
                >
                  <div className="col-span-5">
                    <FullSizeImage src={post.metadata.image} />
                  </div>
                  <div className="col-span-7 ml-4 flex flex-col justify-center">
                    <Typography
                      className="text-[1rem] font-bold overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {post.metadata.title}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPostSection;
