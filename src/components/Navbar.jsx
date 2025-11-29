import { AppShell, Group, Anchor, Text } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Group h="100%" justify="space-between">
      <Group gap="md">
        <Anchor component={NavLink} to="/">
          Home
        </Anchor>
        <Anchor component={NavLink} to="/terms">
          Terms
        </Anchor>
        <Anchor component={NavLink} to="/privacy">
          Privacy
        </Anchor>
        <Anchor component={NavLink} to="/contact">
          Contact
        </Anchor>
      </Group>
    </Group>
  );
}
