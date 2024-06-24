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
      <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Best Match</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Price: Low to High</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Price: High to Low</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Newest Arrivals</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
      </div>
    </div>
  )
}
