import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import StaffPicks from './components/StaffPicks.jsx'
import SearchBar from './components/SearchBar.jsx';
import Home from './components/Home'
import Show from './components/Show'
import Registration from "./components/Registration";


const baseURL = "http://localhost:3003";

class App extends Component {
  state = {
    users: [],
    redirect: false,
  }

  handleRedirect = () => {
    this.setState({ redirect: !this.state.redirect });
  }

  // for users in API post auth -----------------

  componentDidMount(){
    this.getUsers();
    console.log(process.env.REACT_APP_API_KEY_GOOGLE);
  }

  handleAddUser = (user) => {
    const copyUsers = [...this.state.users];
    copyUsers.unshift(user);
    this.setState({
      users: copyUsers,
      username: "",
      password: "",
      read: [],
      toRead: [],
      genres: [],
    });
  };

  getUsers = () => {
    fetch(baseURL + "/users")
      .then(
        (data) => {
          return data.json();
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => this.setState({ users: parsedData }),
        (err) => console.log(err)
      );
  };

  deleteUser = (id) => {
    fetch(baseURL + "/users/" + id, {
      method: "DELETE",
      body: JSON.stringify({}),
      headers: {
          'Content-Type': 'application/json'
      }
      }).then(() => {
        this.componentDidMount();
      })
      .catch((error) => console.error({ Error: error }));
  };

  // end of user section ----------------------

  render() {
    return (
      <div className="container">
        <Registration baseURL={baseURL} />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" 
            render={() => <Home baseURL={baseURL}/>}/>
            <Route exact path="/book/" render={() => <Show />}/>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY_GOOGLE
console.log(GOOGLE_API_KEY);


export default App;
