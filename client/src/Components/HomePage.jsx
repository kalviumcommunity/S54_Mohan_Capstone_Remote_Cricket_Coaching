import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();
  
  function navigatePage() {
    navigate('/navigation');
    console.log('Navigating to Navigation');
  }

  return (
    <>
      <div>HomePage</div>
      <button onClick={navigatePage}>click me</button>
    </>
  )
}

export default HomePage
