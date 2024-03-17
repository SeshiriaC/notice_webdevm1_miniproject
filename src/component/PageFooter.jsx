import React from "react";
import image from "../images/logo.png";

function PageFooter() {
  return (
    <div className="flex justify-content-center flex-wrap">
      <div className="flex-1 p-4">
        <a href="/acceuil">
          <img src={image} alt="Notice logo" className="footerLogo" />
        </a>
      </div>
      <div>
        <p className="flex-1 p-4 mx-4">
          &copy; 2024 NOTICE. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}

export default PageFooter;
