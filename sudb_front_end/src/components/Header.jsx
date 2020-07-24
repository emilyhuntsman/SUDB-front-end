import React, { Component } from "react";
import NavMenu from "./NavMenu.jsx";
import Logo from "./SUDb Logo.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img alt="" src={Logo} />
        <NavMenu />
      </header>
    );
  }
}

export default Header;
