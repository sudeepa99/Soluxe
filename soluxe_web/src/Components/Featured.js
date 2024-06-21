import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Featured.css';

export default function Featured(props) {
  return (
    <div>
        <Button className='featured_button' onClick="" >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.Image_path} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
      </Card.Body>
    </Card>

        </Button>
      
    </div>
  )
}
