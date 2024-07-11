import React from 'react'
import { Button, Image } from 'react-bootstrap';
import Logo from "../Assets/logo_soluxe.png";
import "./Login.css";
import Navigationbar from '../Components/Navigationbar';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();

    const handleUserSignupClick =() =>{
        navigate('/signup');
    }

  return (
    <div>
        <Navigationbar/>
        <div className='log_in'>
            <Image className='logo' src={Logo}/>
            <h1 className='log_in_header'>LOGIN</h1>

            <form>
                <div className="form_one">
                <div className='input_fields'>
                    <label>Email</label>
                    <label>Password</label>
                </div>

                <div className='input_fields'>
                    <input type='email' name='email'/>
                    <input type='email' name='email'/>
                </div>

                </div>
                

                <Button className="login_button" type='submit' >Login</Button>
            </form>
            <div className='bottom_buttons'>
                <Button className="login_button2">Forgot Password</Button>
                <Button className="login_button2" onClick={handleUserSignupClick}>No Account? Sign Up</Button>
            </div>
        </div>
      
    </div>
  )
}
