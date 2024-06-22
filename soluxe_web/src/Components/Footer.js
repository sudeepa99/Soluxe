import React from 'react'
import { Button } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    // <div className='container_footer'>
    //     <div className='row'>
    //         <Button className='footer_button'>About us</Button>
    //         <Button className='footer_button'>Customer Service</Button>
    //     </div>
    //     <div className='row'>
    //         <Button className='footer_button'>Our Story</Button>
    //         <Button className='footer_button'>Need Help?</Button>
    //     </div>
    //     <div className='row'>
    //         <Button className='footer_button'>Reviews</Button>
    //         <Button className='footer_button'>Size Guide</Button>
    //     </div>
    <div className="container_footer">
      {/* Row 1 */}
      <div className="row">
        <div className="column">
        <h1 className='footer_text'>About Us</h1>
      </div>
      <div className="column">
        <h1 className='footer_text'>Customer Service</h1>
      </div>
    </div>

      {/* Row 2 */}
    <div className="row">
      <div className="column">
        <Button className='footer_button'>Our Story</Button>
      </div>
      <div className="column">
        <Button className='footer_button'>Need Help?</Button>
      </div>
        
    </div>

    <div className="row">
      <div className="column">
        <Button className='footer_button'>Reviews</Button>
      </div>
      <div className="column">
        <Button className='footer_button'>Size Guide</Button>
      </div>
        
    </div>
    </div>
  )
}
