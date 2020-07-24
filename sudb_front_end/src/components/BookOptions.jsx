import React, { Component } from 'react'
import ReactModal from 'react-modal'

export default class BookOptions extends Component {
    state = {
        showModal: false,
    }

    openModal = () => {
        this.setState({showModal: true});
    }

    closeModal = () => {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div>
                <div className='book'>
                    <p>{this.props.books.results.books[Math.floor(Math.random() * (this.props.books.num_results - 1))].description}</p>
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
