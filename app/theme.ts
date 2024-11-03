import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const colors = {
  primary: {
    50: "#E6EAF4",
    100: "#C2CFEA",
    200: "#9BB1E0",
    300: "#7494D6",
    400: "#4D76CC",
    500: "#25387D",
    600: "#1C2E67",
    700: "#0F1A3B",
    800: "#0B0E2B",
    900: "#060912",
  },
  secondary: {
    50: "#F5EFC9",
    100: "#EEE4B3",
    200: "#E1C97C",
    300: "#D6B65A",
    400: "#C18C39",
    500: "#A87429",
    600: "#8C5E1F",
    700: "#704A17",
    800: "#53360F",
    900: "#372307",
  },
};

const Button = {
  baseStyle: {
    fontWeight: "light",
    rounded: "full",
    border: "1px solid",
    borderColor: "black",
    borderBottomWidth: "4px",
    borderRightWidth: "2px",
  },
  sizes: {
    md: {
      fontSize: "lg",
      px: 6,
      py: 4,
    },
  },
  variants: {
    solid: (props: { colorScheme: string }) => ({
      color: props.colorScheme === "black" ? "primary.500" : "white",
    }),
    // outline: (props: { colorScheme: string }) => ({
    //   color: props.colorScheme === "black" ? "primary.500" : "white",
    // }),
  },
  defaultProps: {
    colorScheme: "primary",
    variant: "solid",
  },
};

const theme = extendTheme({
  config,
  colors,
  components: {
    Container: {
      baseStyle: {
        maxW: { base: "", md: "2xl", lg: "5xl", xl: "6xl" },
      },
    },
    Button,
  },
});

export default theme;
