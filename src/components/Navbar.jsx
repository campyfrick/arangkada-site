import { useState } from "react";
import {
  Group,
  Anchor,
  Image,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group h="100%" justify="space-between" align="center" w="100%">
        <Anchor component={NavLink} to="/">
          <Image src="/assets/arangkada-logo.png" alt="Arangkada Logo" h={42} />
        </Anchor>

        <Group
          gap="lg"
          visibleFrom="md"
        >
          <Anchor component={NavLink} to="/">Home</Anchor>
          <Anchor component={NavLink} to="/terms-and-conditions">
            Terms and Conditions
          </Anchor>
          <Anchor component={NavLink} to="/privacy-policy">
            Privacy Policy
          </Anchor>
          <Anchor component={NavLink} to="/contact">
            Contact Us
          </Anchor>
        </Group>

        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          hiddenFrom="md"
          size="sm"
          color="black"
        />
      </Group>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="lg"
        size="xs"
        hiddenFrom="md"
      >
        <Stack gap="md">
          <Anchor component={NavLink} to="/" onClick={() => setOpened(false)}>
            Home
          </Anchor>
          <Anchor
            component={NavLink}
            to="/terms-and-conditions"
            onClick={() => setOpened(false)}
          >
            Terms and Conditions
          </Anchor>
          <Anchor
            component={NavLink}
            to="/privacy-policy"
            onClick={() => setOpened(false)}
          >
            Privacy Policy
          </Anchor>
          <Anchor
            component={NavLink}
            to="/contact"
            onClick={() => setOpened(false)}
          >
            Contact Us
          </Anchor>
        </Stack>
      </Drawer>
    </>
  );
}
