import { AppShell, Button, Group, Image, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.scss";
import Sidebar from "./Sidebar";

const DashboardLayout: React.FC = () => {
  const Links = [
    { slug: "/expenses", button: "Expenses 💸" },
    { slug: "/churning", button: "Churning ♻️" },
    { slug: "/retirement", button: "Retirement 👵" },
  ];

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm" }}>
      <AppShell.Header>
        <Group h={"100%"} px="md" gap={"xs"} justify="space-between">
          <Group h={"100%"}>
            <Image src={"/logo.png"} h={"100%"} />
            <Text fw={"600"}>Budgit</Text>
          </Group>
          <Group>
            {Links.map((item, idx) => (
              <Button
                key={idx}
                className={styles.mainLink}
                component={Link}
                variant="default"
                to={item.slug}
              >
                {item.button}
              </Button>
            ))}
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
