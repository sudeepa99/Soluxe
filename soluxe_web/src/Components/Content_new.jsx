import React from 'react'
import './Content_new.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Content_new() {
  return (
    <div className='body_contentnew'>
      <div className='head_new'>
        <h1>New Arrivals</h1>
      </div>
      <div className='contennew_drop'>
      <Dropdown cl>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    </div>
  )
}
