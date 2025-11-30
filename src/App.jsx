import { Container, AppShell } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

export default function App() {

  return (
    <AppShell padding="lg" header={{ height: 90 }} withBorder={false}>
      <AppShell.Header
        p="xl"
      >
        <Navbar />
      </AppShell.Header>
      <AppShell.Main w="100%" h="auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}
