import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home";
import Show from "./components/Show";
import BlindDate from "./components/BlindDate";
import Registration from "./components/Registration";
import LogIn from "./components/LogIn";

// import NavMenu from "./components/NavMenu.jsx";

const baseURL = "http://localhost:3003";

class App extends Component {
  state = {
    users: [],
    redirect: false,
    bookSearch: "",
    goTo: "",
  };

  handleSearch = (title) => {
<<<<<<< HEAD
    this.setState({ bookSearch: title, redirect: true, goTo: "/book" });
  };

  toBlindDate = () => {
    this.setState({ redirect: true, goTo: "/date" });
  };
=======
    console.log('nadling..')
    this.setState({ bookSearch: title, redirect: true, goTo: "/book" })
  }

  resetRedirect = () => {
    this.setState({redirect: !this.state.redirect, goTo: ''}) ;
  }
>>>>>>> ab8d479f4b6f434b449362ff1cfe56718176e86e

  // toBlindDate = () => {
  //   this.setState({ redirect: true, goTo: "/date" })
  // }

  // for users in API post auth -----------------

  // componentDidMount(){
  //   this.getUsers();
  // }

  // handleAddUser = (user) => {
  //   const copyUsers = [...this.state.users];
  //   copyUsers.unshift(user);
  //   this.setState({
  //     users: copyUsers,
  //     username: "",
  //     password: "",
  //     read: [],
  //     toRead: [],
  //     genres: [],
  //   });
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

  // deleteUser = (id) => {
  //   fetch(baseURL + "/users/" + id, {
  //     method: "DELETE",
  //     body: JSON.stringify({}),
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  //     }).then(() => {
  //       this.componentDidMount();
  //     })
  //     .catch((error) => console.error({ Error: error }));
  // };

  // end of user section ----------------------

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/users"
              render={() => <Registration baseURL={baseURL} />}
            />
<<<<<<< HEAD
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  redirect={this.state.redirect}
                  goTo={this.state.goTo}
                  baseURL={baseURL}
                  handleSearch={(title) => this.handleSearch(title)}
                  toBlindDate={() => this.toBlindDate}
                />
              )}
            />
            <Route
              exact
              path="/book"
              render={() => <Show bookSearch={this.state.bookSearch} />}
            />
            <Route
              exact
              path="/date"
              render={() => (
                <BlindDate handleSearch={(title) => this.handleSearch(title)} />
              )}
            />
=======
            <Route exact path="/" 
            render={() => <Home redirect={this.state.redirect} goTo={this.state.goTo} baseURL={baseURL} handleSearch={(title) => this.handleSearch(title)} toBlindDate={() => this.toBlindDate} />}/>
            <Route exact path="/book/" render={() => <Show bookSearch={this.state.bookSearch} resetRedirect={() => this.resetRedirect()}/>}/>
            <Route exact path="/date/" render={() => <BlindDate handleSearch={(title) => this.handleSearch(title)} resetRedirect={() => this.resetRedirect()}/>}/>
>>>>>>> ab8d479f4b6f434b449362ff1cfe56718176e86e
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
