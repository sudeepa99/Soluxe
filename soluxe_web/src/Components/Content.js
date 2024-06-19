import React from 'react';
import './Content.css';
import { Button } from 'react-bootstrap';

export default function Content() {
  return (
    <div className='content'>
        <div className='head'>
        <h1>New Arrivals</h1>
        </div>
        <div className='button1'>
            <Button className='custom-button'>Men</Button>
            <Button className='custom-button'>Women</Button>
            
            
        </div>
      
    </div>
  )
}
