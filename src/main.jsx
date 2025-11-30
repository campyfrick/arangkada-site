// @ts-ignore
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { mantineTheme } from "./theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <MantineProvider
        defaultColorScheme="light"
        theme={mantineTheme}
      >
        <App />
      </MantineProvider>
    </HashRouter>
  </StrictMode>
);
