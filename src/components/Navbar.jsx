import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo_inverted.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const backToHome = () => {
  window.location.href = '/';
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='Navbar_container'>
      <div className='logo' onClick={backToHome} data-aos='fade-right' data-aos-duration='1000'>
        <img src={Logo} alt='logo' />
      </div>
<div>

      <ul className={`nav_menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} >
        <li><Link to="/home" className='link'>HOME</Link></li>
        <li><Link to="/about" className='link'>ABOUT</Link></li>
        <li><Link to="/education" className='link'>EDUCATION</Link></li>
        <li><Link to="/experience" className='link'>EXPERIENCE</Link></li>
        <li><Link to="/portfolio" className='link'>PORTFOLIO</Link></li>
        <li><Link to="/skill" className='link'>SKILL</Link></li>
        <li><Link to="/interest" className='link'>INTEREST</Link></li>
        <li><Link to="/blog" className='link'>BLOG</Link></li>
        <li><Link to="/sayhello" className='link'>SAYHELLO</Link></li>
      </ul>
</div>

      <div className={`nav_toggler_icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </div>
  );
};

export default Navbar;
