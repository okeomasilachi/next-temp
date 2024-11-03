import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Avatar,
    Icon,
    Flex,
} from '@chakra-ui/react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: 'John Doe',
        role: 'Satisfied Customer',
        feedback: 'The team at car care did an amazing job on my car! It looks brand new again.',
        rating: 5,
        image: 'https://via.placeholder.com/50',
    },
    {
        name: 'Emily Smith',
        role: 'Regular Client',
        feedback: "I always come back for their detailing service. It's worth every penny!",
        rating: 5,
        image: 'https://via.placeholder.com/50',
    },
    {
        name: 'Michael Johnson',
        role: 'Car Enthusiast',
        feedback: 'Best car wash in town! They really pay attention to detail.',
        rating: 5,
        image: 'https://via.placeholder.com/50',
    },
    {
        name: 'Sarah Williams',
        role: 'Happy Customer',
        feedback: 'Quick and efficient service. My car has never looked better!',
        rating: 5,
        image: 'https://via.placeholder.com/50',
    },
    {
        name: 'David Brown',
        role: 'First-Time Visitor',
        feedback: 'I was impressed with the quality of service. Highly recommend!',
        rating: 4,
        image: 'https://via.placeholder.com/50',
    },
    {
        name: 'Jessica Taylor',
        role: 'Loyal Customer',
        feedback: 'The polishing service is fantastic! My car shines like never before.',
        rating: 5,
        image: 'https://via.placeholder.com/50',
    },
];

function Testimonials() {
    return (
        <Box py={20} px={5} maxW="1200px" mx="auto" textAlign="center">
            {/* Section Title */}
            <Heading size="xl" mb={2}>
                What Our Customers Say
            </Heading>
            <Text fontSize="lg" color="gray.500" mb={10}>
                Discover why our clients love us! Read their experiences and see how we keep their cars shining.
            </Text>

            {/* Testimonials Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {testimonials.map((testimonial, index) => (
                    <Box
                        key={index}
                        p={6}
                        borderWidth="1px"
                        borderRadius="md"
                        boxShadow="md"
                        bg="white"
                    >
                        {/* Rating Stars */}
                        <Flex mb={4} justify="center" align="center">
                            {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                                <FontAwesomeIcon icon={faStar}  key={starIndex} color="gold" />
                            ))}
                        </Flex>

                        {/* Feedback */}
                        <Text mb={4} color="gray.600">
                            {testimonial.feedback}
                        </Text>

                        {/* User Info */}
                        <VStack spacing={1}>
                            <Avatar src={testimonial.image} name={testimonial.name} size="md" />
                            <Heading size="sm">{testimonial.name}</Heading>
                            <Text fontSize="sm" color="gray.500">
                                {testimonial.role}
                            </Text>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Testimonials;
