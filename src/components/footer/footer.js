import React from "react";
import './footer.css'

function Footer() {
  return (
    <div className="footerNew">
      <div className="allRights">
        <label >© ArisGlobal 2023 All rights reserved</label>
      </div>
      <div className="privacy">
        <label >Privacy Policy  | </label>
        <label className="arisglobalLink">www.ArisGlobal.com</label>
      </div>
    </div>
  );
}

export default Footer;