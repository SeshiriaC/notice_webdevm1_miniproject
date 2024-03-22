import React from "react";
import image from "../images/logo.png";

function PageFooter() {
  return (
    <div class="footer">
      <div id="container">
        <div id="leftfooter">
          <a href="/acceuil">
            <img src={image} alt="Notice logo" id="footerLogo" />
          </a>
          <div id="copyright">
            <p>Copyright &copy; 2024 Tous droits réservés</p>
          </div>
        </div>
        <div id="middlefooter">
          <h1>A propos</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius odit
            esse odio recusandae laborum repellendus mollitia dolore pariatur
            omnis inventore enim aliquid hic quae neque, officiis temporibus
            quo, voluptas sapiente.
          </p>
        </div>
        <div id="rightfooter">
          <a href="/Sources">
            <h1>Sources</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
