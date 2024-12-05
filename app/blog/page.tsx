"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  SkeletonText,
  Tag,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllPosts } from "@/app/actions";

const categories = [
  { id: 0, name: "All Categories", slug: "all" },
  { id: 1, name: "Interior Vacuuming", slug: "interior-vacuuming" },
  { id: 2, name: "Boot Detailing", slug: "boot-detailing" },
  { id: 3, name: "AC / Vent Steaming", slug: "ac-vent-steaming" },
  { id: 4, name: "Leather Washing & Conditioning", slug: "leather-washing-conditioning" },
  { id: 5, name: "Fabric Washing", slug: "fabric-washing" },
  { id: 6, name: "Roof Cleaning", slug: "roof-cleaning" },
  { id: 7, name: "Door Jamb Cleaning", slug: "door-jamb-cleaning" },
  { id: 8, name: "Dashboard Shine", slug: "dashboard-shine" },
  { id: 9, name: "Engine Detailing", slug: "engine-detailing" },
  { id: 10, name: "Exterior Washing with Snow Foam", slug: "exterior-washing-snow-foam" },
  { id: 11, name: "Rim & Tyre Shine", slug: "rim-tyre-shine" },
  { id: 12, name: "Seat Belt Washing", slug: "seat-belt-washing" },
  { id: 13, name: "Machine Buffing", slug: "machine-buffing" },
  { id: 14, name: "Interior Trim Restoration", slug: "interior-trim-restoration" },
  { id: 15, name: "Exterior Trim Restoration", slug: "exterior-trim-restoration" },
  { id: 16, name: "Ceramic Coating", slug: "ceramic-coating" },
];


export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [posts, setPosts] = useState<null | []>(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setTimeout(() => {
      }, 10000);
      const allPosts = await fetchAllPosts();
        setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  // Filter posts based on the selected category
  const filteredPosts =
    selectedCategory === "All Categories"
      ? posts
      : posts.filter((post) => post.categories.includes(selectedCategory));

  return (
    <Box
      minH="100vh"
      color='black'
    >
      {/* Header Section */}
      <Box as="header" bg="blue.800" py={20} textAlign="center">
        <Heading color="white">Expert Car Care Tips & Updates</Heading>
        <Text color="whiteAlpha.800" mt={2}>
          Discover the best ways to maintain your car’s cleanliness and value.
        </Text>
        <Button mt={4} bg="white" color="blue.800" _hover={{ color: "white", bg: "blue.500"}} as="a" href="/booking">
          Book a Wash
        </Button>
      </Box>

      {/* Main Content */}
      <Container py={10}>
          <Box>
            <Heading size="lg" mb={4}>{selectedCategory}</Heading>
            <Box p={4} borderRadius="md" bg="gray.50" >
              <Heading size="sm" mb={5}>Categories</Heading>
              <HStack wrap="wrap" gap={4}>
                {categories.map((category) => (
                  <Tag
                    px={2}
                    py={1}
                    borderRadius='full'
                    variant='outline'
                    colorScheme='blue'
                    key={category.id}
                    _hover={{
                      bg: selectedCategory !== category.name ? 'blue.400' : '',
                    }}
                    bg={selectedCategory === category.name ? "blue.800" : ""}
                    cursor="pointer"
                    onClick={() => setSelectedCategory(category.name)}
                    color={selectedCategory === category.name ? "white" : "black"}
                  >
                      {category.name}
                  </Tag>
                ))}
              </HStack>
          </Box>
          <Grid my={10} templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr", xl: "1fr 1fr 1fr 1fr" }} gap={{base: 6, md: 8, xl: 10}}>
          {(posts === null || posts.length === 0)
            && new Array(5).fill(null).map((_, index) => (
              <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
              <Box 
                  borderWidth={1}
                  borderRadius="md"
                  overflow="hidden"
                  bg="white"
                  h='full'
                  boxShadow='lg'
                  rounded='lg'
                  padding='6'
                  key={index}
                >
                <Skeleton height='200px' />
                <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
              </Box>
              </motion.div>
            ))
} 
              {posts?.length > 0 && filteredPosts?.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    onClick={() => window.location.href = `/blog/${post.id}`}
                    cursor={'pointer'}
                    borderWidth={1}
                    borderRadius="md"
                    overflow="hidden"
                    bg="white"
                    h='full'
                    boxShadow='lg'
                  >
                    <Image src={post.image} alt={post.title} />
                    <Box p={4}>
                      <Heading size="md" mb={4} noOfLines={2}>{post.title}</Heading>
                      <Link color="blue.500" mt={5} href={`/blog/${post.id}`} mt={4}>
                        Read More
                      </Link>
                    </Box>
                  </Box>
                </motion.div>
              ))
            }
            </Grid>
          </Box>
      </Container>
    </Box>
  );
}
