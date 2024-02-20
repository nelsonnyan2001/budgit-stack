import {
  Button,
  Center,
  Container,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Outlet, useNavigate } from "react-router-dom";
import { AttributesContext } from "../../utils/contexts";
import { useContext } from "react";

const OnboardingLayout: React.FC = () => {
  const { attributes, loading } = useContext(AttributesContext);
  const navigate = useNavigate();
  const onboardStatus = attributes["custom:onboardStatus"];

  if (loading) {
    return (
      <Container py={60} maw={600}>
        <Skeleton />
      </Container>
    );
  }

  if (onboardStatus === "finished") {
    return (
      <Center mih={"100dvh"}>
        <Stack>
          <Text>Oops! You've already finished onboarding.</Text>
          <Button
            onClick={() => {
              navigate("/expenses");
            }}
          >
            Go to Dashboard
          </Button>
        </Stack>
      </Center>
    );
  }
  return (
    <Container py={60} maw={600}>
      <Stack>
        <Title>Welcome to Budgit.</Title>
        <Outlet />
      </Stack>
    </Container>
  );
};

export default OnboardingLayout;
