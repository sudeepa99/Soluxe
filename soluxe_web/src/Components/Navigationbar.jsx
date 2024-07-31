import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigationbar.css'
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';

export default function Navigationbar() {
  return (
    <div className='navigationbar'>
        <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand as={Link} to="/">Soluxe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/new">New</Nav.Link>
            <Nav.Link as={Link} to="/men" >Men</Nav.Link>
            <Nav.Link as={Link} to="/women">Women</Nav.Link>
            <Nav.Link as={Link} to="/accessories">Accessories</Nav.Link>
            <Nav.Link as={Link} to="/outlet">Outlet</Nav.Link>
            <Nav.Link as={Link} to="/ourstory">Our Story</Nav.Link>
            <Searchbar/>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}
