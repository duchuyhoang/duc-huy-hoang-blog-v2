import FireStoreRepository from ".";

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  providerPhotoUrl: string | null;
}

export const USER_TABLE_NAME = "users";

export const userRepository = new FireStoreRepository<User, User>(
  USER_TABLE_NAME,
  null
);
