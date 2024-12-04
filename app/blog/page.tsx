"use client";

import {
  Box,
  Button,
  Grid,
  Heading,
  Text,
  Link,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  IconButton,
  useColorMode,
  Image,
  SimpleGrid,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

// Mock data
const posts = [
  { id: 1, title: "Top 5 Car Wash Tips", excerpt: "Learn how to maintain your car’s shine...", image: "/car1.jpg" },
  { id: 2, title: "The Benefits of Regular Car Washes", excerpt: "Regular washes can extend your car’s life...", image: "/car2.jpg" },
];

const categories = [
  { id: 1, name: "Car Maintenance", slug: "car-maintenance" },
  { id: 2, name: "DIY Car Care", slug: "diy-car-care" },
];

const testimonials = [
  { id: 1, name: "John Doe", text: "Fantastic service! My car has never looked better." },
  { id: 2, name: "Jane Smith", text: "Quick, convenient, and thorough. Highly recommend!" },
];

export default function Blog() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [comment, setComment] = useState("");

  return (
    <Box bg={colorMode === "light" ? "gray.100" : "gray.900"} minH="100vh" color={colorMode === "light" ? "black" : "white"}>
      {/* Header Section */}
      <Box as="header" bg="teal.500" py={6} textAlign="center">
        <Heading color="white">Expert Car Care Tips & Updates</Heading>
        <Text color="whiteAlpha.800" mt={2}>Discover the best ways to maintain your car’s cleanliness and value.</Text>
        <Button mt={4} colorScheme="orange" as="a" href="/booking">Book a Wash</Button>
        <IconButton
          aria-label="Toggle Theme"
          icon={<FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} />}
          onClick={toggleColorMode}
          position="absolute"
          top={4}
          right={4}
          colorScheme="teal"
        />
      </Box>

      {/* Main Content */}
      <Box p={4}>
        {/* Blog Posts Grid */}
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={6}>
          <Box>
            <Heading size="lg" mb={4}>Recent Posts</Heading>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
              {posts.map((post) => (
                <motion.div key={post.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Box borderWidth={1} borderRadius="md" overflow="hidden" bg="white" _dark={{ bg: "gray.700" }}>
                    <Image src={post.image} alt={post.title} />
                    <Box p={4}>
                      <Heading size="md">{post.title}</Heading>
                      <Text noOfLines={2} mt={2}>{post.excerpt}</Text>
                      <Link color="teal.500" href={`/post/${post.id}`} mt={4}>Read More</Link>

                      {/* Social Sharing Buttons */}
                      <Box mt={4}>
                        <Text fontWeight="bold">Share this post:</Text>
                        <Box display="flex" gap={2} mt={2}>
                          <IconButton
                            as="a"
                            href="https://facebook.com"
                            aria-label="Share on Facebook"
                            icon={<FontAwesomeIcon icon={faFacebook} />}
                            colorScheme="facebook"
                          />
                          <IconButton
                            as="a"
                            href="https://twitter.com"
                            aria-label="Share on Twitter"
                            icon={<FontAwesomeIcon icon={faTwitter} />}
                            colorScheme="twitter"
                          />
                          <IconButton
                            as="a"
                            href="https://instagram.com"
                            aria-label="Share on Instagram"
                            icon={<FontAwesomeIcon icon={faInstagram} />}
                            colorScheme="pink"
                          />
                          <IconButton
                            as="a"
                            href="https://whatsapp.com"
                            aria-label="Share on WhatsApp"
                            icon={<FontAwesomeIcon icon={faWhatsapp} />}
                            colorScheme="whatsapp"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Grid>
          </Box>

          {/* Sidebar */}
          <Box as="aside">
            <Box p={4} borderRadius="md" bg="gray.50" _dark={{ bg: "gray.800" }}>
              <Heading size="sm">Categories</Heading>
              <List mt={2}>
                {categories.map((category) => (
                  <ListItem key={category.id}>
                    <Link href={`/category/${category.slug}`} color="teal.500">{category.name}</Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box p={4} mt={8} borderRadius="md" bg="gray.50" _dark={{ bg: "gray.800" }}>
              <Heading size="sm" mb={4}>What Our Customers Are Saying</Heading>
              <SimpleGrid columns={{ base: 1 }} spacing={4}>
                {testimonials.map((testimonial) => (
                  <Box key={testimonial.id} p={4} borderWidth={1} borderRadius="md" bg="white" _dark={{ bg: "gray.700" }}>
                    <Text fontStyle="italic">"{testimonial.text}"</Text>
                    <Text fontWeight="bold" mt={2} textAlign="right">- {testimonial.name}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Grid>

        {/* Comment Section */}
        <Box mt={8} p={4} borderRadius="md" bg="gray.50" _dark={{ bg: "gray.800" }}>
          <Heading size="md" mb={4}>Leave a Comment</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl id="comment" mt={4}>
            <FormLabel>Comment</FormLabel>
            <Textarea
              placeholder="Your Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </FormControl>
          <Button mt={4} colorScheme="teal">Post Comment</Button>
        </Box>
      </Box>
    </Box>
  );
}
