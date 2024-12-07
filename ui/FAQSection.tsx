import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, VStack, Container } from '@chakra-ui/react';

function FAQSection() {
    return (

        <Container mb={10} py={10} px={5} mx="auto">
            {/* FAQ Header */}
            <VStack spacing={4} textAlign="center" mb={10}>
                <Heading size="lg">FAQs</Heading>
                <Text fontSize="md" my={5} color="gray.600" mx='auto' maxW={400}>
                    Have questions about our services? Explore our FAQs to find answers to common inquiries and learn more about our car wash offerings.
                </Text>
            </VStack>

            {/* FAQ Accordion */}
            <Accordion allowMultiple>
                {/* FAQ Item 1 */}
                <AccordionItem border="none">
                    <h2>
                        <AccordionButton _expanded={{ color: "blue.500" }}>
                            <Box flex="1" textAlign="left" fontWeight="bold">
                                What services do you offer?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color="gray.600">
                        We provide a range of services including basic car wash, detailing, and polishing to keep your vehicle in top condition.
                    </AccordionPanel>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem border="none">
                    <h2>
                        <AccordionButton _expanded={{ color: "blue.500" }}>
                            <Box flex="1" textAlign="left" fontWeight="bold">
                                How can I book a service?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color="gray.600">
                        You can easily book a service through our <Text as="span" color="blue.500" cursor="pointer">Booking</Text> page, where you can select your desired services and schedule an appointment.
                    </AccordionPanel>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem border="none">
                    <h2>
                        <AccordionButton _expanded={{ color: "blue.500" }}>
                            <Box flex="1" textAlign="left" fontWeight="bold">
                                Do you offer any discounts?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color="gray.600">
                        Yes, we offer seasonal promotions and discounts for regular customers. Check our <Text as="span" color="blue.500" cursor="pointer">Services</Text> page for more details.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            {/* Need More Help Section */}
            <Box mt={10} textAlign="center">
                <Heading size="lg" mb={2}>Need More Help?</Heading>
                <Text fontSize="lg" color="gray.600" mb={6}>
                    If you have further questions, feel free to reach out to our team for assistance.
                </Text>
                <Button colorScheme="blue" size="lg" borderRadius="full">
                    Contact Us
                </Button>
            </Box>
        </Container>
    );
}

export default FAQSection;
