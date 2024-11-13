// import {
//     Avatar,
//     Box,
//     Flex,
//     Heading,
//     SimpleGrid,
//     Text,
//     VStack
// } from '@chakra-ui/react';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const testimonials = [
//     {
//         name: 'John Doe',
//         role: 'Satisfied Customer',
//         feedback: 'The team at car care did an amazing job on my car! It looks brand new again.',
//         rating: 5,
//         image: '',
//     },
//     {
//         name: 'Emily Smith',
//         role: 'Regular Client',
//         feedback: "I always come back for their detailing service. It's worth every penny!",
//         rating: 5,
//         image: '',
//     },
//     {
//         name: 'Michael Johnson',
//         role: 'Car Enthusiast',
//         feedback: 'Best car wash in town! They really pay attention to detail.',
//         rating: 5,
//         image: '',
//     },
//     {
//         name: 'Sarah Williams',
//         role: 'Happy Customer',
//         feedback: 'Quick and efficient service. My car has never looked better!',
//         rating: 5,
//         image: '',
//     },
//     {
//         name: 'David Brown',
//         role: 'First-Time Visitor',
//         feedback: 'I was impressed with the quality of service. Highly recommend!',
//         rating: 4,
//         image: '',
//     },
//     {
//         name: 'Jessica Taylor',
//         role: 'Loyal Customer',
//         feedback: 'The polishing service is fantastic! My car shines like never before.',
//         rating: 5,
//         image: '',
//     },
// ];

// function Testimonials() {
//     return (
//         <Box py={20} px={5} maxW="1200px" mx="auto" textAlign="center">
//             {/* Section Title */}
//             <Heading size="lg" mb={2}>
//                 What Our Customers Say
//             </Heading>
//             <Text color="gray.500" mb={10}>
//                 Discover why our clients love us! Read their experiences and see how we keep their cars shining.
//             </Text>

//             {/* Testimonials Grid */}
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
//                 {testimonials.map((testimonial, index) => (
//                     <Box
//                         key={index}
//                         p={6}
//                         borderWidth="1px"
//                         borderRadius="md"
//                         boxShadow="md"
//                         bg="white"
//                     >
//                         {/* Rating Stars */}
//                         <Flex mb={4} justify="center" align="center">
//                             {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
//                                 <FontAwesomeIcon icon={faStar}  key={starIndex} color="gold" />
//                             ))}
//                         </Flex>

//                         {/* Feedback */}
//                         <Text mb={4} size={'xs'} color="gray.600">
//                             {testimonial.feedback}
//                         </Text>

//                         {/* User Info */}
//                         <VStack spacing={1}>
//                             <Avatar src={testimonial.image} name={testimonial.name} size="md" />
//                             <Heading size="sm">{testimonial.name}</Heading>
//                             <Text fontSize="sm" color="gray.500">
//                                 {testimonial.role}
//                             </Text>
//                         </VStack>
//                     </Box>
//                 ))}
//             </SimpleGrid>
//         </Box>
//     );
// }

// export default Testimonials;

const TestimonialCard = ({ quote, author, role }: {quote: string, author: string, role: string}) => {
    return (
        <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md flex flex-col h-full border-emerald-100 border-2">
                <div className="p-6 flex-grow">
                    <p className="mb-4">&quot;{quote}&quot;</p>
                    <div className="flex flex-col flex-grow">
                        <h3 className="text-lg font-bold">{author}</h3>
                        <p className="text-gray-600">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "I've never experienced such comfort and luxury before. Every detail was perfect.",
            author: "Sophie Williams",
            role: "Guest"
        },
        {
            quote: "Our supply chain has never been more efficient. Outstanding logistics services!",
            author: "David Green",
            role: "Operations Manager"
        },
        {
            quote: "They handle our logistics with precision and care. Highly recommend their services.",
            author: "Laura White",
            role: "Procurement Officer"
        },
        {
            quote: "Their sand dredging services are top-notch. Reliable and efficient.",
            author: "Richard Black",
            role: "Project Manager"
        },
        {
            quote: "We've seen significant improvements in our projects thanks to their dredging expertise.",
            author: "Sarah Blue",
            role: "Construction Supervisor"
        },
        {
            quote: "The purity and quality of their table water is unmatched. Our go-to supplier.",
            author: "John Doe",
            role: "Restaurant Owner"
        },
        {
            quote: "Their water supply is consistent and always meets our high standards.",
            author: "Jane Smith",
            role: "Catering Manager"
        },
        {
            quote: "Reliable energy solutions that keep our operations running smoothly.",
            author: "Albert Gray",
            role: "Energy Consultant"
        },
        {
            quote: "Their petroleum products are of the highest quality. Excellent services.",
            author: "Catherine Brown",
            role: "Industrial Engineer"
        }
    ];

    return (
        <section id="testimonials" className="py-16 bg-gray-100 text-center">
            <h2 className="text-5xl font-bold mb-4 text-pri font-monospace italic">What Our Clients Say</h2>
            <div className='container flex flex-wrap justify-center contain-content'>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        author={testimonial.author}
                        role={testimonial.role}
                    />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;