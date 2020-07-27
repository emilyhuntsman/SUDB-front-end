import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home";
import Show from "./components/Show";
import BlindDate from "./components/BlindDate";
import Registration from "./components/Registration";
import MyLists from "./components/MyLists";
import Login from "./components/LogIn";
import SearchResults from "./components/SearchResults";
import About from "./components/About";


let baseURL;
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'https://sudb-api.herokuapp.com/';
}

class App extends Component {
  state = {
    user: null,
    users: [],
    bookSearch: "",
    currentPage: "/",
    baseURL: baseURL,
  };

  handleSearch = (title) => {
    this.setState({ bookSearch: title, currentPage: '/book' });
  };

  handleResults = (title) => {
    this.setState({ bookSearch: title, currentPage: '/results'})
  }

  resetRedirect = () => {
    this.setState({ currentPage: '/' });
  };

  handleSubmit = (event, username, password) => {
    event.preventDefault();
    fetch(this.state.baseURL + "/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error({ Error: error }));
  };

  addToList = (list,title) => {
    const paramString = `${this.state.user}/${list}/${title}`
    fetch(this.state.baseURL + "/users/" + paramString, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error({ Error: error }));
  };

  toBlindDate = () => {
    this.setState({ currentPage: "/date" })
  }

  handleLogin = (username, password) => {
    let userString = `/${username}/${password}/`
    fetch(this.state.baseURL + "/users/login" + userString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson !== null) {
          this.setState({
            user: resJson.username
          });
        }
      })
      .catch((error) => console.error({ Error: error }));
  };

  handleLogout = () => {
    this.setState({ user: null });
  }


  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header
            user={this.state.user}
            handleLogout={() => this.handleLogout()} />
          <Switch>
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  handleLogin={(username,password) => this.handleLogin(username,password)}
                  redirect={this.state.redirect}
                  goTo={this.state.goTo}
                  baseURL={this.state.baseURL}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/users"
              render={() => (
                <Registration
                  baseURL={this.state.baseURL}
                  handleSubmit={this.handleSubmit}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  currentPage={this.state.currentPage}
                  baseURL={this.state.baseURL}
                  handleResults={(title) => this.handleResults(title)}
                  handleSearch={(title) => this.handleSearch(title)}
                  toBlindDate={() => this.toBlindDate}
                />
              )}
            />
            <Route
              exact
              path="/results/"
              render={() => (
                <SearchResults
                  queryTerm={this.state.bookSearch}
                  resetRedirect={() => this.resetRedirect()}
                  handleSearch={(title) => this.handleSearch(title)}
                />
              )}
            />
            <Route
              exact
              path="/book/"
              render={() => (
                <Show
                  user={this.state.user}
                  bookSearch={this.state.bookSearch}
                  resetRedirect={() => this.resetRedirect()} addBookFuture={(book) => this.addBookFuture(book)} addBookPast={(book) => this.addBookPast(book)} addToList={(user,title) => this.addToList(user,title)}
                />
              )}
            />
            <Route
              exact
              path="/date/"
              render={() => (
                <BlindDate
                  currentPage={this.state.currentPage}
                  handleSearch={(title) => this.handleSearch(title)}
                  resetRedirect={() => this.resetRedirect()} toBlindDate={() => this.toBlindDate()}
                />
              )}
            />
            <Route
              exact
              path="/list/"
              render={() => (
                <MyLists
                  user={this.state.user}
                  baseURL={this.state.baseURL}
                  addToList={(list,title) => this.addToList(list,title)}
                  moveBookToFuture={(book) => this.moveBookToFuture(book)} getUserLists={() => this.getUserLists()}
                />
              )}
            />
            <Route
              exact
              path="/about/"
              render={() => (
                <About />
              )}
            />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
