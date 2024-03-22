import * as React from 'react';
import blank from '../assets/blank.jpg';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex,
} from '@chakra-ui/react';

const Student_SignUp = () => {
  return (
    <>
      <Box
        backgroundImage={`url(${blank})`}
        backgroundSize="cover" 
        backgroundPosition="center"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Heading
          fontSize="4xl"
          fontFamily="mate sc, serif"
          zIndex="1"
          position="absolute"
          top="0vh"
          left="40vw"
          color="white"
        >
          Sign in to your account
        </Heading>
        <Stack
          minH="100vh"
          direction={{ base: 'column-reverse', md: 'row' }}
          bg="transparent"
          flex="1"
          position="relative"
        >
          <Flex p={8} flex={1} align="center" justifyContent="center">
            <Stack spacing={4}>
              <VStack
                as="form"
                marginTop="10vh"
                marginLeft="4vw"
                spacing={8}
                boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                bg="blue.500"
                rounded="lg"
                boxShadow="lg"
                p={{ base: 5, sm: 10 }}
              >
                <VStack spacing={4} w="100%">
                  <FormControl id="Name">
                    <FormLabel>Name</FormLabel>
                    <Input rounded="md" type="text" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input rounded="md" type="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input rounded="md" type="password" />
                  </FormControl>
                </VStack>
                <VStack w="100%">
                  <Stack direction="row" justifyContent="space-between" w="100%">
                    <Checkbox colorScheme="green" size="md">
                      Remember me
                    </Checkbox>
                    <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg="green.300"
                    color="white"
                    _hover={{
                      bg: 'green.500',
                    }}
                    rounded="md"
                    w="100%"
                  >
                    Sign in
                  </Button>
                </VStack>
              </VStack>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Student_SignUp;
