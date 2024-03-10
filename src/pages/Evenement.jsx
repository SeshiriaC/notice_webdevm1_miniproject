import React, { useEffect, useState } from "react";
import Menu from "../component/Menu";
import EventCard from '../component/EventCard';

function Evenement() {
  const [label, setLabel] = useState("Dashboard");

  useEffect(() => {
    alert("Ici ");
  }, []);

  const changeLabel = (val) => {
    setLabel(val);
  };
  const header = (
    <>
      <Menu></Menu>
    </>
  );
  return (
    <div>
      {header}
      <EventCard></EventCard>
      <h1>EVENT</h1>
    </div>
  );
}

export default Evenement;
