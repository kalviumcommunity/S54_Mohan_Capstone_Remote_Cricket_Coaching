import { Fragment, useEffect, useState, useContext } from 'react';
import { Container, Text, Stack, Box, Button, Flex, Avatar, Heading, Image, Skeleton, Icon } from '@chakra-ui/react';
import { ImQuotesLeft } from 'react-icons/im';
import Cookies from 'js-cookie';
import TimeSlots from './TimeSlots';
import { AppContext } from './ParentContext';

const NewComponent = ({ onClose }) => (
  <Container
    maxW="5xl"
    px={{ base: 6, md: 3 }}
    py={10}
    position="fixed"
    top="0"
    left="0"
    zIndex="999"
    bg="rgba(255, 255, 255, 0.8)"
    width="100%"
    height="100%"
    overflowY="auto"
    backdropFilter="blur(8px)"
    marginLeft={"10vw"}
  >
    <TimeSlots />
  </Container>
);

const CoachDataToStudent = () => {
  const { userId, setUserId } = useContext(AppContext);
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showSecondContainer, setShowSecondContainer] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://capstone-admin-crick-elevate.vercel.app/getCoach');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched Coach Data:', data);

        // Extract coach IDs and store them in cookies as an array
        const coachIds = data.data.map(coach => coach._id);
        Cookies.set('coachIds', JSON.stringify(coachIds), { expires: 7 });

        setTestimonials(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleKnowMoreClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowSecondContainer(true);
  };

  const handleCloseClick = () => {
    setShowSecondContainer(false);
    setSelectedTestimonial(null);
  };

  const handleGetCoachingClick = () => {
    const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('slotBooking='));
    if (cookie) {
      alert('You have already booked a slot!');
    } else {
      setShowNewComponent(true);
    }
  };

  const handleNewComponentClose = () => {
    setShowNewComponent(false);
  };

  return (
    <>
      <Container maxW="5xl" p={{ base: 5, md: 8 }}>
        {testimonials.map((obj, index) => (
          <Fragment key={index}>
            <Stack
              mb={'20vh'}
              direction={{ base: 'column', sm: 'row' }}
              bgGradient="linear(to-br, #42e14e, blue.300)"
              spacing={{ base: 0, sm: 10 }}
              p={{ base: 4, sm: 10 }}
              rounded="lg"
              justifyContent="center"
            >
              <Box width="30rem" pos="relative" d={{ base: 'none', sm: 'block' }}>
                <Image
                  h={"100%"}
                  w={"100%"}
                  objectFit={"cover"}
                  borderRadius={"50%"}
                  objectPosition={"center"}
                  pos="absolute"
                  rounded="lg"
                  src={obj.photo}
                  top="-3.8rem"
                  boxShadow="lg"
                />
              </Box>

              <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
                <Icon as={ImQuotesLeft} w={10} h={10} color="gray.700" />
                <Text fontSize="lg" fontWeight="medium">
                  {obj.firstName} {obj.lastName}
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  {obj.description}
                </Text>
                <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
                  <Flex paddingTop={'5vh'}>
                    <Avatar
                      showBorder={true}
                      borderColor="green.400"
                      name="avatar"
                      src={obj.photo}
                      d={{ base: 'block', sm: 'none' }}
                    />
                    <Button onClick={() => { handleKnowMoreClick(obj); setUserId(obj._id); }} marginLeft={'10vw'} colorScheme="green">
                      Know More
                    </Button>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
          </Fragment>
        ))}
      </Container>

      {showSecondContainer && selectedTestimonial && (
        <Container
          maxW="5xl"
          px={{ base: 6, md: 3 }}
          py={10}
          position="fixed"
          top="0"
          left="0"
          zIndex="999"
          bg="rgba(255, 255, 255, 0.8)"
          width="100%"
          height="100%"
          overflowY="auto"
          backdropFilter="blur(8px)"
          marginLeft={"10vw"}
        >
          <Button bg='green' onClick={handleCloseClick} position="absolute" top="1rem" right="1rem">
            Close
          </Button>
          <Stack direction={{ base: 'column-reverse', md: 'row' }}>
            <Stack direction="column" spacing={6}>
              <Heading
                as="h3"
                color={"black"}
                size="lg"
                fontWeight="bold"
                textAlign="left"
                maxW={{ base: '100%', md: '480px' }}
              >
                {selectedTestimonial.firstName} {selectedTestimonial.lastName}
              </Heading>
              <Text
                color={"black"}
                fontSize="1.2rem"
                textAlign="left"
                lineHeight="1.375"
                fontWeight="300"
                maxW={{ base: '100%', md: '470px' }}
              >
                {selectedTestimonial.description}
              </Text>
              <Box color={"black"}>
                <Text>Email: {selectedTestimonial.email}</Text>
                <Text>Phone: {selectedTestimonial.phone}</Text>
                <Text>Gender: {selectedTestimonial.gender}</Text>
                <Text>Date of Birth: {selectedTestimonial.dateOfBirth}</Text>
                <Text>Country: {selectedTestimonial.country}</Text>
                <Text>State: {selectedTestimonial.state}</Text>
                <Text>Address: {selectedTestimonial.address}</Text>
                <Text>Role: {selectedTestimonial.role}</Text>
                <Text>Am I Online: {selectedTestimonial.amionline}</Text>
                <Text>Highest Level Played: {selectedTestimonial.highestLevelPlayed}</Text>
              </Box>
            </Stack>
            <Box width={'40vw'} ml={{ base: 0, md: 5 }}>
              <Image
                w="30%"
                h="60%"
                minW={{ base: 'auto', md: '30rem' }}
                objectFit="cover"
                mt={"5vh"}
                src={selectedTestimonial.photo}
                rounded="md"
                fallback={<Skeleton />}
              />
              <Button mt={"10vh"} marginLeft={"10vw"} colorScheme='blue' onClick={handleGetCoachingClick}>Get Coaching</Button>
            </Box>
          </Stack>
        </Container>
      )}

      {showNewComponent && (
        <NewComponent onClose={handleNewComponentClose} />
      )}
    </>
  );
};

export default CoachDataToStudent;
