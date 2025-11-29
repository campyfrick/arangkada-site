import { Title, Text } from "@mantine/core";

export default function Terms() {
  return (
    <div>
      <Title order={2}>Terms and Conditions</Title>
      <Text mt="md">
        These are placeholder terms and conditions for the Arangkada app.
        Replace this text with your actual legal terms.
      </Text>

      <Title order={3} mt="lg">
        User obligations
      </Title>
      <Text>
        Users must use the app in accordance with local laws and avoid abuse.
      </Text>

      <Title order={3} mt="lg">
        Limitation of liability
      </Title>
      <Text>
        The app is provided "as-is". Adjust this section based on your legal
        needs.
      </Text>
    </div>
  );
}
