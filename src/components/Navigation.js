import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Links to the home route */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Links to the about route */}
        </li>
        <li>
          <Link to="/services">Services</Link> {/* Links to the services route */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Links to the contact route */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
