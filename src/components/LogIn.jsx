import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    loginErrors: "",
  };

  reactToLogin = (event) => {
    event.preventDefault();
    this.props.resetRedirect();
    this.props.handleLogin(this.props.username, this.props.password);
  }

  render() {
    if (this.props.currentPage !== '/login') {
      return <Redirect to={this.props.currentPage} />
    }
    return (
      <div className="login-container">
        <h1>Log In</h1>
        <form onSubmit={(event) => this.reactToLogin(event)}>
          <label htmlFor="username" className="login">Username</label><br />
          <input
            type="text"
            className="login"
            id="username"
            value={this.props.username}
            onChange={this.props.handleLoginChange}
            ref={(node) => (this.username = node)}
          />
          <br /><br />
          <label htmlFor="password" className="login">Password</label><br />
          <input
            type="password"
            className="login"
            id="password"
            value={this.props.password}
            onChange={this.props.handleLoginChange}
            ref={(node) => (this.password = node)}
          />
          <br /><br />
          <input type="submit" className="login" />
        </form>
        <p> Not Signed up? <a href='/users'>Click Here</a></p>
      </div>
    );
  }
}
