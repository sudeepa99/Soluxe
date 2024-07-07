import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [error, setError] = useState('');
    
  return (
    <>
    <div className="container-regi">
        <h2>
          Create an <span>Account</span>
        </h2>
        <form >
          <div className="form-group">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">Enter Your Register Number</label>
            <input
              type="text"
              id="id"
              name="id"
              required
            />
          </div>
        
              
          <button type="submit" className='regi-button'>Add</button><br />
          {error && <p className="error">{error}</p>}
          <p>
            Already have an account? <span><Link to="/login">Login</Link></span>
          </p>
        </form>
      </div>
    </>
    
  )
}
