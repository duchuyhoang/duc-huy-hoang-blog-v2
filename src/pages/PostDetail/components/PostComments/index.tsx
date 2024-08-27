import { useAuthContext } from "@/context/AuthContext";
import db from "@/lib/firebase/fire-store";
import {
  FirestorePostComment,
  PostComment,
  postCommentRepository,
} from "@/lib/firestore-repositoty/post-comments";
import { USER_TABLE_NAME } from "@/lib/firestore-repositoty/user";
import { doc, getDoc, where } from "firebase/firestore";
import { useEffect, useLayoutEffect, useState } from "react";
import PostCommentInput from "./components/PostCommentInput";
import PostCommentItem from "./components/PostComment";
import Typography from "@/components/Typography";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";

export const POST_COMMENT_ID = "post-comment";

interface PostCommentsProps {
  postId: string;
}

const pageSize = 2;

const PostComments = ({ postId }: PostCommentsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFirstLoad, setIsLoadingFirstLoad] = useState(false);
  const [page, setPage] = useState(0);
  const [comments, setComments] = useState<Array<PostComment>>([]);
  // const [rawComments, setRawComments] = useState<Array<FirestorePostComment>>(
  //   []
  // );

  const handleAddCommentSucceed = (comment: PostComment) => {
    setComments((prev) => [comment, ...prev]);
  };

  useLayoutEffect(() => {
    const inner = async () => {
      setIsLoadingFirstLoad(true);
      const data = await postCommentRepository.getAll([
        where("postId", "==", postId),
      ]);

      const res = await Promise.all(
        data.docs.map(async (doc) => {
          const docData: any = doc.data();
          const user = (await getDoc(docData.user)).data();
          return {
            ...docData,
            user,
          };
        })
      );

      setComments(res);
      setIsLoadingFirstLoad(false);
    };
    inner();
  }, [postId]);

  return (
    <section id={POST_COMMENT_ID} className="flex flex-col mb-16 mt-12">
      {isLoadingFirstLoad ? (
        <>
          <Loading size="lg" className="w-full h-full my-6" />
        </>
      ) : (
        <div className="flex flex-col">
          <div className="flex">
            <Typography
              component="h2"
              className={twMerge(
                "!text-[1.375rem] mb-10 font-bold",
                comments.length === 0 && "mb-2"
              )}
            >
              {comments.length} comments
            </Typography>
          </div>
          <div className="flex flex-col gap-4">
            {comments.slice(0, (page + 1) * pageSize).map((comment) => (
              <div key={comment.id}>
                <PostCommentItem comment={comment} />
              </div>
            ))}

            {(page + 1) * pageSize < comments.length && !isLoading && (
              <div className="flex justify-center mt-4">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setPage(page + 1);
                      setIsLoading(false);
                    }, 1000);
                  }}
                >
                  Load more
                </Button>
              </div>
            )}
            {isLoading && <Loading size="md" className="mt-4" />}
          </div>

          <section className="mt-10">
            <PostCommentInput
              postId={postId}
              handleAddCommentSucceed={handleAddCommentSucceed}
            />
          </section>
        </div>
      )}
    </section>
  );
};

export default PostComments;
