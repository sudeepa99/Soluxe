import React from 'react';
import { Image } from 'react-bootstrap';
import Image1 from "../Assets/image0.jpg";
import Image2 from "../Assets/image1.jpg";
import "./Story_container4.css";



export default function Story_container4() {
  return (
    <div className='story_container4'>
            <div>
                <Image className='image_customer' src={Image1}/>
                <div style={{color:"black", fontWeight:"bold", textAlign:"center"}}>
                    Happy Customer
                </div>

            </div>
            <div>
                <Image className='image_customer' src={Image2}/>
                <div style={{color:"black", fontWeight:"bold", textAlign:"center"}}>
                    High Quality Product
                </div>

            </div>
            
      
    </div>
  )
}
