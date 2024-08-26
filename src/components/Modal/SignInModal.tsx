import { twMerge } from "tailwind-merge";
import { Facebook, Github, Google } from "../Icons";
import Typography from "../Typography";
import BaseModal, { IBaseModalProps } from "./BaseModal";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuthContext } from "@/context/AuthContext";

interface SignInModalProps extends IBaseModalProps {}

const SignInModal = ({ ...rest }: SignInModalProps) => {
  const { auth } = useAuthContext();

  const LOGIN_ITEMS = [
    {
      icon: <Google className={"size-5"} />,
      label: "Sign in with Google",
      handleClick: () => {
        const provider = new GoogleAuthProvider();
        provider.addScope("profile");
        provider.addScope("email");
        signInWithPopup(auth, provider)
          .then(() => {
            rest.onClose(false);
          })
          .catch((reason) => {
            console.log(reason);
          });
      },
    },
    {
      icon: (
        <Github
          className={
            "group-hover/lgItem:text-white dark:group-hover/lgItem:text-text-color size-5 dark:text-white text-text-color"
          }
        />
      ),
      label: "Sign in with Github",
      handleClick: () => {
        const provider = new GithubAuthProvider();
        provider.addScope("user");
        provider.addScope("read:user");
        provider.addScope("user:email");

        signInWithPopup(auth, provider)
          .then(() => {
            rest.onClose(false);
          })
          .catch((reason) => {
            console.log(reason);
          });
      },
    },

    {
      icon: <Facebook className={"size-5 "} />,
      label: "Sign in with Facebook",
      handleClick: () => {
        const provider = new FacebookAuthProvider();
        provider.addScope("public_profile");
        provider.addScope("email");

        signInWithPopup(auth, provider)
          .then(() => {
            rest.onClose(false);
          })
          .catch((reason) => {
            console.log(reason);
          });
      },
    },
  ];

  return (
    <BaseModal {...rest}>
      <div className="min-w-[376px] flex flex-col">
        <Typography
          component="h2"
          className="text-[1.5rem] font-bold leading-6"
        >
          Welcome back
        </Typography>

        <div className="flex flex-col mt-12 gap-4">
          {LOGIN_ITEMS.map(({ icon, label, handleClick }, index) => (
            <div
              key={`login_${index}`}
              className={twMerge(
                "group/lgItem",
                "cursor-pointer flex justify-center items-center p-[10px_20px] rounded-lg",
                "border-solid border-[1px] border-secondary",
                "hover:bg-gray-secondary"
              )}
              onClick={handleClick}
            >
              {icon}
              <Typography
                className={twMerge(
                  "ml-2 font-bold dark:text-gray",
                  "group-hover/lgItem:text-text-color-dark"
                )}
              >
                {label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </BaseModal>
  );
};

export default SignInModal;
