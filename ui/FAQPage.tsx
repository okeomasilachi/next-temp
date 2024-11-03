import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Divider, Heading, Text } from "@chakra-ui/react";

const FAQPage = () => {
    return (
        <Box>
            {/* Header Section */}
            <Box
                position="relative"
                bgImage="url('/img1.jpg')"
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                color="white"
                textAlign="center"
            >
                <Box bg="rgba(0, 0, 0, 0.5)" py={40} h='full'>
                    <Heading as="h1" fontSize="4xl" mb={4}>
                        Welcome to Our FAQs
                    </Heading>
                    <Text fontSize="lg" maxW="700px" mx="auto" px={4}>
                        Our FAQ section is designed to provide quick answers to common questions about our car wash services, booking process, and policies. Whether you’re a new customer or a returning client, we aim to make your experience seamless and informed.
                    </Text>
                </Box>
            </Box>

            {/* FAQ Section */}
            <Container py={20}>
                <Heading as="h2" fontSize="2xl" mb={4}>
                    FAQs
                </Heading>
                <Text mb={6}>
                    Find answers to your questions about our car wash services, booking process, and policies. We’re here to help you!
                </Text>

                <Accordion allowToggle>
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} border="none">
                            <AccordionButton
                                _hover={{ bg: "gray.100" }}
                                py={4}
                                _expanded={{ bg: "blue.50", color: "blue.600" }}
                            >
                                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                                    {faq.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} color="gray.700">
                                {faq.answer}
                            </AccordionPanel>
                            <Divider />
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>

            {/* CTA Section */}
            <Box bg="gray.50" py={40} textAlign="center">
                <Heading as="h3" fontSize="2xl" mb={2}>
                    Need More Help?
                </Heading>
                <Text mb={4}>Contact us for any additional questions or assistance.</Text>
                <Button colorScheme="blue" size="lg" px={6}>
                    Get in Touch
                </Button>
            </Box>
        </Box>
    );
};

// Sample FAQ data
const faqData = [
    {
        question: "What services do you offer?",
        answer: "We provide a range of services including basic car wash, detailing, and polishing to keep your vehicle in top shape.",
    },
    {
        question: "How can I book a service?",
        answer: "You can easily book a service through our online booking form available on the Booking page.",
    },
    {
        question: "What are your operating hours?",
        answer: "We are open Monday to Saturday from 8 AM to 6 PM, and Sunday by appointment only.",
    },
    {
        question: "Do you offer any discounts?",
        answer: "Yes, we have seasonal promotions and discounts for repeat customers. Check our Services page for details.",
    },
    {
        question: "Can I get a quote before booking?",
        answer: "Absolutely! You can request a quote for any service by contacting us directly through our website.",
    },
];

export default FAQPage;
