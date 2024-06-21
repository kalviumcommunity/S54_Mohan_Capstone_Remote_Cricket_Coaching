import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navigation from './Components/Navigation';
import StudentSignIn from './Components/Student/StudentSignIn';
import StudentSignUp from './Components/Student/StudentSignUp';
import CoachSignUp from './Components/Coach/CoachSignUp';
import CoachSignIn from './Components/Coach/CoachSignIn';
import CoachSubmitSuccess from './Components/CoachSubmitSuccess';
import CoachDataToStudent from './Components/Student/CoachDataToStudent';
import StudentEligibility from './Components/Coach/StudentEligibility';
import CoachBoard from '../src/Components/Coach/CoachBoard';

import TimeSlots from './Components/Student/TimeSlots';
import BookingSuccess from './Components/Student/BookingSuccess';
import HomePage from './Components/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CoachBoard" element={<ChakraProvider><CoachBoard/></ChakraProvider>} />  
        <Route path="/Navigation" element={<ChakraProvider><Navigation /></ChakraProvider>} />
        <Route path="/" element={<ChakraProvider><HomePage /></ChakraProvider>} />
        <Route path="/StudentSignUp" element={<ChakraProvider><StudentSignUp /></ChakraProvider>} />
        <Route path="/StudentSignIn" element={<ChakraProvider><StudentSignIn /></ChakraProvider>} />
        <Route path="/CoachSignUp" element={<ChakraProvider><CoachSignUp /></ChakraProvider>} />
        <Route path="/CoachSignIn" element={<ChakraProvider><CoachSignIn /></ChakraProvider>} />
        <Route path="/CoachSignIn/CoachSubmitSuccess" element={<ChakraProvider><CoachSubmitSuccess /></ChakraProvider>} />
        <Route path="/StudentSignUp/CoachSubmitSuccess" element={<ChakraProvider><CoachSubmitSuccess /></ChakraProvider>} />
        <Route path="/CoachDataToStudent" element={<ChakraProvider><CoachDataToStudent /></ChakraProvider>} />


      <Route path="/studenteligibility" element={<StudentEligibility/>} />  
        {/* <Route path="/" element={<StudentEligibility />} /> */}
      <Route path="/TimeSlots" element={<TimeSlots/>} />  
      <Route path="/BookingSuccess" element={<BookingSuccess/>} />  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
