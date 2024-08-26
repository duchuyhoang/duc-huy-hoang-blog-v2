"use client";
import auth from "@/lib/firebase/auth";
import { Auth, signOut } from "firebase/auth";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { User, userRepository } from "@/lib/firestore-repositoty/user";
import { storageService } from "@/lib/firebase/storage";
import { getDownloadURL } from "firebase/storage";

const AuthContext = React.createContext<{
  auth: Auth;
  eagerSignInLoading: boolean;
  user: User | null;
  signOut: () => void;
}>({
  auth: auth,
  eagerSignInLoading: true,
  user: null,
  signOut: () => {},
});

const AuthContextWrapper = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [eagerSignInLoading, setEagerSignInLoading] = useState(true);

  console.log(user);

  useLayoutEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(
      async (userThirdParty) => {
        if (userThirdParty) {
          const userFirebase = await userRepository.findById(
            userThirdParty.uid
          );

          console.log(userFirebase);

          let userPayload = {
            uid: userThirdParty.uid,
            email:
              userThirdParty.providerData[0]?.email || userThirdParty.email,
            displayName:
              userThirdParty.providerData[0]?.displayName ||
              userThirdParty.displayName,
            photoURL: userThirdParty.photoURL,
            providerPhotoUrl: userThirdParty.photoURL,
          };

          if (userFirebase) {
            userPayload = {
              ...userFirebase,
              ...userPayload,
            };
          }

          if (
            (!userFirebase && userThirdParty?.photoURL) ||
            (userThirdParty.photoURL &&
              userThirdParty.photoURL !== userFirebase?.providerPhotoUrl)
          ) {
            const { url } = await storageService.uploadImageByUrl({
              url: userThirdParty.photoURL,
              fileName: `avatar/${userThirdParty.uid}.png`,
            });
            userPayload = {
              ...userPayload,
              photoURL: url,
            };
          }

          console.log("final", userPayload);

          await userRepository.upsert(userPayload.uid, userPayload);

          setUser(userPayload);
        } else {
          setUser(null);
        }
        setEagerSignInLoading(false);
      }
    );
    return () => {
      unregisterAuthObserver();
    };
  }, []);

  // useEffect(() => {
  //   const inner = async () => {
  //     if (user) {
  //       await userRepository.upsert(user.uid, user);
  //     }
  //   };
  //   inner();
  // }, [user]);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        auth,
        eagerSignInLoading,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextWrapper;
