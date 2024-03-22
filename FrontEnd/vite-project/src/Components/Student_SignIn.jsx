import React, { useState } from "react";
import { Input } from '@chakra-ui/react'

const Student_SignIn = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    age: "",
    country: "",
    state: "",
    pincode: "",
    address: "",
    roleOfPlay: "",
    highestLevelPlayed: "",
    yearsOfExperience: "",
    photo: null,
    password: "",
    confirmPassword: "",
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
    // Simulating successful submission
    setTimeout(() => {
      alert("Registration successful");
    }, 1000);
  };

  function Example() {
const [value, setValue] = React.useState('')
const handleChange = (event) => setValue(event.target.value)
  return (
   <>

 
    <>
      <Text mb='8px'>Value: {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </>
 
   </>
  );
};
}


export default Student_SignIn