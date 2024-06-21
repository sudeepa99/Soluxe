import React from 'react'
import { Button } from 'react-bootstrap'

export default function Footer() {
  return (
    <div className='container_footer'>
        <div className='row1'>
            <Button>About us</Button>
            <Button>Customer Service</Button>
        </div>
        <div className='row2'>
            <Button>Our Story</Button>
            <Button>Need Help?</Button>
        </div>
        <div className='row3'>
            <Button>Reviews</Button>
            <Button>Size Guide</Button>
        </div>
        

        
      
    </div>
  )
}
