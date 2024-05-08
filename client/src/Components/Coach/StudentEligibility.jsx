import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const StudentEligibility = () => {
  const [selectedSlot, setSelectedSlot] = useState(null); // State to hold selected slot
  const [submittedSlots, setSubmittedSlots] = useState([]); // State to hold submitted slots
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSlotSelect = (slot) => {
    // Deselect the previously selected slot if any
    setSelectedSlot(slot);
  };

  const cookies = document.cookie.split("; ");
  let clusterId;
  cookies.forEach((cookie) => {
    const [name, value] = cookie.split("=");
    if (name === "uid") {
      clusterId = value;
    }
  });

  const saveAvailability = (slot) => {
    const availabilityData = { startTime: `${slot}:00`, endTime: `${slot + 1}:00` };

    axios
      .post(
        `http://localhost:5001/availableTime/${clusterId}`,
        availabilityData
      )
      .then((response) => {
        console.log("Availability saved successfully:", response.data);
        setShowThankYou(true);
        setSubmittedSlots((prevSubmittedSlots) => [...prevSubmittedSlots, slot]);
      })
      .catch((error) => {
        console.error("Error saving availability:", error);
      });
  };

  const renderContent = () => {
    return (
      <>
        <Heading size="md" mb={4}>
          Select Available Time Slot for Today
        </Heading>
        <Text mb={2}>
          Click on the available slot to mark it as available:
        </Text>
        <Box>
          {[...Array(24)].map((_, index) => (
            <Button
              key={index}
              variant={submittedSlots.includes(index) ? "solid" : (selectedSlot === index ? "solid" : "outline")} // Change variant based on submission status and selection
              onClick={() => handleSlotSelect(index)}
              colorScheme={submittedSlots.includes(index) ? "green" : (selectedSlot === index ? "green" : undefined)} // Change color based on submission status and selection
              mr={2}
              mb={2}
            >
              {index}:00 - {index + 1}:00
            </Button>
          ))}
        </Box>
        <Button
          colorScheme="red"
          variant="solid"
          mt={4}
          onClick={() => saveAvailability(selectedSlot)}
          disabled={selectedSlot === null}
        >
          Save Availability
        </Button>
      </>
    );
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.800")} p={4} borderRadius="md">
      <Text mb={4}>Today's Date: {new Date().toLocaleDateString()}</Text>
      {renderContent()}
      {showThankYou && (
        <Box textAlign="center" mt={4}>
          <Heading size="md" mb={2}>
            Thank You!
          </Heading>
          <Text>Your availability has been updated.</Text>
        </Box>
      )}
    </Box>
  );
};

export default StudentEligibility;
