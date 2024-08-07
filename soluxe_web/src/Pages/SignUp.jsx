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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      password: '',
      email: '',  
    });
  };

  const addUser = (data) => {
    Axios.post('http://localhost:3001/api/register', data)
      .then(() => {
        resetForm();
        setError(null);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(error.response.data.error);
        } else {
          setError('An unexpected error occurred');
        }
      });
  };

  return (
    <>  
          <Navigationbar/>  
          <div className='log_in'>
            <Image className='logo' src={Logo}/>
            <h1 className='log_in_header'>SIGNUP</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-one">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-one">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
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
            />
          </div>
          <button type="submit" className='regi-button'>Add</button><br />
          {error && <p className="error">{error}</p>}
          <p>
           <br/> Already have an account?<Link to="/"> <span className='login-span'>Login</span></Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
