import React from 'react';
import Image from 'react-bootstrap/Image';
import Materialimg from "../Assets/material.jpg";
import './Story_container2.css';

export default function Story_container2() {
  return (
    <div className='story_container2'>
        <div>
            <p>
            Welcome to Soluxe, where style meets comfort, and every step is a statement. Our journey began with a simple yet profound idea, to create a shoe brand that combines luxury with everyday practicality. At Soluxe, we believe that shoes are more than just an accessory; they are a reflection of your personality, a testament to your taste, and a foundation of your confidence.
            </p>
            
        </div>
        <div>
        
            <Image className="material_img" src={Materialimg} rounded />
            <div style={{color:"black", fontWeight:"bold", textAlign:"center"}}>
                High Quality Materials
            </div>
        
        </div>
      
    </div>
  )
}
