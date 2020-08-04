import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginErrors: "",
      goHome: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.handleSubmit(event, this.state.username, this.state.password);
    this.setState({
      username: "",
      password: "",
      goHome: true,
    });
  };

  doRedirect = () => {
    if (this.state.goHome) {
      return <Redirect to="/"/>
    }
  }

  render() {
    return (
      <div className="sign-up-container">
        {this.doRedirect()}
        <h1>Sign Up</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="username" className="su">Username</label><br />
          <input
            type="text"
            id="username"
            className="su"
            value={this.state.username}
            onChange={this.handleChange}
            ref={(node) => (this.username = node)}
          />
          <br /><br />
          <label htmlFor="password" className="su">Password</label><br />
          <input
            type="password"
            id="password"
            className="su"
            value={this.state.password}
            onChange={this.handleChange}
            ref={(node) => (this.password = node)}
          />
          <br />
          <input type="submit" className="su"/>
        </form>
      </div>
    );
  }
}
