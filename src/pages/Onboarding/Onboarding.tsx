import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Onboarding.module.scss";
import { Button, Card, Center, Grid, Image, Stack, Text } from "@mantine/core";
import { CardData } from "./CardData";
import {
  IconCircleArrowRightFilled,
  IconCircleCheck,
} from "@tabler/icons-react";
import { updateUserAttributes } from "aws-amplify/auth";

export type Slugs = "tracking" | "churning" | "retirement";

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<Slugs[]>([]);

  const updateSelected = (slug: Slugs) => {
    setSelected((old) => {
      const arrCopy = [...old];
      if (old.includes(slug)) {
        const newArr = arrCopy.filter((testStr) => testStr !== slug);
        return newArr;
      } else {
        arrCopy.push(slug);
        return arrCopy;
      }
    });
  };

  const onSubmit = () => {
    updateUserAttributes({
      userAttributes: {
        "custom:onboardStatus": "finished",
      },
    }).then(() => navigate("/"));
  };

  return (
    <Stack>
      <Text size={"lg"}>What do you plan to use Budgit for?</Text>
      <Grid>
        {CardData.map((item, idx) => (
          <Grid.Col span={{ base: 12, sm: idx === 0 ? 12 : 6 }} key={idx}>
            <Card
              shadow="xs"
              padding="lg"
              radius="md"
              className={styles.card}
              data-active={selected.includes(item.slug)}
            >
              <Card.Section inheritPadding>
                <Center>
                  <Image
                    src={item.image}
                    w="auto"
                    fit="contain"
                    height={160}
                  ></Image>
                </Center>
              </Card.Section>
              <Text size="xl" fw={800}>
                {item.title}
              </Text>
              <Text size="md" c="dimmed">
                {item.body}
              </Text>
              <Button
                color="blue"
                fullWidth
                mt={"md"}
                onClick={() => updateSelected(item.slug)}
              >
                {item.button}
                {selected.includes(item.slug) && (
                  <IconCircleCheck className={styles.icon} />
                )}
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      <Center mt={"xl"}>
        <Button disabled={!(selected.length >= 1)} onClick={onSubmit}>
          Continue
          <IconCircleArrowRightFilled className={styles.icon} />
        </Button>
      </Center>
    </Stack>
  );
};

export default Onboarding;
