import React from 'react'
import { useState } from 'react';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
    if (value.length < 8) {
      setNameError('Name should be at least 10 characters long');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    const { value } = e.target;
    setMessage(value);
    if (value.length < 15) {
      setMessageError('Message should be at least 20 characters long');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nameError && !emailError && !messageError) {
      setIsSubmitting(true);
      const data = {
        name,
        email,
        message,
      };
      try {
        const response = await fetch('http://localhost:3000/api/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message })
        });
        const result = await response.json();
        if (response.ok) {
          setSubmitSuccess(true);
        } else {
          setSubmitError(result.message);
        }
      } catch (error) {
        console.error(error);
        setSubmitError('An error occurred while submitting the form');
      } finally {
        setIsSubmitting(false);
      }
    }
  };


  return (
    <div>
      <div className="max-w-lg mx-auto mt-12">
        <h1 className="text-2xl  mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required className="border w-full py-2 px-3 border-gray-300"/>
              {nameError && <p className="text-red-500 mt-1">{nameError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required className="border w-full py-2 px-3 border-gray-300"/>

              {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">Message</label>
            <textarea id="message" name="message" value={message} onChange={handleMessageChange} required className="border w-full py-2 px-3 border-gray-300"></textarea>
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact