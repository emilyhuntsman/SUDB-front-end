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
    event.preventDefault();
    fetch(this.props.baseURL + "/users", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          username: "",
          password: "",
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  render() {
    return (
      <div>
        <form onSubmit={() => this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
