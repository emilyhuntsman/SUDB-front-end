import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    state = {
      username: "",
      password: "",
      loginErrors: "",
    };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  reactToLogin = (event) => {
    event.preventDefault();
    this.props.handleLogin(this.state.username,this.state.password);
    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    if (this.props.currentPage === "/") {
      return <Redirect to={this.props.currentPage} />
  ``}
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={(event) => this.reactToLogin(event)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
            ref={(node) => (this.username = node)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            ref={(node) => (this.password = node)}
          />
          <br />
          <input type="submit" />
        </form>
        <p> Not Signed up? <a href='/users'>Click Here</a></p>

      </div>
    );
  }
}
