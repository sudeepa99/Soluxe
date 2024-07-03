import React from 'react';
import FounderImg from "../Assets/shoe worker.jpg";

export default function Story_container3() {
  return (
    <div className='story_container3'>
        <div>
            <p>
            At Soluxe, we believe that our success is rooted in the dedication and expertise of our team. Our workers are more than just employees; they are the heart and soul of our company. Their cleverness, creativity, and unwavering commitment to excellence are what set Soluxe apart in the competitive world of footwear.
            </p>
            <p>
            Our artisans are masters of their craft, blending traditional techniques with modern innovations. Each pair of Soluxe shoes is a testament to their skill and dedication. From the initial design sketches to the final polish, our workers pour their hearts into every step of the process. Their attention to detail ensures that every shoe meets our high standards of quality and style.
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
