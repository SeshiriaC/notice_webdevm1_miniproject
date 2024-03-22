import React from "react";
import Menu from "../component/Menu";
import notfoundimage from "../images/notFound.jpg";
import { Button } from "primereact/button";

function NotFound() {
  
  return (
    <div>
      <Menu />
      <div className="flex align-items-center justify-content-center z-0">
        <img src={notfoundimage} width="400vw" alt="page non trouvée" />
      </div>
      <div className="flex align-items-center justify-content-center z-1">
        <a href="/acceuil">
        <Button
          label="Acceuil"
          icon="pi pi-home"
          color="white"
          id="notFoundButton"
        />
        </a>
      </div>
    </div>
  );
}

export default NotFound;
