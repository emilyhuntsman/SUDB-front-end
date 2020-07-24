import React, { Component } from 'react'

export default class BookOptions extends Component {
    render() {
        return (
            <div>
                <ul className='bookOptions'>
                    {console.log(this.props.books)}
                    <li>{this.props.books.results.books[0].title}</li>
                </ul>
            </div>
        )
    }
}
