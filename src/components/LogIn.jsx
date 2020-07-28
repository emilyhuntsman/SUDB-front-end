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
    if (this.props.currentPath === "/") {
      return <Redirect to={this.props.currentPath}/>
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
            value={this.state.username}
            onChange={this.handleChange}
            ref={(node) => (this.username = node)}
          />
          <br /><br />
          <label htmlFor="password" className="login">Password</label><br />
          <input
            type="password"
            className="login"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
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
