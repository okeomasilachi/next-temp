import { Box, Flex, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';

function MissionValues() {
    return (
        <Flex
            py={20}
            px={5}
            maxW="1200px"
            mx="auto"
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
            gap={10}
        >
            {/* Left Image Section */}
            <Box flex="1" borderRadius="md" >
                <Image
                    rounded='xl'
                    src="/img15.webp"
                    alt="Car wash in action"
                    objectFit="cover"
                    w="full"
                    h="full"
                    borderRadius="md"
                    loading="lazy"
                />
            </Box>

            {/* Right Content Section */}
            <Box flex="1">
                <Heading size="lg" mb={4}>
                    Our Mission & Values
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={6}>
                    At Care Care, our mission is to deliver exceptional car wash and detailing services that
                    enhance the appearance and longevity of our customer&apos;s vehicles. We prioritize customer
                    satisfaction and strive to exceed expectations with every wash.
                </Text>

                {/* Statistics Grid */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                    <Box>
                        <Heading size="lg" mb={2}>
                            100 %
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                            With a commitment to quality, we use only the best products and equipment, ensuring
                            that every vehicle receives the care it deserves. Our integrity and transparency in
                            service build trust with our valued customers.
                        </Text>
                    </Box>

                    <Box>
                        <Heading size="md" mb={2}>
                            10,000 cars serviced
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                            Since our founding in 2020, we have serviced over 10,000 cars, establishing ourselves
                            as a trusted name in the car wash industry.
                        </Text>
                    </Box>

                    <Box>
                        <Heading size="md" mb={2}>
                            5 years
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                            Our journey began with a vision of providing top-notch car wash services, and we are
                            proud to have built a reputation for excellence in just 5 years.
                        </Text>
                    </Box>

                    <Box>
                        <Heading size="md" mb={2}>
                            100 %
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                            We are also committed to sustainability, implementing eco-friendly practices in our
                            operations to protect the environment while delivering outstanding service.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Flex>
    );
}

export default MissionValues;
