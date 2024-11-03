"use client";
import {
    Box, Button,
    Container,
    Flex,
    Heading,
    HStack,
    Icon,
    IconButton,
    Link, useBreakpointValue,
    useDisclosure
} from '@chakra-ui/react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();
    const isMobile = useBreakpointValue({ base: true, lg: false });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <Box
            backdropFilter="blur(10px)"
            w={"100%"}
            position="fixed"
            bg={'blue.50'}
            boxShadow='lg'
            shadow="lg"
            transition="transform 0.3s"
            transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
            zIndex={'999'}
        >
            <Container>
                <Flex

                    align="center"
                    justify="space-between"
                    padding={{ base: "1", md: "4" }}
                    margin="0 auto"
                >
                    <Heading as="a" href="/" size="lg" fontFamily="Dancing Script" >
                        Car Care
                    </Heading>
                    <HStack display={{ base: 'none', lg: 'flex' }} align="center" gap={10}>
                        {[
                            { name: 'Services', href: '/services' },
                            { name: 'Booking', href: '/booking' },
                            { name: 'About Us', href: '/about' },
                            { name: 'FAQs', href: '/faqs' }
                        ].map((item, index) => (
                            <Link _hover={{ textDecoration: 'none' }} fontSize={'larger'} key={index} href={item.href}
                                color={pathname === item.href ? "blue.500" : "black"}>
                                {item.name}
                            </Link>
                        ))}
                    </HStack>
                    <HStack display={{ base: 'none', lg: 'flex' }}>
                        <Button
                            as="a"
                            size="lg"
                            href="!#"
                            colorScheme='black'
                            rel="noopener noreferrer"
                        >Get Quote</Button>
                        <Button
                            as="a"
                            size="lg"
                            href="!#"
                            rel="noopener noreferrer"
                        >Contact Us</Button>
                    </HStack>

                    <HStack display={{ base: 'flex', lg: 'none' }} gap={5}>
                        {/* <Icon as={FontAwesomeIcon} icon={faWhatsapp} color={{base: 'green.400', lg: "black"}} _hover={{
                            color: '#25d366'
                        }} boxSize={10} h='full'/> */}
                        <Button
                            as="a"
                            size="lg"
                            href="!#"
                            variant={'outline'}
                            rel="noopener noreferrer"
                        >Contact</Button>
                        <IconButton

                            aria-label="Open menu"
                            bg={'transparent'}
                            colorScheme='black'
                            variant={''}
                            icon={<FontAwesomeIcon icon={faBars} />}
                            onClick={onOpen}
                        />
                    </HStack>
                </Flex>
            </Container>
        </Box >
    );
};

export default Navbar;