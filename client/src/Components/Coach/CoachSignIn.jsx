import  { useState } from "react";
import sideman from "../../assets/sideman.jpg";
import axios from "axios";
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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CoachSignIn = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const navigate = useNavigate();
  // const url = "http://localhost:3001/createCoach";

  const handleClick = () => setShow(!show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageSelected) {
      alert("No image selected");
      return;
    }

    try {
      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", "images_preset");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmrw31an8/image/upload",
        formData
      );
      const imageUrl = response.data.secure_url;

      // Prepare form data to be sent to the database
      const formDataDB = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        country: e.target.country.value,
        state: e.target.state.value,
        address: e.target.address.value,
        role: e.target.role.value,
        amionline: e.target.amionline.value,
        password: password,
        confirmPassword: confirmPassword,
        // age: e.target.age.value,
        dateOfBirth: e.target.dateOfBirth.value,
        gender: e.target.gender.value,
        highestLevelPlayed: e.target.highestLevelPlayed.value,
        photo: imageUrl,
        description: e.target.description.value,
        detailedDescription: e.target.detailedDescription.value,
        fee: e.target.fee.value,
      };

      // Send form data to the database
      const userData = await axios.post(
        "http://localhost:3001/createCoach",
        formDataDB
      );

      // Handle the response based on the message from the server
      const message = userData.data.message;
      if (message === "user Exists") {
        alert("User already exists with the provided email or phone");
      } else {
        navigate("CoachSubmitSuccess");
        console.log(userData.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      backgroundImage={`url(${sideman})`}
      backgroundSize="cover"
      backgroundPosition="center"
      h="100vh"
      overflowY="auto"
      position="relative"
    >
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
      <Container maxW="7xl" p={{ base: 5, md: 10 }} position="relative">
        <Center>
          <Stack spacing={4}>
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
                <Stack align="center">
                  <Heading fontSize="2xl">
                    Hey Coach Create Your New Account
                  </Heading>
                </Stack>
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
                <FormControl id="dateOfBirth">
                  <FormLabel>Date of Birth</FormLabel>
                  <Input rounded="md" type="date" />
                </FormControl>

                <FormControl id="country">
                  <FormLabel>Country</FormLabel>
                  <Input rounded="md" type="text" />
                </FormControl>

                <FormControl id="state">
                  <FormLabel>State</FormLabel>
                  <Input rounded="md" type="text" />
                </FormControl>

                <FormControl id="highestLevelPlayed">
                  <FormLabel>highest Level Played</FormLabel>
                  <Input rounded="md" type="text" />
                </FormControl>

                <FormControl id="amionline">
                  <FormLabel>I am Online?</FormLabel>
                  <Select placeholder="Are you online or not ?">
                    <option value="Yes">Yes</option>
                    <option value="No">No </option>
                  </Select>
                </FormControl>

                <FormControl id="gender">
                  <FormLabel>Gender</FormLabel>
                  <Select placeholder="select your gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female </option>
                    <option value="Neither">Neither </option>
                  </Select>
                </FormControl>

                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input rounded="md" type="text" />
                </FormControl>

                <FormControl id="photo">
                  <FormLabel>Photo</FormLabel>
                  <Input
                    rounded="md"
                    type="file"
                    paddingTop="3px"
                    onChange={(event) =>
                      setImageSelected(event.target.files[0])
                    }
                  />
                </FormControl>

                <FormControl id="role">
                  <FormLabel>Select Your Role of Play</FormLabel>
                  <Select placeholder="Select Your Role of Play">
                    <option value="Batsman">Batsman</option>
                    <option value="Fast Bowler">Fast Bowler</option>
                    <option value="Spinner">Spinner</option>
                    <option value="Wicket Keeper">Wicket Keeper</option>
                    <option value="Fast Bowling All-rounder">
                      Fast Bowling All-rounder
                    </option>
                    <option value="Spinning All-rounder">
                      Spinning All-rounder
                    </option>
                  </Select>
                </FormControl>

                <FormControl id="coachingfor">
                  <FormLabel>Select Your Role of Coaching</FormLabel>
                  <Select placeholder="Select Your Role of coaching for">
                    <option value="Batsman">Batsman</option>
                    <option value="Fast Bowler">Fast Bowler</option>
                    <option value="Spinner">Spinner</option>
                    <option value="Wicket Keeper">Wicket Keeper</option>
                    <option value="Fast Bowling All-rounder">
                      Fast Bowling All-rounder
                    </option>
                    <option value="Spinning All-rounder">
                      Spinning All-rounder
                    </option>
                  </Select>
                </FormControl>

                <FormControl id="description">
                  <FormLabel>Description</FormLabel>
                  <Input
                    placeholder="give a description about yourself and Your coaching style"
                    rounded="md"
                    type="text"
                    width={"45vw"}
                    height={"20vh"}
                  />
                </FormControl>
                <FormControl id="fee">
                  <FormLabel>Fee Per Month :</FormLabel>
                  <Input rounded="md" type="number" />
                </FormControl>
                <FormControl id="detailedDescription">
                  <FormLabel>Detailed Description For students :</FormLabel>
                  <Input
                    placeholder="Give a brief description about which type students you are looking for "
                    rounded="md"
                    type="text"
                    width={"45vw"}
                    height={"20vh"}
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Create Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      rounded="md"
                      type={show ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        rounded="md"
                        bg={useColorModeValue("gray.300", "gray.700")}
                        _hover={{
                          bg: useColorModeValue("gray.400", "gray.800"),
                        }}
                        onClick={handleClick}
                      >
                        {show ? "Hide" : "Show"}
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
                {errorMessage && (
                  <Box color="red.500" textAlign="center">
                    {errorMessage}
                  </Box>
                )}
              </VStack>
              <VStack w="100%">
                <Stack direction="row" justifyContent="space-between" w="100%">
                  <Checkbox colorScheme="green" size="md">
                    Remember me
                  </Checkbox>
                  <Link fontSize={{ base: "md", sm: "md" }}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: "green.500",
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

export default CoachSignIn;
