import FireStoreRepository from ".";

export const POST_REACTIONS_TABLE_NAME = "post-reactions";

export enum ReactType {
  LIKE = "LIKE",
  HEART = "HEART",
  SAD = "SAD",
  ANGRY = "ANGRY",
  HAPPY = "HAPPY",
  COFFEE = "COFFEE",
}

export interface PostReaction {
  postId: string;
  type: ReactType;
  user: string;
}

export interface FireStorePostReaction {
  postId: string;
  type: ReactType;
  user: string;
}

export const postReactionRepository = new FireStoreRepository<
  PostReaction,
  FireStorePostReaction
>(POST_REACTIONS_TABLE_NAME, null);
