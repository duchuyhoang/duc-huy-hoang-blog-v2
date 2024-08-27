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
        <section className="mt-4 grid grid-cols-12 lg:gap-5">
          <div className="col-span-12 lg:col-span-8 flex flex-col">
            {featurePost && (
              <Link href={`/post/${featurePost?.id}`} className="group/main">
                <div className="flex flex-col">
                  <FullSizeImage
                    src={featurePost.metadata.image}
                    className="!rounded-[20px]"
                  />
                  <Typography
                    component="h1"
                    className="font-bold text-[1.8rem] lg:text-[2.5rem] lg:my-4 leading-[52px] group-hover/main:underline"
                  >
                    {featurePost.metadata.title}
                  </Typography>
                  <Typography
                    className="mb-4 font-bold text-[1rem] lg:text-[1.125rem] !text-gray-light dark:!text-gray overflow-hidden"
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
          <div className="col-span-12 lg:col-span-4 flex flex-col">
            {(posts || []).map((post, index) => {
              return (
                <Link
                  href={`/post/${post.id}`}
                  key={`main_post_${post.id}`}
                  className="group/item"
                >
                  <div
                    className="grid grid-cols-12"
                    style={{
                      ...(index < posts.length - 1 && {
                        marginBottom: "32px",
                      }),
                    }}
                  >
                    <div className="col-span-5">
                      <FullSizeImage src={post.metadata.image} />
                    </div>
                    <div className="col-span-7 ml-4 flex flex-col">
                      <Typography
                        className="text-[1rem] font-bold overflow-hidden mt-[2px] group-hover/item:underline"
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
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPostSection;
