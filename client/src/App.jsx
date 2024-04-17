import React from 'react';
import StudentSignIn from './Components/Student/StudentSignIn';

import StudentSignUp from './Components/Student/StudentSignUp';
import { ChakraProvider } from '@chakra-ui/react';
import Navigation from './Components/Navigation';
// import Example from './Components/example';
import CoachSignUp from './Components/Coach/CoachSignUp';
import CoachSignIn from './Components/Coach/CoachSignIn';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import CoachSubmitSuccess from './Components/CoachSubmitSuccess';
import CoachDataToStudent from './Components/Student/CoachDataToStudent';



const App = () => {
  return (
    <>
  
  
<ChakraProvider>
 <BrowserRouter>
<Routes>
{/* <Route path='/' element={<Home></Home>}/>  */}
<Route path='/StudentSignUp' element={<StudentSignUp/>}/>
<Route path='/StudentSignIn' element={<StudentSignIn/>}/>
{/* <Route path='/' element={<Example/>}/> */}
<Route path='/CoachSignIn/CoachSubmitSuccess' element={<CoachSubmitSuccess/>}/>
<Route path='/StudentSignUp/CoachSubmitSuccess' element={<CoachSubmitSuccess/>}/> 
<Route path='/' element={<Navigation/>}/>
<Route path='/CoachSignUp' element={<CoachSignUp/>}/>
<Route path='/CoachSignIn' element={<CoachSignIn/>}/>
<Route path='/coachDataToStudent' element={<CoachDataToStudent/>}/>
</Routes>
</BrowserRouter> 
</ChakraProvider>
</>
  );
}

export default App;
