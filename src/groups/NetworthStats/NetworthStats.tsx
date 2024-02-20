import StatsCard from "@/components/StatsCard/StatsCard";
import NetworthDisplayItems from "@/groups/NetworthStats/NetworthData";
import { SimpleGrid, Stack, Title } from "@mantine/core";

const NetworthStats: React.FC = () => (
  <Stack>
    <Title pt="xl" px="md">
      Your stats at a glance.
    </Title>
    <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} p="md">
      {NetworthDisplayItems.map((item, idx) => (
        <StatsCard key={idx} {...item} />
      ))}
    </SimpleGrid>
  </Stack>
);

export default NetworthStats;
