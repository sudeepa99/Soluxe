import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Logo from "../Assets/logo_soluxe.png";

export default function SignUp() {
  
    
  return (
    <div>
      <div className='log_in'>
            <Image className='logo' src={Logo}/>
            <h1 className='log_in_header'>SIGNUP</h1>

            <form>
                <div className="form_one">
                <div className='input_fields'>
                    <label>Name</label>
                    <label>Email</label>
                    <label>Password</label>
                    {/* <label>Password Confirmation</label> */}
                </div>

                <div className='input_fields'>
                    <input type='text' name='name'/>
                    <input type='email' name='email'/>
                    <input type='text' name='password'/>
                    {/* <input type='text' name='password confirmation'/> */}
                </div>

                </div>
                

                <Button className="login_button" type='submit' >SignUp</Button>
            </form>
            <div className='bottom_buttons'>
                <Button className="login_button2">Already have account? Login</Button>
                
            </div>
        </div>

    </div>
    
  )
}
