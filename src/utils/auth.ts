import { Auth } from "aws-amplify";

type SignInParams = {
  username: string;
  password: string;
};

type SignUpParams = {
  email: string;
  username: string;
  password: string;
};

type ConfirmSignUpParams = {
  username: string;
  code: string;
};

export const signUp = async ({ email, username, password }: SignUpParams) => {
  const { user } = await Auth.signUp({
    username,
    password,
    attributes: {
      email,
    },
  });
  return user;
};

export const confirmSignUp = async ({
  username,
  code,
}: ConfirmSignUpParams) => {
  await Auth.confirmSignUp(username, code);
};

export const signIn = async ({ username, password }: SignInParams) => {
  const user = await Auth.signIn(username, password);
  return user;
};

export const storeUser = (user: any) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getUser = (): any | undefined => {
  const user = localStorage.getItem("currentUser");
  if (!user) {
    return;
  }
  return JSON.parse(user);
};
