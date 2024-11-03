import { Box, Button, Container, Flex, Heading, HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";

const PricingPlan = () => {
    return (
        <Container textAlign="center" p={10} mx="auto">
            <Heading as="h2" size="xl" mb={4}>
                Pricing Plans
            </Heading>
            <Text fontSize="lg" mb={8}>
                Choose the best plan for your car wash needs and enjoy a sparkling clean vehicle with our tailored services.
            </Text>

            <SimpleGrid columns={{ base: 1, lg: 3 }} gap={6}>
                {pricingOptions.map((option, index) => (
                    <Box key={option.id} position={'relative'}>
                        <Box
                            position="absolute"
                            top={1}
                            left={2}
                            w="95%"
                            h="full"
                            bg="secondary.200"
                            borderRadius="lg"
                            transform="rotate(5deg)"
                            zIndex={-1}
                        />
                        <Box
                            maxW={400}
                            // key={option.id}
                            h='full'
                            bg='white'
                            w={{ base: "100%", lg: "300px" }}
                            border="1px solid"
                            borderBottom="3px solid"
                            borderRight="3px solid"
                            borderColor="black"
                            borderRadius="lg"
                            p={6}
                            mx='auto'
                            shadow="md"
                            _hover={{ shadow: "lg" }}
                        >
                            <VStack align="start" spacing={4} h='full' justifyContent={'space-between'}>
                                <Heading as="h3" size="md">
                                    {option.title}
                                </Heading>
                                <Text fontSize="2xl" fontWeight="bold">
                                    ₦&nbsp;{option.price}
                                </Text>
                                <Text textAlign={'start'} color="gray.700">{option.description}</Text>
                                <Stack spacing={2}>
                                    {option.features.map((feature, index) => (
                                        <Flex align="center" key={index}>
                                            <CheckCircle color="#E1C97C" size={18} style={{ marginRight: "8px" }} />
                                            <Text>{feature}</Text>
                                        </Flex>
                                    ))}
                                </Stack>
                                <Button colorScheme="blue" size="sm" mt={4} width="full">
                                    {option.buttonText}
                                </Button>
                            </VStack>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

const pricingOptions = [
    {
        id: 1,
        title: "Basic Car Wash",
        price: "15",
        description: "Ideal for regular maintenance and quick clean-ups.",
        features: ["Exterior wash", "Tire cleaning", "Window cleaning"],
        buttonText: "Select Basic",
    },
    {
        id: 2,
        title: "Detailing Service",
        price: "50",
        description: "Perfect for those looking to rejuvenate their car’s appearance.",
        features: ["Interior deep cleaning", "Exterior polish", "Tire dressing"],
        buttonText: "Select Detailing",
    },
    {
        id: 3,
        title: "Polishing Service",
        price: "30",
        description: "Restores shine and protects paintwork.",
        features: ["Paint protection", "Scratch removal", "Final wax application"],
        buttonText: "Select Polishing",
    },
];

export default PricingPlan;
