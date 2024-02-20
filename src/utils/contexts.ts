import { FetchUserAttributesOutput } from "aws-amplify/auth";
import { createContext } from "react";

type AttributesContextType = {
  attributes: FetchUserAttributesOutput;
  setAttributes: (attributes: FetchUserAttributesOutput) => void;
  loading: boolean;
};

export const AttributesContext = createContext<AttributesContextType>({
  attributes: {},
  setAttributes: () => {},
  loading: true,
});
