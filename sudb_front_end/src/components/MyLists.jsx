import React, {Component} from 'react';

class MyLists extends Component {

    render() {
    return (
        <div className="list-div">
            <div className="one-list">
                <h2>To Read</h2>
                {this.props.futureBooks.map(book => (
                    <div className="book-div"key={book}>
                        <p>{book}</p>
                        <button onClick={() => this.props.removeBookFuture(book)}>x</button>
                        <button onClick={() => this.props.moveBookToFuture(book)}>{"->"}</button>
                    </div>
                ))}
            </div>
            <div className="one-list">
                <h2>Already Read</h2>
                {this.props.pastBooks.map(book => (
                    <div className="book-div"key={book}>
                        <p>{book}</p>
                        <button onClick={() => this.props.removeBookPast(book)}>x</button>
                </div>
                ))}
            </div>
        </div>
    )}
}

export default MyLists;
