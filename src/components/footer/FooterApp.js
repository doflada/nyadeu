import React from 'react';
import './FooterApp.css';

function FooterApp() {
  return (
    <div id='footer-app-id' >
      <div className='firm-contact-id'>Copyright &#169; {new Date().getFullYear()} Nyad Enterprise by Dan</div>
      <a href='mailto: nyadenterprise@nyad.eu' className='firm-contact-id'> email: nyadenterprise@nyad.eu</a>
    </div>
  )
}

export default FooterApp;
