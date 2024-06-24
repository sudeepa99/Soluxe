import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardDesign.css';
import { FaPlus } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
export default function CardDesign(props) {
  return (
    <div >
        <div class="cards">
        
        <Button className='homepage_cards'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image_name} />
        <Card.Body>
        <Card.Title>{props.detail}</Card.Title>
        <div className='button_section'>
        <Card.Text>
          {props.shoe_value}
        </Card.Text>
        <Button className='add_to_cart'  data-tooltip-id="add-to-cart-tooltip" data-tooltip-content="Add to cart"><FaPlus className='add_icon' />
        </Button>
        <Tooltip id="add-to-cart-tooltip" />
        </div>
        
        </Card.Body>
        </Card>

        </Button>
        
        


        </div>
        
        
        
      
    </div>
    
  )
}
