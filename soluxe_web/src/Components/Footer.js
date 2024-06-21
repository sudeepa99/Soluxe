import React from 'react'
import { Button } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <div className='container_footer'>
        <div className='row'>
            <Button className='footer_button'>About us</Button>
            <Button className='footer_button'>Customer Service</Button>
        </div>
        <div className='row'>
            <Button className='footer_button'>Our Story</Button>
            <Button className='footer_button'>Need Help?</Button>
        </div>
        <div className='row'>
            <Button className='footer_button'>Reviews</Button>
            <Button className='footer_button'>Size Guide</Button>
        </div>
        

        
      
    </div>
  )
}
