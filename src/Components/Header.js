import React, { useState } from 'react';
import logo from '../Media/favicon.ico';

const Header = () => {
    const [isNavbarActive, setNavbarActive] = useState(false); // State to manage navbar visibility

    const toggleNavbar = () => {
        setNavbarActive(!isNavbarActive); // Toggle the navbar visibility state
    };

    return (
        <header className="header">
            <a href="#" className="logo">
              <img src={logo} alt="logo" />
              Growing Tree Kindergarten
            </a>
            <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
                <a href="#about">About</a>
                <a href='#services'>Services</a>
                <a href="#education">Education</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className='icons'>
              <div className='fas fa-bars' id='menu-btn' onClick={toggleNavbar}></div>
            </div>
        </header>
    );
};

export default Header;
