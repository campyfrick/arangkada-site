// @ts-ignore
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { mantineTheme } from "./theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider
        defaultColorScheme="light"
        theme={mantineTheme}
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
