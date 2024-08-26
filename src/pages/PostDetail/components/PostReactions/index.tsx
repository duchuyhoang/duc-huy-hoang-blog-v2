import { Like, Heart, Happy, Coffee, Angry, Sad } from "@/components/Icons";
import {
  PostReaction,
  ReactType,
  postReactionRepository,
} from "@/lib/firestore-repositoty/post-reactions";
import { twMerge } from "tailwind-merge";
import "./style.css";
import Typography from "@/components/Typography";
import { useAuthContext } from "@/context/AuthContext";
import { MODAL_KEYS, useModal } from "@/components/Modal/ModalHelmet";
import { useEffect, useLayoutEffect, useState } from "react";
import { where } from "firebase/firestore";

interface PostReactionsProps {
  postId: string;
}

const REACTION_ITEMS = [
  {
    value: ReactType.LIKE,
    Component: Like,
    className: "icon like-icon text-gray",
  },
  {
    value: ReactType.HEART,
    Component: Heart,
    className: "icon heart-icon text-gray",
  },
  {
    value: ReactType.HAPPY,
    Component: Happy,
    className: "icon happy-icon text-gray",
  },
  {
    value: ReactType.COFFEE,
    Component: Coffee,
    className: "icon coffee-icon text-gray",
  },
  {
    value: ReactType.SAD,
    Component: Sad,
    className: "icon sad-icon",
  },
  {
    value: ReactType.ANGRY,
    Component: Angry,
    className: "icon angry-icon text-gray",
  },
];

const PostReactions = ({ postId }: PostReactionsProps) => {
  const { user } = useAuthContext();
  const { openModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [reactionsMap, setReactionsMap] = useState<
    Record<ReactType, Array<string>>
  >({
    [ReactType.LIKE]: [],
    [ReactType.HEART]: [],
    [ReactType.HAPPY]: [],
    [ReactType.COFFEE]: [],
    [ReactType.SAD]: [],
    [ReactType.ANGRY]: [],
  });

  useLayoutEffect(() => {
    const inner = async () => {
      const response = await postReactionRepository.getAll([
        where("postId", "==", postId),
      ]);
      const newReactionsMap: Record<ReactType, Array<string>> = {
        [ReactType.LIKE]: [],
        [ReactType.HEART]: [],
        [ReactType.HAPPY]: [],
        [ReactType.COFFEE]: [],
        [ReactType.SAD]: [],
        [ReactType.ANGRY]: [],
      };
      response.docs.map((doc) => {
        const data = doc.data() as PostReaction;
        newReactionsMap[data.type].push(data.user);
      });
      setReactionsMap(newReactionsMap);
    };
    inner();
  }, [postId]);

  const handleToggleReactions = async (type: ReactType, active: boolean) => {
    if (isLoading) return;
    if (!user) {
      return openModal(MODAL_KEYS.SIGN_IN);
    }
    const newReactionsMap = { ...reactionsMap };
    setIsLoading(true);
    if (active) {
      await postReactionRepository.create({
        postId: postId,
        type: type,
        user: user?.uid,
      });
      newReactionsMap[type].push(user.uid);
    } else {
      await postReactionRepository.deleteByConditions([
        where("user", "==", user?.uid),
        where("type", "==", type),
      ]);
      newReactionsMap[type] = newReactionsMap[type].filter(
        (userId) => userId !== user?.uid
      );
    }

    setIsLoading(false);
    setReactionsMap(newReactionsMap);
  };

  return (
    <section className="grid grid-cols-12 gap-4 mt-11">
      {REACTION_ITEMS.map(({ value, Component, className }, index) => {
        const isActive = reactionsMap[value].includes(user?.uid!);
        return (
          <div
            className={twMerge(
              "border-[1px] border-transparent cursor-pointer reaction-item col-span-2 flex items-center justify-center h-[50px] box-border p-[5px_10px] bg-code-bg dark:bg-code-bg-dark rounded-[5px]",
              isActive &&
                "border-primary dark:border-dark-primary bg-code-bg-dark active",
              className
            )}
            key={value}
            onClick={() => {
              handleToggleReactions(value, !isActive);
            }}
          >
            <Component
              className={twMerge("size-6", className, isActive && "active")}
            />

            <Typography
              className={twMerge(
                "ml-2 font-semibold",
                className,
                isActive && "active"
              )}
            >
              {reactionsMap[value].length}
            </Typography>
          </div>
        );
      })}
    </section>
  );
};

export default PostReactions;
