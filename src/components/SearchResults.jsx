import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Google from './powered_by_google_on_white.png'

const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY_GOOGLE;

export default class SearchResults extends Component {
    state = {
        baseURL: 'https://www.googleapis.com/books/v1/volumes',
        query: '?q=', 
        key: '&key=',
        apiKey: GOOGLE_API_KEY,
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
                    return {key:result.etag, title:result.volumeInfo.title, author:result.volumeInfo.authors, pages: result.volumeInfo.pageCount, img: result.volumeInfo.imageLinks.thumbnail }
                });
                this.setState({
                    results: [{key: '', title: '', author: '', pages: '', img: ''}].concat(optionsFromApi)
                });
            }).catch(err => console.log(err));
        });
    }

    render() {
        if(this.props.queryTerm === ""){
            return <Redirect to="/" />
        }
        return (
            <div className="results">
                <h1 className="res-title">Search Results for:  "{this.props.queryTerm}"</h1>
                <img alt="" className="powered-by-google" src={Google}></img><br />
                {this.state.results.map(result =>
                    <div>
                    {(result.title) && (
                        <Link key={result.key} to="/book" className="result-link">
                            <div className="result">
                                <img className="result-img" alt= {result.title} src={result.img} onClick= {() => this.props.handleSearch(result.title)}></img>
                                <div className="result-desc">
                                    <span>Title: {result.title}</span><br/>
                                    <span>Author(s): {result.author}</span><br/>
                                    <span>Page(s): {result.pages}</span><br/>
                                </div>
                            </div>
                        </Link>
                    )}
                    </div>
                )}
            </div>
        )
    }
}
