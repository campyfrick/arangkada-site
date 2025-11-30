import React from "react";
import { Title, Text, Button, Group, Stack, Card, Flex } from "@mantine/core";
import { VITE_PLAY_STORE_URL } from "../utils/constants";

export default function Home() {
  return (
    <Stack align="center" justify="center" w="100%" h="auto" p="md" gap="lg">
      <Title order={1} ta="center" size={36}>
        Master the LTO Written Exam with Confidence
      </Title>
      <Text size="lg" ta="center" maw={500}>
        Arangkada helps you prepare for your LTO Driver’s License Exam with
        confidence. Learn everything you need to pass — from road signs and
        markings to traffic rules, penalties, and safe driving practices.
      </Text>
      <Button
        component="a"
        href={VITE_PLAY_STORE_URL}
        target="_blank"
        variant="default"
        size="sm"
      >
        Get the App on Google Play
      </Button>
    </Stack>
  );
}
