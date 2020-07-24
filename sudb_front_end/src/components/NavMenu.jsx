import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavMenu extends Component {
  navClose = (event) => {
    document.getElementById("menuSideNav").style.width = "0px";
    document.getElementById("menuSideNav").style.display = "navText";
  };

  render() {
    return (
      <div className="sideNav" id="menuSideNav">
        <Link
          className="navCloseButton navLink"
          onClick={(event) => this.navClose(event)}
        >
          &times;
        </Link>
        <Link className="navLink" to="">
          Home
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/date">
          Blind Date
        </Link>
        <Link className="navLink" to="/list">
          My List
        </Link>
        <Link className="navLink" to="/users">
          Log In
        </Link>
      </div>
    );
  }
}
