import { Metadata } from "next";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  Button,
  Container,
  Link,
  Center,
} from "@chakra-ui/react";
import {
  MapPin,
  PhoneCall,
  Car,
  Sparkle,
  Settings,
  CheckCircle,
  Droplets,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "About Us | CARCARE Mobile Carwash",
  description:
    "Professional mobile car wash service in Eliozu. Learn about our commitment to quality, our experienced team, and our comprehensive auto detailing services.",
  openGraph: {
    title: "About CARCARE Mobile Carwash | Professional Auto Detailing",
    description:
      "Discover why CARCARE Mobile Carwash is your trusted choice for professional car cleaning and detailing services in Eliozu.",
    images: [
      {
        url: "/about-og.jpg", // Add your about page image
        width: 1200,
        height: 630,
        alt: "About CARCARE Mobile Carwash",
      },
    ],
  },
  keywords: [
    "about car wash",
    "car detailing company",
    "professional car cleaners",
    "mobile car wash team",
    "auto detailing experts",
    "car wash history",
    "Eliozu car wash",
    "car cleaning professionals",
  ],
  alternates: {
    canonical: "https://www.carcaremobilecarwash.com/about",
  },
};

export default function page() {
  return (
    <Box minH="100vh">
      {/* Hero Section */}
      <Box bg="primary.600" py={40} px={4} color="white" textAlign="center">
        <Image
          src="logo-cropped.svg"
          mx="auto"
          alt="CARCARE Mobile Car Wash"
          width="200"
        />
        <Heading as="h1" size="2xl" mb={4}>
          About CARCARE Mobile Car Wash
        </Heading>
        <Text fontSize="lg" maxW="700px" mx="auto">
          We bring professional car cleaning and auto detailing right to your
          doorstep in Eliozu, Port Harcourt. Experience premium services that
          leave your car looking new, inside and out!
        </Text>
      </Box>

      {/* Services Section */}
      <Container>
        <Box py={16} px={6} bg="white">
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            mb={8}
            color="primary.600"
          >
            Our Comprehensive Services
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={8} maxW="1200px" mx="auto">
            {services.map((service) => (
              <VStack
                key={service.title}
                p={6}
                boxShadow="md"
                borderRadius="lg"
                bg="gray.100"
                _hover={{ bg: "blue.50", transform: "scale(1.05)" }}
                transition="all 0.3s"
              >
                <Box color="primary.600">
                  <service.icon size={40} strokeWidth={1.5} />
                </Box>
                <Text fontWeight="bold" fontSize="lg" textAlign="center">
                  {service.title}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        {/* Why Choose Us Section */}
        <Box bg="gray.100" py={12} px={6} rounded="xl">
          <SimpleGrid
            columns={{base: 1, md: 2}}
            maxW="1200px"
            mx="auto"
          >
            <Box textAlign='left'>
              <Heading as="h3" size="lg" color="primary.600" mb={4}>
                Why Choose CARCARE?
              </Heading>
              <Text fontSize="md" color="gray.700" lineHeight="taller" mb={6}>
                At CARCARE Mobile Car Wash, we combine advanced cleaning
                techniques, professional-grade tools, and experienced hands to
                deliver unmatched quality. We specialize in both interior and
                exterior detailing, ensuring every inch of your car gets the
                attention it deserves.
              </Text>
              <Button colorScheme="blue" as="a" href="/services">
                Explore Services
              </Button>
            </Box>
            <Box mt={{base: 5, md: 0}} >
              <Image
                bg="primary.600"
                src="/logo.svg" // Add relevant image
                alt="Professional Car Cleaning"
                borderRadius="lg"
                boxShadow="lg"
              />
            </Box>
          </SimpleGrid>
        </Box>

        {/* Contact & Location */}
        <Box py={12} px={6} bg="white" textAlign="center" mb={40}>
          <Heading as="h4" size="lg" mb={6} color="primary.600">
            Find Us
          </Heading>
          <Text fontSize="md" mb={4}>
            Visit us or book an appointment to get the best car wash services in
            Port Harcourt.
          </Text>
          <SimpleGrid
            mt={10}
            mx="auto"
            columns={{base: 1, md: 3}}
            gap={8}
          >
            <VStack
              textAlign="center"
              p={10}
              boxShadow={"xl"}
              rounded="xl"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                borderColor: "#D6B65A",
              }}
            >
              <MapPin size={48} color="#D6B65A" />
              <Text mt={2}>
                No. 2 Unity Close, Off Eliozu, Rivers State, Port Harcourt
              </Text>
            </VStack>
            <VStack
            p={10}
            boxShadow={"xl"}
            rounded="xl"
            border="1px solid"
            borderColor="gray.200"
            _hover={{
              borderColor: "#1C2E67",
            }}
            >
              <PhoneCall size={48} color="#1C2E67" />
              <Text mt={2}>
                Call: <Link href="tel:+2348123456789">+234 812 345 6789</Link>
              </Text>
            </VStack>
            <VStack textAlign="center"
            p={10}
            boxShadow={"xl"}
            rounded="xl"
            border="1px solid"
            borderColor="gray.200"
            _hover={{
              borderColor: "#25d366",
            }}>
              <FontAwesomeIcon icon={faWhatsapp} size="3x" color="#25d366" />
              <Text mt={2}>
                Chat with us on Whatsapp for a personalized experience
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

const services = [
  { title: "Interior Vacuuming", icon: Car },
  { title: "Boot Detailing", icon: Sparkle },
  { title: "AC / Vent Steaming", icon: Settings },
  { title: "Leather Washing & Conditioning", icon: Droplets },
  { title: "Fabric Washing", icon: Sparkle },
  { title: "Roof Cleaning", icon: CheckCircle },
  { title: "Door Jamb Cleaning", icon: Car },
  { title: "Dashboard Shine", icon: Sparkle },
  { title: "Engine Detailing", icon: Settings },
  { title: "Snow Foam Washing", icon: Droplets },
  { title: "Rim & Tyre Shine", icon: Car },
  { title: "Seat Belt Washing", icon: CheckCircle },
  { title: "Machine Buffing", icon: Sparkle },
  { title: "Interior Trim Restoration", icon: Settings },
  { title: "Ceramic Coating", icon: Droplets },
];
