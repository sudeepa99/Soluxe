import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardDesign.css';

export default function CardDesign(props) {
  return (
    <div class="cards">
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image_name} />
        <Card.Body>
        <Card.Title>{props.detail}</Card.Title>
        <Card.Text>
          {props.shoe_value}
        </Card.Text>
        <Button variant="primary">See More</Button>
        </Card.Body>
        </Card>

        {/* </div>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image_men_shoe1} />
        <Card.Body>
        <Card.Title>Men's Royal 2.0</Card.Title>
        <Card.Text>
          $200.0
        </Card.Text>
        <Button variant="primary">See More</Button>
        </Card.Body>
        </Card>

        </div>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image_men_shoe1} />
        <Card.Body>
        <Card.Title>Men's Royal 2.0</Card.Title>
        <Card.Text>
          $200.0
        </Card.Text>
        <Button variant="primary">See More</Button>
        </Card.Body>
        </Card>

        </div>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image_men_shoe1} />
        <Card.Body>
        <Card.Title>Men's Royal 2.0</Card.Title>
        <Card.Text>
          $200.0
        </Card.Text>
        <Button variant="primary">See More</Button>
        </Card.Body>
        </Card> */}

        </div>
        
        
        
      
    </div>
    
  )
}
