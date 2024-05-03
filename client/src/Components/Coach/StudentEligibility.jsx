import React, { useState } from 'react';
import {
  Button,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const StudentEligibility = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false); // New state for thank you message

  const handleSlotSelect = (slot) => {
    const isSelected = selectedSlots.includes(slot);
    let updatedSlots;

    if (isSelected) {
      updatedSlots = selectedSlots.filter((selectedSlot) => selectedSlot !== slot);
    } else {
      updatedSlots = [...selectedSlots, slot];
    }

    setSelectedSlots(updatedSlots);
  };

  const saveAvailability = () => {
    const formattedSlots = selectedSlots.map((slot) => {
      return `${slot}:00 - ${slot + 1}:00`;
    });

    console.log("Selected time slots:", formattedSlots);
    setShowThankYou(true); // Show thank you message after saving availability
  };

  const renderContent = () => {
    if (showThankYou) {
      return (
        <Box textAlign="center">
          <Heading size="md" mb={4}>Thank You!</Heading>
          <Text>Your availability has been updated.</Text>
        </Box>
      );
    } else {
      return (
        <>
          <Heading size="md" mb={4}>Select Available Time Slots for Today</Heading>
          <Text mb={2}>Click on the available slots to mark them as available:</Text>
          <Box>
            {[...Array(24)].map((_, index) => (
              <Button 
                key={index} 
                variant="outline"
                onClick={() => handleSlotSelect(index)}
                colorScheme={selectedSlots.includes(index) ? 'red' : undefined}
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
            onClick={saveAvailability}
          >
            Save Availability
          </Button>
        </>
      );
    }
  };

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.800')}
      p={4}
      borderRadius="md"
    >
      <Text mb={4}>Today's Date: {new Date().toLocaleDateString()}</Text>
      {renderContent()}
    </Box>
  );
};

export default StudentEligibility;
