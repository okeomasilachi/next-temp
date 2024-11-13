"use client";
import { Link, Image  } from '@chakra-ui/next-js';
import { Box, Container, Divider, Flex, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Facebook } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="primary.700" color="white" py={20} px={5} borderTop="1px solid" borderColor="gray.500">
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', lg: 'row' }} justify="space-between" align={{ base: 'start', lg: 'center' }} gap="8">
          {/* Logo and Description */}
          <Box >
            <Image src="/logo-cropped.svg" alt="Car Care Logo" layout='responsive' width={200} height={100}/>
            <Heading textAlign={{base: 'start', lg: 'center'}} as="h1" size="lg" fontFamily="Dancing Script">
              Car Care
            </Heading>
          </Box>

          {/* Links Section */}
          <Flex direction={{ base: 'column', lg: 'row' }} gap={12}>
            {/* Company Links */}
            <VStack alignItems={'start'}>
              <Heading as="h2" size="md" fontWeight="bold">
                Company
              </Heading>
              <Link color='gray.300' href="#" fontSize="lg" fontWeight="10px" mt="2" _hover={{ textDecoration: 'underline' }}>
                About Us
              </Link>
              <Link color='gray.300' href="#" fontSize="lg" _hover={{ textDecoration: 'underline' }}>
                Services
              </Link>
            </VStack>

            {/* Support Links */}
            <VStack alignItems={'start'}>
              <Heading as="h2" size="md" fontWeight="bold">
                Support
              </Heading>
              <Link color='gray.300' href="#" fontSize="lg" mt="2" _hover={{ textDecoration: 'underline' }}>
                Faqs
              </Link>
              <Link color='gray.300' href="#" fontSize="lg" _hover={{ textDecoration: 'underline' }}>
                Booking
              </Link>
            </VStack>

            {/* Legal Links */}
            <VStack alignItems={'start'}>
              <Heading as="h2" size="md" fontWeight="bold">
                Legal
              </Heading>
              <Link href="#" color='gray.300' fontSize="lg" mt="2" _hover={{ textDecoration: 'underline' }}>
                Privacy Policy
              </Link>
              <Link href="#" color='gray.300' fontSize="lg" _hover={{ textDecoration: 'underline' }}>
                Terms Of Service
              </Link>
            </VStack>
          </Flex>
        </Flex>

        <Divider my="6" borderColor="gray.300" />

        {/* Footer Bottom Links */}
        <Flex direction={{ base: 'column', lg: 'row' }} justify="space-between" align="center" fontSize="lg" gap="4">
          <Flex gap="4">
          <Text fontSize="sm" mt="2">
              © {new Date().getFullYear()} care care. All rights reserved. Your trusted partner in car care solutions.
            </Text>
          </Flex>

          {/* Social Media Icons */}
          <HStack gap="4" alignItems={'center'} justifyContent={'end'}>
            <Link href="#" aria-label="Facebook" color="white" _hover={{ color: 'blue.500' }}>
              <Icon as={Facebook} boxSize="20px" mb={2} h='full' />
            </Link>
            
            <Link href="#" aria-label="Twitter" color="white" _hover={{ color: '#25d366' }}>
              <Icon as={FontAwesomeIcon} icon={faWhatsapp} boxSize="20px" h='full'/>
            </Link>

            <Link href="#" aria-label="Instagram" color="white" _hover={{ color: 'pink.500' }}>
              <Icon as={FontAwesomeIcon} icon={faInstagram}  boxSize="20px" h='full'/>
            </Link>
            
            <Link href="#" aria-label="Twitter" color="white" _hover={{ color: 'blue.400' }}>
              <Icon as={FontAwesomeIcon} icon={faXTwitter} boxSize="20px" h='full'/>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
