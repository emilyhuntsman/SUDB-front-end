import React, {Component} from 'react';

class MyLists extends Component {
    render() {
    return (
        <>
            <h2>To Read</h2>
            {this.props.futureBooks.map(book => (
                <div className="book-div"key={book}>
                    <p>{book}</p>
                    <button>x</button>
                </div>
            ))}
            <h2>Already Read</h2>
            {this.props.pastBooks.map(book => (
                <div className="book-div"key={book}>
                    <p>{book}</p>
                    <button>x</button>
            </div>
            ))}

        </>
    )}
}

export default MyLists;
