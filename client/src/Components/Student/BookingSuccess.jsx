import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function BookingSuccess() {
  const navigate=useNavigate()
  return (
    <div>BookingSuccess
    check your email after some time 
    
    
      <Button onClick={()=>{
        navigate('/CoachDataToStudent')
      }}>Back</Button>
    </div>
  )
}

export default BookingSuccess