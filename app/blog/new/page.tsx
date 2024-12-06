'use client';

import { useState } from 'react';
import { createPost } from "@/app/actions";
import { Box, Heading, Input, FormControl, FormLabel, Checkbox, Button, Text, Center, HStack, Badge } from "@chakra-ui/react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Service categories derived from titles
const servicesData = [
  { title: "Interior Vacuuming" },
  { title: "Boot Detailing" },
  { title: "AC / Vent Steaming" },
  { title: "Leather Washing & Conditioning" },
  { title: "Fabric Washing" },
  { title: "Roof Cleaning" },
  { title: "Door Jamb Cleaning" },
  { title: "Dashboard Shine" },
  { title: "Engine Detailing" },
  { title: "Exterior Washing with Snow Foam" },
  { title: "Rim & Tyre Shine" },
  { title: "Seat Belt Washing" },
  { title: "Machine Buffing" },
  { title: "Interior Trim Restoration" },
  { title: "Exterior Trim Restoration" },
  { title: "Ceramic Coating" },
];

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    categories: [] as string[], // Array for selected categories
    excerpt: "",
    image: "",
  });
  const [message, setMessage] = useState({ text: "", isSuccess: false });

  const modules = {
    toolbar: [
      [{ header: [2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'], 
    ],
  };

  // Handle text input changes (for regular inputs like title, image URL)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Quill editor change (for excerpt)
  const handleExcerptChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      excerpt: value,
    }));
  };

  // Handle category selection
  const toggleCategory = (category: string) => {
    setFormData((prevData) => {
      const updatedCategories = prevData.categories.includes(category)
        ? prevData.categories.filter((c) => c !== category)
        : [...prevData.categories, category];
      return { ...prevData, categories: updatedCategories };
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.categories.length === 0) {
      setMessage({ text: "Please select at least one category.", isSuccess: false });
      return;
    }

    try {
      const result = await createPost({
        title: formData.title,
        categories: formData.categories,
        excerpt: formData.excerpt,
        image: formData.image || "https://picsum.photos/400/300",
      });

      if ('success' in result) {
        setMessage({ text: result.message, isSuccess: result.success });

        if (result.success) {
          setFormData({ title: "", categories: [], excerpt: "", image: "" }); // Clear form on success
        }
      } else {
        setMessage({ text: result.error, isSuccess: false });
      }
    } catch (error) {
      setMessage({ text: "An error occurred while creating the post.", isSuccess: false });
    }
  };

  return (
    <Box maxW="600px" mx="auto" p="20px" pt={20} >
      <Heading as="h2" size="lg" mb="6">
        Create a New Post
      </Heading>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <FormControl mb="4" isRequired>
          <FormLabel>Title:</FormLabel>
          <Input
            type="text"
            placeholder="Enter post title"
            name="title"
            value={formData.title}
            onChange={handleInputChange} // Using handleInputChange
          />
        </FormControl>

        {/* Category Selection */}
        <FormControl mb="4">
          <FormLabel>Categories:</FormLabel>
          <HStack wrap={'wrap'} gap={4} lineHeight={'normal'}>
            {servicesData.map((service) => (
              <>
              <Badge
                cursor='pointer'
                key={service.title}
                border="1px solid"
                borderColor={formData.categories.includes(service.title) ? 'blue.800' : 'black'}
                colorScheme={formData.categories.includes(service.title) ? 'blue' : 'black'}
                onClick={() => toggleCategory(service.title)}
              >
                {service.title}
              </Badge>
              </>
            ))}
          </HStack>
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Excerpt:</FormLabel>
          <ReactQuill
            theme="snow"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleExcerptChange}
            modules={modules}
            placeholder="Write a captivating post..."
            style={{ height: '250px' }}
          />
        </FormControl>

        {/* Image URL Input */}
        <FormControl my={20}>
          <FormLabel>Image URL:</FormLabel>
          <Input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange} // Using handleInputChange
          />
        </FormControl>

        {/* Submit Button */}
        <Center>
        <Button type="submit" mx="auto" mb={40} colorScheme="blue">
          Create Post
        </Button>
        </Center>
      </form>

      {/* Success/Error Message */}
      {message.text && (
        <Text color={message.isSuccess ? "green.500" : "red.500"} mt="4">
          {message.text}
        </Text>
      )}
    </Box>
  );
};

export default CreatePostForm;
