import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('wedding_language') || '';
  });
  
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // If no language is selected yet, show the language selection modal prompt
    if (!language) {
      setShowPrompt(true);
    }
  }, [language]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('wedding_language', lang);
    setShowPrompt(false);
  };

  const t = (key, defaultText) => {
    if (!language) return defaultText; // Fallback to default if no language is selected yet
    const langDict = translations[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    return defaultText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
      {showPrompt && (
        <div className="modal-overlay" style={{ zIndex: 9999 }}>
          <div className="modal-content-wrap glass-panel text-center animate-fade-in-scale" style={{ padding: '40px', maxWidth: '450px', width: '90%', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '8px', color: 'var(--text-accent)' }}>ಕನ್ನಡ / English</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.5' }}>
              ದಯವಿಟ್ಟು ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ<br />
              Please select your preferred language
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <button 
                className="btn-primary" 
                onClick={() => setLanguage('kn')}
                style={{ width: '100%', padding: '14px', fontSize: '1rem', letterSpacing: '1px', textTransform: 'none' }}
              >
                ಕನ್ನಡ (Kannada)
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => setLanguage('en')}
                style={{ width: '100%', padding: '14px', fontSize: '1rem', letterSpacing: '1px', textTransform: 'none' }}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
