import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const colors = {
  primary: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC", // Default
    600: "#007AB8",
    700: "#005885",
    800: "#003F5E",
    900: "#002A3B",
  },
  secondary: {
    50: "#FEEBC8",
    100: "#FBD38D",
    200: "#F6AD55",
    300: "#ED8936",
    400: "#DD6B20",
    500: "#C05621", // Default
    600: "#9C4221",
    700: "#7B341E",
    800: "#652B19",
    900: "#4A2317",
  },
};

const Button = {
    baseStyle: {
      fontWeight: "bold",
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
        bg:
          props.colorScheme === "black"
            ? "black"
            : props.colorScheme === "white"
            ? "white"
            : "primary.500",
        color: props.colorScheme === "white" ? "primary.700" : "secondary.500",
        _hover: {
          color: props.colorScheme === "white" ? "primary.700" : "secondary.500",
          bg:
            props.colorScheme === "black"
              ? "gray.800"
              : props.colorScheme === "white"
              ? "gray.300"
              : "primary.600",
        },
      }),
      outline: (props: { colorScheme: string }) => ({
        borderColor:
          props.colorScheme === "black"
            ? "black"
            : props.colorScheme === "white"
            ? "gray.200"
            : "primary.600",
        color:
          props.colorScheme === "black"
            ? "black"
            : props.colorScheme === "white"
            ? "white"
            : "primary.600",
        _hover: {
          color:
            props.colorScheme === "black"
              ? "black"
              : props.colorScheme === "white"
              ? "primary.700"
              : "secondary.500",
          bg:
            props.colorScheme === "black"
              ? "gray.800"
              : props.colorScheme === "white"
              ? "gray.50"
              : "primary.500",
        },
      }),
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
        maxW: { base: "", md: "3xl", lg: "5xl", xl: "7xl" },
      },
    },
    Button,
  },
});

export default theme;
