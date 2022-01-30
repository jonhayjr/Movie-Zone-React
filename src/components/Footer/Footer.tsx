import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const displayLink = () => {
    //Function to display content based on current route
    return location.pathname === '/about' ? true : false;
  }

  return (
    <footer className="w-100 bg-black text-white flex-column justify-content-center align-items-center">
        <p>&copy;2022 Jon Hay</p>
        <Link to="/about" className="text-white text-decoration-none" hidden={displayLink()}><span className="h3 question-mark">?</span></Link>
    </footer>
  )
};

export default Footer;
