import React, { useState } from 'react';
import { Button, Spinner } from "flowbite-react";
import './CriceleveteSignupForm.css';
import { Input } from '@chakra-ui/react'

const Student_SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert("Registration successful!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-black text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Student Signup Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="input"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="input"
            required
          />
        </div>
        <Button
        
        type="submit"
         className='w-32 h-10 bg-red-950 ' >
        </Button>
      </form>
      <div className="flex gap-2 text-sm mt-5">
        <span>Have an account ? </span>
        Sign In
      </div>
    </div>
  );
};

export default Student_SignUp;
