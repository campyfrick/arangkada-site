import { Title, Text } from "@mantine/core";

export default function Privacy() {
  return (
    <div>
      <Title order={2}>Privacy Policy</Title>
      <Text mt="md">
        This is placeholder text — replace with a complete privacy policy
        explaining what data you collect, how it is used, and how users can
        contact you.
      </Text>

      <Title order={3} mt="lg">
        Data collection
      </Title>
      <Text>
        Describe categories of collected data (analytics, account info, etc.).
      </Text>
    </div>
  );
}
