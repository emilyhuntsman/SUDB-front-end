import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SearchResults extends Component {
    state = {
        baseURL: 'https://www.googleapis.com/books/v1/volumes',
        query: '?q=', 
        key: '&key=',
        apiKey: process.env.REACT_APP_API_KEY_GOOGLE,
        searchURL: '',
        results: [],
    }

    componentDidMount () {
        this.setState({
            searchURL: this.state.baseURL + this.state.query + this.props.queryTerm + this.state.key + this.state.apiKey
        }, () => {
            fetch(this.state.searchURL)
            .then(response => {
                return response.json()
            }).then(results => {
                let optionsFromApi = results.items.map(result =>{
                    return {key:result.etag, title:result.volumeInfo.title, author:result.volumeInfo.authors, pages: result.volumeInfo.pageCount, img: result.volumeInfo.imageLinks.smallThumbnail }
                });
                this.setState({
                    results: [{key: '', title: '', author: '', pages: '', img: ''}].concat(optionsFromApi)
                });
            }).catch(err => console.log(err));
        });
    }

    render() {
        return (
            <div className="results">
                {this.state.results.map(result =>
                    <Link key={result.key} to="/book" className="result">
                        <img alt= {result.title} src={result.img} onClick= {() => this.props.handleSearch(result.title)}></img>
                        {(result.title) && (<p>Title: {result.title} || Author(s): {result.author} || Page(s): {result.pages}</p>)}
                    </Link>)}
            </div>
        )
    }
}
