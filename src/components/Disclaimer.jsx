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
           <p>
            This is a private site. Visitors and/or users are not permitted to copy electronically and print hard copies of pages from this website, in whole or in part, without the express written consent from the author, creator, publisher of this price website.The information about the author, publisher as provided under this website is only for informational purpose and it should not be interpreted as soliciting or advertisement of any nature whatsoever. This information is solely available on the request of the user, visitor accepting and acknowledging the conditions as mentioned herein by clicking on “I Accept”. This website may contain, display photographs, pictures, maps, plans, videos, voice messages, recording and past and current job details of the author, creator, publisher, of this private website these contents are only for informational purposes and are not meant for soliciting and/or advertisement of any nature.This website also contains links to outside resources, over which we have no control with respect to the privacy practices or the contents or otherwise. We also do not guarantee the availability of such linked pages at all times. All downloadable contents on this website is on an ‘as is’ basis without warranties of any kind, either express or implied, including, without limitation warranties of title or merchant ability or acceptability for a particular purpose and/or correctness of contents. This private site is in no way to be held responsible for the privacy practices and/or content appearing on these outside resources. Moreover, this private site do not represent or warrant that the information accessible via this website is accurate, complete or current. This private site do not endorse any services and/or products as provided by any third parties and advertisers to which my link. Without liability whatsoever this private site may without any notice be modified and/or discontinue operation of all or portions of this Site at any time, and also assumes no responsibility to update this Site.


           </p>
          </div>
          <button onClick={handleAccept}>I Accept</button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Disclaimer;
