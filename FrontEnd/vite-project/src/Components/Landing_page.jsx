import React from 'react';
import './Landing_page.css';
import Logo from '../assets/Logo.png';
import Asset1 from '../assets/Asset1.png'
import Rectangle from '../assets/Rectangle 46.png'

function Landing_page() {
  return (
    <div>
    <h1 className='heading'>CricketElevate</h1>
    <p className='para'>Train with determination, play with passion, and aspire for greatness. Your journey to success begins with each step you take on the field.</p>
      {/* <img src={Logo} alt="Logo" /> */}
      <div className='container'>
     
      <img  className='dottedImg' src={Asset1} alt="Asset1" />
      
 
      {/* <img  className='RactangleImg46' src={Rectangle} alt="Rectangle" /> */}

     </div>
      <button className='startingBtn'>Get Started</button>

    </div>
  );
}

export default Landing_page;
