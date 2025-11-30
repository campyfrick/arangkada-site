import { Title, Text, Container, List, Stack } from "@mantine/core";

export default function Privacy() {
  return (
    <Stack align="center" w="100%" p="xl">
      <Container
        p="xl"
        style={{
          borderRadius: 20,
          border: "3px solid black",
          boxShadow: "2px 2px 0px black",
          background: "white",
        }}
      >
        <Title order={2}>Privacy Policy</Title>
        <Text mt="xs" fw={500}>
          Effective Date: October 8, 2025
        </Text>

        <Text mt="md">
          This Privacy Policy explains how CampusFreak (“we,” “our,” or “us”)
          collects, uses, and protects your information when you use Arangkada –
          LTO Exam Reviewer (“App”).
        </Text>

        {/* 1. Information We Collect */}
        <Title order={3} mt="lg">
          1. Information We Collect
        </Title>
        <Text mb="xs">We collect the following types of information:</Text>
        <List withPadding spacing="xs">
          <List.Item>
            <strong>Account Information:</strong> Email, password (encrypted),
            nickname, and optionally Google account information if you use
            Google Sign-In.
          </List.Item>
          <List.Item>
            <strong>Profile Information:</strong> Display picture (optional).
          </List.Item>
          <List.Item>
            <strong>Usage Data:</strong> Total quizzes taken, total correct
            answers, total questions answered, and highest score out of 60.
          </List.Item>
          <List.Item>
            <strong>Device and Analytics Data:</strong> Device model, OS
            version, crash reports, and analytics (if Firebase Analytics is
            enabled).
          </List.Item>
          <List.Item>
            <strong>Ad Data:</strong> Non-personalized ad identifiers used for
            displaying ads via Google AdMob.
          </List.Item>
        </List>

        {/* 2. How We Use the Information */}
        <Title order={3} mt="lg">
          2. How We Use the Information
        </Title>
        <Text mb="xs">We use your information to:</Text>
        <List withPadding spacing="xs">
          <List.Item>
            Provide and improve app features and overall user experience
          </List.Item>
          <List.Item>Display personalized content and track progress</List.Item>
          <List.Item>Show ads and manage donation functionality</List.Item>
          <List.Item>Analyze usage trends and app performance</List.Item>
          <List.Item>Maintain account security and prevent misuse</List.Item>
        </List>

        {/* 3. Data Sharing and Disclosure */}
        <Title order={3} mt="lg">
          3. Data Sharing and Disclosure
        </Title>
        <List withPadding spacing="xs">
          <List.Item>We do not sell or rent your personal data.</List.Item>
          <List.Item>
            We may share limited information with:
            <List withPadding spacing="xs" mt={5}>
              <List.Item>
                <strong>Google Firebase</strong> (authentication, analytics,
                cloud functions)
              </List.Item>
              <List.Item>
                <strong>Google AdMob</strong> (displaying advertisements)
              </List.Item>
            </List>
          </List.Item>
          <List.Item>
            These third parties process your data according to their respective
            privacy policies.
          </List.Item>
        </List>

        {/* 4. Data Storage and Security */}
        <Title order={3} mt="lg">
          4. Data Storage and Security
        </Title>
        <List withPadding spacing="xs">
          <List.Item>
            User data is securely stored in Firebase services.
          </List.Item>
          <List.Item>
            Passwords are encrypted and never visible to us.
          </List.Item>
          <List.Item>
            We take reasonable steps to protect your information but cannot
            guarantee absolute security.
          </List.Item>
        </List>

        {/* 5. User Rights */}
        <Title order={3} mt="lg">
          5. User Rights
        </Title>
        <Text mb="xs">You have the right to:</Text>
        <List withPadding spacing="xs">
          <List.Item>Access and update your account information</List.Item>
          <List.Item>
            Request deletion of your account and related data
          </List.Item>
          <List.Item>
            Withdraw consent for data collection (may limit functionality)
          </List.Item>
        </List>
        <Text mt="xs">
          To make such requests, contact us at{" "}
          <strong>campusfreak.dev@gmail.com</strong>.
        </Text>

        {/* 6. Children’s Privacy */}
        <Title order={3} mt="lg">
          6. Children’s Privacy
        </Title>
        <Text>
          Our App is intended for users aged 13 and above. We do not knowingly
          collect data from children under 13.
        </Text>

        {/* 7. Changes to This Policy */}
        <Title order={3} mt="lg">
          7. Changes to This Policy
        </Title>
        <Text>
          We may update this Privacy Policy periodically. We will notify users
          by updating the “Effective Date” at the top of this page.
        </Text>

        {/* 8. Contact */}
        <Title order={3} mt="lg">
          8. Contact
        </Title>
        <Text>
          For questions about this Privacy Policy, contact us at:{" "}
          <strong>campusfreak.dev@gmail.com</strong>
        </Text>
      </Container>
    </Stack>
  );
}
