import { AssetSplit } from "@/groups/AssetSplit/AssetSplit";
import { NetworthStats } from "@/groups/NetworthStats/NetworthStats";
import { Stack } from "@mantine/core";

const Retirement: React.FC = () => {
  return (
    <Stack gap="0px">
      <NetworthStats />
      <AssetSplit />
    </Stack>
  );
};

export default Retirement;
