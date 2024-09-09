import { Link, Flex, Box, Divider, Image, Text, Container } from '@chakra-ui/react'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return (
        <Flex
            // position="relative"
            // bgImage={'url("/img3.svg")'}
            // bgPosition="center"
            // bgRepeat="no-repeat"
            // bgSize="cover"
            // h={{ base: "auto", md: "80vh" }}
            justifyContent='center'
            alignItems='center'
            py={10}
            overflow="hidden"
            className='text-bl'
        >
            <Container w="full"  px={{ base: 4, md: 8 }} flexDirection='column' justifyContent='center'>
                <Flex flexDirection={{ base: "column", lg: "row" }} gap={{ base: 4, lg: 10 }} alignItems="center" justifyContent={{ base: "space-around", lg: 'space-between' }}>
                    <Image rounded='full' w={{ base: "20%", lg: "10%" }} h="auto" src="https://via.placeholder.com/200" alt="logo" />

                    <Flex alignSelf={"center"} flexWrap={{ base: "wrap", lg: "nowrap" }} gap={{ base: 4, lg: 7 }} alignItems={'Center'} justifyContent={{ base: "center", lg: 'space-between' }}>
                        <Link className='text-xl italic font-thin' href='#!'>Products</Link>
                        <Link className='text-xl italic font-thin' href='#!'>Our Story</Link>
                        <Link className='text-xl italic font-thin' href='#!'>Contact Us</Link>
                        <Link className='text-xl italic font-thin' href='#!'>FAQ</Link>
                        <Link className='text-xl italic font-thin' href='#!'>Sustainability</Link>
                    </Flex>

                    <Flex gap={7}>
                        <Link href='#!'><FontAwesomeIcon className="text-2xl" icon={faFacebook} /></Link>
                        <Link href='#!'><FontAwesomeIcon className="text-2xl" icon={faInstagram} /></Link>
                        <Link href='#!'><FontAwesomeIcon className="text-2xl" icon={faYoutube} /></Link>
                        <Link href='#!'><FontAwesomeIcon className="text-2xl" icon={faXTwitter} /></Link>
                    </Flex>
                </Flex>

                <Divider size='lg' my={10} />

                <Flex flexDirection={{ base: "column", lg: "row" }} gap={{ base: 4, lg: 10 }} justifyContent='center' alignItems='center'>
                    <Text>© 2024 [company Name]. All rights reserved.</Text>
                    <Link href="#!">Privacy Policy</Link>
                    <Link href="#!">Terms and Conditions</Link>
                </Flex>
            </Container>
        </Flex>
    )
}