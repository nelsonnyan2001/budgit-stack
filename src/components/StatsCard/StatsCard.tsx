import { NetworthDataProps, Trend } from "@/groups/NetworthStats/NetworthData";
import { Flex, Group, Paper, Stack, Text } from "@mantine/core";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";

const TrendGlyph: React.FC<Trend> = ({ historically, type, amount }) => {
  const Icon =
    historically === "higher" ? IconArrowUpRight : IconArrowDownRight;
  const color = type === "positive" ? "green" : "red";
  return (
    <Group gap="2px">
      <Text c={color}>{amount}</Text>
      <Icon color={color} />
    </Group>
  );
};

const StatsCard: React.FC<NetworthDataProps> = ({
  title,
  icon,
  amount,
  trend,
}) => {
  const Logo = icon;
  return (
    <Paper withBorder p="md" radius="md" key={title}>
      <Stack gap={"xs"}>
        <Group justify="space-between">
          <Text size="sm" c="">
            {title}
          </Text>
          <Logo color="grey"></Logo>
        </Group>
        <Flex pt={"md"} gap={"md"} direction={{ base: "column", xl: "row" }}>
          <Text size="xl" fw={"bold"}>
            $ {amount}
          </Text>
          <TrendGlyph {...trend} />
        </Flex>
        <Text size="xs" c="dimmed">
          {trend.comparator}
        </Text>
      </Stack>
    </Paper>
  );
};

export default StatsCard;
