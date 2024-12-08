"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Tooltip,
  VStack,
  Divider,
  Container,
} from "@chakra-ui/react";
import { Info, Home, Car, Truck } from "lucide-react";

const carCarePricing = {
  address:
    "2 Unity Close, Off Chief G U Ake Road, After Unity Oil And Gas, Eliozu",
  contact: {
    phone: "0678015288",
    bank: "GTB",
    companyName: "CarCare Mobile Carwash",
  },
  packages: {
    regularWash: {
      description: [
        "Foot Mat Washing",
        "Exterior Washing",
        "Wheel & Tire Shine",
      ],
      pricing: {
        saloon: 3000,
        suvMinivan: 3500,
        bus: 5500,
      },
    },
    premiumDetailing: {
      description: [
        "Interior Vacuuming",
        "Boot Detailing",
        "Exterior Wash with Snow Foam",
        "Leather/Fabric Quick Shine",
        "Dashboard Shine",
        "Engine Detailing",
        "Rim & Tyre Shine",
      ],
      pricing: {
        saloon: 18000,
        suvMinivan: 20000,
        bus: 25000,
      },
      homeService: {
        saloon: 25000,
        suvMinivan: 30000,
        bus: 35000,
      },
    },
    executiveDetailing: {
      description: [
        "Interior Vacuuming",
        "Boot Detailing",
        "AC Vent Cleaning",
        "Leather Washing & Conditioning",
        "Fabric Washing",
        "Roof Cleaning",
        "Door Jamb Cleaning",
        "Dashboard Shine",
        "Engine Detailing",
        "Exterior Washing with Snow Foam",
        "Rim & Tyre Shine",
        "Seat Belt Washing",
      ],
      pricing: {
        saloon: 23000,
        suvMinivan: 27000,
        bus: 35000,
      },
      homeService: {
        saloon: 30000,
        suvMinivan: 37000,
        bus: 50000,
      },
    },
    machineBuffing: {
      pricing: {
        saloon: 45000,
        suvMinivan: 50000,
        bus: 70000,
      },
      homeService: {
        saloon: 55000,
        suvMinivan: 65000,
        bus: 80000,
      },
    },
    interiorTrimRestoration: {
      pricing: {
        saloon: 15000,
        suvMinivan: 25000,
      },
    },
    exteriorTrimRestoration: {
      pricing: {
        saloon: 10000,
        suvMinivan: 10000,
      },
    },
    ceramicCoating: {
      pricing: {
        saloon: 100000,
        suvMinivan: 120000,
      },
    },
    underCarriageWashing: {
      pricing: {
        saloon: 30000,
        suvMinivan: 40000,
      },
    },
  },
  notes: [
    "Home service clients should provide water and power (as we won't be coming with a generator).",
  ],
};

const PricingPlan = () => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<keyof typeof carCarePricing.packages.regularWash.pricing>("saloon");
  const [selectedServiceType, setSelectedServiceType] = useState("location");

  const vehicleTypes: { key: keyof typeof carCarePricing.packages.regularWash.pricing; label: string; icon: typeof Car }[] = [
    { key: "saloon", label: "Saloon", icon: Car },
    { key: "suvMinivan", label: "SUV/Minivan", icon: Truck },
    { key: "bus", label: "Bus", icon: Truck },
  ];

  const serviceTypes = [
    { key: "location", label: "At Location", icon: Car },
    { key: "home", label: "Home Service", icon: Home },
  ];

  const renderPricingTable = () => {
    return (
      <Box bg="white" shadow="lg" borderRadius="lg" overflow="hidden">
        <Box bg="primary.600" color="white" p={4}>
          <Heading size="md">Our Pricing Packages</Heading>
          <Text fontSize="sm" color="blue.100">
            Transparent pricing for every service
          </Text>
        </Box>
        <Box p={4}>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr bg="gray.100">
                <Th>Service</Th>
                <Th textAlign="right">Price (NGN)</Th>
              </Tr>
            </Thead>
            <Tbody>
            {Object.entries(carCarePricing.packages).map(
                ([packageKey, packageDetails]) => {
                  let price = (packageDetails.pricing as { [key: string]: number })[selectedVehicleType];

                  if (
                    selectedServiceType === "home" &&
                    "homeService" in packageDetails
                  ) {
                    price =
                      (
                        packageDetails as typeof carCarePricing.packages.premiumDetailing
                      ).homeService[selectedVehicleType] || price;
                  }

                  if (price) {
                    return (
                      <Tr key={packageKey} _hover={{ bg: "gray.50" }}>
                        <Td>
                          <Flex align="center">
                            <Text
                              fontWeight="medium"
                              textTransform="capitalize"
                            >
                              {packageKey
                                .replace(/([A-Z])/g, " $1")
                                .toLowerCase()}
                            </Text>
                            {"description" in packageDetails && (
                              <Tooltip
                                label={
                                  <Box>
                                    {packageDetails.description.map(
                                      (desc, idx) => (
                                        <Text key={idx}>{desc}</Text>
                                      )
                                    )}
                                  </Box>
                                }
                                placement="right"
                                hasArrow
                              >
                                <Box ml={2}>
                                  <Icon
                                    w={4}
                                    h={4}
                                    color="gray.500"
                                    cursor="help"
                                  >
                                    <Info />
                                  </Icon>
                                </Box>
                              </Tooltip>
                            )}
                          </Flex>
                        </Td>
                        <Td
                          textAlign="right"
                          fontWeight="semibold"
                          color="blue.600"
                        >
                          ₦ {price.toLocaleString()}
                        </Td>
                      </Tr>
                    );
                  }
                  return null;
                }
              )}
            </Tbody>
          </Table>
        </Box>
      </Box>
    );
  };

  return (
    <Container mx="auto" my={20} p={4} bg="gray.50" minH="100vh">
      {/* Header */}
      <VStack spacing={2} textAlign="center" mb={8}>
        <Heading color="blue.800">
          {carCarePricing.contact.companyName} Pricing
        </Heading>
        <Flex align="center" justify="center">
          <Icon w={5} h={5} mr={2} ><Info /></Icon>
          <Text color="gray.600">
            Transparent and Competitive Pricing for All Vehicle Types
          </Text>
        </Flex>
      </VStack>

      {/* Vehicle Type Selector */}
      <Flex justify="center" mb={6} gap={4}>
        {vehicleTypes.map((type) => (
          <Button
            key={type.key}
            leftIcon={<Icon as={type.icon} />}
            size={"sm"}
            colorScheme={selectedVehicleType === type.key ? "blue" : "gray"}
            variant={selectedVehicleType === type.key ? "solid" : "outline"}
            onClick={() => setSelectedVehicleType(type.key)}
          >
            {type.label}
          </Button>
        ))}
      </Flex>

      {/* Service Type Selector */}
      <Flex justify="center" mb={6} gap={4}>
        {serviceTypes.map((type) => (
          <Button
            key={type.key}
            leftIcon={<Icon as={type.icon} />}
            colorScheme={selectedServiceType === type.key ? "blue" : "gray"}
            variant={selectedServiceType === type.key ? "solid" : "outline"}
            onClick={() => setSelectedServiceType(type.key)}
          >
            {type.label}
          </Button>
        ))}
      </Flex>

      {/* Pricing Table */}
      {renderPricingTable()}

      {/* Additional Notes */}
      <Box mt={6} bg="primary.600" shadow="md" borderRadius="lg" p={4}>
        <Heading size="sm" color="white" mb={3}>
          <Icon w={5} h={5} mr={2} ><Info /></Icon>
          Important Notes
        </Heading>
        <Box as="ul" pl={4} color="white">
          {carCarePricing.notes.map((note, idx) => (
            <Box as="li" key={idx} mb={2}>
              {note}
            </Box>
          ))}
        </Box>
        {/* <Divider my={4} />
        <Text color="gray.600">
          <strong>Contact:</strong> {carCarePricing.contact.phone}
        </Text>
        <Text color="gray.600">
          <strong>Address:</strong> {carCarePricing.address}
        </Text> */}
      </Box>
    </Container>
  );
};

export default PricingPlan;
