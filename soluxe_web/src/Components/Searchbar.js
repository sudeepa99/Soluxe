import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Searchbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Searchbar() {
  return (
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
            
          </Col>
          
          
        </Row>
        
      </Form>
    </div>
  )
}
