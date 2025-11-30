import { Title, Text, Container, List, Stack } from "@mantine/core";

export default function Terms() {
  return (
    <Stack align="center" w="100%" p="xl">
      <Container
        p="xl"
        w="100%"
        style={{
          borderRadius: 20,
          border: "3px solid black",
          boxShadow: "2px 2px 0px black",
          background: "white",
        }}
      >
        <Title order={2}>Terms and Conditions</Title>
        <Text mt="xs" fw={500}>
          Effective Date: October 8, 2025
        </Text>

        <Text mt="md">
          Welcome to Arangkada – LTO Exam Reviewer (“App”), developed by
          CampusFreak (“we,” “our,” or “us”). By downloading, accessing, or
          using this App, you agree to be bound by these Terms and Conditions.
          If you do not agree, please do not use the App.
        </Text>

        {/* 1. Use of the App */}
        <Title order={3} mt="lg">
          1. Use of the App
        </Title>
        <List withPadding spacing="xs">
          <List.Item>
            The App is designed for educational and review purposes to help
            users prepare for the Land Transportation Office (LTO) driver’s
            license examinations.
          </List.Item>
          <List.Item>
            The App is not affiliated with, endorsed by, or officially connected
            to the LTO or any government agency.
          </List.Item>
          <List.Item>
            You must be at least 13 years old to use the App or have parental
            consent.
          </List.Item>
        </List>

        {/* 2. User Accounts */}
        <Title order={3} mt="lg">
          2. User Accounts
        </Title>
        <List withPadding spacing="xs">
          <List.Item>
            To use certain features, you must create an account using an email
            and password or sign in through Google.
          </List.Item>
          <List.Item>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </List.Item>
          <List.Item>
            We reserve the right to suspend or terminate accounts that engage in
            abusive behavior, cheating, or misuse of the App.
          </List.Item>
        </List>

        {/* 3. User Content */}
        <Title order={3} mt="lg">
          3. User Content
        </Title>
        <List withPadding spacing="xs">
          <List.Item>
            You may upload limited profile information such as a nickname and
            display picture.
          </List.Item>
          <List.Item>
            By uploading content, you grant us a non-exclusive, royalty-free
            license to display and use it for App features such as leaderboards.
          </List.Item>
          <List.Item>
            You agree not to upload content that is inappropriate, offensive, or
            violates any laws.
          </List.Item>
        </List>

        {/* 4. Data and Statistics */}
        <Title order={3} mt="lg">
          4. Data and Statistics
        </Title>
        <Text>
          The App may track non-sensitive usage data such as total quizzes
          taken, correct answers, and high scores. This data is used to improve
          your experience and future features such as leaderboards.
        </Text>

        {/* 5. Advertisements and Donations */}
        <Title order={3} mt="lg">
          5. Advertisements and Donations
        </Title>
        <List withPadding spacing="xs">
          <List.Item>
            The App is free to use and may display advertisements (including
            interstitial ads via AdMob).
          </List.Item>
          <List.Item>
            You may optionally choose to donate through in-app links; donations
            are voluntary and non-refundable.
          </List.Item>
        </List>

        {/* 6. Intellectual Property */}
        <Title order={3} mt="lg">
          6. Intellectual Property
        </Title>
        <List withPadding spacing="xs">
          <List.Item>
            All content in the App, including text, graphics, icons, and design,
            is owned by CampusFreak or its content providers.
          </List.Item>
          <List.Item>
            You may not copy, distribute, or reproduce any part of the App
            without prior written consent.
          </List.Item>
        </List>

        {/* 7. Disclaimer and Limitation of Liability */}
        <Title order={3} mt="lg">
          7. Disclaimer and Limitation of Liability
        </Title>
        <List withPadding spacing="xs">
          <List.Item>
            The App is provided “as is” without warranties of any kind.
          </List.Item>
          <List.Item>
            CampusFreak does not guarantee the accuracy or completeness of the
            questions or review materials.
          </List.Item>
          <List.Item>
            We are not responsible for any damages, losses, or issues resulting
            from use of the App.
          </List.Item>
        </List>

        {/* 8. Modifications */}
        <Title order={3} mt="lg">
          8. Modifications
        </Title>
        <Text>
          We may update or modify these Terms from time to time. Continued use
          of the App after updates means you accept the revised Terms.
        </Text>

        {/* 9. Contact */}
        <Title order={3} mt="lg">
          9. Contact
        </Title>
        <Text>
          If you have any questions about these Terms, contact us at{" "}
          <strong>campusfreak.dev@gmail.com</strong>.
        </Text>
      </Container>
    </Stack>
  );
}
