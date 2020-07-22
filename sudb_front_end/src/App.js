import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import StaffPicks from './components/StaffPicks.jsx'
import SearchBar from './components/SearchBar.jsx';
// import NewForm from './NewForm.js'


const baseURL = 'http://localhost:3003';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount(){
    this.getUsers();
  }

  handleAddUser = (user) => {
    const copyUsers = [...this.state.users]
    copyUsers.unshift(user)
    this.setState({
      users: copyUsers,
      name: '',
      read: [],
      toRead: [],
      genres: []
    })
  }

  getUsers = () => {
    fetch(baseURL+ '/users')
    .then(data => {
    return data.json()},
    err => console.log(err))
    .then(parsedData => this.setState({users: parsedData}),
    err => console.log(err))
  }

  deleteUser = (id) => {
    fetch(baseURL + '/users/' + id, {
      method: 'DELETE',
      body: JSON.stringify({}),
      headers: {
          'Content-Type': 'application/json'
      }
      }).then(() => {
        // not sure if this is the way you're supposed to do it but I was thinking of it as somewhat of a forced reload when one is deleted..
        this.componentDidMount();
    }).catch (error => console.error({'Error': error}))
  }

  render() {
    // don't know what to do about the error saying I can't nest a button under a tr
    return (
      <div className='container'>
        <Header />
        <StaffPicks />
        <SearchBar />
        <Footer />
      </div>
    );
  }
}

export default App;
