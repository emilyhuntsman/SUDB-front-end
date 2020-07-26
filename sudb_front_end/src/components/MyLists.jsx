import React, {Component} from 'react';

class MyLists extends Component {
    render() {
    return (
        <>
            <h2>To Read</h2>
            {this.props.futureBooks.map(book => (
                <p key={book}>
                    {book}
                </p>
            ))}
            <h2>Already Read</h2>
            {this.props.pastBooks.map(book => (
                <p key={book}>
                    {book}
                </p>
            ))}

        </>
    )}
}

export default MyLists;
