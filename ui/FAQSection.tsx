import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, VStack, Container } from '@chakra-ui/react';
import {socialLinks as sl} from 'lib/data'

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
                {faqData.map(({ question, answer }, index) => (
                    <AccordionItem key={index} border="none">
                    <AccordionButton _expanded={{ color: "blue.500" }}>
                        <Box flex="1" textAlign="left" fontWeight="bold">
                        {question}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} color="gray.600">
                        {answer}
                    </AccordionPanel>
                    </AccordionItem>
                ))}
                </Accordion>

            {/* Need More Help Section */}
            <Box mt={10} textAlign="center">
                <Heading size="lg" mb={2}>Need More Help?</Heading>
                <Text fontSize="lg" color="gray.600" mb={6}>
                    If you have further questions, feel free to reach out to our team for assistance.
                </Text>
                <Button colorScheme="blue" size="lg" as='a' href={sl.whatsapp}>
                    Contact Us
                </Button>
            </Box>
        </Container>
    );
}


const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a range of services including basic car wash, detailing, and polishing to keep your vehicle in top condition.",
    },
    {
      question: "How can I book a service?",
      answer: (
        <>
          You can easily book a service through our{" "}
          <Text as="span" color="blue.500" cursor="pointer">
            Booking
          </Text>{" "}
          page, where you can select your desired services and schedule an
          appointment.
        </>
      ),
    },
    {
      question: "Do you offer any discounts?",
      answer: (
        <>
          Yes, we offer seasonal promotions and discounts for regular customers.
          Check our{" "}
          <Text as="span" color="blue.500" cursor="pointer">
            Services
          </Text>{" "}
          page for more details.
        </>
      ),
    },
  ];

export default FAQSection;
