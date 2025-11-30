import {
  Anchor,
  Button,
  Card,
  Container,
  createTheme,
  Paper,
  rem,
  Select,
  Title,
} from "@mantine/core";
import type { MantineThemeOverride } from "@mantine/core";
// @ts-ignore
import "./styles/fonts.css";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const mantineTheme: MantineThemeOverride = createTheme({
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  spacing: {
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
  },
  primaryColor: "yellow",
  fontFamily: `"Rubik", sans-serif`,
  headings: {
    fontFamily: `"BreeSerif", sans-serif`,
  },

  components: {
    AppShell: {
      styles: (theme) => ({
        root: {
          backgroundImage: 'url("/assets/background.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#FFD600",
          minHeight: "100vh",
        },
        main: {
          backgroundColor: "transparent",
          display: "flex",
        },
        header: {
          backgroundColor: "rgba(209, 160, 49, 0.95)",
        },
      }),
    },
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),

    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "var(--mantine-radius-default)",
        withBorder: true,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
    Anchor: Anchor.extend({
      styles: () => ({
        root: {
          color: "black",
          textTransform: "uppercase",
        },
      }),
    }),
    Title: Title.extend({
      styles: () => ({
        root: {
          textTransform: "uppercase",
        },
      }),
    }),
    Button: Button.extend({
      styles: () => ({
        root: {
          textTransform: "uppercase",
          borderRadius: "9999px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "black",
          boxShadow: "4px 4px 0px 0px black",
        },
      }),
    }),
  },
  other: {
    style: "mantine",
  },
});
