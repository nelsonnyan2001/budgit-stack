import StatsCard from "@/components/StatsCard/StatsCard";
import NetworthDisplayItems from "@/groups/NetworthStats/NetworthData";
import { SimpleGrid, Stack, Title } from "@mantine/core";

export const NetworthStats: React.FC = () => (
  <Stack p="md">
    <Title pt="xl" px="md">
      Your stats at a glance.
    </Title>
    <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }}>
      {NetworthDisplayItems.map((item, idx) => (
        <StatsCard key={idx} {...item} />
      ))}
    </SimpleGrid>
  </Stack>
);
