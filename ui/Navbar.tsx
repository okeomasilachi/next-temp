"use client";

import { Link } from "@chakra-ui/next-js";
import {
    Box,
    Button,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    HStack,
    Icon,
    IconButton,
    useBreakpointValue,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import {
    faInstagram,
    faWhatsapp,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook } from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      backdropFilter="blur(10px)"
      w={"100%"}
      position="fixed"
      bg={"white"}
      boxShadow="xl"
      shadow="lg"
      transition="transform 0.3s"
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
      zIndex={"999"}
    >
      <Container>
        <Flex
          align="center"
          justify="space-between"
          padding={{ base: "1", md: "2" }}
          margin="0 auto"
        >
          <Heading
            color={pathname === "/" ? "primary.600" : "black"}
            as="a"
            href="/"
            size="lg"
            fontFamily="'Dancing Script', cursive"
          >
            Car Care
          </Heading>
          <HStack
            display={{ base: "none", lg: "flex" }}
            align="center"
            gap={10}
          >
            {[
              { name: "Services", href: "/services" },
              { name: "Gallery", href: "/gallery" },
              { name: "About Us", href: "/about" },
              { name: "FAQs", href: "/faqs" },
              { name: "Blog", href: "/blog" },
            ].map((item, index) => (
              <Link
                as={NextLink}
                _hover={{ textDecoration: "none" }}
                fontSize={"large"}
                key={index}
                href={item.href}
                color={pathname === item.href ? "primary.600" : "gray.400"}
              >
                {item.name}
              </Link>
            ))}
          </HStack>
          <HStack display={{ base: "none", lg: "flex" }}>
            <Button as="a"  size="md" href="!#" colorScheme="blue">
              Contact Us
            </Button>
          </HStack>
          <HStack display={{ base: "flex", lg: "none" }} gap={5}>
            <Button as="a" size="sm" href="!#">
              Contact
            </Button>
            <IconButton
              aria-label="Open menu"
              bg={"transparent"}
              colorScheme="black"
              variant={""}
              icon={<FontAwesomeIcon icon={faBars} />}
              onClick={onOpen}
            />
          </HStack>
        </Flex>
      </Container>
      <Drawer isOpen={isOpen} placement="right" size={"xs"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader as={Heading}>Car Care</DrawerHeader>
          <DrawerBody>
            <VStack
              display={{ base: "flex", lg: "none" }}
              align="start"
              gap={8}
            >
              {[
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "About Us", href: "/about" },
                { name: "FAQs", href: "/faqs" },
                { name: "Blog", href: "/blog" },
              ].map((item, index) => (
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontSize={"larger"}
                  key={index}
                  href={item.href}
                  color={pathname === item.href ? "blue.500" : "black"}
                >
                  {item.name}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack gap={8} alignItems={"center"} justifyContent={"end"}>
              <Link
                href="#"
                aria-label="Facebook"
                _hover={{ color: "blue.500" }}
              >
                <Icon as={Facebook} boxSize="20px" mb={2} h="full" />
              </Link>
              <Link href="#" aria-label="Twitter" _hover={{ color: "#25d366" }}>
                <Icon
                  as={FontAwesomeIcon}
                  icon={faWhatsapp}
                  boxSize="20px"
                  h="full"
                />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                _hover={{ color: "pink.500" }}
              >
                <Icon
                  as={FontAwesomeIcon}
                  icon={faInstagram}
                  boxSize="20px"
                  h="full"
                />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                _hover={{ color: "blue.400" }}
              >
                <Icon
                  as={FontAwesomeIcon}
                  icon={faXTwitter}
                  boxSize="20px"
                  h="full"
                />
              </Link>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
