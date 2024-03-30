import * as React from 'react';
import blueBG from '../assets/blueBG.jpg'
import MotivationalQuote from '../assets/MotivationalQuote.jpg'
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';
import { MdBolt } from 'react-icons/md';

const HeroSection = () => {
  return (
    <Container maxW="7xl" px={{ base: 6, md: 3 }} py={24}
    
    backgroundImage={`url(${blueBG})`}
    backgroundSize="100% 100%"
    height="100vh">
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" >
          
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
           Thank You <br />
          </chakra.h1>
            <chakra.span color="teal" fontSize="5xl" paddingTop="10vh">Check Your Email </chakra.span>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
           Best of Luck and Stay tuned 
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            
          
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} width="30%" >
          <DottedBox />
          <Image
  w="60%"
  h="100%"
  minW={{ base: 'auto', md: '30rem' }}
  objectFit="cover"
  src={MotivationalQuote} // Make sure MotivationalQuote is the correct variable holding your photo URL
  rounded="md"
  marginLeft={{ base: 'auto', md: '10vw' }} // Adjusted marginLeft for responsiveness
  fallback={<Skeleton />} // Fallback in case the image fails to load
/>
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;