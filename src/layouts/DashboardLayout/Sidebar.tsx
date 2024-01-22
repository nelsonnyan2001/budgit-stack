import { Divider, Stack } from "@mantine/core";
import { fetchUserAttributes } from "aws-amplify/auth";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [name, setName] = useState<string | undefined>("");
  fetchUserAttributes().then(({ given_name }) => {
    setName(given_name);
  });
  return (
    <Stack p={"md"}>
      Welcome back, {name}.
      <Divider />
    </Stack>
  );
};

export default Sidebar;
