import { signOut as amplifySignOut } from "aws-amplify/auth";

export const signOut = async () => {
  amplifySignOut().then(() => {
    window.location.reload();
  });
};
