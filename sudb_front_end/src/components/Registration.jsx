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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState;
  // };

  // getUsers = () => {
  //   fetch(baseURL + "/users")
  //     .then(
  //       (data) => {
  //         return data.json();
  //       },
  //       (err) => console.log(err)
  //     )
  //     .then(
  //       (parsedData) => this.setState({ users: parsedData }),
  //       (err) => console.log(err)
  //     );
  // };

  render() {
    return (
      <div>
        <form>
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
