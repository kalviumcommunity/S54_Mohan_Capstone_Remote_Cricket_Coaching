import React, { useState } from "react";
import coach from "../assets/coach.jpg";
import student from "../assets/student.jpg";
import naviback from "../assets/naviback.jpg";
import { Container, Box, Button, Text, Heading } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import refer from '../assets/refer.png'
import signin from '../assets/sighin.png'
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [student,setStudent]=useState(false);
  const [coach,setCoach]=useState(false);

  const OverlayTwo = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Box
        backgroundImage={`url(${naviback})`}
        backgroundPosition="center"
        backgroundSize={"cover"}
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        textAlign="center"
      >
        <Box>
          <Heading as="h1" fontSize="7xl" fontWeight="bold" paddingBottom="20vh">
            Who are You ?
          </Heading>
          <Button
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
              setStudent(true);
            }}
            bg="rgb(45,55, 72)"
            marginRight="10vw"
            boxShadow="0px 0px 3px 3px white"
          >
            I am a Student
          </Button>
          <Button
                   onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen();
          setCoach(true);
        }}

            bg="rgb(45,55, 72)"
            boxShadow="0px 0px 3px 3px white"
          >
            I am a Coach
          </Button>
        </Box>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent width="auto" height="60vh">
            <ModalHeader border="1px solid white" width="23vw" margin="10px 0px 0px 10px" borderRadius="10px" boxShadow="0px 0px 2px 2px">Good to see You Back 😊</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Flex>
            <Image src={signin} width='13%' height='13%' paddingTop='5vh'/>

              <Text paddingTop="6vh" fontSize="2xl"  marginLeft="2vw">New User ?</Text>
              
              <Link to={student?'/StudentSignUp':"/CoachSignIn"}><Button colorScheme="blue" marginTop="6vh" marginLeft="4vw">
                 Sigh Up
              </Button>
              </Link>
              </Flex>
              <Flex>
             <Image src={refer} width='13%' height='13%' paddingTop='5vh'/>
              <Text fontSize="2xl" paddingTop="7vh" marginLeft="2vw" >Old User ?</Text>
              
              <Link to={student ?"/StudentSignIn":"/CoachSignUp"}>
              <Button colorScheme="blue"  marginTop="6vh" marginLeft="4.7vw">
                Sign In
              </Button>
              </Link>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} marginRight="13vw"  boxShadow="0px 0px 1px 1px white" >Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

export default Navigation;
