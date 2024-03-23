import React from 'react';
import StudentSignIn from './Components/StudentSignIn';
import StudentSignUp from './Components/StudentSignUp';
import Navigation from './Components/Navigation';
import Example from './Components/example';
import CoachSignUp from './Components/CoachSignUp';
import CoachSignIn from './Components/CoachSignIn';
import { BrowserRouter,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
<BrowserRouter>
<Routes>
{/* <Route path='/' element={<Home></Home>}/> */}
<Route path='/StudetSignIn' element={<StudentSignIn/>}/>
<Route path='/StudentSignUp' element={<StudentSignUp/>}/>
<Route path='/example' element={<Example/>}/>
<Route path='/' element={<Navigation/>}/>
<Route path='/CoachSignUp' element={<CoachSignUp/>}/>
<Route path='/CoachSignIn' element={<CoachSignIn/>}/>

      {/* <Student_SignIn></Student_SignIn> */}
      {/* <Student_SignUp></Student_SignUp> */}
      {/* <Navigation></Navigation> */}
</Routes>
</BrowserRouter>
  );
}

export default App;
