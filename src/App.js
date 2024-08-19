import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Make sure 'Link' is imported
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import AnimalCare from './components/animal-care'; // Ensure correct path
import Contact from './components/contact';
import './components/home-style.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome styles


function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg sticky-top border-bottom" id="nav_bar">
          <div className="container-fluid px-md-5">
            <a className="navbar-brand" href="#">
              <img src="assets/logo.png" alt="Logo" height="65px" id="nav_img" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler">
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end text-center pe-3" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item" id="nav_a1">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item" id="nav_a2">
                  <Link className="nav-link" to="/services">Facility</Link>
                </li>
                <li className="nav-item" id="nav_a3">
                  <Link className="nav-link" to="/animal-care">Animal Care</Link>
                </li>
                <li className="nav-item" id="nav_a4">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item" id="nav_a5">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/animal-care" element={<AnimalCare />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;