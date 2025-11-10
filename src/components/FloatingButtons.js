import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="floating-btn">
      <a 
        href="https://wa.me/919538684748" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a 
        href="tel:+919538684748" 
        className="phone"
        title="Call Now"
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default FloatingButtons;