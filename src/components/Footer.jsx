import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

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
        <p className="footer-title">{t('home.couple', 'Prajwala Nag & Shravan Kumar')}</p>
        <p className="footer-subtitle">{t('footer.date', 'December 13th & 14th, Mysuru')}</p>
        <p className="footer-copyright">{t('footer.made', 'Made with love for our wedding day.')}</p>
      </div>
    </footer>
  );
}
