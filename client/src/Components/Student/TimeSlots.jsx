import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  Stack,
  Flex,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "./ParentContext";

const TimeSlots = ({ onClose }) => {
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const { userId } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(userId);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( 
          `http://localhost:5001/getparticularCoach/${userId}`
        );
        const data = response.data;
        console.log("data: ", data);
        setAvailableTimeSlots(data.data.availableTime);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userId]); // Include userId in the dependency array


  const cookies = document.cookie.split("; ");
  let clusterId;
  cookies.forEach((cookie) => {
    const [name, value] = cookie.split("=");
    if (name === "uid") {
      clusterId = value;
    }
  });

  const bookSlot = async (times) => {
    try {
      const response = await axios.patch(
        `http://localhost:5001/sliceTime/${userId}/${clusterId}`,
        times
      );
      console.log("res",response);
    } catch (error) {
      console.error("Error booking slot:", error);
    }
  };

  const handleBookSlot = (slot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmBooking = () => {
    if (selectedSlot) {
      bookSlot(selectedSlot)
        .then(() => {
          const now = new Date();
          const expiryTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
          document.cookie = `slotBooking=${userId}; expires=${expiryTime.toUTCString()}; path=/`;
          handleCloseModal();
        })
        .catch(error => {
          console.error("Error booking slot:", error);
        });
    }
  };
  
  return (
    <>
      <Flex style={{ flexDirection: "column" }}>
        <Heading size="lg" color={"black"}>
          Available Time Slots
        </Heading>

        <Stack
          direction={{ base: "column", md: "row" }}
          flexWrap="wrap"
          justify="space-between"
          mt={6}
          spacing={6}
          px={4}
        >
          {availableTimeSlots.map((slot, index) => (
            <Card
              key={index}
              width={["100%", "45%"]}
              borderRadius="lg"
              overflow="hidden"
              my="4"
              p={"20px"}
            >
              <CardBody>
                <Flex
                  style={{
                    alignItems: "center",
                    alignSelf: "baseline",
                    gap: "10px",
                  }}
                >
                  <Text fontSize="1.5rem" color="gray.500">
                    Start Time:
                  </Text>
                  <Text>
                    {slot.startTime}
                  </Text>
                </Flex>
                <Flex
                  style={{
                    alignItems: "center",
                    alignSelf: "baseline",
                    gap: "10px",
                  }}
                >
                  <Text fontSize="1.5rem" mt={"2vh"} color="gray.500">
                    End Time:
                  </Text>
                  <Text fontSize="1.5rem" mt={"2vh"}>
                  {slot.endTime}
                  </Text>
                </Flex>
                <Button
                  mt={"10"}
                  ml={"3vw"}
                  w={"10vw"}
                  colorScheme="pink"
                  onClick={() => handleBookSlot(slot)}
                >
                  Book
                </Button>
              </CardBody>
            </Card>
          ))}
        </Stack>
        <Card>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Booking Confirmation</ModalHeader>
              <ModalBody>
                <p>Start Time: {selectedSlot ? selectedSlot.startTime : ""}</p>
                <p>End Time: {selectedSlot ? selectedSlot.endTime : ""}</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
                  Close
                </Button>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    handleConfirmBooking();
                    navigate('/BookingSuccess');
                  }}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>
      </Flex>
    </>
  );
};

export default TimeSlots;
