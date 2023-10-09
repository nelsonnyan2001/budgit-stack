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
      "custom:onboardStatus" : "not started"
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

export const getUser = async () => {
  const user = await Auth.currentAuthenticatedUser();
  return user;
};

export const signOut = async () => {
  Auth.signOut().then(() => {
    window.location.reload();
  });
};
