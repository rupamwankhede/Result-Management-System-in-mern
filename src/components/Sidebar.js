// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaUser, FaBook, FaCommentDots, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? '' : 'hidden'}`}>
      
      {/* Hide Button inside Sidebar */}
      <div className="hide-button" onClick={toggleSidebar}>
        <FaTimes style={{ marginRight: '8px' }} /> Hide
      </div>

      <ul>
        <li><FaHome /><Link to="/">Home</Link></li>
        <li><FaUser /><Link to="/about">About Us</Link></li>
        <li><FaEnvelope /><Link to="/contact">Contact</Link></li>
        <li><FaBook /><Link to="/upload-result">Upload Result</Link></li>
        <li><FaCommentDots /><Link to="/feedback">Feedback</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

