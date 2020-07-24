import React, { Component } from "react";
import NavMenu from "./NavMenu.jsx";
import Logo from "./SUDb Logo.png";

class Header extends Component {
  state = { isToggleOn: true };

  navOpen = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    return (
      <header className="header">
        <span className="menuIcon" onClick={(event) => this.navOpen(event)}>
          &#9776;
        </span>
        <img className="logo" src={Logo} />
        <NavMenu />
      </header>
    );
  }
}

export default Header;
