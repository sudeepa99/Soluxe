import React from 'react'
import { Image } from 'react-bootstrap';
import Logo from "../Assets/logo_soluxe.png"

export default function Login() {
  return (
    <div>
        <div>
            <Image className='logo' src={Logo}/>
            <h1>LOGIN</h1>
        </div>
      
    </div>
  )
}
