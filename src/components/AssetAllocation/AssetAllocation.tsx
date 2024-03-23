import { Container, Paper, Title } from "@mantine/core";

export const AssetLocation: React.FC = () => {
  return (
    <Paper style={{ flex: 1 }} p="xl" radius="md">
      <Title>Asset Allocation</Title>
      <Container h={400}></Container>
    </Paper>
  );
};
