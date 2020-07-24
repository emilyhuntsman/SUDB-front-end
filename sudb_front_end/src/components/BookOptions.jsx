import React, { Component } from 'react'
import ReactModal from 'react-modal'

export default class BookOptions extends Component {
    state = {
        showModal: false,
        randomIndexOne: Math.floor(Math.random() * (this.props.books.num_results - 1)),
        randomIndexTwo: Math.floor(Math.random() * (this.props.books.num_results - 1)),
        randomIndexThree: Math.floor(Math.random() * (this.props.books.num_results - 1)),
    }

    openModal = () => {
        this.setState({showModal: true});
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
                    <div className='book-option'>
                        <p>{this.props.books.results.books[this.state.randomIndexOne].description}</p>
                    </div>
                    <div className='book-option'>
                        <p>{this.props.books.results.books[this.state.randomIndexTwo].description}</p>
                    </div>
                    <div className='book-option'>
                        <p>{this.props.books.results.books[this.state.randomIndexThree].description}</p>
                    </div>
                </div>
                <button onClick={this.openModal}>Trigger Modal</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Book Modal"> 
                    <button onClick={() => this.closeModal()}>close</button>
                </ReactModal>
            </div>
        )
    }
}
