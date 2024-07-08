import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Searchbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Login from '../Pages/Login';
import { useNavigate } from 'react-router-dom';

export default function Searchbar() {
  const navigate= useNavigate();

  const handleUserIconClick = () =>{
    navigate('/login');
  }

  const handleUserCartClick = () =>{
    navigate('/cart');
  }
  return (
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    <div className='searchbar'>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <i className="fas fa-search search-icon"></i>
            <FaUser className='user_icon' onClick={handleUserIconClick}/>
            <FaCartShopping className='cart_icon' onClick={handleShow}/>
          </Col>
          
          
        </Row>
        
      </Form>
    </div>
  )
}
