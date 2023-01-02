import React from "react";
import productLogo from '../../shared/resources/Lssrm_logo.png';
import './header.css';

function Header() {
  return (
    <div>
      <div className="logo_New">
        <div className="Logo_Icon">
          <a id="appHomeLink" name="appHomeLink" href="/lssrm-console/servlet/general?currentTab=1" className="fl  nooverflow">
            <img src={productLogo} alt="" >
            </img>
          </a>
        </div>
        <br />
      <br />
      </div>

      <div class="adminPosition"><label>logged In username</label>
      <span class="userNavBox"><label>user icon with logout</label></span></div>

     
    </div>

  );
}
export default Header;