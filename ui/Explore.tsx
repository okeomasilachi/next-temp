import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { socialLinks as sl } from "@/lib/data";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Explore() {
  return (
    <Container py={20}>
      <SimpleGrid gap={10} columns={{ base: 1, md: 2 }} mb={10}>
        <Heading size={"lg"}>Explore Our Premium Services</Heading>
        <Text textAlign={"justify"}>
          At care care, we offer a range of top-notch car wash and detailing
          services designed to meet your vehicle’s needs. From basic washes to
          comprehensive detailing and polishing, our expert team ensures your
          car looks its best. Discover the perfect service for your car today.
        </Text>
      </SimpleGrid>
      <SimpleGrid gap={10} columns={{ base: 1, md: 3 }} my={20}>
        {[
          {
            img: "/img10.jpg",
            title: "Basic Car Wash Excellence",
            description:
              "Our Basic Car Wash service includes a thorough exterior wash, tire cleaning, and window cleaning. It's ideal for regular maintenance to keep your vehicle looking fresh and clean.",
          },
          {
            img: "/img8.jpg",
            title: "Comprehensive Detailing Service",
            description:
              "Our Detailing Service offers deep cleaning and restoration for both the interior and exterior of your vehicle. Perfect for rejuvenating your car's appearance.",
          },
          {
            img: "/img11.jpg",
            title: "Professional Polishing Service",
            description:
              "Our Polishing Service restores your vehicle's shine and protects the paintwork from environmental damage. Ideal for cars needing extra care.",
          },
        ].map((i, idx) => (
          <VStack
            key={idx}
            rounded={"xl"}
            boxShadow={"xl"}
            border='1px solid'
            borderColor='gray.300'
            bg="gray.50"
            justifyContent={"space-between"}
            mx={"auto"}
            maxW={300}
          >
            <Image
              alt="Car wash service"
              borderTopRadius={"xl"}
              src={i.img}
              boxSize={200}
              w="full"
              loading="lazy"
            />
            <Box p={4}>
              <Heading alignSelf={"start"} size={"md"} mb={3}>
                {i.title}
              </Heading>
              <Text mb={10}>{i.description}</Text>
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
      <SimpleGrid gap={10} columns={{ base: 1, md: 2 }} my={20}>
        <Center>
          <VStack>
            <Heading mb={3} alignSelf={"start"} size={"lg"}>
              Convenient Online Booking
            </Heading>
            <Text mb={10} textAlign={"justify"}>
              Easily schedule your next car wash with our simple online booking
              system. Choose from a range of services, select your preferred
              date and time, and confirm your appointment in just a few clicks.
              Enjoy a hassle-free experience with care care.
            </Text>
            <Button
              alignSelf={"start"}
              justifySelf={"end"}
              colorScheme="white"
              borderColor={"black"}
              borderRightColor={"black"}
              borderBottomColor={"black"}
              size="md"
              variant="outline"
              as='a'
              href={sl.whatsapp}
            >
              Book Now
            </Button>
          </VStack>
        </Center>
        <Image loading="lazy" src="/cal.svg" alt="Calendar" />
      </SimpleGrid>
      <Center>
        <VStack>
          <FontAwesomeIcon icon={faWhatsapp} color="#25d366" size="9x" />
          <Heading my={10} size={"lg"}>
            WhatsApp Support
          </Heading>
          <Text maxW={600} textAlign={"center"}>
            Connect with our team instantly via WhatsApp for quick assistance
            and inquiries about our car wash services.
          </Text>
          <Button as='a' href={sl.whatsapp} mt={10} size="md" colorScheme='blue'>
            Contact Us
          </Button>
        </VStack>
      </Center>
    </Container>
  );
}
