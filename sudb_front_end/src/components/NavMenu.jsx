import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavMenu extends Component {
  render() {
    return (
      <div className="navMenu">
        <Link className="homeLink" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/date">Blind Date</Link>
        <Link to="/list">My List</Link>
        <Link to="/users">Log In</Link>
      </div>
    );
  }
}
