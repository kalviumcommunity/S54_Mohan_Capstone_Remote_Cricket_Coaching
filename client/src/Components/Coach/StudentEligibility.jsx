import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const StudentEligibility = () => {
  const [selectedSlots, setSelectedSlots] = useState([]); // State to hold multiple selected slots
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSlotSelect = (slot) => {
    // Check if the slot is already selected
    const slotIndex = selectedSlots.indexOf(slot);
    if (slotIndex !== -1) {
      // If selected, remove it from the list
      setSelectedSlots(prevSlots => prevSlots.filter((_, index) => index !== slotIndex));
    } else {
      // If not selected, add it to the list
      setSelectedSlots(prevSlots => [...prevSlots, slot]);
    }
  };

  const saveAvailability = () => {
    
    if (selectedSlots.length > 0) {
      
      const availabilityData = selectedSlots.map(slot => ({
        slot,

      }));

      const clusterId = '661ec8fef622240d44e98440'; // Replace this with your cluster ID

      axios.post(`http://localhost:5001/availableTime/${clusterId}`, availabilityData)
        .then(response => {
          console.log('Availability saved successfully:', response.data);
          setShowThankYou(true);
        })
        .catch(error => {
          console.error('Error saving availability:', error);
        });
    }
  };

  const handleFinalSubmission = () => {
    setShowThankYou(true);
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
          <Heading size="md" mb={4}>Select Available Time Slot for Today</Heading>
          <Text mb={2}>Click on the available slot to mark it as available:</Text>
          <Box>
            {[...Array(24)].map((_, index) => (
              <Button 
                key={index} 
                variant={selectedSlots.includes(index) ? "solid" : "outline"} // Change variant based on selection
                onClick={() => handleSlotSelect(index)}
                colorScheme={selectedSlots.includes(index) ? 'red' : undefined}
                mr={2}
                mb={2}
                disabled={selectedSlots.length > 0} // Disable all buttons if a slot is selected
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
            disabled={selectedSlots.length === 0}
          >
            Save Availability
          </Button>
          <Button 
            colorScheme="teal"
            variant="solid" 
            mt={4} 
            onClick={handleFinalSubmission}
            disabled={selectedSlots.length === 0 || showThankYou}
          >
            Final Submission
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
