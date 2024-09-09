"use client";
import React, { useEffect, useState } from 'react';
import {
    Box, Button,
    Flex, IconButton,
    Image, useDisclosure,
    Drawer, DrawerBody,
    DrawerContent, DrawerOverlay,
    Link, useBreakpointValue,
    Icon, Menu, MenuButton,
    MenuList, MenuItem,
    Container
} from '@chakra-ui/react';
import { FaBriefcase } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";;
import { IoIosArrowDown } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBars, faCircleXmark, faHouse, faUserTie, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import { Menu_Item } from "lib/Types";


const renderIcon = (icon: any) => {
    if (typeof icon === 'function') {
        return <Icon as={icon} />;
    } else if (icon && typeof icon === 'object') {
        return <FontAwesomeIcon icon={icon} />;
    }
    return null;
};

const DesktopNavLinks: React.FC = () => {
    const pathname = usePathname();
    const text = useBreakpointValue({ md: true, lg: false });
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const menuItems: Menu_Item[] = [
        { route: '/', text: 'Discover', icon: faHouse },
        {
            route: '/about', text: 'About', icon: faUserTie,
            menu: [
                { route: '/about#cl', text: '75 Cl', icon: CiCalendar },
                { route: '/about#cl', text: '50 Cl', icon: CiCalendar },
                { route: '/about#cl', text: '35 Cl', icon: CiCalendar },
            ]
        },
        {
            route: '/career', text: 'Career', icon: FaBriefcase,
            menu: [
                { route: '/career#it', text: 'IT (industrial Training)', icon: MdModelTraining },
                { route: '/career#vacancies', text: 'Vacancies', icon: FaDoorOpen },
            ]
        },
        { route: '/contact', text: 'Contact', icon: faAddressCard },
    ];

    const routeText: Record<string, string> = {
        '/about': 'clack',
        '/': 'white',

    };

    return (
        <Flex color={'secondary.400'} align="center" justifyContent={'center'} alignItems={'center'} gap="7">
            {menuItems.map((item, index) => (
                <Menu
                    key={index}
                    isOpen={openMenuIndex === index}
                    onClose={() => setOpenMenuIndex(null)}
                    boundary={'scrollParent'}
                >
                    <Link href={item.route}>
                        <MenuButton
                            as={Button}
                            rightIcon={item.menu && <IoIosArrowDown />}
                            variant="link"
                            fontWeight={pathname === item.route ? 'bold' : 'normal'}
                            color={pathname === item.route ? 'accent.500' : ""}
                            border='2px solid'
                            // @ts-ignore
                            borderColor={pathname === item.route || pathname === item.menu?.route ? 'accent.500' : 'transparent'}
                            py={pathname === item.route ? '2' : '0'}
                            px={pathname === item.route ? '2' : '0'}
                            // @ts-ignore
                            leftIcon={renderIcon(item.icon)}
                            onMouseEnter={() => setOpenMenuIndex(index)}
                            onMouseLeave={() => setOpenMenuIndex(null)}
                        >
                            {item.text}
                        </MenuButton>
                    </Link>
                    {item.menu && (
                        <MenuList onMouseEnter={() => setOpenMenuIndex(index)} onMouseLeave={() => setOpenMenuIndex(null)}>
                            {item.menu.map((subItem, subIndex) => (
                                <MenuItem key={subIndex} as="a" href={subItem.route}>
                                    {renderIcon(subItem.icon)}&nbsp;&nbsp;&nbsp;
                                    {subItem.text}
                                </MenuItem>
                            ))}
                        </MenuList>
                    )}
                </Menu>
            ))}
        </Flex>
    );
};

const MobileDrawer: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);


    const menuItems: Menu_Item[] = [
        { route: '/', text: 'Discover', icon: faHouse },
        {
            route: '/about', text: 'About', icon: faUserTie,
        },
        {
            route: '/career', text: 'Career', icon: FaBriefcase,
        },
        { route: '/career#it', text: 'IT (industrial Training)', icon: MdModelTraining },
        { route: '/career#vacancies', text: 'Vacancies', icon: FaDoorOpen },
        { route: '/contact', text: 'Contact', icon: faAddressCard },
    ];

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p="4" bg={'white'}>
                        <Flex direction="column" justifyContent={'space-between'} alignItems="start" gap="6">
                            <Box alignSelf='end' justifySelf='end' onClick={onClose}>
                                <FontAwesomeIcon className='text-4xl bg-white text-red-500' icon={faCircleXmark} />
                            </Box>
                            {menuItems.map((item, index) => (
                                <Menu
                                    key={index}
                                    isOpen={openMenuIndex === index}
                                    onClose={() => setOpenMenuIndex(null)}
                                    boundary={'scrollParent'}
                                >
                                    <Link href={item.route}>
                                        <MenuButton
                                            as={Button}
                                            rightIcon={item.menu && <IoIosArrowDown />}
                                            variant="link"
                                            fontWeight={pathname === item.route ? 'bold' : 'normal'}
                                            color={pathname === item.route ? 'accent.500' : ""}
                                            border='2px solid'
                                            // @ts-ignore
                                            borderColor={pathname === item.route || pathname === item.menu?.route ? 'accent.500' : 'transparent'}
                                            py={pathname === item.route ? '2' : '0'}
                                            px={pathname === item.route ? '2' : '0'}
                                            // @ts-ignore
                                            leftIcon={renderIcon(item.icon)}
                                            onMouseEnter={() => setOpenMenuIndex(index)}
                                            onMouseLeave={() => setOpenMenuIndex(null)}
                                        >
                                            {item.text}
                                        </MenuButton>
                                    </Link>

                                    {item.menu && (
                                        <MenuList onMouseEnter={() => setOpenMenuIndex(index)} onMouseLeave={() => setOpenMenuIndex(null)}>
                                            {item.menu?.map((subItem, subIndex) => (
                                                <MenuItem key={subIndex} as="a" href={subItem.route}>
                                                    {renderIcon(subItem.icon)}&nbsp;&nbsp;&nbsp;
                                                    {subItem.text}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    )}
                                </Menu>
                            ))}
                        </Flex>
                        <Button mt={10}
                            as="a"
                            href='!#'
                            rel="noopener noreferrer"
                        >Order Now!!!</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
};

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

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
            bg="rgba(0, 0, 0, 0.0)"
            bgGradient="linear(to-br, white, #fff)"
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
                    <Link href="/">
                        <Image
                            src="https://via.placeholder.com/150"
                            alt="Logo"
                            h={{ base: '40px', lg: '50px' }}
                            w={{ base: '40px', lg: '50px' }}
                            bg='transparent'
                            ml={{ base: 2, md: 0 }}
                            borderRadius="full"
                            borderWidth="2px"
                            borderColor="teal.500"
                        />
                    </Link>
                    <Flex display={{ base: 'none', lg: 'flex' }} align="center" >
                        <DesktopNavLinks />
                        <Button ml='10'
                            as="a"
                            href="!#"
                            rel="noopener noreferrer"
                        >Order Now</Button>
                    </Flex>

                    <IconButton
                        aria-label="Open menu"
                        bg={'transparent'}
                        color='secondary.500'
                        icon={<FontAwesomeIcon icon={faBars} />}
                        display={{ base: 'block', lg: 'none' }}
                        onClick={onOpen}
                    />
                </Flex>
                <MobileDrawer isOpen={isOpen} onClose={onClose} />
            </Container>
        </Box>
    );
};

export default Navbar;