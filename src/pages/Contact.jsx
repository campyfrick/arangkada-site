import React, { useState } from "react";
import {
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Stack,
  Container,
} from "@mantine/core";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill out name, email, and message.");
      return;
    }

    // Create mailto link so it works without a backend
    const to = "campusfreak.dev@gmail.com";
    const subject = `Contact from ${name}`;
    const body = `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open mail client
    window.location.href = mailto;
  };

  return (
    <Stack align="center" w="100%" p="xl">
      <Container
        p={20}
        style={{
          borderRadius: 20,
          border: "3px solid black",
          boxShadow: "2px 2px 0px black",
          maxWidth: "720px",
          backgroundColor: "white",
        }}
      >
        <Stack>
          <Title order={2}>Contact Us</Title>
          <Text>
            Have questions or feedback? Reach out using the form below or email
            us directly at <strong>campusfreak.dev@gmail.com</strong>.
          </Text>

          <TextInput
            label="Name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            required
          />

          <TextInput
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />

          <Textarea
            label="Message"
            placeholder="How can we help?"
            minRows={6}
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            required
          />

          <Text c="dimmed" size="sm">
            By contacting us you agree we may respond to your inquiry. If you
            prefer, send an email directly to{" "}
            <strong>campusfreak.dev@gmail.com</strong>.
          </Text>

          <Button
            onClick={handleSend}
            variant="default"
            size="xs"
            style={{
              alignSelf: "flex-end",
              textTransform: "uppercase",
              borderRadius: 9999,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "black",
              boxShadow: "2px 2px 0px 0px black",
            }}
          >
            Send message
          </Button>

          
        </Stack>
      </Container>
    </Stack>
  );
}
