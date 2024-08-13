import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from '../context/AuthContext';
import './Searchbar.css';

export default function Searchbar() {
  const { isLoggedIn, logout, user } = useAuth();  // Destructure the user instead of token
  const navigate = useNavigate();

  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);

  const handleUserClose = () => setShowUser(false);

  const handleUserShow = async () => {
    if (isLoggedIn && user) {  // Ensure user data exists
      setUserName(user.name);  // Use data from context instead of making another API call
      setUserEmail(user.email);
      setShowUser(true);
    } else {
      navigate('/login');
    }
  };

  const handleLogOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='searchbar'>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <i className="fas fa-search search-icon"></i>

            <FaUser className='user_icon' onClick={handleUserShow} />
            <Offcanvas show={showUser} onHide={handleUserClose} backdrop="static" placement='end'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>User Details</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="user-info">
                  <span className="user-name">Name: {userName}</span>
                  <br />
                  <span className="user-email">Email: {userEmail}</span>
                  <Button variant="outline-secondary" onClick={handleLogOut} className="ml-2">Logout</Button>
                </div>
              </Offcanvas.Body>
            </Offcanvas>

            <div>
              <FaCartShopping className='cart_icon' onClick={handleCartShow} />
              <Offcanvas show={showCart} onHide={handleCartClose} backdrop="static" placement='end'>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Added Items will appear here
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
