"use client";

import { fetchPostById } from "@/app/actions";
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function BlogPostPage() {
  const [post, setPost] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams<{ postId: string }>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const postData = await fetchPostById(params.postId);

        if (postData) {
          setPost(postData);
          setError(null);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        setError("Failed to fetch post");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [params.postId]);

  if (isLoading) {
    return (
      <Container maxW="container.md" py={10} minH={"100svh"}>
        <Center as={VStack} h="full" minH={"100svh"}>
          <Box w={200}>
            <Image src="/logo-cropped.svg" alt="Loading" objectFit="cover" />
          </Box>
          <Text>Loading...</Text>
        </Center>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.md" py={10} minH={"100svh"}>
        <Text color="red">{error}</Text>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxW="container.md" py={10} minH={"100svh"}>
        <Text>No post found</Text>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>Care Care - Mobile Car Wash | {post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Head>
      <Container maxW="container.md" minH={"100svh"} pt={20}>
        <VStack spacing={4} align="stretch">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              objectFit="cover"
              width="100%"
              height={{ base: "200px", md: "300px" }}
            />
          )}
          {post.categories && (
            <Box mt={3}>
              <HStack wrap="wrap" gap={2}>
                {post.categories.map((category: string) => (
                  <Badge key={category} colorScheme="blue">
                    {category}
                  </Badge>
                ))}
              </HStack>
            </Box>
          )}
          <Heading mt={10}>{post.title}</Heading>

          <Box dangerouslySetInnerHTML={{ __html: post.excerpt }} />

          <Button
            variant="outline"
            my={20}
            mx="auto"
            onClick={() => window.history.back()}
          >
            Back to Blog
          </Button>
        </VStack>
      </Container>
    </>
  );
}
