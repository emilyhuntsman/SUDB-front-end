import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavMenu extends Component {
  render() {
    return (
      <div className="sideNav">
        <Link className="navCloseButton navLink">&times;</Link>
        <Link className="navLink" to="/">
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
