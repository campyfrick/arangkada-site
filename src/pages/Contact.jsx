import { Title, Text, TextInput, Textarea, Button, Stack } from "@mantine/core";

export default function Contact() {
  return (
    <Stack maw={500}>
      <Title order={2}>Contact Us</Title>
      <Text c="dimmed">
        Have questions or feedback? Reach out using the form below.
      </Text>

      <TextInput label="Name" placeholder="Your name" />
      <TextInput label="Email" placeholder="you@example.com" />
      <Textarea label="Message" placeholder="How can we help?" minRows={6} />

      <Button color="yellow.7">Send message</Button>
    </Stack>
  );
}
