export const handleAmplifyErr = (errCode: string | undefined) => {
  console.log(errCode);
  switch (errCode) {
    case "UserNotFoundException":
      return "User not found.";
    case "NotAuthorizedException":
      return "Incorrect username or password.";
    case "InvalidPasswordException":
      return `Invalid Password. Your password needs to
      \u2022 contain 1 lowercase letter
      \u2022 contain 1 uppercase letter
      \u2022 be at least 8 digits long`;
  }
  return "";
};
