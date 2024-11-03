"use client";


import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, VStack, Stack, Button, Icon, Divider, Image } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { m } from 'ui/m';
import Testimonials from './Teastimonial';
import { LocateIcon, Shield, Star } from 'lucide-react';

interface GridItemMProps {
    title: string;
    description: string;
    backgroundImage: string;
}

const GridItemM: React.FC<GridItemMProps> = ({ title, description, backgroundImage }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Box
            position="relative"
            h="200px"
            rounded="lg"
            overflow="hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                backgroundImage={`url(${backgroundImage})`}
                backgroundSize="cover"
                backgroundPosition="center"
            />
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg={isHovered ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)"}
                transition="background 0.3s"
            />
            <Box
                position="relative"
                h="full"
                p={5}
                color="white"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Heading mb={5} size="sm">{title}</Heading>
                <AnimatePresence>
                    {isHovered && (
                        <m.MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Text>{description}</Text>
                        </m.MotionBox>
                    )}
                </AnimatePresence>
            </Box>
        </Box>
    );
};

// Sample data for each service
const servicesData: GridItemMProps[] = [
    {
        title: 'Interior Vacuuming',
        description: 'Comprehensive vacuuming to remove dirt and dust from your car\'s interior.',
        backgroundImage: 'img1.jpg', // Replace with actual image paths
    },
    {
        title: 'Boot Detailing',
        description: 'Thorough cleaning of the boot area for a fresh and tidy look.',
        backgroundImage: 'img2.jpg', // Replace with actual image paths
    },
    {
        title: 'AC / Vent Steaming',
        description: 'High-temperature steam cleaning to disinfect and refresh AC vents.',
        backgroundImage: 'img3.jpg',
    },
    {
        title: 'Leather Washing & Conditioning',
        description: 'Gentle washing and conditioning to keep leather surfaces soft and clean.',
        backgroundImage: 'img4.png',
    },
    {
        title: 'Fabric Washing',
        description: 'Deep cleaning of fabric surfaces to remove stains and odors.',
        backgroundImage: 'img5.jpg',
    },
    {
        title: 'Roof Cleaning',
        description: 'Cleaning the roof exterior for a spotless shine.',
        backgroundImage: 'img6.jpg',
    },
    {
        title: 'Door Jamb Cleaning',
        description: 'Removing dirt and grime from door jambs for a pristine look.',
        backgroundImage: 'img7.jpg',
    },
    {
        title: 'Dashboard Shine',
        description: 'Bringing shine and freshness back to your dashboard.',
        backgroundImage: 'img8.jpg',
    },
    {
        title: 'Engine Detailing',
        description: 'Detailed cleaning of the engine bay for improved appearance and performance.',
        backgroundImage: 'img9.jpg',
    },
    {
        title: 'Exterior Washing with Snow Foam',
        description: 'Thick snow foam application for a thorough exterior wash.',
        backgroundImage: 'img10.jpg',
    },
    {
        title: 'Rim & Tyre Shine',
        description: 'Enhancing the shine of rims and tyres for a polished look.',
        backgroundImage: 'img11.jpg',
    },
    {
        title: 'Seat Belt Washing',
        description: 'Cleaning seat belts to remove stains and refresh their appearance.',
        backgroundImage: 'img12.webp',
    },
    {
        title: 'Machine Buffing',
        description: 'Buffing to remove surface scratches and enhance the paint gloss.',
        backgroundImage: 'img13.webp',
    },
    {
        title: 'Interior Trim Restoration',
        description: 'Restoring interior trims to their original look and feel.',
        backgroundImage: 'img14.webp',
    },
    {
        title: 'Exterior Trim Restoration',
        description: 'Restoring faded trims for a refreshed exterior.',
        backgroundImage: 'img15.webp',
    },
    {
        title: 'Ceramic Coating',
        description: 'Protective ceramic coating to enhance durability and shine.',
        backgroundImage: 'img5.jpg',
    },
];

// Additional sections
const ServicesGrid: React.FC = () => {
    return (
        <Container py={{md: 10}}>
            {/* Hero Section */}
            <VStack spacing={6} textAlign="center" mb={10}>
                <Heading as="h1" size="2xl">Professional Mobile Car Wash & Detailing</Heading>
                <Text fontSize="lg" color="gray.600" >
                    Experience top-notch car care with convenience at your doorstep. Let us handle every detail with our specialized services.
                </Text>
                <Button colorScheme="primary" size="lg" my={5}>Book a Service</Button>
            </VStack>

            {/* Services Grid */}
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={5} mb={10}>
                {servicesData.map((service, index) => (
                    <GridItemM
                        key={index}
                        title={service.title}
                        description={service.description}
                        backgroundImage={service.backgroundImage}
                    />
                ))}
            </SimpleGrid>

            {/* Testimonials Section */}
            <Testimonials />

            {/* Why Choose Us Section */}
            <VStack spacing={6} textAlign="center" py={20}>
                <Heading as="h2" size="lg" my={5}>Why Choose Car Care?</Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    <WhyChooseUsItem title="Convenience" description="Get your car washed wherever you are." icon={<LocateIcon color='#D6B65A' />} />
                    <WhyChooseUsItem title="Quality Products" description="We use only the best products for your vehicle." icon={<Star color='#D6B65A'/>} />
                    <WhyChooseUsItem title="Experienced Professionals" description="Our team has years of experience in car detailing." icon={<Shield color='#D6B65A'/>} />
                </SimpleGrid>
            </VStack>

            {/* Call to Action */}
            <VStack spacing={6} textAlign="center" pb={20} pt={20}>
                <Heading as="h2" size="lg">Ready to Give Your Car the Care It Deserves?</Heading>
                <Text fontSize="md" color="gray.600" maxW="3xl">
                    Contact us to schedule a service today and see the Car Care difference for yourself.
                </Text>
                <Button colorScheme="black" size="lg">Contact Us</Button>
            </VStack>
        </Container>
    );
};

export default ServicesGrid;

// @ts-expect-error - None of the props are used in this component
const WhyChooseUsItem = ({ title, description, icon }) => (
    <VStack align="center">
        {icon}
        <Heading as="h3" size="md" my={3}>{title}</Heading>
        <Text textAlign="center" color="gray.600">{description}</Text>
    </VStack>
);
