"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Stack,
  Button,
  Icon,
  Divider,
  Image,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { m } from "ui/m";
import Testimonials from "./Teastimonial";
import { LocateIcon, Shield, Star } from "lucide-react";

interface GridItemMProps {
  title: string;
  description: string;
}

// Sample data for each service
const servicesData: GridItemMProps[] = [
  {
    title: "Interior Vacuuming",
    description:
      "A thorough vacuuming of your car's interior, targeting carpets, mats, seats, and crevices to eliminate dust, dirt, and debris. Ensures a clean and comfortable environment for your rides.",
  },
  {
    title: "Boot Detailing",
    description:
      "Comprehensive cleaning and detailing of the boot area, including vacuuming and surface treatment, to maintain cleanliness and ensure your cargo space looks tidy and fresh.",
  },
  {
    title: "AC / Vent Steaming",
    description:
      "High-temperature steam cleaning of air conditioning vents and ducts to disinfect and remove accumulated dust, allergens, and odors. Enhances air quality and ensures a healthier cabin environment.",
  },
  {
    title: "Leather Washing & Conditioning",
    description:
      "Specialized care for leather surfaces with gentle washing to remove grime and conditioning to restore moisture, softness, and shine. Extends the life of your leather seats and interiors.",
  },
  {
    title: "Fabric Washing",
    description:
      "Deep cleaning of fabric surfaces, including seats, carpets, and upholstery, using effective stain removal techniques. Eliminates odors and revitalizes the look and feel of your car's fabric.",
  },
  {
    title: "Roof Cleaning",
    description:
      "Thorough cleaning of the vehicle's roof exterior to remove dirt, dust, and stains. Leaves your car looking spotless and ensures a well-maintained finish from top to bottom.",
  },
  {
    title: "Door Jamb Cleaning",
    description:
      "Precision cleaning of door jambs to remove accumulated dirt, grease, and grime. Enhances the overall appearance of your car and gives attention to often-overlooked areas.",
  },
  {
    title: "Dashboard Shine",
    description:
      "Careful cleaning and polishing of your car's dashboard to remove dust, fingerprints, and smudges. Restores a clean and glossy finish while protecting against UV damage.",
  },
  {
    title: "Engine Detailing",
    description:
      "A meticulous cleaning of the engine bay to remove oil, grease, and dirt buildup. Improves the visual appeal of your engine while ensuring better heat dissipation and easier maintenance.",
  },
  {
    title: "Exterior Washing with Snow Foam",
    description:
      "A premium exterior wash using thick snow foam to loosen and lift dirt, grime, and contaminants without scratching the paint. Leaves your car spotless, glossy, and showroom-ready.",
  },
  {
    title: "Rim & Tyre Shine",
    description:
      "Professional cleaning and polishing of rims and tyres to remove brake dust and restore shine. Adds a sleek, polished look to your wheels and completes your car's appearance.",
  },
  {
    title: "Seat Belt Washing",
    description:
      "Detailed cleaning of seat belts to remove stubborn stains, grime, and odors, ensuring safety components remain clean, fresh, and visually appealing.",
  },
  {
    title: "Machine Buffing",
    description:
      "Precision buffing using advanced machines to remove light scratches, swirl marks, and imperfections from the paint. Restores a smooth, high-gloss finish to your car's exterior.",
  },
  {
    title: "Interior Trim Restoration",
    description:
      "Restoring faded, worn, or damaged interior trims to their original condition. Enhances the overall aesthetic of the cabin and improves durability of interior surfaces.",
  },
  {
    title: "Exterior Trim Restoration",
    description:
      "Revitalizing faded or discolored exterior trims to bring back their original color and finish. Provides a refreshed, clean look that enhances the car's overall appeal.",
  },
  {
    title: "Ceramic Coating",
    description:
      "Application of a premium ceramic coating to protect your car's paint from dirt, UV rays, and minor scratches. Enhances the shine, adds hydrophobic properties, and ensures long-lasting durability.",
  },
];

// Additional sections
const ServicesGrid: React.FC = () => {
  return (
    <Box py={20}>
      <Container py={{ md: 10 }}>
        {/* Hero Section */}
        <VStack spacing={6} textAlign="center" mb={10}>
          <Heading as="h1" size="2xl">
            Professional Mobile Car Wash & Detailing
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Experience top-notch car care with convenience at your doorstep. Let
            us handle every detail with our specialized services.
          </Text>
          <Button colorScheme="primary" size="lg" my={5}>
            Book a Service
          </Button>
        </VStack>

        {/* Services Grid */}
          <Accordion>
          {servicesData.map((service, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                {service.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel borderLeft='2px solid' ml={10} borderLeftColor={'blue.800'} pb={4}>
              {service.description}
              </AccordionPanel>
            </AccordionItem>
          ))}
          </Accordion>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Why Choose Us Section */}
        <VStack spacing={6} textAlign="center" py={20}>
          <Heading as="h2" size="lg" my={5}>
            Why Choose Car Care?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <WhyChooseUsItem
              title="Convenience"
              description="Get your car washed wherever you are."
              icon={<LocateIcon color="#D6B65A" />}
            />
            <WhyChooseUsItem
              title="Quality Products"
              description="We use only the best products for your vehicle."
              icon={<Star color="#D6B65A" />}
            />
            <WhyChooseUsItem
              title="Experienced Professionals"
              description="Our team has years of experience in car detailing."
              icon={<Shield color="#D6B65A" />}
            />
          </SimpleGrid>
        </VStack>

        {/* Call to Action */}
        <VStack spacing={6} textAlign="center" pb={20} pt={20}>
          <Heading as="h2" size="lg">
            Ready to Give Your Car the Care It Deserves?
          </Heading>
          <Text fontSize="md" color="gray.600" maxW="3xl">
            Contact us to schedule a service today and see the Car Care
            difference for yourself.
          </Text>
          <Button colorScheme="black" size="lg">
            Contact Us
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default ServicesGrid;

// @ts-expect-error - None of the props are used in this component
const WhyChooseUsItem = ({ title, description, icon }) => (
  <VStack align="center">
    {icon}
    <Heading as="h3" size="md" my={3}>
      {title}
    </Heading>
    <Text textAlign="center" color="gray.600">
      {description}
    </Text>
  </VStack>
);
