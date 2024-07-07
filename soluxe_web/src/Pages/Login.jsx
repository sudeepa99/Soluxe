import React from 'react'
import { Image } from 'react-bootstrap';
import Logo from "../Assets/logo_soluxe.png";
import "./Login.css";

export default function Login() {
  return (
    <div>
        <div className='log_in'>
            <Image className='logo' src={Logo}/>
            <h1 className='log_in_header'>LOGIN</h1>
        </div>
      
    </div>
  )
}
