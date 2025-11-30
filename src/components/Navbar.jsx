import { AppShell, Group, Anchor, Text, Image } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Group h="100%" justify="space-between" align="center">
      <Anchor component={NavLink} to="/">
        <Image src="/assets/arangkada-logo.png" alt="Arangkada Logo" h={42} />
      </Anchor>
      <Group gap="lg">
        <Anchor component={NavLink} to="/">
          Home
        </Anchor>
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
    </Group>
  );
}
