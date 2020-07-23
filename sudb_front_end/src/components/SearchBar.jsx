import React, { Component } from 'react';
import BookInfo from './BookInfo';

const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY_GOOGLE

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baseURL: 'https://www.googleapis.com/books/v1/volumes',
            query: '?q=', 
            key: '&key=',
            apiKey: GOOGLE_API_KEY,
            bookTitle: '',
            searchURL: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange (event) {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            searchURL: this.state.baseURL + this.state.query + this.state.bookTitle + this.state.key + this.state.apiKey
        }, () => {
            fetch(this.state.searchURL)
            .then(response => {
                return response.json()
            }).then(json => this.setState({
                books: json.results,
                bookTitle: ''
            }),
            error => console.log(error))
        });
    };
    
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id='bookTitle'
                        type='text'
                        className='bookSearch'
                        value={this.state.bookTitle}
                        onChange={this.handleChange}
                    />
                    <input
                        type='submit'
                        value='Find a Book'
                    />
                    {/* Testing Purposes - Remove on Component Completion  */}
                    <br />
                    <a href={this.state.searchURL}>JSON DATA</a>
                </form>
                {(this.state.books)
                    && <BookInfo books={this.state.books} />
                }
            </>
        )
    }
}
