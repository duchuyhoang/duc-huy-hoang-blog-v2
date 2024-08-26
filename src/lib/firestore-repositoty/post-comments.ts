"use client";
import {
  DocumentData,
  DocumentReference,
  FirestoreDataConverter,
  Timestamp,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import FireStoreRepository from ".";
import { USER_TABLE_NAME, User } from "./user";
import db from "../firebase/fire-store";

// export interface PostComment {
//   postId: string;
//   content: string;
//   user: User;
//   createAt: Timestamp;
// }

export class PostComment {
  constructor(
    public id: string,
    public postId: string,
    public content: string,
    public user: User,
    public createAt: Timestamp
  ) {}
}

// export interface FirestorePostComment extends Omit<PostComment, "user"> {
//   user: DocumentReference<DocumentData, DocumentData>;
// }

export class FirestorePostComment {
  constructor(
    public postId: string,
    public content: string,
    public user: DocumentReference<DocumentData, DocumentData>,
    public createAt: Timestamp
  ) {}
}

const converter: FirestoreDataConverter<any, FirestorePostComment> = {
  toFirestore: (postComment: PostComment) => {
    return {
      content: postComment.content!,
      createAt: serverTimestamp(),
      postId: postComment.postId!,
      user: doc(db, `${USER_TABLE_NAME}/${postComment.user.uid}`),
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data();

    return new PostComment(
      snapshot.id,
      data.postId,
      data.content,
      data.user,
      data.createAt
    );
  },
};

export const POST_COMMENTS_TABLE_NAME = "post-comments";

export const postCommentRepository = new FireStoreRepository<
  PostComment,
  FirestorePostComment
>(POST_COMMENTS_TABLE_NAME, converter);
