import React, {Component} from 'react';

class Show extends Component {
    state = {
        bookUrl: "https://www.googleapis.com/books/v1/volumes?q=A%20little%20life&key=AIzaSyAMDjkRT8D0vaS2EHoiAfRu6-80lskahA8",
        bookObj: {}
    }

    componentDidMount(){
        this.getBook();
    }

    getBook = () => {
        fetch(this.state.bookUrl).then(response => { return response.json() })
        .then(json => this.setState({
        bookObj: json.items[0].volumeInfo,
        imgUrl: json.items[0].volumeInfo.imageLinks.thumbnail}),
        error => console.log(error)).then(()=> console.log(this.state.imgUrl));
    }

    render() {
    return (
        <div className="show-container">
            <div className="cover">
                <img alt="" src={this.state.imgUrl}/>
            </div>
            <div className="book-info">
                <h4>{this.state.bookObj.categories} | {this.state.bookObj.pageCount} pages</h4>
                <h4>average rating: {this.state.bookObj.averageRating}</h4>
                <p>{this.state.bookObj.description}</p>
                <div className="read-buttons">
                    <button>read</button>
                    <button>to read</button>
                </div>
            </div>
        </div>
    )}

}
    
export default Show;