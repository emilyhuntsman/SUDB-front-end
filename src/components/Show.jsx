import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';

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
        futureBooks: [],
        pastBooks: [],
    }

    componentDidMount(){
        this.props.resetRedirect();
        if(this.props.bookSearch !== ""){
            this.getBook();
            this.getUserLists();
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

    getUserLists = () => {
        fetch(this.props.baseURL + `/users/${this.props.user}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            })
            .then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    futureBooks: resJson[0].toread,
                    pastBooks: resJson[0].read
                })
            })
            .catch((error) => console.error({ Error: error }));
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
                <h2 className="bi-header">{this.state.bookObj.title}</h2>
                <h3>by {this.state.bookObj.authors}</h3>
                <h4>{this.state.bookObj.categories} | {this.state.bookObj.pageCount} pages</h4>
                <h4>average of {this.state.bookObj.ratingsCount} ratings: {this.state.bookObj.averageRating}/5</h4>
                <div className="book-description">
                    <p>{this.state.bookObj.description}</p>
                </div>
                {(this.props.user) ? 
                <div className="read-buttons">
                    {((!this.state.pastBooks.includes(this.state.bookObj.title))&&(!this.state.futureBooks.includes(this.state.bookObj.title)))?
                    <>
                        <button onClick={() => this.props.addToList("past",this.state.bookObj.title)}>Already Read</button> 
                        <button onClick={() => this.props.addToList("future",this.state.bookObj.title)}>Need To Read</button>
                    </> : 
                    <Link to="/list"><p>this book is already in one of your lists!</p></Link>}
                </div> :
                <p>log in to add to add to your lists!</p>}
            </div>
        </div>
    )}
}
    
export default Show;