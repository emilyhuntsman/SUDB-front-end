import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY_GOOGLE;

class Show extends Component {

    state = {
        baseURL: 'https://www.googleapis.com/books/v1/volumes',
        query: '?q=', 
        key: '&key=',
        apiKey: GOOGLE_API_KEY,
        bookTitle: this.props.bookSearch,
        searchURL: '',
        bookObj: {},
    }

    componentDidMount(){
        this.props.resetRedirect();
        if(this.props.bookSearch !== ""){
            this.getBook();
        }
    }

    getBook = () => {
        this.setState({
            searchURL: this.state.baseURL + this.state.query + this.state.bookTitle + this.state.key + this.state.apiKey
        }, () => {
            fetch(this.state.searchURL)
            .then(response => {
                return response.json()
            }).then(json => this.setState({
                bookObj: json.items[0].volumeInfo,
                imgUrl: json.items[0].volumeInfo.imageLinks.thumbnail
            }),
            error => console.log(error))
        });
    }

    render() {
    if(this.props.bookSearch === ""){
        return <Redirect to="/" />
    }
    return (
        <div className="show-container">
            <div className="cover">
                <img alt="" src={this.state.imgUrl}/>
            </div>
            <div className="book-info">
                <h2>{this.state.bookObj.title}</h2>
                <h3>by {this.state.bookObj.authors}</h3>
                <h4>{this.state.bookObj.categories} | {this.state.bookObj.pageCount} pages</h4>
                <h4>average of {this.state.bookObj.ratingsCount} ratings: {this.state.bookObj.averageRating}/5</h4>
                <div className="book-description">
                    <p>{this.state.bookObj.description}</p>
                </div>
                <div className="read-buttons">
                    <button onClick={() => this.props.addBookPast(this.state.bookObj.title)}>read</button>
                    <button onClick={() => this.props.addBookFuture(this.state.bookObj.title)}>to read</button>
                </div>
            </div>
        </div>
    )}

}
    
export default Show;