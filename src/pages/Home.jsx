import React from "react";
import { Title, Text, Button, Group, Stack, Card } from "@mantine/core";
import { PLAY_STORE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Stack align="center" mt={40}>
      <Title order={1} ta="center">
        Arangkada
      </Title>
      <Text size="lg" c="dimmed" ta="center" maw={500}>
        A simple companion app to help communities move forward — connect with
        people, find local resources, and grow together.
      </Text>

      <Group mt="lg">
        <Button
          component="a"
          href={PLAY_STORE_URL}
          target="_blank"
          variant="default"
          size="md"
        >
          Get it on Google Play
        </Button>
      </Group>
    </Stack>
  );
}
