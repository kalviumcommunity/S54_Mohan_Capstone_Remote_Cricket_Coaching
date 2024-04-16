import { Fragment, useEffect, useState } from 'react';
import { Container, Text, Stack, Avatar, Icon, Image, Box,Button, Flex } from '@chakra-ui/react';
import { ImQuotesLeft } from 'react-icons/im';

const CoachDataToStudent = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://capstone-admin-crick-elevate.vercel.app/getCoach');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTestimonials(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxW="5xl" p={{ base: 5, md: 8 }}>
      {testimonials.map((obj, index) => (
        <Fragment key={index}>
          <Stack
            mb={"20vh"}
            direction={{ base: 'column', sm: 'row' }}
            bgGradient="linear(to-br, #42e14e, blue.300)"
            spacing={{ base: 0, sm: 10 }}
            p={{ base: 4, sm: 10 }}
            rounded="lg"
            justifyContent="center"
          >
            <Box width="30rem" pos="relative" d={{ base: 'none', sm: 'block' }}>
              <Image
                width={"30vw"}
                pos="absolute"
                rounded="lg"
                src={obj.photo}
                top="-3.8rem"
                boxShadow="lg"
              />
            </Box>

            <Stack direction="column" spacing={4} textAlign="left" maxW="4xl" >
              <Icon as={ImQuotesLeft} w={10} h={10} color="gray.700" />
              <Text fontSize="lg" fontWeight="medium">
                {obj.firstName} {obj.lastName}
              </Text>
              <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  {obj.description}
                </Text>
              <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
               <Flex paddingTop={"5vh"}>
               <Avatar
                  
                  // height={"0%"}
        
                  showBorder={true}
                  borderColor="green.400"
                  name="avatar"
                  src={obj.photo}
                  d={{ base: 'block', sm: 'none' }}
                />
              
          
        
                <Button marginLeft={"10vw"} colorScheme='green'>Know More </Button>
               </Flex>
              </Stack>
            </Stack>
          </Stack>
        </Fragment>
      ))}
    </Container>
  );
};

export default CoachDataToStudent;
