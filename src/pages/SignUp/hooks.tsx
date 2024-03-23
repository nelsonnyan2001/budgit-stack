import { SignUpInput, signUp } from "aws-amplify/auth";

const handleSignUp = (params: SignUpInput) => {
  signUp(params).then(() => {
    console.log("oondashlin");
  });
};
