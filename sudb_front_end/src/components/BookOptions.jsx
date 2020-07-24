import React, { Component } from 'react'

export default class BookOptions extends Component {
    render() {
        return (
            <div>
                <div className='book'>
                    <p>{this.props.books.results.books[Math.floor(Math.random() * (this.props.books.num_results - 1))].description}</p>
                </div>
            </div>
        )
    }
}
