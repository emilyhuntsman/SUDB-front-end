import React, { Component } from "react";

export default class Login extends Component {
  state = {
    loginErrors: "",
  };

  reactToLogin = (event) => {
    event.preventDefault();
    this.props.handleLogin(this.props.username, this.props.password);
  }

  render() {

    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={(event) => this.reactToLogin(event)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={this.props.username}
            onChange={this.props.handleLoginChange}
            ref={(node) => (this.username = node)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={this.props.password}
            onChange={this.props.handleLoginChange}
            ref={(node) => (this.password = node)}
          />
          <br />
          <input type="submit" href='/' />
        </form>
        <p> Not Signed up? <a href='/users'>Click Here</a></p>
      </div>
    );
  }
}
