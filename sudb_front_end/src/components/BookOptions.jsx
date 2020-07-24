import React, { Component } from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

export default class BookOptions extends Component {
    state = {
        showModal: false,
        bookTitle: '',
        baseURL: 'https://www.googleapis.com/books/v1/volumes',
        query: '?q=', 
        key: '&key=',
        apiKey: process.env.REACT_APP_API_KEY_GOOGLE,
        searchURL: '',
        bookObj: {},
        randomIndexOne: Math.floor(Math.random() * (this.props.books.num_results - 1)),
        randomIndexTwo: Math.floor(Math.random() * (this.props.books.num_results - 1)),
        randomIndexThree: Math.floor(Math.random() * (this.props.books.num_results - 1)),
    }

    getBook = (title) => {
        this.setState({
            showModal: true,
            searchURL: this.state.baseURL + this.state.query + title + this.state.key + this.state.apiKey
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

    openModal = (title) => {
        this.getBook(title);
    }

    closeModal = () => {
        this.setState({showModal: false});
    }
    
    checkRandomEquality = () => {
        (this.state.randomIndexOne === this.state.randomIndexTwo || this.state.randomIndexTwo === this.state.randomIndexThree || this.state.randomIndexOne === this.state.randomIndexThree) && 
            this.setState({
            randomIndexOne: Math.floor(Math.random() * (this.props.books.num_results - 1)),
            randomIndexTwo: Math.floor(Math.random() * (this.props.books.num_results - 1)),
            randomIndexThree: Math.floor(Math.random() * (this.props.books.num_results - 1)),
            })            
        }

    render() {
        this.checkRandomEquality();
        return (
            <div className='dates'>
                <div className='book-display'>
                    <div onClick={() => this.openModal(this.props.books.results.books[this.state.randomIndexOne].title)}className='book-option'>
                        <p>{this.props.books.results.books[this.state.randomIndexOne].description}</p>
                    </div>
                    <div onClick={() => this.openModal(this.props.books.results.books[this.state.randomIndexTwo].title)} className='book-option'>
                        <p>{this.props.books.results.books[this.state.randomIndexTwo].description}</p>
                    </div>
                    <div onClick={() => this.openModal(this.props.books.results.books[this.state.randomIndexThree].title)}className='book-option'>
                        <p>{this.props.books.results.books[this.state.randomIndexThree].description}</p>
                    </div>
                </div>
                <div className="modal-div">
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Book Modal" centered> 
                        <button onClick={() => this.closeModal()}>close</button>
                        <div className="medium-info">
                            <img alt="" src={this.state.imgUrl}/>
                            <h2>{this.state.bookObj.title}</h2>
                            <h3>by {this.state.bookObj.authors}</h3>
                            <h4>{this.state.bookObj.categories}</h4>
                            <div className="medium-buttons">
                                <button className="inline-botton">try again</button>
                                <button className="inline-button" onClick={() => this.props.handleSearch(this.state.bookObj.title)}>view book page</button>
                            </div>
                        </div>
                    </ReactModal>
                </div>
            </div>
        )
    }
}
