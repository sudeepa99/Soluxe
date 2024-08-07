import React, { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Logo from "../Assets/logo_soluxe.png";
import Navigationbar from '../Components/Navigationbar';
import { Link } from 'react-router-dom'; 
import Axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:3001/api/register', formData);
      resetForm();
      setError('');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || 'An unexpected error occurred');
      } else {
        setError('Network error, please try again later.');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      password: '',
      email: '',  
    });
  };

  return (
    <>
      <Navigationbar />  
      <div className='log_in'>
        <Image className='logo' src={Logo} alt="Soluxe Logo" />
        <h1 className='log_in_header'>SIGNUP</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Your password"
            />
          </div>
          <Button type="submit" className='regi-button'>Sign Up</Button>
          {error && <p className="error">{error}</p>}
          <p>
            Already have an account? <Link to="/"> <span className='login-span'>Login</span></Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
