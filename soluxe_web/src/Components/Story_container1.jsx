import React from 'react';
import Image from 'react-bootstrap/Image';
import FounderImg from "../Assets/founder.jpg";
import "./Story_container.css";
export default function Story_container1() {
  return (
    <div className='story_container1'>
        <div>
            <p>
            Welcome to Soluxe, where style meets comfort, and every step is a statement. Our journey began with a simple yet profound idea: to create a shoe brand that combines luxury with everyday practicality. At Soluxe, we believe that shoes are more than just an accessory; they are a reflection of your personality, a testament to your taste, and a foundation of your confidence.
            </p>
            <p>
            Our story started in 1978, when a group of passionate shoe enthusiasts came together with a shared vision. We wanted to disrupt the shoe industry by offering high-quality, stylish footwear that doesn't compromise on comfort. Drawing inspiration from the latest fashion trends and timeless classics, we embarked on a mission to craft shoes that cater to every individual's unique style and needs.
            </p>
        </div>
        <div>
        
            <Image className="founder_img" src={FounderImg} rounded />
            <div style={{color:"black", fontWeight:"bold", textAlign:"center"}}>
                James Watson (Founder of Soluxe)
            </div>
        
        </div>
      
    </div>
  )
}
