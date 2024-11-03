import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem,
    AccordionPanel,
    Box, Button,
    Center,
    Container, Flex,
    FormControl,
    Grid, GridItem, Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    Input, InputGroup, InputLeftElement,
    Link,
    List,
    ListIcon,
    ListItem,
    SimpleGrid, Stack, Text,
    UnorderedList,
    useBreakpointValue,
    VStack
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, Variant } from 'framer-motion';

// Motion Chakra Components
const MotionButton = motion.create(Button as any);
const MotionBox = motion.create(Box as any);
const MotionContainer = motion.create(Container as any);
const MotionFlex = motion.create(Flex as any);
const MotionGrid = motion.create(Grid as any);
const MotionGridItem = motion.create(GridItem as any);
const MotionHeading = motion.create(Heading as any);
const MotionHStack = motion.create(HStack as any);
const MotionSimpleGrid = motion.create(SimpleGrid as any);
const MotionStack = motion.create(Stack as any);
const MotionText = motion.create(Text as any);
const MotionVStack = motion.create(VStack as any);
const MotionImage = motion.create(Image as any);
const MotionIconButton = motion.create(IconButton as any);
const MotionInput = motion.create(Input as any);
const MotionInputGroup = motion.create(InputGroup as any);
const MotionInputLeftElement = motion.create(InputLeftElement as any);
const MotionIcon = motion.create(Icon as any);
const MotionListItem = motion.create(ListItem as any);
const MotionListIcon = motion.create(ListIcon as any);
const MotionList = motion.create(List as any);
const MotionAccordion = motion.create(Accordion as any);
const MotionAccordionButton = motion.create(AccordionButton as any);
const MotionAccordionIcon = motion.create(AccordionIcon as any);
const MotionAccordionItem = motion.create(AccordionItem as any);
const MotionAccordionPanel = motion.create(AccordionPanel as any);
const MotionUnorderedList = motion.create(UnorderedList as any);
const MotionFormControl = motion.create(FormControl as any);
const MotionLink = motion.create(Link as any);
const MotionCenter = motion.create(Center as any);
const MotionFontAwesomeIcon = motion.create(FontAwesomeIcon as any);

// Types
export type AnimationVariant = {
    initial: Variant;
    whileInView: Variant;
    transition?: {
        duration?: number;
        ease?: string;
        delay?: number;
        repeat?: number;
        type?: string;
        stiffness?: number;
        damping?: number;
        staggerChildren?: number;
    };
    viewport?: { once: boolean };
    whileHover?: Variant;
    whileTap?: Variant;
};

export type AnimationVariantType =
    | 'InitBox'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'slideInLeft'
    | 'slideInRight'
    | 'staggerContainer'
    | 'fadeInChild'
    | 'bounceEffect'
    | 'rotateLoop'
    | 'scaleBounce'
    | 'hoverEffect'
    | 'keyframeAnimation';

export interface GetAnimationProps {
    variant: AnimationVariantType;
    index?: number;
    isMobile: boolean;
}

// Animation Presets
export const baseAnimations: Record<AnimationVariantType, AnimationVariant> = {
    InitBox: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 1 },
        viewport: { once: true }
    },
    fadeInUp: {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        viewport: { once: true }
    },
    fadeInDown: {
        initial: { opacity: 0, y: -30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true }
    },
    slideInLeft: {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true }
    },
    slideInRight: {
        initial: { opacity: 0, x: 100 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true }
    },
    staggerContainer: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { staggerChildren: 0.2 },
        viewport: { once: true }
    },
    fadeInChild: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.5 },
        viewport: { once: true }
    },
    bounceEffect: {
        initial: { scale: 0.8 },
        whileInView: { scale: 1 },
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 10
        },
        viewport: { once: true }
    },
    rotateLoop: {
        initial: { rotate: 0 },
        whileInView: { rotate: 360 },
        transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
        },
        viewport: { once: true }
    },
    scaleBounce: {
        initial: { scale: 0.5 },
        whileInView: { scale: 1.1 },
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 8,
            duration: 1
        },
        viewport: { once: true }
    },
    hoverEffect: {
        initial: {},
        whileInView: {},
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.9 },
        viewport: { once: true }
    },
    keyframeAnimation: {
        initial: { opacity: 0, y: -50 },
        whileInView: {
            opacity: [0, 1, 0.5, 1],
            y: 0
        },
        transition: {
            duration: 2,
            ease: 'easeInOut',
        },
        viewport: { once: true }
    }
};

// Animation Getter Function
export const getAnimation = ({ variant, index, isMobile }: GetAnimationProps): AnimationVariant => {
    let animation: AnimationVariant;

    if (isMobile) {
        // Always use fadeInUp for mobile
        animation = { ...baseAnimations.fadeInUp };
    } else {
        // Use the specified animation for larger screens
        animation = { ...baseAnimations[variant] };
    }

    if (typeof index === 'number') {
        animation.transition = {
            ...animation.transition,
            delay: index * 0.1
        };
    }

    return animation;
};

// Animations export
export const animations = {
    InitBox: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.InitBox,
    fadeInUp: baseAnimations.fadeInUp,
    fadeInDown: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.fadeInDown,
    slideInLeft: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.slideInLeft,
    slideInRight: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.slideInRight,
    staggerContainer: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.staggerContainer,
    fadeInChild: baseAnimations.fadeInChild,
    bounceEffect: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.bounceEffect,
    rotateLoop: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.rotateLoop,
    scaleBounce: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.scaleBounce,
    hoverEffect: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.hoverEffect,
    keyframeAnimation: (isMobile: boolean) => isMobile ? baseAnimations.fadeInUp : baseAnimations.keyframeAnimation
};

// Custom hook to determine if the screen is mobile
export const useIsMobile = () => {
    return useBreakpointValue({ base: true, md: false }) ?? false;
};

// Motion components export
export const m = {
    MotionButton, MotionBox, MotionContainer, MotionFlex,
    MotionGrid, MotionGridItem, MotionHeading, MotionHStack,
    MotionSimpleGrid, MotionStack, MotionText, MotionVStack,
    MotionImage, MotionIconButton, MotionInput, MotionInputGroup,
    MotionInputLeftElement, MotionIcon, MotionListItem, MotionListIcon,
    MotionList, MotionAccordion, MotionAccordionButton, MotionAccordionIcon,
    MotionAccordionItem, MotionAccordionPanel, MotionUnorderedList, MotionCenter,
    MotionFontAwesomeIcon, MotionFormControl, MotionLink
};

export default getAnimation;