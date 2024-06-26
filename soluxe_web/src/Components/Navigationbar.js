import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigationbar.css'
import Searchbar from './Searchbar';

export default function Navigationbar() {
  return (
    <div className='navigationbar'>
        <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="/">Soluxe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="New">New</Nav.Link>
            <Nav.Link href="Men">Men</Nav.Link>
            <Nav.Link href="Women">Women</Nav.Link>
            <Nav.Link href="Accessories">Accessories</Nav.Link>
            <Nav.Link href="Outlet">Outlet</Nav.Link>
            <Nav.Link href="Ourstory">Our Story</Nav.Link>
            <Searchbar/>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}
