import { Container, AppShell } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <AppShell padding="lg" header={{ height: 60 }} withBorder={false}>
      <AppShell.Header px="xl">
        <Navbar />
      </AppShell.Header>
      <AppShell.Main w="100%" h="auto">
        <Container size="md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
