'use client';

import {ChakraProvider} from '@chakra-ui/react'
import theme from "@/app/theme";
import React from "react";

export function Providers({children}: { children: React.ReactNode }) {
    return <ChakraProvider toastOptions={{
        defaultOptions: {
            position: 'top-right', duration: 5000,
            isClosable: true, variants: 'subtle'
        }
    }} theme={theme}>{children}</ChakraProvider>
}