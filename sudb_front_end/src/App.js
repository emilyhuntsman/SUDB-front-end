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


const baseURL = "http://localhost:3003";

class App extends Component {
  state = {
    auth: false,
    user: null,
    username: '',
    password: '',
    users: [],
    bookSearch: "",
    currentPage: "/",
    futureBooks: [],
    pastBooks: [],
  };

  handleSearch = (title) => {
    this.setState({ bookSearch: title, currentPage: '/book' });
  };

  resetRedirect = () => {
    this.setState({ currentPage: '/' });
  };

  handleSubmit = (event, username, password) => {
    event.preventDefault();
    console.log("submit ran for sign up");
    fetch(baseURL + "/users", {
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

  toBlindDate = () => {
    this.setState({ currentPage: "/date" })
  }

  addBookFuture = (book) => {
    this.state.futureBooks.push(book);
  }

  removeBookFuture = (book) => {
    let index = -1;
    for (let i = 0; i < this.state.futureBooks.length; i++) {
      if (book === this.state.futureBooks[i]) {
        index = i;
      }
    }
    if (index !== -1) {
      this.state.futureBooks.splice(index, 1);
    }
    this.setState({});
  }

  addBookPast = (book) => {
    this.state.pastBooks.push(book);
  }

  removeBookPast = (book) => {
    let index = -1;
    for (let i = 0; i < this.state.pastBooks.length; i++) {
      if (book === this.state.pastBooks[i]) {
        index = i;
      }
    }
    if (index !== -1) {
      this.state.pastBooks.splice(index, 1);
    }
    this.setState({})
  }

  moveBookToFuture = (book) => {
    this.removeBookFuture(book);
    this.addBookPast(book);
  }

  handleLoginChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleLogin = (username, password) => {
    console.log('Log in function ran', this.state)
    fetch(baseURL + '/users/login', {
      method: "POST",
      body: JSON.stringify({
        user: this.state.username,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        let resJson = res.json()
        console.log(resJson)
        // console.log('this is Username', resJson.username)
        // console.log('this is Auth', resJson.auth)

        // console.log('this is login', res)
        // if (resJson !== null) {
        //   this.setState({
        //     user: resJson.username,
        //     auth: resJson.auth
        //     //creating token with JWT using data from the user. look up local storage and saving token to persist. 
        //   });
        // }
      })
      // .then((resJson) => {
      //   console.log(resJson)
      //   if (resJson !== null) {
      //     this.setState({
      //       user: resJson.username,
      //       //creating token with JWT using data from the user. look up local storage and saving token to persist. 
      //     });
      //   }
      // })
      .catch((error) => console.error({ Error: error }));
    this.setState({
      username: "",
      password: "",
    });
  };

  handleLogout = () => {
    this.setState({ user: null });
  }


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
          <Header
            user={this.state.user}
            handleLogout={() => this.handleLogout()} />
          <Switch>
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  handleLoginChange={this.handleLoginChange}
                  handleLogin={(username, password) => this.handleLogin(username, password)}
                  redirect={this.state.redirect}
                  goTo={this.state.goTo}
                  baseURL={baseURL}
                  username={this.state.username}
                  password={this.state.password}
                />
              )}
            />
            <Route
              exact
              path="/users"
              render={() => (
                <Registration
                  baseURL={baseURL}
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
                  baseURL={baseURL}
                  handleSearch={(title) => this.handleSearch(title)}
                  toBlindDate={() => this.toBlindDate}
                />
              )}
            />
            <Route
              exact
              path="/book/"
              render={() => (
                <Show
                  bookSearch={this.state.bookSearch}
                  resetRedirect={() => this.resetRedirect()} addBookFuture={(book) => this.addBookFuture(book)} addBookPast={(book) => this.addBookPast(book)}
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
                  pastBooks={this.state.pastBooks}
                  futureBooks={this.state.futureBooks} removeBookFuture={(book) => this.removeBookFuture(book)} removeBookPast={(book) => this.removeBookPast(book)} moveBookToFuture={(book) => this.moveBookToFuture(book)}
                />
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
