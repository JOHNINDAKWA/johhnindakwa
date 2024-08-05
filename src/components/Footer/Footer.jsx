import React from 'react';
import './Footer.css';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/terms-and-policy" className="footer-link">Terms & Policy</a>
        <a href="/disclaimer" className="footer-link">Disclaimer</a>
      </div>
      <div className="footer-copy">
        <p>Copyright © 2024 @johnkulundu. All Rights Reserved.</p>
      </div>
      <a
        href="https://wa.me/+254702207999"  
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <button className="back-to-top" onClick={scrollToTop}>
        <MdOutlineKeyboardDoubleArrowUp className='icon'/>
      </button>
    </footer>
  );
};

export default Footer;
