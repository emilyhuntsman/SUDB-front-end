import React, {Component} from 'react';

class NewForm extends Component {
    state = {
        name: '',
        read: [],
        toRead: [],
        genres: []
    }

    handleChange = (event) => {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(this.props.baseURL + '/users', {
            method: 'POST',
            body: JSON.stringify({name: this.state.name, read: this.state.read, toRead: this.state.toRead, genres: this.state.genres}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (res => res.json())
            .then (resJson => {
            this.setState({
                name: '',
                read: [],
                toRead: [],
                genres: []
            })
        }).catch (error => console.error({'Error': error}))
    }

    render () {
        return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} /> <br/>
            <input type="submit" value="Add User"/>
        </form>
        )
    }
}

export default NewForm;