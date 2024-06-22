import React from 'react'
import { Button } from 'react-bootstrap';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    
    <div className="container_footer">
      {/* Row 1 */}

      <div>
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
    {/* Row3 */}
      <div className="row">
      <div className="column">
        <Button className='footer_button'>Reviews</Button>
      </div>
      <div className="column">
        <Button className='footer_button'>Size Guide</Button>
      </div>
        
      </div>

      </div>

      <div className='social_media'>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social_icon">
            <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer' className='social_icon'>
            <FaTwitter/>
        </a>
        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' className='social_icon'>
            <FaFacebookF/>
        </a>
        <a href="https://www.youtube.com" target='_blank' rel='noopener noreferrer' className='social_icon'>
            <FaYoutube/>
        </a>
        <p className='footer_text'>® 2024 All Rights Reserved.</p>
        
        <Button className='button_privacy'>Privacy Policy</Button>
        <Button className='button_privacy'>Terms & Conditions</Button>
        
        

      </div>
      
    </div>
  )
}
