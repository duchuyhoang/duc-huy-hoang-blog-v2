import Avatar from "@/components/Avatar";
import Typography from "@/components/Typography";
import { PostComment } from "@/lib/firestore-repositoty/post-comments";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

interface PostCommentItemProps {
  comment: PostComment;
}

const PostCommentItem = ({ comment }: PostCommentItemProps) => {
  return (
    <div className="flex">
      <div className="mt-2 mr-3 size-[50px] min-w-[50px]">
        <Avatar src={comment?.user?.photoURL!} className="size-full" />
      </div>
      <div className="flex flex-col w-[calc(100%_-_62px)]">
        <div className="flex items-center">
          <Typography component="strong" className="font-semibold !text-[13px]">
            {comment?.user?.displayName || "Anomyous"}
          </Typography>
          <Typography
            component="p"
            className="font-semibold !text-[12px] !text-gray ml-1"
          >
            write in{" "}
            {dayjs(comment.createAt.toDate()).format("DD-MM-YYYY HH:mm:ss")}
          </Typography>
        </div>

        <div
          className={twMerge(
            "break-all max-w-full",
            "whitespace-pre-wrap w-max mt-2 outline-none rounded-[5px] p-[10px] resize-none dark border-[1px] border-solid border-primary",
            "dark:bg-[rgba(0,0,0,0.15)] dark:border-dark-primary",
            "dark:text-text-color-dark"
          )}
        >
          {comment.content}
        </div>
      </div>
    </div>
  );
};

export default PostCommentItem;
