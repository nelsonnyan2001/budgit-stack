import { AssetLocation } from "@/components/AssetAllocation/AssetAllocation";
import { Flex, Stack } from "@mantine/core";

export const AssetSplit: React.FC = () => {
  return (
    <Stack p="md">
      <Flex direction={{ base: "column", md: "row" }} gap={"md"}>
        <AssetLocation />
        <AssetLocation />
      </Flex>
    </Stack>
  );
};
