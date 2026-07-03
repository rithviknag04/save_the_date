import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-nav">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span>P</span>
          <Heart className="nav-heart-icon" size={16} fill="currentColor" />
          <span>S</span>
        </NavLink>
        
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/story" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Our Story
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Gallery
          </NavLink>
          <NavLink to="/other-events" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Other Events
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
