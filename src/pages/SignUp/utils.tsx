import { signUp } from "aws-amplify/auth";

type cognitoSignUpProps = {
  username: string;
  password: string;
  email: string;
};

export const cognitoSignUp = async ({
  username,
  password,
  email,
}: cognitoSignUpProps) =>
  signUp({
    username,
    password,
    options: {
      userAttributes: {
        email,
        "custom:onboardStatus": "not started",
      },
    },
  });

type serverSignUpProps = {
  email: string;
  username: string;
  userId: string;
};

export const serverSignUp = async (options: serverSignUpProps) => {
  const { email, username, userId } = options;
  fetch("http://localhost:8080/users/create", {
    method: "POST",
    body: JSON.stringify({ email, username, userId }),
  });
};
