import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="botanical-divider">
          <div className="botanical-line"></div>
          <div className="botanical-icon">
            <Heart size={16} fill="currentColor" />
          </div>
          <div className="botanical-line"></div>
        </div>
        <p className="footer-title">Prajwala Nag & Shravan Kumar</p>
        <p className="footer-subtitle">December 13th & 14th, Mysuru</p>
        <p className="footer-copyright">Made with love for our wedding day.</p>
      </div>
    </footer>
  );
}
