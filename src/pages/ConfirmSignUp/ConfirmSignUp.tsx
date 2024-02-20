import { Button, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ConfirmSignUp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack p={"xl"}>
      <Title fz="xl">Confirmation Email Sent</Title>
      <Text>Please check your inbox for a verification link.</Text>
      <Button onClick={() => navigate("/")}>Return to Login</Button>
    </Stack>
  );
};

export default ConfirmSignUp;
