import { Outlet } from "react-router-dom";
import { AppShell, Center, Paper } from "@mantine/core";

const AuthLayout: React.FC = () => {
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
