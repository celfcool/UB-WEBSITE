import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from'../../assets/images/ub-logo.svg';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => setNavOpen(true);
  const handleNavClose = () => setNavOpen(false);

  return (
    <header className="header">
        <div className={`overlay ${navOpen ? 'active' : ''}`} onClick={handleNavClose}></div>

        <div className="container">
            <Link to="/" className="logo">
                <img src={logo} alt="GameX logo" />
            </Link>

            <button className="nav-open-btn" onClick={handleNavOpen}>
                <ion-icon name="menu-outline"></ion-icon>
            </button>

            <nav className={`navbar ${navOpen ? 'active' : ''}`}>
                <div className="navbar-top">

                <Link to="/" className="logo" onClick={handleNavClose}>
                    <img src={logo} alt="GameX logo" />
                </Link>

                <button className="nav-close-btn" onClick={handleNavClose}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                </div>

                <ul className="navbar-list">
                    <li>
                        <Link to="/" className="navbar-link" onClick={handleNavClose}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="navbar-link" onClick={handleNavClose}>About</Link>
                    </li>
                    <li>
                        <Link to="/news" className="navbar-link" onClick={handleNavClose}>News</Link>
                    </li>
                    <li>
                        <Link to="/team" className="navbar-link" onClick={handleNavClose}>Team</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="navbar-link" onClick={handleNavClose}>Contact</Link>
                    </li>
                </ul>

                <ul className="nav-social-list">
                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar