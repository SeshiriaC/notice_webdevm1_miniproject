import { Menubar } from "primereact/menubar";
import React from "react";
import logo from "../images/logo.png";

function Menu() {
  const end = <img alt="logo" src={logo} height="30" className="mr-2"></img>;

  const items = [
    {
      label: "Acceuil",
      icon: "pi pi-home",
      url: "/acceuil",
    },
    {
      label: "Evènements",
      icon: "pi pi-hashtag",
      url: "/evenements",
    },
    {
      label: "Booking",
      icon: "pi pi-ticket",
      url: "/booking",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      url: "/contact",
    },
  ];
  return (
    <div className="card">
      <Menubar model={items} end={end} />
    </div>
  );
}

export default Menu;
