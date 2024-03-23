import { AppShell, Group, Button, Text, Image, Collapse } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./DashboardLayout.module.scss";
import { useDisclosure } from "@mantine/hooks";

const Links = [
  { slug: "/expenses", button: "Expenses 💸" },
  { slug: "/churning", button: "Churning ♻️" },
  { slug: "/retirement", button: "Retirement 👵" },
];

const Dashboard: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: opened, mobile: opened },
      }}
    >
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
      <Collapse in={!opened}>
        <AppShell.Navbar>
          <Sidebar collapse={toggle} />
        </AppShell.Navbar>
      </Collapse>
      <AppShell.Main className={styles.mainBg}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
