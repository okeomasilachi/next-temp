"use client";

import { Box, Heading, Image, Text, Button, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function Hero() {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const newScale = 1 + scrollTop * 0.0005;
            setScale(newScale);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            position="relative"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            overflow="hidden"
            _after={{
                content: `""`,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: "url('img3.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                transform: `scale(${scale})`,
                transition: "transform 0.2s ease-out",
                zIndex: -1,
            }}
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="rgba(0, 0, 0, 0.4)"
                zIndex={1}
            />
            <VStack zIndex={2} spacing={6} color="white" px={6}>
                <Heading size={{ base: "3xl", lg: "4xl" }} fontWeight="bold" >
                    Experience Pristine Car Care
                </Heading>
                <Text fontSize="lg" maxW='700' >
                    Welcome to care care, where your vehicle receives the best treatment. Book your next wash online and enjoy our exceptional services. Our team is ready to assist you with all your car care needs.
                </Text>
                <Box display="flex" gap={4}>
                    <Button borderRightColor="white" borderColor="white" borderBottomColor="white" colorScheme="blue" size="lg">
                        Book Now
                    </Button>
                    <Button colorScheme="white" size="lg" variant="outline">
                        Learn More
                    </Button>
                </Box>
            </VStack>
        </Box>
    );
}

export default Hero;
