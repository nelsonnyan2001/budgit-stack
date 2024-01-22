import { Container, Stack, Title } from "@mantine/core";
import { fetchUserAttributes } from "aws-amplify/auth";
import { Outlet, useNavigate } from "react-router-dom";

const OnboardingLayout: React.FC = () => {
  const navigate = useNavigate();

  fetchUserAttributes().then((attributes) => {
    if (attributes["custom:onboardStatus"] === "finished") {
      navigate("/");
    }
  });

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
