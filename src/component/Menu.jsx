import { Menubar } from "primereact/menubar";
import React from "react";
import logo from "../images/logo.png";       

function Menu() {
  const end = <a href="/acceuil">
    <img alt="logo" src={logo} height="30" className="mr-1"></img>
  </a>;

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
    <div id="menuBar">
      <Menubar model={items} end={end} className="border-noround"/>
    </div>
  );
}

export default Menu;
