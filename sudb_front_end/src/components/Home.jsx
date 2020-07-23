import React, { Component } from "react";
import StaffPicks from "./StaffPicks.jsx";
import SearchBar from "./SearchBar.jsx";

class Home extends Component {
  state = {};

  render() {
    return (
      <>
        <StaffPicks baseURL={this.props.baseURL} />
        <SearchBar />
      </>
    );
  }
}

export default Home;
