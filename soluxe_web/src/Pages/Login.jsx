import React from 'react'
import { Button, Image } from 'react-bootstrap';
import Logo from "../Assets/logo_soluxe.png";
import "./Login.css";

export default function Login() {
  return (
    <div>
        <div className='log_in'>
            <Image className='logo' src={Logo}/>
            <h1 className='log_in_header'>LOGIN</h1>

            <form>
                <div>
                    <label>Email</label>
                    <input type='email' name='email'/>
                </div>

                <div>
                    <label>Password</label>
                    <input type='email' name='email'/>
                </div>

                <Button className="login_button" type='submit' >Login</Button>
            </form>
        </div>
      
    </div>
  )
}
