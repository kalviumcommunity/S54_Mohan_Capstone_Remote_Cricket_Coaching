import React, { useState } from 'react';
import './Landing_page.css';
import Logo from '../assets/Logo.png';
import Asset1 from '../assets/Asset1.png'
import Rectangle from '../assets/Rectangle 46.png'
import Rectangle45 from '../assets/Rectangle45.png'
import sideiMG from '../assets/sideiMG.png.png'
import Vector28 from '../assets/Vector28.png'
import Vector30 from '../assets/Vector30.png'

function Landing_page() {
  const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');

  const handleMouseMove = (event) => {
    const { clientX, clientY, target } = event;
    const { left, top, width, height } = target.getBoundingClientRect();

    const offsetX = clientX - left;
    const offsetY = clientY - top;

    const percentageX = offsetX / width * 100;
    const percentageY = offsetY / height * 100;

    setBackgroundPosition(`${percentageX}% ${percentageY}%`);
  }

  const resetButton = () => {
    setBackgroundPosition('50% 50%');
  }

  return (
    <>
      <h1 className='heading'>CricElevate</h1>
      <div style={{display:"flex"}}>
        <div>
          <div className='container'>
            <p className='para'>Train with determination, 
            <span className='passionTxt'> play with passion </span>, and aspire for greatness. Your journey to success begins with 
            <span className='fieldTxt'> each step you take on the field.</span></p>
            {/* <img src={Logo} alt="Logo" /> */}
            {/* <img  className='dottedImg' src={Asset1} alt="Asset1" /> */}
            {/* <img  className='RactangleImg46' src={Rectangle} alt="Rectangle" /> */}
            <button className='startingBtn' onMouseMove={handleMouseMove} onMouseLeave={resetButton} style={{backgroundPosition: backgroundPosition}}>Get Started</button>
            {/* <img  className='Vector30Img' src={Vector30} alt="Vector30" /> */}
          </div>
        </div>
        <div>
          <img  className='sideImg' src={sideiMG} alt="sideImg" />
          {/* <img  className='RectangleImg' src={Rectangle45} alt="Rectangle45" /> */}
          <p className='RectangleImg'></p>
        </div>
      </div>
    </>
  );
}

export default Landing_page;
