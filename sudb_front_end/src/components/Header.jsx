import React, { Component } from "react";
import NavMenu from "./NavMenu.jsx";
import Logo from "./SUDb Logo.png";

class Header extends Component {
  navOpen = (event) => {
    document.getElementById("menuSideNav").style.width = "550px";
    document.getElementById("menuSideNav").style.display = "navText";
  };

  render() {
    return (
      <header className="header">
        <span className="menuIcon" onClick={(event) => this.navOpen(event)}>
          &#9776;
        </span>
        <a href='/'><img className="logo" src={Logo} alt = "Logo"/></a>
        <NavMenu />
      </header>
    );
  }
}

export default Header;
