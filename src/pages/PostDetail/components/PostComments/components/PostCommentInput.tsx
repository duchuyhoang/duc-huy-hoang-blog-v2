"use client";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { MODAL_KEYS, useModal } from "@/components/Modal/ModalHelmet";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoIosSend } from "react-icons/io";
import Typography from "@/components/Typography";
import { MiniLoading } from "@/components/Icons";
import { USER_TABLE_NAME } from "@/lib/firestore-repositoty/user";
import { Timestamp, doc } from "firebase/firestore";
import db from "@/lib/firebase/fire-store";
import {
  PostComment,
  postCommentRepository,
} from "@/lib/firestore-repositoty/post-comments";
import { uuidv4 } from "@/utils/uuid";

const MAX_CHARACTERS = 255;

interface PostCommentInputProps {
  postId: string;
  handleAddCommentSucceed: (comment: PostComment) => void;
}

const PostCommentInput = ({
  postId,
  handleAddCommentSucceed,
}: PostCommentInputProps) => {
  const { user } = useAuthContext();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const { openModal } = useModal();

  useEffect(() => {
    if (!user) setValue("");
  }, [user]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!value.trim()) return;

    setIsLoading(true);

    const createAt = Timestamp.now();
    const id = uuidv4();

    const res = await postCommentRepository.create(
      {
        content: value.trim(),
        postId: postId,
        user,
        createAt: createAt,
      } as any,
      {
        id: id,
      }
    );

    handleAddCommentSucceed({
      content: value.trim(),
      postId: postId,
      createAt,
      user: user!,
      id,
    });

    setValue("");
    setIsLoading(false);
    console.log(e);
  };

  return (
    <section className="flex">
      <Avatar className="size-[46px] mr-4" src={user?.photoURL as any} />
      <form className="flex-1 flex flex-col" onSubmit={onSubmit}>
        <div className="relative w-full">
          {!user && (
            <div
              className="rounded-[5px] absolute inset-0 flex justify-center items-center"
              style={{
                background: "rgba(0,0,0,0.15)",
              }}
            >
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  openModal(MODAL_KEYS.SIGN_IN);
                }}
              >
                Sign in
              </Button>
            </div>
          )}
          <textarea
            value={value}
            ref={textAreaRef}
            onChange={(e) => {
              if (textAreaRef.current) {
                textAreaRef.current.style.height = "auto";
                textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
              }
              const value = e.target.value;
              if (value.trim().length <= MAX_CHARACTERS) {
                setValue(e.target.value);
              }
            }}
            rows={4}
            className={twMerge(
              "min-h-full break-all",
              "min-w-full outline-none rounded-[5px] p-[10px] resize-none dark border-[1px] border-solid border-primary",
              "dark:bg-[rgba(0,0,0,0.15)] dark:border-dark-primary",
              "dark:text-text-color-dark",
              "placeholder-gray-light dark:placeholder-gray placeholder:font-medium"
            )}
            placeholder={user ? "Write your comment." : "Sign in to comment"}
          ></textarea>
          {user && (
            <div className="absolute right-1 bottom-1">
              <Typography className="text-[12px] text-gray-light dark:!text-gray font-semibold">
                {value.trim().length} / {MAX_CHARACTERS}
              </Typography>
            </div>
          )}
        </div>
        {user && (
          <div className="flex justify-end mt-2">
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="rounded-[6px] px-[1rem]"
              disabled={isLoading}
            >
              <div className="flex items-center">
                <Typography className="text-text-color-dark font-semibold">
                  Send
                </Typography>
                {isLoading ? (
                  <MiniLoading
                    className="ml-1 text-text-color-dark animate-spin"
                    style={{
                      animationDuration: 0.25,
                    }}
                  />
                ) : (
                  <IoIosSend className="size-6 ml-1 text-text-color-dark" />
                )}
              </div>
            </Button>
          </div>
        )}
      </form>
    </section>
  );
};

export default PostCommentInput;
