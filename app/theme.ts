// theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

const colors = {
    primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC', // Default
        600: '#007AB8',
        700: '#005885',
        800: '#003F5E',
        900: '#002A3B',
    },
    secondary: {
        50: '#FEEBC8',
        100: '#FBD38D',
        200: '#F6AD55',
        300: '#ED8936',
        400: '#DD6B20',
        500: '#C05621', // Default
        600: '#9C4221',
        700: '#7B341E',
        800: '#652B19',
        900: '#4A2317',
    },
}

const Button = {
    baseStyle: {
        fontWeight: 'bold', // Set the default font weight for all buttons
    },
    sizes: {
        md: {
            fontSize: 'lg',
            px: 6,
            py: 4,
        },
    },
    variants: {
        solid: {
            bg: 'primary.500', // Default background color
            color: 'white',
            _hover: {
                bg: 'primary.600', // Hover variant
            },
        },
        outline: {
            borderColor: 'primary.500',
            color: 'primary.500',
            _hover: {
                bg: 'primary.50',
            },
        },
    },
    defaultProps: {
        variant: 'solid', // Set the default variant
    },
}

const theme = extendTheme({
    config,
    colors,
    components: {
        Button, // Apply the Button customizations
    },
})

export default theme
