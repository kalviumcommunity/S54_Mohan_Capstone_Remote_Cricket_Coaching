import * as React from 'react';
import blank from '../../assets/blank.jpg';
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
import axios from "axios"

const CoachSignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value
    };

    try {
      const responseData = await axios.post("http://localhost:5001/coachlogin", formData);
      if (responseData.data.message) {
        alert("Login Success");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Box
        backgroundImage={`url(${blank})`}
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Stack
          direction={{ base: 'column-reverse', md: 'row' }}
          bg="transparent"
          flex="1"
          position="relative"
        >
          <Flex p={8} flex={1} align="center" justifyContent="center">
            <Stack spacing={4}>
              <VStack
                as="form"
                onSubmit={handleSubmit} // Call handleSubmit on form submission
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
                  <Heading
                    fontSize="4xl"
                    fontFamily="mate sc, serif"
                    zIndex="1"
                    color="white"
                  >
                    Sign in to your account Coach
                  </Heading>
                  <FormControl id="email">
                    <FormLabel marginTop="5vh">Coach Email</FormLabel>
                    <Input rounded="md" type="email" name="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input rounded="md" type="password" name="password" />
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
                    type="submit" // Submit the form
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

export default CoachSignUp;
