import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShouldRender(true);
      // Small delay to trigger entry animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type) => {
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
    // Remove from DOM after exit animation
    setTimeout(() => setShouldRender(false), 400);
  };

  if (!shouldRender) return null;

  return (
    <div className={`cookie-banner ${isVisible ? 'cookie-banner--visible' : ''}`}>
      <div className="container">
        <div className="cookie-banner__content">
          <div className="cookie-banner__text">
            <span className="cookie-banner__icon">🍪</span>
            <p>
              We use cookies to enhance your experience and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="cookie-banner__actions">
            <button 
              className="btn btn--sm btn--outline" 
              onClick={() => handleConsent('declined')}
            >
              Necessary Only
            </button>
            <button 
              className="btn btn--sm btn--primary" 
              onClick={() => handleConsent('accepted')}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
