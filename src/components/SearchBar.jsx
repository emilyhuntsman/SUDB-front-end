import React, { Component } from 'react';

const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY_GOOGLE;

export default class SearchBar extends Component {
    state = {
        baseURL: 'https://www.googleapis.com/books/v1/volumes',
        query: '?q=', 
        key: '&key=',
        apiKey: GOOGLE_API_KEY,
        bookTitle: '',
        searchURL: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props.handleSearch(this.state.bookTitle);
        this.props.handleResults(this.state.bookTitle);
    };
    
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className='search'>
                    <input
                        id='bookTitle'
                        type='text'
                        className='bookSearch'
                        value={this.state.bookTitle}
                        onChange={this.handleChange}
                    /> <br />
                    <input
                        type='submit'
                        value=' Find a Book '
                        className='bookSearchButton'
                    />
                </form>
            </>
        )
    }
}
