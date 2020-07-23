import React, { Component } from 'react'

export default class BookInfo extends Component {
    render() {
        return (
            <div>
                <ul className='bookInfo'>
                    <img src= {this.props.books.items[0].volumeInfo.imageLinks.thumbnail} />
                    <li>
                        Title: { this.props.books.items[0].volumeInfo.title }
                    </li>
                    {
                        this.props.books.items[0].volumeInfo.subtitle !== undefined && 
                            <li>Subtitle: { this.props.books.items[0].volumeInfo.subtitle}</li>
                    }
                    <li>
                        Author(s): { this.props.books.items[0].volumeInfo.authors}
                    </li>
                    <li>
                        Description: { this.props.books.items[0].volumeInfo.description }
                    </li>
                    <li>
                        Page Count: { this.props.books.items[0].volumeInfo.pageCount } || Rating: { this.props.books.items[0].volumeInfo.averageRating } (Out Of 5) || # of Ratings: { this.props.books.items[0].volumeInfo.ratingsCount } 
                    </li>
                </ul>

            </div>
        )
    }
}
