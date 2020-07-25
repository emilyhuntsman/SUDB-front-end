import React, { Component } from "react";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginErrors: "",
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
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
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
      </div>
    );
  }
}
