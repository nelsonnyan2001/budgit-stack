import { Button, Center, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AttributesContext } from "../../utils/contexts";
import Dashboard from "./Dashboard";
import { getOnboardStatus } from "@/utils/helpers";

const DashboardLayout: React.FC = () => {
  const { attributes, loading } = useContext(AttributesContext);
  const navigate = useNavigate();

  const onboardStatus = getOnboardStatus(attributes);

  if (loading) {
    return <></>;
  }

  if (onboardStatus === "not started") {
    return (
      <Center mih={"100dvh"}>
        <Stack>
          <Text>Oops! Please finish onboarding first.</Text>
          <Button
            onClick={() => {
              navigate("/setup");
            }}
          >
            Go to Onboarding
          </Button>
        </Stack>
      </Center>
    );
  }

  return <Dashboard />;
};

export default DashboardLayout;
