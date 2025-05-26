import React, { useState, useEffect } from "react";
import "./DisclaimerModal.css";

const DisclaimerModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem("disclaimerAccepted");
    if (!disclaimerAccepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Disclaimer</h2>
        <p>
          This is a private site. Visitors and/or users are not permitted to copy, electronically or otherwise,
          any part of this site without permission. The content is for informational purposes only and not
          for advertisement. Use of this website signifies your acceptance of the conditions by clicking
          “Accept”.
        </p>
        <button onClick={handleAccept}>Accept & Continue</button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
