import React, { useEffect, useState } from "react";
import Menu from "../component/Menu";

function Evenement() {
  const [label, setLabel] = useState("Dashboard");

  useEffect(() => {
    alert("Ici ");
  }, []);

  const changeLabel = (val) => {
    setLabel(val);
  };
  const footer = (
    <>
      <Menu></Menu>
    </>
  );
  return (
    <div>
      {footer}
      <h1>EVENT</h1>
    </div>
  );
}

export default Evenement;
