import React, { useState, useEffect } from 'react';
import './Disclaimer.css';

const Disclaimer = ({ children }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(null); // null for initial loading

  useEffect(() => {
    const accepted = localStorage.getItem('arnabDisclaimerAccepted');
    setShowDisclaimer(accepted !== 'true');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('arnabDisclaimerAccepted', 'true');
    setShowDisclaimer(false);
  };

  // Prevent rendering anything until localStorage check completes
  if (showDisclaimer === null) return null;

  if (showDisclaimer) {
    return (
      <div className="disclaimer-overlay">
        <div className="disclaimer-box">
          <h2>Disclaimer</h2>
          <div className="disclaimer-content">
            <p>This is a private site. Visitors are not permitted to copy or print pages without consent.</p>
            <p>The information is for informational purposes only, not solicitation or advertisement.</p>
            <p>By clicking "I Accept", you acknowledge the above.</p>
          </div>
          <button onClick={handleAccept}>I Accept</button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Disclaimer;
