import AssetLocation from "@/components/AssetAllocation/AssetAllocation";
import NetworthStats from "@/groups/NetworthStats/NetworthStats";
import { Flex, Stack } from "@mantine/core";

const Retirement: React.FC = () => {
  return (
    <Stack>
      <NetworthStats />
      <Flex direction={{ base: "column", md: "row" }} gap={"md"}>
        <AssetLocation />
        <AssetLocation />
      </Flex>
    </Stack>
  );
};

export default Retirement;
