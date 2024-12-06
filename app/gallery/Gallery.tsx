"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    chakra,
} from "@chakra-ui/react";
import { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  backgroundImage: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Exterior Wash",
    description: "A thorough and gentle exterior wash to make your car shine.",
    category: "Exterior",
    backgroundImage: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Interior Detailing",
    description: "A deep clean for your car's interior, leaving it spotless.",
    category: "Interior",
    backgroundImage: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "Wheel and Tire Cleaning",
    description: "Rejuvenate your wheels and tires for a fresh, clean look.",
    category: "Detailing",
    backgroundImage: "https://via.placeholder.com/400x300",
  },
  {
    id: 4,
    title: "Headlight Restoration",
    description: "Revive your headlights and improve visibility on the road.",
    category: "Exterior",
    backgroundImage: "https://via.placeholder.com/400x300",
  },
  {
    id: 5,
    title: "Paint Correction",
    description:
      "Restore your car's finish and eliminate swirl marks and scratches.",
    category: "Detailing",
    backgroundImage: "https://via.placeholder.com/400x300",
  },
  {
    id: 6,
    title: "Engine Bay Cleaning",
    description:
      "A thorough clean of your engine bay for a like-new appearance.",
    category: "Detailing",
    backgroundImage: "https://via.placeholder.com/400x300",
  },
  {
    id: 7,
    title: "Leather Conditioning",
    description:
      "Nourish and protect your car's leather interior for lasting beauty.",
    category: "Interior",
    backgroundImage: "https://via.placeholder.com/400x300",
  },
  {
    id: 8,
    title: "Glass Polishing",
    description:
      "Crystal-clear windows for improved visibility and a flawless look.",
    category: "Detailing",
    backgroundImage: "https://via.placeholder.com/400x300",
  },
];

const Gallery = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [filteredServices, setFilteredServices] =
    useState<Service[]>(servicesData);

  const handleFilterChange = (category: string): void => {
    if (category === "all") {
      setFilteredServices(servicesData);
    } else {
      setFilteredServices(
        servicesData.filter((service) => service.category === category)
      );
    }
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleModalClose = () => {
    setSelectedService(null);
  };

  return (
    <Box>
      <Flex py={8} px={4} justify="center" align="center" direction="column">
        <Heading
          as="h1"
          size="4xl"
          fontFamily="'Dancing Script', cursive"
          // bgGradient="linear(to-r, primary.500, gold.300)"
          // bgClip="text"
          mb={4}
        >
          Car Care Wash
        </Heading>
        <Text fontSize="xl" fontFamily="'Didact Gothic', sans-serif" mb={8}>
          Delivering top-notch mobile car wash services
        </Text>
      </Flex>

      <Box py={12} px={4}>
        <Flex justify="center" mb={8}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="blue.500"
              _hover={{ bg: "blue.600" }}
            >
              Filter Services
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleFilterChange("all")}>
                All Services
              </MenuItem>
              {Array.from(
                new Set(servicesData.map((service) => service.category))
              ).map((category) => (
                <MenuItem
                  key={category}
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {filteredServices.map((service) => (
            <GridItem
              key={service.id}
              bg={`url(${service.backgroundImage})`}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              cursor="pointer"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={() => handleServiceClick(service)}
            >
              <Box
                bg="rgba(0, 0, 0, 0.6)"
                p={4}
                position="absolute"
                bottom="0"
                left="0"
                right="0"
              >
                <Heading
                  as="h3"
                  size="md"
                  fontFamily="'Dancing Script', cursive"
                  mb={2}
                >
                  {service.title}
                </Heading>
                <Text fontFamily="'Didact Gothic', sans-serif" noOfLines={2}>
                  {service.description}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {selectedService && (
        <Modal isOpen={true} onClose={handleModalClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Heading as="h3" size="md" fontFamily="'Dancing Script', cursive">
                {selectedService.title}
              </Heading>
            </ModalHeader>
            <ModalBody>
              <Flex>
                <chakra.div
                  flex="1"
                  backgroundImage={`url(${selectedService.backgroundImage})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  minH="300px"
                  borderRadius="lg"
                />
                <Box flex="1" ml={6}>
                  <Text
                    fontFamily="'Didact Gothic', sans-serif"
                    fontSize="lg"
                    mb={4}
                  >
                    {selectedService.description}
                  </Text>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handleModalClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Gallery;
