// Hero.tsx
"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Box, 
    Button, 
    Heading, 
    Text, 
    VStack, 
    ButtonProps 
} from '@chakra-ui/react';
import { socialLinks } from '@/lib/data';

// Memoized button to prevent unnecessary re-renders
const BookNowButton = React.memo<ButtonProps>((props) => (
    <Button 
        borderRightColor="white" 
        borderColor="white" 
        borderBottomColor="white" 
        colorScheme="blue" 
        size={{base: 'md', lg: "lg"}}
        {...props}
    >
        Book Now
    </Button>
));
BookNowButton.displayName = 'BookNowButton';

// Hero component with performance optimizations
function Hero() {
    // Use state for parallax effect with performance in mind
    const [scrollPosition, setScrollPosition] = useState(0);

    // Memoized scroll handler to reduce unnecessary re-renders
    const handleScroll = useCallback(() => {
        // Limit scroll updates for performance
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
    }, []);

    // Efficient scroll event listener management
    useEffect(() => {
        // Throttle scroll event
        const throttledHandleScroll = () => {
            window.requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, [handleScroll]);

    // Calculate scale with memoized computation
    const backgroundScale = React.useMemo(() => {
        return 1 + Math.min(scrollPosition * 0.0005, 0.5); // Limit max scale
    }, [scrollPosition]);

    return (
        <Box
            position="relative"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            overflow="hidden"
        >
            {/* Optimized background image */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                overflow="hidden"
            >
                <Image 
                    src="/img3.jpg" 
                    alt="Car Wash Background" 
                    fill
                    priority
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    style={{
                        objectFit: 'cover',
                        transform: `scale(${backgroundScale})`,
                        transition: "transform 0.2s ease-out",
                    }}
                />
            </Box>

            {/* Dark overlay */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="rgba(0, 0, 0, 0.4)"
                zIndex={1}
            />

            {/* Content */}
            <VStack 
                zIndex={2} 
                spacing={6} 
                color="white" 
                px={6} 
                maxW="container.xl" 
                mx="auto"
            >
                <Heading 
                    as="h1"
                    size={{ base: "xl", lg: "2xl" }} 
                    fontWeight="bold"
                    textShadow="0 2px 4px rgba(0,0,0,0.3)"
                >
                    Experience Pristine Car Care
                </Heading>
                
                <Text 
                    fontSize={{ base: "lg", lg: "2xl" }} 
                    maxW="700px"
                    textAlign="center"
                    textShadow="0 1px 2px rgba(0,0,0,0.2)"
                >
                    Welcome to car care, where your vehicle receives the best treatment. 
                    Book your next wash online and enjoy our exceptional services. 
                    Our team is ready to assist you with all your car care needs.
                </Text>
                
                <Box display="flex" gap={4}>
                    <Link 
                        href={socialLinks.whatsapp} 
                        passHref 
                        legacyBehavior
                    >
                        <BookNowButton 
                            as="a"
                            rel="noopener noreferrer"
                        />
                    </Link>
                </Box>
            </VStack>
        </Box>
    );
}

export default React.memo(Hero);