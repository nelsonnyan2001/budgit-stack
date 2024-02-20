import { FetchUserAttributesOutput } from "aws-amplify/auth";

export const getOnboardStatus = (
  cognitoAttribtueObject: FetchUserAttributesOutput,
) => {
  return cognitoAttribtueObject["custom:onboardStatus"];
};
