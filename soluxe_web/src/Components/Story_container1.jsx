import React from 'react';
import Image from 'react-bootstrap/Image';
import FounderImg from "../Assets/founder.jpg";
import "./Story_container.css";
export default function Story_container1() {
  return (
    <div className='story_container1'>
        <div>
            <p>
            Each pair of Soluxe shoes is meticulously designed and crafted with precision. We use only the finest materials, sourced from the best suppliers around the world. Our skilled artisans bring these materials to life, creating shoes that are not only beautiful but also durable and comfortable. Every stitch, every cut, and every detail is a testament to our commitment to excellence.
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
