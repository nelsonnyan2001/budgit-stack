import { Container, Paper, Title } from "@mantine/core";

const AssetLocation: React.FC = () => {
  return (
    <Paper style={{ flex: 1 }} p="xl" m="md" withBorder>
      <Title>Asset Allocation</Title>
      <Container h={400}></Container>
    </Paper>
  );
};

export default AssetLocation;
