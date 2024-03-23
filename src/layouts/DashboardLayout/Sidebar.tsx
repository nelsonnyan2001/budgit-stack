import { Button, Divider, Stack, Text } from "@mantine/core";
import { signOut } from "aws-amplify/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AttributesContext } from "../../utils/contexts";

type SidebarProps = {
  collapse: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ collapse }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut().then(() => navigate("/"));
  };

  const { attributes } = useContext(AttributesContext);

  return (
    <Stack h={"100%"} p={"md"} justify="space-between">
      <Stack>
        <Text> Welcome back, {attributes.given_name}.</Text>
        <Divider />
      </Stack>
      <Stack>
        <Button onClick={() => collapse()}>Collapse Sidebar</Button>
        <Button variant="default" onClick={() => handleSignOut()}>
          Sign Out
        </Button>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
