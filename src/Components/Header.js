import React, { useState, useEffect } from 'react';
import logo from '../Media/favicon.ico';

const Header = () => {
    const [isNavbarActive, setNavbarActive] = useState(false); // State to manage navbar visibility
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let index = sections.length;

      // Determine which section is currently in view
      while (--index && window.scrollY + 300 < sections[index].offsetTop) {}

      const activeId = sections[index]?.id || '';
      setActiveSection(activeId);
    };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on first load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const toggleNavbar = () => {
        setNavbarActive(!isNavbarActive); // Toggle the navbar visibility state
    };

    return (
        <header className="header">
            {/* eslint-disable-next-line */}
            <a href="#" className="logo">
              <img src={logo} alt="logo" />
              Growing Tree Kindergarten
            </a>
            <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''} >About</a>
                <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
                <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
                <a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''}>Gallery</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </nav>

            <div className='icons'>
              <div className='fas fa-bars' id='menu-btn' onClick={toggleNavbar}></div>
            </div>
        </header>
    );
};

export default Header;
