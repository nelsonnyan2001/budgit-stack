import { Box, Button, Group, Title } from "@mantine/core";

const Expenses: React.FC = () => {
  return (
    <Box p="md">
      <Group justify="space-between">
        <Title fw={"bold"}>Expenses</Title>
        <Group>
          <Button>Add Expense</Button>
          <Button variant="light">Add Income</Button>
        </Group>
      </Group>
    </Box>
  );
};

export default Expenses;
