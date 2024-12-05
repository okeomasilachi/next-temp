"use client";

import { getPostById } from "@/utils/blogHandler";
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Link
} from "@chakra-ui/react";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function Blog() {
    const [posts, setPosts] = useState(null);
    const params = useParams<{ postId: string}>()

    console.log(params);
    useEffect(() => {
        const fetchPosts = async () => {
          const post = await getPostById(Number(params.postId));
          console.log(post);
          setPosts(post);
        };
        fetchPosts();
      }, []);

    if (posts === null) {
        return <Box minH="100vh" color="black">Post not found</Box>;
    }

    return (
        <Box minH="100vh" color="black">
            <Container maxW={{base: '5xl', md: '3xl'}} py={10}>
                <Image src={posts.image} rounded='lg' mb={10} alt={posts.title} width="100%" height={{base: "40vh", md: "50vh"}} objectFit="cover" />
                <Box>
                    <Heading size="lg" mb={4}>
                        {posts.title}
                    </Heading>
                    <div
        dangerouslySetInnerHTML={{ __html: posts.excerpt }} // Rendering the HTML content safely
      />
                    <Button as='a' colorScheme='blue' mt={5} href="/blog">
                        Back to Blog
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}