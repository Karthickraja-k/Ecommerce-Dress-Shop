/* import React from 'react';
import { Form } from 'react-bootstrap';
 import './UserSidebar.css'

const UserSidebar = ({ handleFiltersChange }) => {
  // Sample data for colors and sizes
  const colors = ['Red', 'Blue', 'Green'];
  const sizes = ['Small', 'Medium', 'Large'];
  const prices = ['100', '150', '200'];

  return (
    <div className="user-sidebar">
      <h4>Filter</h4>
      <Form>
        <Form.Group controlId="colorFilter">
          <Form.Label>Color</Form.Label>
          <Form.Control as="select" onChange={(e) => handleFiltersChange('color', e.target.value)}>
            <option value="">All Colors</option>
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="sizeFilter">
          <Form.Label>Size</Form.Label>
          <Form.Control as="select" onChange={(e) => handleFiltersChange('size', e.target.value)}>
            <option value="">All Sizes</option>
            {sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="ratingFilter">
          <Form.Label>Rating</Form.Label>
          <Form.Control as="select" onChange={(e) => handleFiltersChange('rating', e.target.value)}>
            <option value="">Filter by Rate</option>
            {prices.map((rating, index) => (
              <option key={index} value={rating}>
                {rating}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};



export default UserSidebar; */

/* import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserSidebar = ({ handleFiltersChange }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const colors = ['Red', 'Blue', 'Green'];
  const sizes = ['Small', 'Medium', 'Large'];
  const prices = ['100', '150', '200'];

  return (
    <div className="user-sidebar">
      <h4>Filter</h4>
      <Button style={{background:'grey'}} onClick={toggleFilters}>
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </Button>

      {showFilters && (
        <Form>
          <Form.Group controlId="colorFilter">
            <Form.Label>Color</Form.Label>
            <Form.Control as="select" onChange={(e) => handleFiltersChange('color', e.target.value)}>
              <option value="">All Colors</option>
              {colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="sizeFilter">
            <Form.Label>Size</Form.Label>
            <Form.Control as="select" onChange={(e) => handleFiltersChange('size', e.target.value)}>
              <option value="">All Sizes</option>
              {sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="ratingFilter">
            <Form.Label>Price</Form.Label>
            <Form.Control as="select" onChange={(e) => handleFiltersChange('price', e.target.value)}>
              <option value="">Filter by Price</option>
              {prices.map((price, index) => (
                <option key={index} value={price}>
                  {price}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

export default UserSidebar; */

import { Link } from 'react-router-dom';
//import { NavDropdown } from 'react-bootstrap';

export default function UserSidebar () {

    //const navigate = useNavigate();

    return (
        <div className="sidebar-wrapper">
            <nav id="user-sidebar no-margin">
                <ul className="list-unstyled components">
                <li>
                    <Link to="/user/filtered-products"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
                </li>      
            </ul>
            </nav> 
        </div>
    )
}
