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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChakraProvider><Navigation /></ChakraProvider>} />
        <Route path="/StudentSignUp" element={<ChakraProvider><StudentSignUp /></ChakraProvider>} />
        <Route path="/StudentSignIn" element={<ChakraProvider><StudentSignIn /></ChakraProvider>} />
        <Route path="/CoachSignUp" element={<ChakraProvider><CoachSignUp /></ChakraProvider>} />
        <Route path="/CoachSignIn" element={<ChakraProvider><CoachSignIn /></ChakraProvider>} />
        <Route path="/CoachSignIn/CoachSubmitSuccess" element={<ChakraProvider><CoachSubmitSuccess /></ChakraProvider>} />
        <Route path="/StudentSignUp/CoachSubmitSuccess" element={<ChakraProvider><CoachSubmitSuccess /></ChakraProvider>} />
        <Route path="/coachDataToStudent" element={<ChakraProvider><CoachDataToStudent /></ChakraProvider>} />
        {/* <Route path="/" element={<StudentEligibility/>} /> */}
        <Route path="/StudentEligibility" element={<StudentEligibility />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
