import { Outlet, useNavigate } from "react-router-dom";
import { AppShell, Center, Paper } from "@mantine/core";
import { getCurrentUser } from "aws-amplify/auth";
import { useEffect } from "react";

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then(() => {
        navigate("/expenses");
      })
      .catch(() => {
        // Suppressing console error
        // There's probably a cleaner way to do this but oh well
      });
  }, []);

  return (
    <AppShell>
      <AppShell.Main>
        <Center mih={"100dvh"}>
          <Paper maw={450} w={"100%"} radius={"lg"} withBorder>
            <Outlet />
          </Paper>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
};

export default AuthLayout;
