import { Group, Text } from "@mantine/core";
import { IconExclamationCircle } from "@tabler/icons-react";

type ErrorProps = { label: string };

const Error: React.FC<ErrorProps> = ({ label }) => {
  return (
    <Group gap="12px" wrap="nowrap">
      <IconExclamationCircle
        stroke={1.5}
        color="red"
        style={{ flexShrink: 0 }}
      ></IconExclamationCircle>
      <Text c="red" fz={"sm"} style={{ whiteSpace: "pre-wrap" }}>
        {label}
      </Text>
    </Group>
  );
};

export default Error;
