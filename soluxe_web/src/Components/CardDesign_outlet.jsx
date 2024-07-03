import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaPlus } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import "./CardDesign_New.css";
import "./CardDesign_outlet.css";

export default function CardDesign_outlet(props) {
  return (
    <div>
        <Button className='newpage_cards'>
        <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={props.image_name} />
        <Card.Body>
        
        <div className='button_section'>
        
        <Card.Title>{props.detail}</Card.Title>
        <div className="outlet_button_section">
        <Card.Text id='sal_value'>{props.shoe_value}</Card.Text>
        <Card.Text id='act_value'>{props.actual_value}</Card.Text>

        </div>
        
        </div>
        <Button className='add_to_cart'  data-tooltip-id="add-to-cart-tooltip" data-tooltip-content="Add to cart"><FaPlus className='add_icon' />
        </Button>
        <p className='sale_tag'>{props.tag_name}</p>
        <Tooltip id="add-to-cart-tooltip" />
        
        </Card.Body>
        </Card>

        </Button>
      
    </div>
  )
}
