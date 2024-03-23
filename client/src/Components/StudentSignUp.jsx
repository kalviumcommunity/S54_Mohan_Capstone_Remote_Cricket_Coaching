import React, { useState } from 'react';
import form from  "../assets/form.jpg"
import sideman from '../assets/sideman.jpg'
import sideicon from '../assets/sideicon.jpg'
import {
  Container,
  FormControl,
  FormLabel,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
  Select,
} from '@chakra-ui/react';

const Student_SignIn = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleClick = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      
      console.log('Passwords match');
      
    } else {
      
      console.log("Passwords don't match");
      
    }
  };

  return (
    <Box    
    backgroundImage={`url(${sideman})`}
    backgroundSize="cover"
    backgroundPosition="center"
    h="100vh"
    overflowY="auto"
    position="relative">
    <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(255, 255, 255, 0.2)" 
        backdropFilter="blur(10px)" 
        zIndex="-1"
      ></Box>
    <Container maxW="7xl" p={{ base: 5, md: 10 }} position="relative"
     
    >
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign in to your account</Heading>
          </Stack>
          <VStack
             as="form"
             marginLeft="45vw"
              onSubmit={handleSubmit}
              width="50vw"
              h="max-content !important"
              bg="blue.900" 
              rounded="lg"
              boxShadow="lg"
              p={{ base: 5, sm: 10 }}
              spacing={8}
            
          >
            <VStack spacing={4} w="100%">
              
              <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input rounded="md" type="text" />
              </FormControl>

              
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input rounded="md" type="text" />
              </FormControl>

              
              <FormControl id="phone">
                <FormLabel>Phone</FormLabel>
                <Input rounded="md" type="tel" />
              </FormControl>

              
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email" />
              </FormControl>

              
              <FormControl id="country">
                <FormLabel>Country</FormLabel>
                <Input rounded="md" type="text" />
              </FormControl>

              
              <FormControl id="state">
                <FormLabel>State</FormLabel>
                <Input rounded="md" type="text" />
              </FormControl>

              
              <FormControl id="pinCode">
                <FormLabel>Pin Code</FormLabel>
                <Input rounded="md" type="number" />
              </FormControl>

              
              <FormControl id="address">
                <FormLabel>Address</FormLabel>
                <Input rounded="md" type="text" />
              </FormControl>

              <FormControl id="photo">
                <FormLabel>Photo</FormLabel>
                <Input rounded="md" type="file" paddingTop="3px"/>
              </FormControl>

              
              <FormControl id="role">
                <FormLabel>Select Your Role of Play</FormLabel>
                <Select placeholder="Select Your Role of Play">
                  <option value="Batsman">Batsman</option>
                  <option value="Fast Bowler">Fast Bowler</option>
                  <option value="Spinner">Spinner</option>
                  <option value="Wicket Keeper">Wicket Keeper</option>
                  <option value="Fast Bowling All-rounder">Fast Bowling All-rounder</option>
                  <option value="Spinning All-rounder">Spinning All-rounder</option>
                </Select>
              </FormControl>

              
              <FormControl id="password">
                <FormLabel>Create Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    rounded="md"
                    type={show ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      bg={useColorModeValue('gray.300', 'gray.700')}
                      _hover={{
                        bg: useColorModeValue('gray.400', 'gray.800'),
                      }}
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              
              <FormControl id="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  rounded="md"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
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
                type="submit"
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
      </Center>
    </Container>
    </Box>
  );
};

export default Student_SignIn;
