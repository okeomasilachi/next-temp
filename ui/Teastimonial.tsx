"use client";

import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const emojiMap = ["😡", "😠", "😐", "😊", "😍"];

const testimonials = [
  {
    id: 1,
    content:
      "Car Care Car Wash is incredibly convenient. They came to my home and left my car looking spotless inside and out. Highly recommended!",
    author: "John Doe",
    role: "Car Owner",
    rating: 5,
    avatar: "https://bit.ly/sage-adebayo",
  },
  {
    id: 2,
    content:
      "I was amazed at how clean my car looked after their service. The attention to detail is unmatched, and their team is very professional.",
    author: "Sarah Smith",
    role: "Businesswoman",
    rating: 5,
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 3,
    content:
      "As someone with a busy schedule, Car Care's mobile service is a lifesaver. They cleaned my car while I was at work. Excellent service!",
    author: "Michael Chen",
    role: "Corporate Executive",
    rating: 4,
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    id: 4,
    content:
      "Car Care Car Wash did an exceptional job. My car looks brand new, and they even cleaned hard-to-reach areas. Very impressed!",
    author: "Emma Wilson",
    role: "Mom of Two",
    rating: 5,
    avatar: "https://bit.ly/kent-c-dodds",
  },
  {
    id: 5,
    content:
      "Affordable and top-quality service! The team is friendly, punctual, and efficient. My car has never looked better.",
    author: "David Green",
    role: "Freelancer",
    rating: 5,
    avatar: "https://bit.ly/prosper-baba",
  },
  {
    id: 6,
    content:
      "Car Care's before-and-after results were stunning! I didn't realize how much my car needed a deep clean until I saw the difference.",
    author: "Sophie Williams",
    role: "Car Enthusiast",
    rating: 5,
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    id: 7,
    content:
      "The team was very professional and thorough. My car interior, which was a mess, now smells fresh and looks spotless. Great job!",
    author: "Laura White",
    role: "Event Planner",
    rating: 4,
    avatar: "https://bit.ly/code-beast",
  },
  {
    id: 8,
    content:
      "I use Car Care Car Wash regularly, and they never disappoint. It's the most convenient car wash service I've ever used.",
    author: "Richard Black",
    role: "Taxi Driver",
    rating: 5,
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    id: 9,
    content:
      "They pay so much attention to detail! My car had stains I thought would never come out, but Car Care worked wonders.",
    author: "Catherine Brown",
    role: "Teacher",
    rating: 5,
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    id: 10,
    content:
      "Car Care Car Wash has saved me so much time. I love that I can book online and get my car cleaned wherever I am.",
    author: "Albert Gray",
    role: "Tech Entrepreneur",
    rating: 5,
    avatar: "https://bit.ly/sage-adebayo",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Container my={10} overflowX="hidden">
      <Box textAlign="center" mb={8}>
        <Text fontSize="xl" fontWeight="bold">
          Hear What Our Customers Have to Say!
        </Text>
        <Text fontSize="lg" color="gray.600">
          Discover why our clients love our service
        </Text>
      </Box>
      <Box
        className="transition-all duration-500 ease-in-out"
        transform={`translateX(-${currentIndex * 100}%)`}
      >
        <Flex>
          {testimonials.map((testimonial) => (
            <Box key={testimonial.id} w="full" flexShrink={0} px={4}>
              <Flex flexDir={"column"} alignItems={"center"}>
                {/* Rating Stars */}
                <Flex gap={1} mb={4}>
                  <Flex>
                    {emojiMap.map((emoji, index) => (
                      <Box
                        key={index}
                        as="span"
                        fontSize="2xl"
                        color={
                          index === testimonial.rating - 1
                            ? "initial"
                            : "gray.300"
                        }
                        filter={
                          index !== testimonial.rating - 1
                            ? "grayscale(100%)"
                            : undefined
                        }
                      >
                        {emoji}
                      </Box>
                    ))}
                  </Flex>
                </Flex>

                {/* Testimonial Content */}
                <Box position={"relative"}>
                  <Text
                    maxW={500}
                    textAlign={"center"}
                    lineHeight="short"
                    fontSize={"md"}
                    mb="4"
                  >
                    <Icon
                      display={{ base: "none", md: "block" }}
                      transform="rotate(180deg)"
                      position={"absolute"}
                      fontSize={"xx-large"}
                      top={-4}
                      left={-10}
                    >
                      <Quote />
                    </Icon>
                    <span className="italic">{testimonial.content}</span>
                    <Icon
                      display={{ base: "none", md: "block" }}
                      bottom={-4}
                      right={-10}
                      position={"absolute"}
                      fontSize={"xx-large"}
                    >
                      <Quote />
                    </Icon>
                  </Text>
                </Box>
                {/* Author Info */}
                <HStack gap={5}>
                  <Avatar
                    size="lg"
                    name={testimonial.author}
                    src={testimonial.avatar}
                  />
                  <Divider
                    orientation="vertical"
                    h={"70px"}
                    variant="dashed"
                    borderColor="blue.800"
                    color={"blue.800"}
                  />
                  <Box>
                    <Text fontWeight="bold">{testimonial.author}</Text>
                    <Text>{testimonial.role}</Text>
                  </Box>
                </HStack>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
      <Flex justifyContent={"center"} gap={2} mt={8} cursor={"pointer"}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            borderRadius="full"
            bg={currentIndex === index ? "blue.600" : "gray.300"}
            w={currentIndex === index ? 4 : 2}
            h={2}
            transition="all 0.3s"
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default TestimonialsSection;
