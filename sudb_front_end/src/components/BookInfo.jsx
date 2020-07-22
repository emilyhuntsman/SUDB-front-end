import React, { Component } from 'react'

export default class BookInfo extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        { this.props.book.items[0].volumeInfo.title}
                    </li>
                </ul>
            </div>
        )
    }
}
