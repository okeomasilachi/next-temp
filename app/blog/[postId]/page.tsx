"use client";

import { fetchPostById, PostComment } from "@/app/actions";
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function BlogPostPage() {
  const [post, setPost] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const params = useParams<{ postId: string }>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const postData = await fetchPostById(params.postId);

        console.log(postData);
        if (postData) {
          setPost(postData);
          if ("comments" in postData) {
            setComments(postData.comments || []);
          }
          console.log(postData);
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

  const handleAddComment = async () => {
    if (!newComment.trim()) {
      toast({
        title: "Comment cannot be empty",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const cleanedComment = newComment.trim();
      const newCommentData = await PostComment({
        post_Id: params.postId,
        con_tent: cleanedComment,
      });

      const updatedPost = await fetchPostById(params.postId);
      if (updatedPost) {
        setPost(updatedPost);
        // @ts-ignore
        setComments(updatedPost.comments || []);
      }
      setNewComment("");
      toast({
        title: "Comment added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.error("Failed to add comment:", err);
      toast({
        title: "Failed to add comment",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <Box bg={"white"}>
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
              boxShadow={"md"}
              src={post.image}
              alt={post.title}
              objectFit="cover"
              width="100%"
              rounded="lg"
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
          <VStack spacing={6} align="stretch" mt={10}>
            <Heading size="md">Comments</Heading>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <Box
                  key={comment.id}
                  p={4}
                  shadow="sm"
                  bg="gray.50"
                  rounded="md"
                >
                  <Text fontWeight="bold">{comment.author || "Anonymous"}</Text>
                  <Text>{comment.content}</Text>
                </Box>
              ))
            ) : (
              <Text>No comments yet. Be the first to comment!</Text>
            )}
          </VStack>
          <Box mt={8}>
            <Heading size="sm" mb={4}>
              Add a Comment
            </Heading>
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here"
              resize="vertical"
              mb={4}
            />
            <Button
              isLoading={isSubmitting}
              onClick={handleAddComment}
              colorScheme="blue"
            >
              Submit
            </Button>
          </Box>
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
    </Box>
  );
}
