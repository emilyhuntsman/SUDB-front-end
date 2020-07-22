import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        title: ''
    }

    handleChange = (event) => {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitted, ", this.state.title);
        // replace below with search in google books api
        // fetch(this.props.baseURL + '/users', {
        //     method: 'POST',
        //     body: JSON.stringify({name: this.state.name, read: this.state.read, toRead: this.state.toRead, genres: this.state.genres}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then (res => res.json())
        //     .then (resJson => {
        //     this.setState({
        //         name: '',
        //         read: [],
        //         toRead: [],
        //         genres: []
        //     })
        // }).catch (error => console.error({'Error': error}))
    }

    render () {
        return (
        <form onSubmit={this.handleSubmit}>
            <input className="bookSearch" type="text" id="title" placeholder="enter book title" onChange={this.handleChange} aria-label="Search"/>
            <input type="submit" value="search"/>
        </form>
        )
    }
}

export default SearchBar;